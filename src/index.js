/* eslint-disable no-console */

import express from 'express';
import { graphiqlExpress, graphqlExpress } from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import { createServer } from 'http';
import models from './models';
import config from './config/config';
import middlewares from './config/middlewares';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';

import loginServices from './services/login.services';

import {
    authLocal,
    authJwt,
} from './services/auth.services';

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

const app = express();
middlewares(app);
loginServices(app);

app.use(
    '/graphiql',
    graphiqlExpress({
        endpointURL: config.GRAPHQL_PATH,
    }),
);

app.use(
    config.GRAPHQL_PATH,
    authJwt,
    graphqlExpress(req => ({
        schema,
        context: {
            db: models,
            user: req.user,
            ip: req.ip,
        },
    })),
);

const graphQLServer = createServer(app);

models.sequelize.sync({ force: true }).then(() => {
    graphQLServer.listen(config.PORT, err => {
        if (err) {
            console.error(err);
        } else {
            console.log(`Graphiql listen on: http://localhost:${config.PORT}/graphiql`);
        }
    });
});

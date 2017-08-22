import {
    authLocal,
    authJwt,
} from './auth.services';

import db from '../models';

export default app => {
    app.post('/signin', authLocal, async ({ body }, res) => {

        try {
            const user = await db.LocalAuth.findOne({ where: { email: body.email } });
            if (!user) {
                throw new Error('User does not exist!');
            }
            if (!user.authenticate(body.password)) {
                throw new Error('Password not match!');
            }
            const token = await user.createToken();

            res.json({
                token
            });
        } catch (error) {
            throw error;
        }
    });

    app.post('/register', async ({ body }, res) => {
        try {
            const tenant = await db.Tenant.create({
                name: body.tenantname,
            });
            const user = await db.User.create({ ...body, TenantId: tenant.id });
            const localauth = await db.LocalAuth.create({ ...body, UserId: user.id });
            const token = await localauth.createToken();

            res.json({
                token
            });
        } catch (error) {
            throw error;
        }
    });

    app.post('/user', authJwt, (req, res) => {
        if (req.user) {
            res.json({ id: req.user.id, username: req.user.username });
        } else {
            res.send('Not logged in');
        }
    });
};

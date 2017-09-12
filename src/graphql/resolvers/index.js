import UserResolvers from './user.resolvers';
import TenantResolvers from './tenant.resolvers';

const resolvers = {
    Query: {
        getUsers: UserResolvers.getUsers,
        getUser: UserResolvers.getUser,
    },
    Mutation: {
        addUser: UserResolvers.addUser,
        updateUser: UserResolvers.updateUser,
        deleteUser: UserResolvers.deleteUser,

        login: UserResolvers.login,
    },
};

export default resolvers;

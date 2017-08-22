import UserResolvers from './user.resolvers';
import TenantResolvers from './tenant.resolvers';

const resolvers = {
    Query: {
        users: UserResolvers.getUsers,
        user: UserResolvers.getUser,
    },
    Mutation: {
        addUser: UserResolvers.addUser,
        updateUser: UserResolvers.updateUser,
        deleteUser: UserResolvers.deleteUser,
    },
};

export default resolvers;

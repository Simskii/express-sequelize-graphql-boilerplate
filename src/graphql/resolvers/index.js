import UserResolvers from './user.resolvers';
import UserResolvers from './tenant.resolvers';

const resolvers = {

    User: {
        fullname: UserResolvers.getFullname,
    },
    Query: {
        getUsers: UserResolvers.getUsers,
        getUser: UserResolvers.getUser,
    },
    Mutation: {
        addUser: UserResolvers.addUser,
        updateUser: UserResolvers.updateUser,
        deleteUser: UserResolvers.deleteUser,
    },
};

export default resolvers;

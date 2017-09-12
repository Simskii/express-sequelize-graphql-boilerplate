export default {
    login: async (_, { email, password }, { db }) => {
        try {
            const user = await db.User.findOne({ email });
            if (!user) {
                throw new Error('User does not exist');
            }
            if (!user.authenticateUser(password)) {
                throw new Error('Password is incorrect');
            }
            return {
                token: user.createToken(),
            };
        } catch (err) {
            throw err;
        }
    },
    getUsers: async (_, args, { db }) => {
        try {
            return db.User.findAll({});
        } catch (error) {
            throw error;
        }
    },

    getUser: async (_, { id }, { db }) => {
        try {
            return db.User.findOne({
                where: {
                    id,
                },
            });
        } catch (error) {
            throw error;
        }
    },

    addUser: async (_, args, { db }) => {
        try {
            return db.User.create({ ...args });
        } catch (error) {
            throw error;
        }
    },

    deleteUser: async (_, { id }, { db }) => {
        try {
            const result = await db.User.findOne({
                where: {
                    id,
                },
            });
            return result.destroy();
        } catch (error) {
            throw error;
        }
    },
    updateUser: async (_, args, { db }) => {
        try {
            const result = await db.User.update(args,
                {
                    where: {
                        id: args.id,
                    },
                    returning: true,
                    plain: true,
                });
            return result[1].dataValues;
        } catch (error) {
            throw error;
        }
    },
};

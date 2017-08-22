export default {
    getTenants: async (_, args, { db }) => {
        try {
            return db.Tenant.findAll({});
        } catch (error) {
            throw error;
        }
    },

    getTenant: async (_, { id }, { db }) => {
        try {
            return db.Tenant.findOne({
                where: {
                    id,
                },
            });
        } catch (error) {
            throw error;
        }
    },

    addTenant: async (_, args, { db }) => {
        try {
            return db.Tenant.create({ ...args });
        } catch (error) {
            throw error;
        }
    },

    deleteTenant: async (_, { id }, { db }) => {
        try {
            const result = await db.Tenant.findOne({
                where: {
                    id,
                },
            });
            return result.destroy();
        } catch (error) {
            throw error;
        }
    },
    updateTenant: async (_, args, { db }) => {
        try {
            const result = await db.Tenant.update(args,
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

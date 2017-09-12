import config from '../config/config';
import db from '../models';

export function decodeToken(token) {
    const arr = token.split(' ');
    if (arr[0] === 'JWT' || 'jwt') {
        return jwt.verify(arr[1], constants.JWT_SECRET);
    }
}

export async function requireAuth(user) {
    if (!user || !user.id) {
        throw new Error('Unauthorized');
    }

    const me = await db.User.findById(user.id);

    if (!me) {
        throw new Error('Unauthorized!');
    }

    return me;
}

export async function userMiddleware(req, res, next) {
    try {
        const token = req.headers.authorization;

        if (token != null) {
            const user = await decodeToken(token);
            req.user = user;
        } else {
            req.user = null;
        }
        return next();
    } catch (error) {
        throw error;
    }
}
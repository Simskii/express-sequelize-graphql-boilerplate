export function requireAuth(user) {
    if (!user || !user.id) {
        throw new Error('Unauthorized');
    }
}

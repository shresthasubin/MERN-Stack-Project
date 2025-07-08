export function authMiddleware(req, res, next) {
    console.log('This is middleware')
    next()
}
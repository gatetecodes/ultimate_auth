/**
 * @description An array of routes that are accessible to the public
 * These routes are not protected by authentication
 * @type {string[]}
 */
export const publicRoutes = ["/"];

/**
 * @description An array of routes that are used for authentication
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */

export const authRoutes = ["/auth/login", "/auth/register", "/auth/error"];

/**
 * @description A prefix for API authentication routes
 * Routes that start with this prefix are used for authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * A default redirect route for authenticated users
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = "/settings";

/**
 * @description An array of routes that are protected by authentication
 * These routes will redirect unauthenticated users to /auth/login
 * @type {string[]}
 */

/**
 * @swagger
 * components:
 *      schemas:
 *          User:
 *              type: object
 *              required:
 *                  - username
 *                  - password
 *              properties:
 *                  _id:
 *                      type: string
 *                      description: unique id of user
 *                  username:
 *                      type: string
 *                      description: unique username of user (author)
 *                  password:
 *                      type: string
 *                      description: password to have an access to application (before saving will be hashed)
 *              example:
 *                  username: Alzheimer
 *                  password: randomized_strong_password
 *
 */


/**
 *
 * @swagger
 * tags:
 *      name: Auth
 *      description: Authorization and Authentication
 *
 */


/**
 *
 * @swagger
 * /api/v1/auth/register:
 *      post:
 *          summary: registering new user
 *          tags: [Auth]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/User'
 *          responses:
 *              201:
 *                  description: registering new user
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/User'
 *              400:
 *                  description: User with this username already exists
 *
 * /api/v1/auth/login:
 *      post:
 *          summary: logging in
 *          tags: [Auth]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/User'
 *          responses:
 *              200:
 *                  description: returns access token to have an access to the application
 *              400:
 *                  description: Invalid user data
 *
 *
 *
 *
 * /api/v1/auth/logout:
 *      post:
 *          summary: logout
 *          tags: [Auth]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/User'
 *          responses:
 *              200:
 *                  description: removes all access tokens
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/User'
 *              400:
 *                  description: Invalid token
 *
 */
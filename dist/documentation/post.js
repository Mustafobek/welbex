"use strict";
/**
 * @swagger
 * components:
 *      schemas:
 *          Post:
 *              type: object
 *              required:
 *                  - title
 *                  - textContent
 *                  - mediaContent
 *              properties:
 *                  _id:
 *                      type: string
 *                      description: unique id of post
 *                  title:
 *                      type: string
 *                      description: title of the post
 *                  textContent:
 *                      type: string
 *                      description: text content (description) of the post
 *                  mediaContent:
 *                      type: string
 *                      description: media of post (images, gifs, video, music)
 *              example:
 *                  title: JS vs Ruby
 *                  textContent: what is the most loved scripting language in the world? JS or Ruby?
 *                  mediaContent: media-06102021-103843_090.jpg
 *
 */
/**
 *
 * @swagger
 * tags:
 *      name: Posts
 *      description: Post endpoints
 *
 */
/**
 *
 * @swagger
 * /api/v1/post/:
 *      get:
 *          summary: get all author's posts
 *          tags: [Posts]
 *          responses:
 *              200:
 *                  description: get all author's posts according to the user's jwt-token
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Post'
 *
 *
 *      post:
 *          summary: create post
 *          tags: [Posts]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Post'
 *          responses:
 *              200:
 *                  description: creates posts under the author's name
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Post'
 *              400:
 *                  description: Title, textContent is required
 *              500:
 *                  description: Server internal error
 *
 *
 * /api/v1/post/{id}:
 *      get:
 *          summary: get a post
 *          tags: [Posts]
 *          parameters:
 *              - in: path
 *                name: id
 *                schema:
 *                    type: string
 *                required: true
 *                description: The post id
 *          responses:
 *              200:
 *                  description: getting a post with given {id}
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Post'
 *              404:
 *                  description: Post with given id not found!
 *
 *      patch:
 *          summary: updating a Post
 *          tags: [Posts]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Post'
 *          parameters:
 *              - in: path
 *                name: id
 *                schema:
 *                    type: string
 *                required: true
 *                description: The post id
 *          responses:
 *              200:
 *                  description: updating a post with {id}
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Post'
 *              404:
 *                  description: Post with given id not found!
 *
 *      delete:
 *          summary: delete a post
 *          tags: [Posts]
 *          parameters:
 *              - in: path
 *                name: id
 *                schema:
 *                    type: string
 *                required: true
 *                description: The post id
 *          responses:
 *              200:
 *                  description: deleting a post by its {id}
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Post'
 *              404:
 *                  description: Post with given id not found!
 *
 *
 * /api/v1/post/all/read-posts:
 *      get:
 *          summary: get all existing posts of all
 *          tags: [Posts]
 *          responses:
 *              200:
 *                  description: get all posts by all authors
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Post'
 */ 

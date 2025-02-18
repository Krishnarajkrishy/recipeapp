# Recipe API

## Description

A RESTful API for managing recipes using Express.js and MongoDB. It supports creating, retrieving, updating, and deleting recipes.

### Create a Recipe
- **Endpoint:** `POST /create/create`
- **Description:** Create a new recipe.

### Get All Recipes
- **Endpoint:** `GET /get/allrecipes`
- **Description:** Retrieve all recipes.

### Get a Single Recipe
- **Endpoint:** `GET /get/getone/:id`
- **Description:** Retrieve a single recipe by its ID.

### Update a Recipe
- **Endpoint:** `PUT /update/update/:id`
- **Description:** Update a recipe by its ID.

### Delete a Recipe
- **Endpoint:** `DELETE /delete/delete/:id`
- **Description:** Delete a recipe by its ID.

### Recipe Model
- **Fields:**
  - `title` (String, required)
  - `ingredients` (Array, required)
  - `instructions` (String, required)
  - `createdAt` (Date, default: Date.now)

### Database Connection
The database connection is handled using Mongoose. The connection string is provided in the `.env` file.


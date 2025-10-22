SBA 319: MongoDB Database Application

10/17/2025

Objectives

- Create a server application with Node, Express, and MongoDB.
- Create a CRUD API using Express and MongoDB.
- Create MongoDB indexes.
- Use MongoDB indexing to make efficient queries.
- Create MongoDB validation rules.
- Use MongoDB validation to ensure data consistency.

Bonus Objective

- Use Mongoose to implement your application.

Routes
 - /: Home

 - /destinations = READ/GET all destinations
 - /destinations/new = READ/GET: Form to add a new destination
 - /destinations/seed = Reset original destinations
 - /destinations/create = CREATE/POST: Add a new destination
 - /destinations/:id/edit = READ/GET: Open form for editing this id
 - /destinations/:id = UPDATE/PUT: Submit edits
 - /destinations/:id = DELETE destination with this id
 - /destinations/:id = READ/GET: Show destination with this id

 - /recommendations = READ/GET all recommendations
 - /recommendations/new = READ/GET: Form to add a new recommendation
 - /recommendations/seed = Reset original recommendations
 - /recommendations/create = CREATE/POST: Add a new recommendation
 - /recommendations/:id/edit = READ/GET: Open form for editing this id
 - /recommendations/:id = UPDATE/PUT: Submit edits
 - /recommendations/:id = DELETE recommendation with this id
 - /recommendations/:id = READ/GET: Show recommendation with this id

 - /users = READ/GET all users
 - /users/new = READ/GET: Form to add a new user
 - /users/seed = Reset original users
 - /users/create = CREATE/POST: Add a new user
 - /users/:id/edit = READ/GET: Open form for editing this id
 - /users/:id = UPDATE/PUT: Submit edits
 - /users/:id = DELETE user with this id
 - /users/:id = READ/GET: Show user with this id
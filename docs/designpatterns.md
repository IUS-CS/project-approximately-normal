The main design pattern for the front-end of this application is to use an object pool to recreate heavy objects so that that won't have to be remade. React does a good job at this for us by loading every object the user can potentially go to next.

The backend is designed to act as Mediator between the database and the front end by giving us an API to create, read, use, and delete from the table as needed.

We are able to handle the front end by relying on React's system assuring us that we don't have to worry about breaking off of the system.

On the other hand, the backend will be kept up manually 
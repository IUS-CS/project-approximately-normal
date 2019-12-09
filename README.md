# Backend API for Approximately Normal

## Build Application
This application is built with gradle. The command `gradle build` is used to create a .jar file to run the backend api.
You will also need the following:
* Java 1.8+ 
* Java JDK8 (Important)
* Gradle (latest)
* Groovy (latest)

## Run Application
The .jar file is created under `/build/libs` underneath the `src` directory. You can then run the .jar with this command
`java -jar <filename>.jar`

`gradle clean` will clear out what is in your `/build/libs` folder. You can take a look at Gradle's documentation here https://docs.gradle.org/current/userguide/command_line_interface.html for more reference.

## Test API Endpoints
To just test some API endpoints, or to see what is available and what the contracts are, navigate to `localhost:8080/swagger-ui.html`. This is all in Swagger, which will allow you to test and see what the definitions of the endpoints are. 

##Unit Testing
Unit testing is performed and tested with Mockito. You can read more about Mockito here https://site.mockito.org/

When running `gradle build` the unit tests will be ran by default. You can also run then by running `gradle test` from the command line. 

## Where is the Frontend?
The frontend can be found on the master branch


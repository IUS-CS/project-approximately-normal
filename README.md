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

## Test API Endpoints
To just test some API endpoints, or to see what is available and what the contracts are, navigate to `localhost:8008/swagger-ui.html`. This is all in Swagger, which will allow you to test and see what the definitions of the endpoints are. 

## Where is the Frontend?
The frontend can be found on the master branch

# MariaDB

## Docker setup and MariaDB deployment

Here are the list of commands to get docker installed and get a mariadb container running on your local machine (Mac). 
* `brew cask install docker-toolbox`
* `docker-machine create --driver "virtualbox" myBoxName`
* `docker-machine start myBoxName`
* `docker pull mariadb` This will pull down the Docker image of MariaDB from Docker Hub. "Cannot connect to the Docker daemon. Is the docker daemon running on this host?"
If you start the docker container after opening the terminal, you can either run `eval $(docker-machine env myBoxName)` manually, or reload your bash profile `(source ~/.bash_profile)`.
* `docker run --name mariadb -e MYSQL_ROOT_PASSWORD=root -d mariadb:latest` I would leave this the same since the migration script will use the same password provided.

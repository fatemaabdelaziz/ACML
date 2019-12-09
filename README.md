# READ ME



## Heroku Back-end Deployment
[Deployment](https://dashboard.heroku.com/apps/movie-back)

## Brief:
Our application is designed to run on android devices, it uses ** The Movie Database ** API to get searched movies. The application uses firebase firestore as the database of our project to store the user's favorites movies in the application. We also used nodejs with express to create our backend server with our services.
Our application is designed to give access to users to search for movies and get back a description , language , release date and rating of the movie and favorite the desired movie.

 [Manifest file](/api/package.json)
 
# How to run the app:
   ## Locally running our app with react-native on emulator or android device
   ### $ git clone https://github.com/fatemaabdelaziz/ACML.git
   ### service-account-file.json : will contain the key for firebase cloudstore database you can get
   ### firebase-t.js : config file that gets enviromental variables
   
   ## This application run on Nodejs and android emulator or android mobile connected.
   - Run npm i in the terminal 
      > $ npm i
   - cd to my application 
      > $ cd myapp
   - run npm i in myapp folder 
      > $npm i
   - Open android emulator or connect android-device
      > npx react-native run-android
      
      -Metro server will run and the app will run on connected android device or opened emulator
      
      
      
      ## Docker Container :
      
      [Dockerfile](/api/Dockerfile)
      [Docker Compose](/api/docker-compose.yml)
        1. Open docker desktop
        
          - Write in the terminal docker build -t myapp .
          
          - docker run -p '3000:3000' popcorn 
          
        or
        
        2. Open docker desktop
        
          - docker-compose up
        
      ## If you run on localhost : 3000 on browser "Homepage! Hello world."
        
   


# -liri-node-app  
 #LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language   #Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.  
 #LIRI searches Spotify for songs, Bands in Town for concerts, and OMDB for movies.  
 #LIRI uses axios, Node-Spotify-API, OMDB API and Moment  
 #LIRI commands:  
 1-node liri.js concert-this <artist/band name here>   
    *This cmd search the Bands in Town Artist Events API for an artist and render the Name of the venue,the Venue location and Date of the Event to the terminal.  
2-node liri.js spotify-this-song '<song name here>'  
    *This cmd shows the Artist name,The song's name, A preview link of the song from Spotify and The album that the song is from  in the terminal/bash window.  
    If no song is provided then the program will default to "The Sign" by Ace of Base.  
3-node liri.js movie-this '<movie name here>  
    *This cmd output the following information to your terminal/bash window:  
        * Title of the movie.  
       * Year the movie came out.  
       * IMDB Rating of the movie.  
       * Rotten Tomatoes Rating of the movie.  
       * Country where the movie was produced.  
       * Language of the movie.  
       * Plot of the movie.  
       * Actors in the movie.  
    * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'  
4-node liri.js do-what-it-says  
    *Using the "fs" Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.  
#In addition to logging the data to the terminal/bash window,LIRI output the data to the log.txt file.  
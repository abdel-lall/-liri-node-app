var Spotify = require('node-spotify-api');
var Moment = require('moment');
var axios = require('axios');
var fs = require("fs");
require("dotenv").config();


var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

if (process.argv[2] !== undefined){
  liri();
}
if (process.argv[2] === "do-what-it-says"){
  fs.readFile('./random.txt','utf8', function (err, data) {
    if (err) {
        throw err;
    }

    var content = data.split(";")
    var command =[];
    for(i=0;i<content.length;i++){
    
    if (content[i]!== ""){
    command= content[i].split(',');
    process.argv[2]=command[0];
    process.argv[3]=command[1];
    liri();
    }
  }
});
  
}
function liri(){
if (process.argv[2] === "concert-this"){
    if(process.argv[3] ==""){
        console.log("please insert artist or band name")
    }else{
        var artist = process.argv[3];
    var cmd1 = process.argv[2];
    var cmd2 = process.argv[3];
        spotify
  .request("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
  .then(function(data) {
    console.log("             ");
    console.log("Name of the venue: "+data[1].venue.name); 
    console.log("Venue location: "+data[1].venue.country+"/"+data[1].venue.city); 
    console.log("Date of the Event: "+Moment(data[1].datetime).format("MM/DD/YYYY")); 
    fs.appendFile('./log.txt', cmd1+": "+cmd2+"\r\n" , function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });
    }
    
}

if (process.argv[2] === "spotify-this-song"){
    if(process.argv[3] ==""){
        console.log("please insert a song name")
    }else{
    var songName = process.argv[3];
    var cmd1 = process.argv[2];
    var cmd2 = process.argv[3];
spotify.search({ type: 'track', query: songName }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
  console.log("                  ")
  console.log("Artist: "+data.tracks.items[0].artists[0].name); 
  console.log("The song's name: "+data.tracks.items[0].name); 
  console.log("A preview link of the song from Spotify: "+data.tracks.items[0].preview_url); 
  console.log("The album that the song is from: "+data.tracks.items[0].album.name); 
  fs.appendFile('./log.txt', cmd1+": "+cmd2+"\r\n" , function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
});
}
}

if (process.argv[2] === "movie-this"){

    var url ="https://www.omdbapi.com/?t=mr nobody&apikey=trilogy"
    if(process.argv[3] !== undefined){
    var movie = process.argv[3];
    url = "https://www.omdbapi.com/?t="+movie+"&apikey=trilogy"
  }
  var cmd1 = process.argv[2];
  var cmd2 = process.argv[3];
  axios
  .get(url)
  .then(function(response) {
    console.log("           ")
    console.log("Title of the movie: "+response.data.Title);
    console.log("Year of the movie: "+response.data.Year);
    console.log("IMDB Rating: "+response.data.imdbRating);
    console.log("Rotten Tomatoes: "+response.data.Ratings[1].Value);
    console.log("Country: "+response.data.Country);
    console.log("Language: "+response.data.Language);
    console.log("Plot: "+response.data.Plot);
    console.log("Actors: "+response.data.Actors);
    fs.appendFile('./log.txt', cmd1+": "+cmd2+"\r\n" , function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
  })
  .catch(function(error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
    console.log(error.config);
  });

}
}


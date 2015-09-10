var yt_playlist = require('youtube-playlist-dl');
 
// Starts the count for the playlist size.  
var j = 1;
 
console.log('--------------------------------------------------------');
console.log('[INFO] GATHERING VIDEOS FROM SELECTED PLAYLIST');
console.log('--------------------------------------------------------');
 
var options = {
		playlistUrl : "PL02wzb7p_O6MD__2O63rp7xRnU0r9UUMI", // The playlist id. url: "playlist?list=..." 
    mp4Directory : "./files/mp4s/",
    mp3Directory : "./files/mp3s/"


    /*playlistUrl : "PLRBp0Fe2GpgmsW46rJyudVFlY6IYjFBIK", // The playlist id. url: "playlist?list=..." 
    mp4Directory : "../files/mp4s/",
    mp3Directory : "../files/mp3s/"*/
}
 
yt_playlist.retrievePlaylist(options, 1, j);
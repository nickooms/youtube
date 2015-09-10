var fs = require('fs');
var youtubedl = require('youtube-dl');
var video = youtubedl('https://www.youtube.com/watch?v=nJ3ZM8FDBlg&index=1&list=PL02wzb7p_O6MD__2O63rp7xRnU0r9UUMI',
  // Optional arguments passed to youtube-dl. 
  ['--format=18'],
  // Additional options can be given for calling `child_process.execFile()`. 
  { cwd: __dirname });
 
// Will be called when the download starts. 
video.on('info', function(info) {
  console.log('Download started');
  console.log('filename: ' + info.filename);
  console.log('size: ' + info.size);
});
 
video.pipe(fs.createWriteStream('files/mp4s/Pink - Sober.mp4'));
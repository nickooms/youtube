fs = require('fs');
ytdl = require('ytdl-core');
ffmpeg = require('fluent-ffmpeg');

function down(name, url) { 
	var stream = ytdl(url);
	var proc = new ffmpeg({source:stream});
	proc.on('error', function(err) {
		console.log('ERROR file: ' + name);
    console.log('An error occurred: ' + err.message);
    fileIndex++;
  	nextFile();
  });
  proc.on('end', function() {
    console.log('Downloaded ' + name);
  	fileIndex++;
  	nextFile();
  });
  proc.saveToFile('./files/' + name);
} 

function nextFile() {
	if (fileIndex < files.length){
		var file = files[fileIndex];
		down(file.name + '.mp3', file.url);
  } else {
  	console.log('done');
  }	
}

function getFiles(){ 
	var data = fs.readFileSync('./files.txt', 'utf8');
	var lines = data.split('\n');
	console.log(lines.length + ' files');
	files = []; 
	for (var i = 0; i < lines.length; i++){
		var line = lines[i].split('\t');
		files.push( { name: line[0], url: line[1] } );
	}
}

var files;
var fileIndex = 0;
getFiles();
nextFile();
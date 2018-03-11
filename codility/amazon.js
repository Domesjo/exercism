let str =
`my.song.mp3 11b
greatSong.flac 1000b
not3.txt 5b
video.mp4 200b
game.exe 100b
mov!e.mkv 10000b`;
function solution(str) {
  let categories = {
    music: {name: 'music', bytes: 0, extension: 'b'},
    images: {name: 'images', bytes: 0, extension: 'b'},
    movies: {name: 'movies', bytes: 0, extension: 'b'},
    others: {name: 'other', bytes: 0, extension: 'b'}
  };
  // seperate each line to an array
  const arrayOfFiles = str.split('\n');
  //Get the extension to find which category
  arrayOfFiles.forEach((value)=>{
    // Has the extension here
    let bytes = value.split(' ')[1]; // The Bytes has to trim bytes so i can preform math oeprations
    bytes = parseInt(bytes.substring(0, (bytes.length -1)));
    const fileName = value.split(' ')[0];
    let fileExtension = [];
    for (let i = fileName.length; i > 0; i--){
      if(fileName[i] === '.') i = 0;
      fileExtension.push(fileName[i]);
    }
    fileExtension.splice(0,1);
    fileExtension.splice((fileExtension.length-1),1);
    // GIves the fileextension with some extra shit so had to trim it
    fileExtension = fileExtension.join('').split('').reverse().join(''); // For some weird reason to reverse() dont work straight away so I had to do join and split it agian

    if(fileExtension === 'mp3' || fileExtension === 'aac' || fileExtension === 'flac'){
      categories.music.bytes += bytes;
    } else if (fileExtension === 'jpg' || fileExtension === 'bmp' || fileExtension === 'gif'){
      categories.images.bytes += bytes;
    } else if (fileExtension === 'mp4' || fileExtension === 'avi' || fileExtension === 'mkv'){
      categories.movies.bytes += bytes;
    } else {
      categories.others.bytes += bytes;
    }
  });
  const ans = `
  ${categories.music.name} ${categories.music.bytes}${categories.music.extension}
  ${categories.images.name} ${categories.images.bytes}${categories.images.extension}
  ${categories.movies.name} ${categories.movies.bytes}${categories.movies.extension}
  ${categories.others.name} ${categories.others.bytes}${categories.others.extension}
  `;
  console.log(ans);
  return ans;
}
solution(str);

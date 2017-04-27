function songDecoder(song){
  return song.replace(/^(WUB)+/gi,'').replace(/(WUB)+$/gi,'').replace(/(WUB)+/gi,' ');
}
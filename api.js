import * as UI from "./interface.js";

class API {
  constructor(artist, song) {
    this.artist = artist;
    this.song = song;
  }

  checkAPI() {
    const url = `https://api.lyrics.ovh/v1/${this.artist}/${this.song}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {

console.log(data.lyrics);
        if(data.lyrics){

            const { lyrics } = data;
    
            UI.result.textContent = lyrics;
            UI.titleResult.textContent = `Lyrics of the song: ${this.song} of the artist: ${this.artist}`
            
        }
        else{
            alert('The song does not exist.')
            
        }
      });
  }
}

export default API;

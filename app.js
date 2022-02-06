import * as UI from './interface.js'
import API from './api.js'

UI.searchForm.addEventListener('submit', searchLyrics)

function searchLyrics(e){
e.preventDefault()

    //Getting values from the inputs
const artist = document.querySelector('#artist').value
const song = document.querySelector('#song').value

if (artist === '' || song === ''){
    alert('All the fields are required')
    return
}

    //Checking the API

const searchSong = new API(artist,song)
searchSong.checkAPI()

     
}



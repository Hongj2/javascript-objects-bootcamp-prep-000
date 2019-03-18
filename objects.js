var playlist = {
  artist : 'song'
}

function updatePlaylist (playlist, artistName, songTitle){
  playlist['Slowdive'] = 'Alison'
      playlist['My Bloody Valentine'] = 'Sometimes'
  return playlist.artistName
}
function removeFromPlaylist (playlist,artistName){
 delete playlist.artistName
 return playlist
}
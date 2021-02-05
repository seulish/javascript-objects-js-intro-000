var playlist = {
  Adele: "Hello"
};

function updatePlaylist(playlist, artist, title) {
  playlist.artist = title
  //object.assign({}, playlist, { artist: title })
}

function removeFromPlaylist(playlist, artist) {
  delete playlist.artist
  return playlist
}

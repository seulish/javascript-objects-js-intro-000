var playlist = {
  'Adele': 'Hello',
  'noAdele': 'bye'
};

function updatePlaylist(playlist, artist, title) {
  object.assign({}, playlist, { artist: title })
}

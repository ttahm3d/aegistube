const getPlaylist = (playlists, id) =>
  playlists.find((playlist) => playlist._id === id);

export { getPlaylist };

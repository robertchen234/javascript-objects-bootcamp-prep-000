var playlist = new Object({BrunoMars: 'Grenade'});
 function updatePlaylist(Liked, EdSheeran, Perfect){
  Liked[EdSheeran] = Perfect;
  return Liked;
}
 function removeFromPlaylist(Liked, EdSheeran){
  delete Liked[EdSheeran];
  return Liked
} 
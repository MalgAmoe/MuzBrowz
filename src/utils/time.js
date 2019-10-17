export const millisToSongLength = millis => {
  const minutes = Math.round(millis / 60000);
  const seconds = ((millis % 60000) / 1000).toFixed(0);
  const time = seconds > 9 ? `${minutes}:${seconds}` : `${minutes}:0${seconds}`
  return time
}
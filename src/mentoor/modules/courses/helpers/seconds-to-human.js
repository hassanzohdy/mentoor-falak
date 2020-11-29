function secondsToHms(videoLengthInSeconds) {
  let d = Number(videoLengthInSeconds);
  let h = Math.floor(d / 3600);
  let m = Math.floor(d % 3600 / 60);
  let s = Math.floor(d % 3600 % 60);
  return {
    hours: h,
    minutes: m,
    seconds: s,
  };
}
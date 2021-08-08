export const SortAscByDate = (a, b) => {
  if (new Date(a.date) > new Date(b.date)) return 1;
  else if (new Date(a.date) < new Date(b.date)) return -1;
  return 0;
};
export const SortDescByDate = (a, b) => {
  if (new Date(a.date) < new Date(b.date)) return 1;
  else if (new Date(a.date) > new Date(b.date)) return -1;
  return 0;
};
const StringTimeToNumber = (time) => {
  let ahours = parseInt(time[0]) * 100000;
  let aminutes = parseInt(time[1]) * 1000;
  let asec = parseInt(time[2]) * 10;
  let ares = ahours + aminutes + asec;
  return ares;
};
export const SortByTimeAsc = (a, b) => {
  let atime = a.time.split(":");
  let ares = StringTimeToNumber(atime);
  let btime = b.time.split(":");
  let bres = StringTimeToNumber(btime);
  if (ares > bres) return 1;
  else if (ares < bres) return -1;
  return 0;
};
export const SortByTimeDesc = (a, b) => {
  let atime = a.time.split(":");
  let ares = StringTimeToNumber(atime);
  let btime = b.time.split(":");
  let bres = StringTimeToNumber(btime);
  if (ares < bres) return 1;
  else if (ares > bres) return -1;
  return 0;
};

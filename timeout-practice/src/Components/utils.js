export const showTime = (time) => {
  const h = time.h >= 10 ? time.h : "0" + time.h;
  const m = time.m >= 10 ? time.m : "0" + time.m;
  const s = time.s >= 10 ? time.s : "0" + time.s;
  const ms = time.ms >= 10 ? time.ms : "0" + time.ms;

  return `${h} : ${m} : ${s} : ${ms}`;
};

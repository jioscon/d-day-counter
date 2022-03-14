// Selector
const countDays = document.getElementById('count-days');
const countHours = document.getElementById('count-hours');
const countMinutes = document.getElementById('count-minutes');
const countSeconds = document.getElementById('count-seconds');

// Interval
const interval = setTimeout( function tick() {
  const d = countDate();
  countDays.textContent = d[0];
  countHours.textContent = d[1];
  countMinutes.textContent = d[2];
  countSeconds.textContent = d[3];
  setTimeout(tick, 1000);
}, 0)

// Date calculator
function countDate () {
  const now = new Date();
  const setDate = new Date(now.getFullYear() + 1 + '-01-01T00:00:00+0900'); // ('2023-01-01T00:00:00+0900')
  const diff = setDate - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60) % 24));
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  const arrDiff = [days, hours, minutes, seconds]
//  console.log(days, hours, minutes, seconds)
  return arrDiff;
}

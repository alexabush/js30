$(function() {
  let totalSeconds = Array.from($('.videos li'))
    .map(li => {
      return $(li).data('time');
    })
    .reduce((acc, currentTime) => {
      let [minutes, seconds] = currentTime.split(':');
      let total = +seconds + +minutes * 60;
      return acc + total;
    }, 0);

  console.log(formatTime(totalSeconds));

  function formatTime(seconds) {
    let hours;
    let minutes;
    if (seconds > 60) {
      isMinutes = true;
      minutes = Math.floor(seconds / 60);
      seconds = seconds % 60;
    }
    if (minutes > 60) {
      isHours = true;
      hours = Math.floor(minutes / 60);
      minutes = minutes % 60;
    }
    if (isHours && isMinutes) {
      return `${padTime(hours)}:${padTime(minutes)}:${padTime(seconds)}`;
    } else if (isMinutes) {
      return `${padTime(minutes)}:${padTime(seconds)}`;
    } else {
      return `${padTime(seconds)}`;
    }
  }

  function padTime(time) {
    if (time < 10) {
      return `0${time}`;
    }
    return time;
  }
});

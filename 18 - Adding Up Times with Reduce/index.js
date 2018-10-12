$(function() {
  let $videos = $('.videos');
  let times = Array.from($('.videos li')).map(li => {
    return $(li).data('time');
  });
  let total = times.reduce((acc, currentTime) => {
    let [minutes, seconds] = currentTime.split(':');
    let total = +seconds + +minutes * 60;
    return acc + total;
  }, 0);
  let minutes = Math.floor(total / 60);
  let seconds = total % 60;
  let hours;
  if (minutes > 60) {
    hours = Math.floor(minutes / 60);
    minutes = minutes % 60;
  }

  if (hours) {
    console.log(`${padTime(hours)}:${padTime(minutes)}:${padTime(seconds)}`);
  } else {
    console.log(`${padTime(minutes)}:${padTime(seconds)}`);
  }

  function padTime(time) {
    if (time < 10) {
      return `0${time}`;
    }
    return time;
  }
});

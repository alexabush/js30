// $(function() {
console.log('connected!');
let $secondHand = $('.second-hand');
let $minuteHand = $('.minute-hand');
let $hourHand = $('.hour-hand');
setInterval(() => {
  console.log('tick');
  let date = new Date();
  $secondHand.css('transform', `rotate(${date.getSeconds() * 6}deg)`);
  $minuteHand.css('transform', `rotate(${date.getMinutes() * 6}deg)`);
  $hourHand.css('transform', `rotate(${date.getHours() * 15}deg)`);
}, 1000);
// });

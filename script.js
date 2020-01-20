var count = 20;
var countdown = function() {
  document.getElementById("timer").textContent = count.toString();
  console.log(count--);
  var id = setTimeout(countdown, 1000);
  if (count < 0) {
    clearTimeout(id);
  }
};
countdown();

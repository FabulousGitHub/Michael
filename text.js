window.onload = play();
document.getElementById('tryAgain').addEventListener('click', () => { play() })

function play() {
  var blue = '#2980b9';
  var l = Snap('#logo');
  var p = l.select('path');
  l.clear();
  l.append(p);

  p.attr({
    fill: blue,
    stroke: '#0066CC',
  });
var panel = document.getElementById('panel-inner');
var maxY = 20;
var maxX = 20;
var maxZ = 2;

panel.addEventListener('mousemove', function (e) {
  e.stopImmediatePropagation();
  var offsetY = e.offsetY;
  var offsetX = e.offsetX;
  var w = panel.offsetWidth;
  var h = panel.offsetHeight;
  var transform = { y: 1 - offsetX / w * 2, x: 0 - (1 - offsetY / h * 2) };
  transform.z = 0 - (transform.x * transform.y);

  var transformCSS = {
    x: calculateValue(maxX, transform.x),
    y: calculateValue(maxY, transform.y),
    z: calculateValue(maxZ, transform.z)
  };

  panel.style.transform = 'rotateY(' + transformCSS.y + 'deg) rotateX(' + transformCSS.x + 'deg) rotateZ(' + transformCSS.z + 'deg)';
});

panel.addEventListener('mouseleave', function () {
  panel.style.transform = 'rotateY(0deg) rotateX(0deg) rotateZ(0deg)';
  panel.style.transition = 'all .15s ease-out';
});

function calculateValue(max, value) {
  return max * value;
}

document.getElementById('closeButton').addEventListener('click', function () {
  var tutorial = document.querySelector('.tutorial');
  tutorial.style.display = 'none';
  var animateButton = document.getElementById('animate-button');
  animateButton.style.display = 'inline-block';
});

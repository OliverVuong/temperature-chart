const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

fetch(
  'https://data.rcc-acis.org/StnData?sid=047772&sdate=por&edate=por&elems=1,2&output=json',
  { mode: 'cors' }
)
  .then((res) => res.json())
  .then((json) => {
    console.log(json.meta);
    console.log(json.data[0]);
  });

ctx.beginPath();
ctx.strokeRect(0, 0, 400, 400);
ctx.fillRect(50, 50, 50, 50);
canvas.addEventListener('mousemove', (event) => {
  const { x, y } = getMousePos(canvas, event);
  console.log(`x: ${x}, y: ${y}`);
  if (x >= 50 && x <= 100 && y >= 50 && y <= 100) {
    ctx.fillStyle = 'yellow';
    ctx.fillRect(50, 50, 50, 50);
  }
});

function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x:
      ((evt.clientX - rect.left) / (rect.right - rect.left)) *
      canvas.width,
    y:
      ((evt.clientY - rect.top) / (rect.bottom - rect.top)) *
      canvas.height,
  };
}

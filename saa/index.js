function draw(startX, startY, len, angle, delta, branchWidth) {
  ctx.beginPath();
  ctx.save();
  
  ctx.translate(startX, startY);
  ctx.rotate(angle * Math.PI/180);

  ctx.shadowBlur = 15;
  ctx.shadowColor = "rgba(0,0,0,0.7)";
  ctx.lineWidth = branchWidth;

  ctx.moveTo(0, 0);
  ctx.lineTo(0, -len);
  ctx.stroke();
  
  if(len < 10) {
    ctx.restore();
    return;
  }
  
  draw(0, -len, len*0.8, -15 - delta/2, -delta, branchWidth*0.8);
  draw(0, -len, len*0.8, 15 + delta/2, delta, branchWidth*0.8);
  



  ctx.restore();
}

function updateTree() {
	length = document.getElementById("length").value;
	angle = 0;
	delta = document.getElementById("delta").value;
	ctx.clearRect(0, 0, 700, 600);
	draw(350, 600, length, angle, delta, 10);
}

ctx = document.getElementById("tree").getContext("2d");

draw(350, 600, 120, 0, 0, 10);

document.getElementById("length").defaultValue = "120";
document.getElementById("delta").defaultValue = "0";

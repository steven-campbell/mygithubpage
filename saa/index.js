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

$(window).scroll(function() {
	var scrollTop = $(this).scrollTop();
	var headerToDisplay = false;
	$('.header[data-visible-range]').each(function() {
		var range = $(this).data('visible-range').split('-');
		range[0] = range[0] ? parseInt(range[0], 10) : 0;
		range[1] = range[1] ? parseInt(range[1], 10) : $(document).height();
		if(scrollTop >= range[0] && scrollTop <= range[1]) {
			headerToDisplay = $(this);
			return false;
		}
	});
	if(headerToDisplay && !headerToDisplay.is(':visible')) {
		$(".header[data-visible-range]").hide();
		headerToDisplay.show();
	}
});

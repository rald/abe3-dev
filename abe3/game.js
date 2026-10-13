var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");

canvas.width=256;
canvas.height=256;

ctx.fillStyle=palette[0];
ctx.fillRect(0,0,canvas.width,canvas.height);

function drawCanvas(ctx,cvs,x,y,s,f) {
	var hex="0123456789ABCDEF";
	for(var j=0;j<cvs.h;j++) {
		for(var i=0;i<cvs.w;i++) {
			var k=cvs.p[f][j][i];
			var c=hex.indexOf(k);
			if(c!=-1) {
				ctx.fillStyle=palette[c];
				ctx.fillRect(x+i*s,y+j*s,s,s);
			}
		}
	}
}

drawCanvas(ctx,sprites,0,0,1,0);

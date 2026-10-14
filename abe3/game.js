var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");

canvas.width=256;
canvas.height=256+128;

ctx.fillStyle=palette[0];
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.strokeStyle=palette[12];
ctx.strokeRect(0,0,canvas.width,canvas.height);
ctx.strokeRect(0,0,canvas.width,256);

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

function drawPad(ctx,pad) {
	drawCanvas(ctx,pad, 32,256,2,0);
	drawCanvas(ctx,pad, 64,288,2,1);
	drawCanvas(ctx,pad, 32,320,2,2);
	drawCanvas(ctx,pad,  0,288,2,3);

	drawCanvas(ctx,pad,160,288,2,4);
	drawCanvas(ctx,pad,224,288,2,5);
/*
	drawCanvas(ctx,pad,192,256,2,6);
	drawCanvas(ctx,pad,192,320,2,7);
*/
}

function drawLevel(ctx,lvl,spr,x,y,s) {
	var hex="0123456789ABCDEF";
	for(var j=0;j<16;j++) {
		for(var i=0;i<16;i++) {
			var k=lvl.data[j][i];
			var c=hex.indexOf(k);
			if(c!=-1) {
        var color=c & 3;
        var star=c & 4;
        var player=c & 8;
drawCanvas(ctx,spr,x+i*16,y+j*16,1,color);
if(star)drawCanvas(ctx,spr,x+i*16,y+j*16,1,4);
if(player)drawCanvas(ctx,spr,x+i*16,y+j*16,1,5+lvl.dir);
			}
		}
	}
} 

var level={...levels[0]};

drawLevel(ctx,level,sprites,0,0,1);

drawPad(ctx,pad);

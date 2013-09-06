$(document).ready(function(){
	var context;
	var bgColor = 20;
	var bgRGBA = 'rgba('+bgColor+','+bgColor+','+bgColor+', 0)';

	function clearCanvas(context, canvas){
		context.clearRect(0, 0, canvas.width, canvas.height);
	}

	function fadeIn(context, canvas) {
		clearCanvas(context, canvas);
        context.scale(1, 1);

		var x1 = 100;   // x of 1. circle center point
		var y1 = 170;   // y of 1. circle center point
		var r1 = 10;    // radius of 1. circle

		var x2 = 100;   // x of 2. circle center point
		var y2 = 100;   // y of 2. circle center point
		var r2 = 100;   // radius of 2. circle

		var radialGradient1 = context.createRadialGradient(x1, y1, r1, x2, y2, r2);
    	var alpha = 0.0,   // full opacity
        interval = setInterval(function () {
            clearCanvas(context, canvas);

			radialGradient1.addColorStop(0, 'rgba(34,42,186, '+alpha+')');
			radialGradient1.addColorStop(1, bgRGBA);

			context.fillStyle = radialGradient1;
			context.fillRect(0,0, 200, 200);
			console.log('run');
            alpha = alpha +0.01; // decrease opacity (fade out)
            if (alpha > 1) {
                
                clearInterval(interval);
            }
        }, 10); 
	}

	function buildCanvas1(transparency){
		if(typeof(transparency)==='undefined') transparency = 1;
		var canvas  = document.getElementById("canvas1");
		context = canvas.getContext("2d");
		clearCanvas(context, canvas);
		context.scale(2, 1);

		var x1 = 100;   // x of 1. circle center point
		var y1 = 170;   // y of 1. circle center point
		var r1 = 10;    // radius of 1. circle

		var x2 = 100;   // x of 2. circle center point
		var y2 = 100;   // y of 2. circle center point
		var r2 = 100;   // radius of 2. circle

		var radialGradient1 = context.createRadialGradient(x1, y1, r1, x2, y2, r2);

		radialGradient1.addColorStop(0, 'rgba(34,42,186, '+transparency+')');
		radialGradient1.addColorStop(1, bgRGBA);

		context.fillStyle = radialGradient1;
		context.fillRect(0,0, 200, 200);
	}

	function buildCanvas2(){
		var canvas2  = document.getElementById("canvas2");
		context = canvas2.getContext("2d");
		context.scale(2, 1);

		var x2_1 = 170;   // x of 1. circle center point
		var y2_1 = 100;   // y of 1. circle center point
		var r2_1 = 10;    // radius of 1. circle

		var x2_2 = 100;   // x of 2. circle center point
		var y2_2 = 100;   // y of 2. circle center point
		var r2_2 = 100;   // radius of 2. circle

		var radialGradient2 = context.createRadialGradient(x2_1, y2_1, r2_1, x2_2, y2_2, r2_2);

		radialGradient2.addColorStop(0, 'rgb(43,209,95)');
		radialGradient2.addColorStop(1, bgRGBA);

		context.fillStyle = radialGradient2;
		context.fillRect(0,0, 200, 200);
	}

	function buildCanvas3(){
		var canvas3  = document.getElementById("canvas3");
		context = canvas3.getContext("2d");
		context.scale(2, 1);

		var x3_1 = 30;   // x of 1. circle center point
		var y3_1 = 100;   // y of 1. circle center point
		var r3_1 = 10;    // radius of 1. circle

		var x3_2 = 100;   // x of 2. circle center point
		var y3_2 = 100;   // y of 2. circle center point
		var r3_2 = 100;   // radius of 2. circle

		var radialGradient3 = context.createRadialGradient(x3_1, y3_1, r3_1, x3_2, y3_2, r3_2);

		radialGradient3.addColorStop(0, 'rgb(209,54,50)');
		radialGradient3.addColorStop(1, bgRGBA);

		context.fillStyle = radialGradient3;
		context.fillRect(0,0, 200, 200);
	}

	function buildCanvas4(){
		var canvas4  = document.getElementById("canvas4");
		context = canvas4.getContext("2d");
		context.scale(2, 1);

		var x4_1 = 100;   // x of 1. circle center point
		var y4_1 = 30;   // y of 1. circle center point
		var r4_1 = 10;    // radius of 1. circle

		var x4_2 = 100;   // x of 2. circle center point
		var y4_2 = 100;   // y of 2. circle center point
		var r4_2 = 100;   // radius of 2. circle

		var radialGradient4 = context.createRadialGradient(x4_1, y4_1, r4_1, x4_2, y4_2, r4_2);

		radialGradient4.addColorStop(0, 'rgb(199,164,23)');
		radialGradient4.addColorStop(1, bgRGBA);

		context.fillStyle = radialGradient4;
		context.fillRect(0,0, 200, 200);
	}

	buildCanvas1();
	buildCanvas2();
	buildCanvas3();
	buildCanvas4();

	$('#canvas1').click(function(){
		console.log('Yup, you clicked it alright.');
		// buildCanvas1(0);
		var canvas  = document.getElementById("canvas1");
		context = canvas.getContext("2d");
		fadeIn(context, canvas);
	})
});
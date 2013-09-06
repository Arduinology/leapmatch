<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Laravel PHP Framework</title>    
    {{ HTML::style('css/global.css') }}
    {{ HTML::style('//fonts.googleapis.com/css?family=Electrolize') }}

</head>
<body>
    <div class="welcome">
        <h1>LeapMatch</h1><span>development</span>
    </div>

    <div style=" width: 400px; height: 153px; margin: 0 auto; display:block">
        <canvas id="canvas1" width="400" height="200">
        </canvas>
    </div>

    <div style=" width: 804px; height: 151px; margin: 0 auto; display:block">
        <canvas id="canvas2" width="400" height="200" style="display:inline">
        </canvas>
        <canvas id="canvas3" width="400" height="200" style="display:inline">
        </canvas>
    </div>

    <div style=" width: 400px; height: 200px; margin: 0 auto; display:block">
        <canvas id="canvas4" width="400" height="200">
        </canvas>
    </div>
    {{ HTML::script('//js.leapmotion.com/0.2.0/leap.js') }}
    {{ HTML::script('//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js') }}
    {{ HTML::script('js/canvas.js') }}
</body>
</html>
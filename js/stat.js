
'use strict';

window.renderStatistics = function (ctx, names,times) {

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура, вы победили!', 150,40,);

  var max = -1;
  var maxIndex =-1;

   for(var i = 0 ; i < times.length; i++) {
     var time = times[i];
     if (time > max) {
       max = time; //запись максимального времени
       maxIndex = i;// индекс сохраняем для самого худшего времени
     }
   };

  var histogramHeight =  40;
  var step = histogramHeight /(max-0);

  ctx.fillText('Список результатов:' + max.toFixed(0), 150,80,);
  ctx.fillStyle ='rgba(255, 0, 0, 1)';
  ctx.fillRect(150,100,40,times[0] * step);
  ctx.textBaseline = "bottom";
  ctx.fillStyle = 'rgba(0, 0, 255, 0.5)';
  for (var i=0; i<times.length; i++ ) {
      var X=200+ 50 *i;//px
      var initialY=100;//px
      var RectWidth=40;//px
      var BottomIndent= 20;//px
      ctx.fillRect (X, initialY, RectWidth, times[i] * step);
      ctx.fillText (names[i], X, initialY+histogramHeight+BottomIndent);
    }

};

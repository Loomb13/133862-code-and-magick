'use strict';

window.renderStatistics = function (ctx, names, times) {

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура, вы победили!', 150, 40);

  var max = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var histogramHeight = 40;
  var step = histogramHeight / (max);

  ctx.fillText('Список результатов:' + max.toFixed(0), 150, 80);

  ctx.textBaseline = 'bottom';

  for (var i = 0; i < times.length; i++) {
    var name = names[i];

    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, 0.5)';
    }

    var initialX = 200 + 50 * i;
    var initialY = 100;
    var RectWidth = 40;
    var BottomIndent = 20;
    ctx.fillRect(initialX, initialY, RectWidth, times[i] * step);
    ctx.fillText(names[i], initialX, initialY + histogramHeight + BottomIndent);
  }

};


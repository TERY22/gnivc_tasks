const Circle = function() {
  this.start = [];
  this.end = [];
}; 

Circle.prototype.draw = function(canvas) {
   const me = this;

   if (canvas.getContext) {
      const ctx = canvas.getContext('2d'),
            rad = me.getradius(),
            mid = me.getcenter();

      console.log(mid, rad);
      ctx.beginPath();
      console.log(mid['x'], mid['y']);
      ctx.arc(mid['x'], mid['y'], rad, 0, 360);
      ctx.stroke();
   }
};

Circle.prototype.getcenter = function() {
  const me = this;

  //Check the start and end are set
  const centerX = (me.start['x'] + me.end['x']) / 2,
        centerY = (me.start['y'] + me.end['y']) / 2;

  return {
    'x': centerX,
    'y': centerY
  };
};

Circle.prototype.getradius = function() {
  const me = this,
        distX = Math.abs(me.start['x'] - me.end['x']),
        distY = Math.abs(me.start['y'] - me.end['y']);

  return distX / 2;
};

let circle;
const canvas = $('#canvas');

canvas.get(0).width = canvas.width();
canvas.get(0).height = canvas.height();

$('#canvas').mousedown(function(event) {
  const parentOffset = $(this).offset();

  circle = new Circle();

  circle.start['x'] = event.pageX - parentOffset.left;
  circle.start['y'] = event.pageY - parentOffset.top;

});

$('#canvas').mouseup(function(event) {
  const parentOffset = $(this).offset();

  circle.end['x'] = event.pageX - parentOffset.left;
  circle.end['y'] = event.pageY - parentOffset.top;

  circle.draw(canvas[0]);
});
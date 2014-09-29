// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function() {
  var neptune = $('.neptune');
  var pluto = $('.pluto');
  var uranus = $('.uranus');
  var jupiter = $('.jupiter');
  var mercury = $('.mercury');
  var luna = $('.luna');
  var saturn = $('.saturn');
  var venus = $('.venus');
  var mars = $('.mars');
  var polaris = $('.polaris');
  var sun = $('.sun');

  neptune.angle = 0;
  pluto.angle = 0;
  uranus.angle = 0;
  jupiter.angle = 0;
  mercury.angle = 0;
  luna.angle = 0;
  saturn.angle = 2;
  venus.angle = 1;
  mars.angle = 3;
  sun.angle = 4;
  polaris.angle = 5;

  function init() {
    setInterval(rotate, 10);
    setHeight();
  }

  function setHeight() {
    var toHeight = $(window).height();
    $('.gif-container').css({
      'height': toHeight + 'px'
    });
  }

  function rotate(){
    angleCalc(neptune, 300, .001);
    angleCalc(pluto, 200, -.002);
    angleCalc(uranus, 250, -.0013);
    angleCalc(jupiter, 350, .0007);
    angleCalc(mercury, 150, -.0016);
    angleCalc(luna, 400, .001);
    angleCalc(saturn, 420, .0006);
    angleCalc(venus, 310, -.0008);
    angleCalc(mars, 360, .0009);
    angleCalc(sun, 450, -.0005);
    angleCalc(polaris, 380, .0007);
    updatePosition(neptune, '50', 'E6E6FA');
    updatePosition(pluto, '40', 'AFEEEE');
    updatePosition(uranus, '80', 'EFEFEF');
    updatePosition(jupiter, '90', 'FFD1D1');
    updatePosition(mercury, '70', 'E7DEFF');
    updatePosition(luna, '50', 'FFFFFF');
    updatePosition(saturn, '100', 'FFEBFD');
    updatePosition(venus, '85', 'DEFFF8');
    updatePosition(mars, '90', 'D1F2FF');
    updatePosition(sun, '110', 'FFFAED');
    updatePosition(polaris, '100', 'EAE8FC');
  }

  function angleCalc(obj, hyp, Dang){
    xOut = Math.cos(obj.angle)*hyp;
    yOut = Math.sin(obj.angle)*hyp;
    obj.angle += Dang;
    obj.x = Number(xOut.toFixed(2));
    obj.y = Number(yOut.toFixed(2));
  }

  function updatePosition(obj, blur, color){
    obj.css("boxShadow", obj.x.toString() +
      "px "+ obj.y.toString() +
      "px " + blur.toString() +
      "px #"+ color)
  }

  $(window).on('resize', function () {
    setHeight();
  });

  init();
});
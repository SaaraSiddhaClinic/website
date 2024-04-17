

//  with scroll event

$(window).scroll(function() {
  var scrollPosition = $(window).scrollTop();
  var sectionTop = $('#counter-section').offset().top;

  if (scrollPosition >= sectionTop) {

    // Animate the counters when the page is scrolled to the section
    $({countNum: $('#counter1').text()}).animate({countNum: 1000}, {
      duration: 2800,
      easing:'linear',
      step: function() {
        $('#counter1').text(Math.floor(this.countNum));
      },
      complete: function() {
        $('#counter1').text("1,000 +");
      }
    });

    $({countNum: $('#counter2').text()}).animate({countNum: 100}, {
      duration: 2000,
      easing:'linear',
      step: function() {
        $('#counter2').text(Math.floor(this.countNum));
      },
      complete: function() {
        $('#counter2').text("100 %");
      }
    });

    $({countNum: $('#counter3').text()}).animate({countNum: 10}, {
      duration: 1500,
      easing:'linear',
      step: function() {
        $('#counter3').text(Math.floor(this.countNum));
      },
      complete: function() {
        $('#counter3').text("10 +");
      }
    });

  }
});


$(function () {
  $("#slider").easySlider({});

  function actStart() {
    var l = $('.nav-circle').length;
    for (let i = 0; i < l; i++) {
      $($('.nav-circle')[i]).css('border-color', '#222');
      $($('.act-content a')[i]).css('box-shadow', '0 0 0 0');
    }
  }
  $($('.nav-circle')[0]).css('border-color', '#e38383');
  $($('.act-content a')[0]).css('box-shadow', '0 0 15px rgba(0, 0, 0, .15), 0 6px 20px rgba(0, 0, 0, .15)');

  function actControl() {
    var actBtn = $('.nav-circle'),
      actContent = $('.act-content a');
    actBtn.map(function (i) {
      $(actContent[i]).on('mouseover', function () {
        actStart();
        $(actBtn[i]).css('border-color', '#e38383');
        $(actContent[i]).css('box-shadow', '0 0 15px rgba(0, 0, 0, .15), 0 6px 20px rgba(0, 0, 0, .15)')
      });
    });
  }
  actControl();
  var flag = true;
  $('#nav-menu').on('click', function () {
    if (flag) {
      $('#head-nav').show();
      $('.head').css('background', '#fff');
      flag = !flag;
    } else {
      $('#head-nav').hide();
      $('.head').css('background', 'rgba(255, 255, 255, 0)');
      flag = !flag;
    }
  })

  function scroll() {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 100) {
        $('.head').css({
          'background': '#4e495b'
        });
      } else {
        $('.head').css('background', 'rgba(255, 255, 255, 0)');
      }
    })
  }
  scroll();
});
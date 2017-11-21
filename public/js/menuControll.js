$(function () {
  var flag = true;
  $('#nav-menu').on('click', function () {
    if (flag) {
      $('#head-nav').show();
      $('.head').css({
        'background': '#4e495b'
      });
      flag = !flag;
    } else {
      $('#head-nav').hide();
      $('.head').css({
        'background': 'rgba(255, 255, 255, 0)'
      });
      flag = !flag;
    }
  });
})
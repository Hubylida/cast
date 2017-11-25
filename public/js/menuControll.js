$(function () {
  var flag = true;
  $('#nav-menu').on('click', function () {
    if (flag) {
      $('#head-nav').show();
      flag = !flag;
    } else {
      $('#head-nav').hide();
      flag = !flag;
    }
  });
})
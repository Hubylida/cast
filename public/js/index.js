$(function () {
  startSlider();
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
  function navControl(){
    var flag = true;
    $('#nav-menu').on('click', function () {
      if (flag) {
        $('#head-nav').show();
        $('.head').css({
          'background':'#4e495b',
          'border-bottom': '1px solid #f6f6f6'
        });
        flag = !flag;
      } else {
        $('#head-nav').hide();
        $('.head').css({
          // 'background':'rgba(255, 255, 255, 0)',
          'border-bottom': '0'
        });
        flag = !flag;
      }
    });
    // $('#head-nav').on('click',function(){
    //   if(!flag){
    //     $('#head-nav').hide();
    //     $('.head').css({
    //       'background': 'rgba(255, 255, 255, 0)',
    //       'border-bottom': '0'
    //     });
    //     flag = !flag;
    //   }
    // });
  }
  
  navControl();

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
  // function rehover(){
  //   $($('nav-item').eq(2)).on('click',function(){
  //     if($(window).width < 500){
  //       $(this).removeClass('nav-item').addClass('nav-item-click');
  //     }else{
  //       $(this).removeClass('nav-item-click').addClass('nav-item');
  //     }
  //   })
  // }
  // rehover();

  console.log("by Yuan!")
});
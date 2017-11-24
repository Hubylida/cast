function startSlider() {

  var btnArray = getBtns(),
    picList = document.querySelector('.pic-list'),
    i = 1;
  var auto = setInterval(function () {
    if (i === btnArray.length) {
      i = 0;
    }
    picList.style.left = i * (-100) + 'vw';
    setColor(btnArray[i]);
    i = i + 1;
  }, 3900);

  function btnControl() {
    var btn = getBtns(),
      picList = document.querySelector('.pic-list');
    for (let i = 0; i < btn.length; i++) {
      btn[i].addEventListener('click', function () {
        clearInterval(auto);
        picList.style.left = i * (-100) + 'vw';
        setColor(this);
      });
    }
  }
  btnControl();

  function setColor(e) {
    var btnArray = getBtns();
    var currentVal = e.getAttribute('class');
    for (let i = 0; i < btnArray.length; i++) {
      btnArray[i].setAttribute("class", "btn");
    }
    currentVal = " " + currentVal + " ";
    currentVal = currentVal.concat(" active");
    e.setAttribute("class", currentVal);
  }

  function getBtns() {
    return document.querySelectorAll('.btn');
  }
}
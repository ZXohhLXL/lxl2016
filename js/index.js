  var mySwiper = new Swiper(".swiper-container", {
      /*配置选项*/
      init: false,
      //initialSlide：设定初始化时slide的索引。
      initialSlide: 0,
      //direction：滑动方向，可设置水平(horizontal)或垂直(vertical)。默认：horizontal
      direction: "horizontal",
      //autoplay：设置为true启动自动切换
      autoplay: true,
      //loop：设置为true 则开启循环模式,默认：false
      loop: true,
      //centeredSlides：设定为true时，active slide会居中，而不是默认状态下的居左。
      centeredSlides: true,
      //slidesPerView：设置slider容器能够同时显示的slides数量(carousel模式)。
      // slidesPerView: 3,
      //spaceBetween：在slide之间设置距离（单位px）。
      // spaceBetween: 10,
      // 如果需要分页器
      pagination: {
          el: '.swiper-pagination',
      },
      // 如果需要前进后退按钮
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },


  })

  mySwiper.init();



  //○投资
  var c = document.getElementById("myCanvas");

  if (c.getContext("2d")) {
      var context = c.getContext("2d");
      context.translate(100, 100);
      context.beginPath();
      context.fillStyle = '#000';
      context.font = '30px sans-serif';
      context.textAlign = 'center';
      context.fillText("投资中", 0, 35);
      context.lineWidth = 10;
      context.strokeStyle = '#d8d8d8';
      context.arc(0, 0, 95, Math.PI / 180 * 0, Math.PI / 180 * 360);
      context.stroke();
      context.closePath();
      context.beginPath();
      context.fillStyle = '#fc0000';
      context.font = '30px sans-serif';
      context.textAlign = 'center';
      context.fillText("87.63%", 0, 0);
      context.strokeStyle = '#fc0b14';
      context.lineWidth = 10;
      context.rotate(Math.PI / 180 * -90);
      context.arc(0, 0, 95, Math.PI / 180 * 0, Math.PI / 180 * (360 / 100 * 87.63));
      context.stroke();
      context.closePath();
  }
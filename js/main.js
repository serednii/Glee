$(function () {

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    // autoplay: true,
    autoplaySpeed: 2000
  });

  //--------------------------------------------------------
  //Показує або ховає блок фільтрів при кліку на кнопку фільтра і міняє aria-label
  $('.shop__filter-btn').on('click', function () {
    $('.shop__filters').slideToggle();
    $(this).attr('aria-label', function (_, attr) {
      return attr === 'Open filter' ? 'Close filter' : 'Open filter';
    });
  });
  //--------------------------------------------------------

  //Показує або ховає меню при кліку на заголовок меню
  //Режим включається тільки коли маштаб менший 600px
  //--------------------------------------------------------
  function mediaQuery(x) {
    if (x.matches) { // If media query matches
      //коли маштаб менший 600px
      $('.footer-top__list, .footer-top__text').attr("style", "display:none");//Ховаємо меню
      $('.footer-top__title').attr('aria-label', 'Open menu');//добавляємо на кнопку aria-label
      $('.footer-top__title').attr('aria-hidden', 'false');//добавляємо на кнопку aria-label

      //тільки при меншому екрані за 600px включати виключати меню
      $('.footer-top__title').on('click', function () {
        $(this).next().slideToggle();
        $(this).toggleClass('active');
        // Переключение атрибута "disabled" элемента с id="myButton"
        $(this).attr('aria-label', function (_, attr) {
          return attr === 'Open menu' ? 'Close menu' : 'Open menu';
        });

      });

    } else {
      //При більшому екрані за 600px розкриваємо меню і робимо йо статистичним
      $('.footer-top__list, .footer-top__text').attr("style", "display:block");
      $('.footer-top__title').removeAttr('aria-label'); //видаляємо aria-label
      $('.footer-top__title').attr('aria-hidden', 'true');//ігнорувати кнопку
      $('.footer-top__title').off('click');//Видаляємо оброботчик подій
    }
  }

  // Create a MediaQueryList object
  var x = window.matchMedia("(max-width: 600px)")

  // Call listener function at run time
  mediaQuery(x);

  // Attach listener function on state changes
  x.addEventListener("change", function () {
    mediaQuery(x);
  });
  //--------------------------------------------------------




  //для ціни повзунка range
  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);

    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);

    },

  });


  //
  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    draggable: false
  });
  //н
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true
  });

  //product.html tabs
  $('.product-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('data-href')).addClass('product-tabs__content-item--active');
  });

  $('.related__items').slick({
    dots: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
        }
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        }
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        }
      }
    ]
    // autoplay: true,
    // autoplaySpeed: 2000
  });


  //Зірки рейтингу
  $(".star").rateYo({
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    numStars: 5,
    readOnly: true,
    spacing: "8px",
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px"height="16px" viewBox="0 0 18 16" version="1.1"><g id="surface1"><path  d="M 8.101562 0.554688 L 6.0625 4.695312 L 1.496094 5.359375 C 0.679688 5.476562 0.351562 6.488281 0.945312 7.066406 L 4.246094 10.285156  L 3.464844 14.832031 C 3.324219 15.652344 4.191406 16.269531 4.914062 15.882812 L 9 13.738281 L 13.085938 15.882812   C 13.808594 16.265625 14.675781 15.652344 14.535156 14.832031 L 13.753906 10.285156 L 17.054688 7.066406 C 17.648438  6.488281 17.320312 5.476562 16.503906 5.359375 L 11.9375 4.695312 L 9.898438 0.554688 C 9.53125 -0.179688 8.472656 -0.191406  8.101562 0.554688 Z M 8.101562 0.554688 " /></g></svg>'
  });

  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');
  var config = {
    controls: {
      scope: 'local'
    }
  };


  containerEl1 && mixitup(containerEl1, config);
  containerEl2 && mixitup(containerEl2, config);

});







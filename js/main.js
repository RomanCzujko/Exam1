$(document).on('scroll', window, function () {
  if ($(window).scrollTop() < 400) {
    $('.main-nav').hide()
  } else {
    $('.main-nav').slideDown(700)
  }
})
$('.btn-cookies').on('click', function () {
  $('.cookies').hide('cookies')
})

// ------------ Медленные якоря-------------
$(document).ready(function () {
  $('#slowmenu').on('click', 'a', function (event) {
    event.preventDefault()
    let id = $(this).attr('href'),
      top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 1500)
  })
})
$(document).ready(function () {
  $('#slowmenu2').on('click', 'a', function (event) {
    event.preventDefault()
    let id = $(this).attr('href'),
      top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 1500)
  })
})
$(document).ready(function () {
  $('#landing').on('click', 'a', function (event) {
    event.preventDefault()
    let id = $(this).attr('href'),
      top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 1500)
  })
})
$(document).ready(function () {
  $('#shop').on('click', 'button', function (event) {
    event.preventDefault()
    let id = $(this).attr('href'),
      top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 1500)
  })
})
// $('#1 a').click(function (e) {
//   e.preventDefault()
//   $(this).tab('show')
// })
// $('#2 a').click(function (e) {
//   e.preventDefault()
//   $(this).tab('show')
// })
// $('#3 a').click(function (e) {
//   e.preventDefault()
//   $(this).tab('show')
// })
// $(document).ready(function () {
//   $('#slowmenu3').on('click', 'a', function (event) {
//     event.preventDefault()
//     let id = $(this).attr('href'),
//       top = $(id).offset().top
//     $('body,html').animate({ scrollTop: top }, 1500)
//   })
// })
$(document).ready(function () {
  $('#anchor').on('click', 'a', function (event) {
    event.preventDefault()
    let id = $(this).attr('href'),
      top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 1500)
  })
})
// ------------------- SLIDER --------------
$(function () {
  $('.main-slider-websites1').slick({
    infinite: true,
    slidesToShow: 1,
    pauseOnHover: false,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
    arrows: true,
    appendArrows: $('.your-class-arrow1'),
    prevArrow: '<i class="fa fa-chevron-left" aria-hidden="true"></i> ',
    nextArrow: '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
  })
  //   $(".main-slider").appendDots();
})
$(function () {
  $('.main-slider-websites2').slick({
    infinite: true,
    mobileFirst: true,
    slidesToShow: 1,
    pauseOnHover: false,
    fade: true,
    speed: 1000,
    autoplay: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
    arrows: true,
    appendArrows: $('.your-class-arrow2'),
    prevArrow: '<i class="fa fa-chevron-left" aria-hidden="true"></i> ',
    nextArrow: '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
  })
  //   $(".main-slider").appendDots();
})

// ------------------- Отправка формы

$(document).ready(function () {
  $('#form').submit(function () {
    $.ajax({
      type: 'POST',
      url: 'send.php',
      data: $(this).serialize(),
    }).done(function () {
      $('.js-overlay-thank-you').fadeIn()
      $(this).find('input').val('')
      $('#form').trigger('reset')
    })
    return false
  })
})

/// -----------Закрыть попап «спасибо»

$('.js-close-thank-you').click(function () {
  // по клику на крестик
  $('.js-overlay-thank-you').fadeOut()
})

$(document).mouseup(function (e) {
  // по клику вне попапа
  var popup = $('.popup')
  if (e.target != popup[0] && popup.has(e.target).length === 0) {
    $('.js-overlay-thank-you').fadeOut()
  }
})

// Creare's 'Implied Consent' EU Cookie Law Banner v:2.4
// Conceived by Robert Kent, James Bavington & Tom Foyster
 
var dropCookie = true;                      // false disables the Cookie, allowing you to style the banner
var cookieDuration = 14;                    // Number of days before the cookie expires, and the banner reappears
var cookieName = 'complianceCookie';        // Name of our cookie
var cookieValue = 'on';                     // Value of cookie
 
function createDiv(){
    var bodytag = document.getElementsByTagName('body')[0];
    var div = document.createElement('div');
    div.setAttribute('id','cookies');
    div.innerHTML = '<div class="cookies"><div class="cookies-info-wrapper"><p class="cookies-info-wrapper__title">Cookie-Verwendung</p><p class="cookies-info-wrapper__text">Diese Website mit eingesetzten Tools von Drittanbietern verarbeitet personenbezogene Daten (z. B. IP-Adresse) und verwendet Cookies, die für ihre Funktion erforderlich sind. <a href="pages/policy.html">Mehr darüber erfahren</a></p></div><a class="cookies__button close-cookie-banner" href="javascript:void(0);" onclick="removeMe();"><button class="btn-cookies">Okay</button></a></div>';    
 // Be advised the Close Banner 'X' link requires jQuery
     
    // bodytag.appendChild(div); // Adds the Cookie Law Banner just before the closing </body> tag
    // or
    bodytag.insertBefore(div,bodytag.firstChild); // Adds the Cookie Law Banner just after the opening <body> tag
     
    document.getElementsByTagName('body')[0].className+=' cookiebanner'; //Adds a class tothe <body> tag when the banner is visible
     
    createCookie(window.cookieName,window.cookieValue, window.cookieDuration); // Create the cookie
}
 
 
function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000)); 
        var expires = "; expires="+date.toGMTString(); 
    }
    else var expires = "";
    if(window.dropCookie) { 
        document.cookie = name+"="+value+expires+"; path=/"; 
    }
}
 
function checkCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
 
function eraseCookie(name) {
    createCookie(name,"",-1);
}
 
window.onload = function(){
    if(checkCookie(window.cookieName) != window.cookieValue){
        createDiv(); 
    }
}

function removeMe(){
	var element = document.getElementById('cookies');
	element.parentNode.removeChild(element);
}
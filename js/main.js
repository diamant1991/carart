$('.product-carousel').owlCarousel({
  loop:false,
  margin:20,
  nav:true,
  dots: false,
  responsive:{
    0:{
        items:1
    },
    550:{
        items:2
    }
  }
})
$('.news-carousel').owlCarousel({
  loop:false,
  margin:50,
  nav:true,
  dots: false,
  responsive:{
    0:{
        items:1
    },
    450:{
        items:2
    },
    767:{
        items:3
    }
  }
})
$('.review-carousel').owlCarousel({
  loop:false,
  margin:20,
  nav:true,
  dots: false,
  responsive:{
    0:{
        items:1
    },
    550:{
        items:2
    }
  }
})
if(window.matchMedia('(max-width: 767px)').matches){
  $('.catalog-menu__title').addClass('dropdown-btn')
}
$('.dropdown-btn').click(function(e) {
  e.preventDefault()
  var menu = $(this).next()
  if(menu.is(":hidden")){
    $(this).addClass('active')
    menu.slideDown(250)
  }
  else{
    $(this).removeClass('active')
    menu.slideUp(250)
  }
});
  var review_stars = $('.j-rating a');
    $(review_stars).hover(function () {
        $(this).parent().find(review_stars).removeClass('is-hover is-active m-select m-active');
        $(this).addClass('is-hover');
        var thisStar = $(this).parent().find(review_stars);
        $(thisStar).each(function () {
            $(this).addClass('is-active');
            if ( $(this).hasClass('is-hover') ) {
                return false;
            }
        });
    }, function () {
        var value = $(this).parent().find('input[type=hidden]').val();
        $(this).parent().find(review_stars).removeClass('is-hover is-active m-select m-active');
        var thisStar = $(this).parent().find(review_stars);
        if( value >= 1 ) {
            $(thisStar).each(function () {
                $(this).addClass('m-select');
                if ($(this).data('index') == value) {
                    $(this).addClass('m-active');
                    return false;
                }
            });
        }
    });
    $(review_stars).click(function () {
        $(this).addClass('m-active');
        var thisStar = $(this).parent().find(review_stars);
        $(thisStar).each(function () {
            $(this).addClass('m-select');
            if ( $(this).hasClass('m-active') ) {
                return false;
            }
        });
        $(this).parent().find('input[type=hidden]').val(parseInt($(this).data('index')));
        return false;
    });
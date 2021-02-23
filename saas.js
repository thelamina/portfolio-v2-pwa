(function($) {

    var pages = function() {
      var startLoad;
      return {
        init: function() {
  
          pages.checkExternalLinks();
  
          $(document).on('click', '.ed__mainbar__nav .menu-item-object-page a', function(event){
            event.preventDefault();
            pages.loadPageData($(this).attr('href'));
          });
  
          $(document).on('click', '.ed-page--about .ed__mainbar__logo', function(event){
            event.preventDefault();
            pages.loadPageData($(this).attr('href'));
          });
  
          $(document).on('click', '.intro__continue', function(event){
            event.preventDefault();
            pages.loadPageData($(this).attr('href'));
          });
  
          $(document).on('click', 'a.ed__work__slide__link:not(.no-ajax)', function(event){
            event.preventDefault();
            pages.loadPageData($(this).attr('href'), true);
          });
  
          $(document).on('click', 'a.ed-case__close', function(event){
            event.preventDefault();
            var href = $(this).attr('href');
            var caseName = $('.ed-page').attr('data-case');
            pages.loadPageData(href, caseName);
          });
  
          window.onpopstate = pages.handlePopState;
        },
  
        checkExternalLinks: function() {
          $('a[data-case="fixd"]')
            .attr('href', 'http://www.velorange.eu')
            .attr('target', '_blank')
            .addClass('no-ajax');
  
          $('li[data-case="fixd"] a')
            .attr('href', 'http://www.velorange.eu')
            .attr('target', '_blank')
            .addClass('no-ajax');
        },
  
        handlePopState: function(event) {
          pages.loadPageData(document.location);
        },
  
        updatePath: function(newPage, href) {
          history.pushState(newPage, null, href);
        },
  
        updateMetaData: function(content, oldPage) {
          var elem = $(content);
          var title = elem.attr('data-title');
          document.title = title;
          document.body.classList.remove('page--' + oldPage);
          document.body.classList.add('page--' + elem.attr('data-page'));
        },
  
        loadPageData: function(href, workCase) {
          if (window.location.href === href) {
            return;
          }
          startLoad = performance.now();
          var oldPage = $('#content').attr('data-page');
          if (workCase) {
            $('.ed-page--' + oldPage).addClass('animate-out--case');
          } else {
            $('.ed-page--' + oldPage).addClass('animate-out');
          }
  
          $.get(href, function(data) {
            var newContent = $(data).find('#content');
            var newPage = $(newContent).attr('data-page');
            var tempElement = document.createElement('div');
            tempElement.innerHTML = data;
            var styles = tempElement.querySelector('#ce-fontset').innerHTML;
            document.querySelector('#ce-fontset').innerHTML = styles;
  
            $(newContent).addClass('ed-page--new');
            $('#content').before(newContent);
            pages.updateMetaData(newContent, oldPage);
            pages.updatePath(newPage, href);
            pages.checkExternalLinks();
            casePage.init();
            if (workCase) {
              pages.animateCase(oldPage, newPage, workCase);
            } else {
              pages.animatePages(oldPage, newPage);
            }
          });
        },
  
        animatePages: function(oldPage, newPage) {
          var timingOffset = Math.max((800 - (performance.now() - startLoad)), 0);
          if (oldPage === 'intro') {
            $('.ed-page--' + newPage).addClass('animate-pre-in--full');
            timingOffset =  Math.max((1300 - (performance.now() - startLoad)), 0);
          }
          $('.ed-page--' + newPage).addClass('animate-pre-in');
          setTimeout(function() {
            $('.ed-page--' + oldPage).remove();
            $('.ed-page--' + newPage).removeClass('animate-pre-in');
            $('.ed-page--' + newPage).removeClass('animate-pre-in--full');
            $('.ed-page--' + newPage).addClass('animate-in');
            if (oldPage === 'intro') {
              $('.ed-page--' + newPage).addClass('animate-in--full');
            }
          }, (10 + timingOffset));
          setTimeout(function() {
            $('.ed-page--' + newPage).removeClass('ed-page--new');
            $('.ed-page--' + newPage).removeClass('animate-in');
            $('.ed-page--' + newPage).removeClass('animate-in--full');
          }, (1000 + timingOffset));
        },
  
        animateCase: function(oldPage, newPage, caseName) {
          var timingOffset = Math.max((720 - (performance.now() - startLoad)), 0);
          if (newPage === 'work') {
            pages.setActiveSlide(caseName);
            timingOffset = Math.max((400 - (performance.now() - startLoad)), 0);
          }
          $('.ed-page--' + newPage).addClass('animate-pre-in--case');
          setTimeout(function() {
            window.scrollTo(0,0);
            $('.ed-page--' + oldPage).remove();
            $('.ed-page--' + newPage).removeClass('animate-pre-in--case');
            $('.ed-page--' + newPage).removeClass('ed-page--new');
            $('.ed-page--' + newPage).addClass('animate-in--case');
          }, (10 + timingOffset));
          setTimeout(function() {
            $('.ed-page--' + newPage).removeClass('animate-in--case');
            if (newPage === 'case') {
              window.sempliceInit();
            }
          }, (1000 + timingOffset));
        },
  
        setActiveSlide(caseName) {
          var activeIndex = 0;
          $('.ed__work__slide--active').removeClass('ed__work__slide--active');
          $('.ed__work__slide[data-case="' + caseName + '"]').addClass('ed__work__slide--active');
          activeIndex = $('.ed__work__slide--active').index();
          $('.ed__work__slider__numbers__item--active').removeClass('ed__work__slider__numbers__item--active');
          $('.ed__work__slider__numbers__item:eq(' + activeIndex + ')').addClass('ed__work__slider__numbers__item--active');
        }
  
      };
    }();
  
    var intro = function() {
      return {
        init: function() {
          if (!$('.intro__boxes').length) {
            return;
          }
  
          setTimeout(function(){
            $('.intro__boxes').addClass('animate');
            setTimeout(function(){
              $('.intro__boxes').addClass('no-transitions');
              $('.intro__boxes').addClass('fade-out');
              setTimeout(function(){
                $('.intro__boxes').removeClass('animate');
                setTimeout(function(){
                  $('.intro__boxes').removeClass('no-transitions');
                  $('.intro__boxes').removeClass('fade-out');
                  intro.init();
                }, 10);
              }, 1000);
            }, 25000);
          }, 100);
        }
      };
    }();
  
    var casePage = function() {
      var caseImage;
      var textElem;
      return {
        init: function() {
          if ($('.ed-page--case').length === 0) {
            return;
          }
          caseImage = $('.ed__work__slide__link--case');
          textElem = $('.content-p:first');
          textElem.addClass('ed-case__intro');
          $('.ed-case__header').append(textElem);
          $(window).on('scroll', casePage.handleScroll);
          $(window).scroll();
        },
  
        handleCloseBtn: function(scrolled, animation) {
          var closeContainer = $('.ed-case__close-container');
          var closeBtn = $('.ed-case__close-holder');
          var imageEdge = caseImage.width() + caseImage.offset().left;
          var closeEdge = closeContainer.offset().left;
          var closeMargin = Math.max((imageEdge - closeEdge), 0);
          closeBtn.css('left', closeMargin);
        },
  
        handleScroll: function() {
          var scrolled = $(window).scrollTop();
          var maxScroll = $(window).height() * 1.5;
          var scrollFactor = 50 / maxScroll;
          var caseImageWidth = '50%';
          var textLeft = '-' + ($(window).width() / 2) + 'px';
          var animation = 50;
          var logoAlpha = 0;
          if (scrolled <= maxScroll) {
            $('.ed-case').removeClass('ed-case--relative');
            animation = scrolled * scrollFactor;
            caseImageWidth = (100 - animation) + '%';
            textLeft = '-' + Math.round($(window).width() * (animation / 100)) + 'px';
            logoAlpha = (50 - animation) * 0.02;
          } else {
            $('.ed-case').addClass('ed-case--relative');
          }
  
          caseImage.width(caseImageWidth);
          textElem.css('transform', 'translate3d(' + textLeft + ',-' + Math.round(textElem.height() * 0.6) + 'px,0)');
          $('.ed__work__slide__logo').css('opacity', logoAlpha);
          casePage.handleCloseBtn(scrolled, animation);
  
        }
      };
    }();
  
    var workpage = function() {
      var sliderTransition = 610,
          isAnimating = false;
  
      return {
  
  
        init: function() {
  
          workpage.initOverlay();
          workpage.initSlider();
  
        },
  
        initOverlay: function() {
          $(document).on('click', '.js-open-overlay', function(){
            $('.js-work-overlay').show();
            setTimeout(function(){
              $('.js-work-overlay').removeClass('hide');
            }, 10);
          });
  
          $(document).on('click', '.js-work-overlay', function(){
            $('.js-work-overlay').addClass('hide');
            setTimeout(function(){
              $('.js-work-overlay').hide();
            }, 200);
          });
  
          $(document).on('click', '.js-work-overlay a', function(event){
            event.stopPropagation();
          });
  
          $(document).on('mousemove', '.ed__work__overlay__item', workpage.animateOverlayItem);
          $(document).on('mouseleave', '.ed__work__overlay__item', workpage.animateOverlayItemEnd);
        },
  
        animateOverlayItem: function(event) {
          var element = $(event.target).closest('.ed__work__overlay__item');
          var width = element.width() / 2;
          var height = element.height() / 2;
          var pos = {
            x: (event.clientX - element.offset().left - width) / (width / 100),
            y: (event.clientY - element.offset().top - height) / (height / 100)
          };
          element.css({'transform': 'rotate3d(' + pos.y + ', ' + (pos.x * -1) + ', 0, 7deg)'});
        },
  
        animateOverlayItemEnd: function(event) {
          var element = $(event.target).closest('.ed__work__overlay__item');
          element.css({'transform': 'rotate3d(0, 0, 0, 7deg)'});
        },
  
        initSlider: function() {
          $(document).on('click', '.js-work-slider-control', function() {
            var direction = $(this).attr('data-direction');
            workpage.slideSlider(direction);
          });
  
          $(document).on('wheel', '.ed-page--work', workpage.scrollSlider);
        },
  
        scrollSlider: function(event) {
          var movement = event.originalEvent.deltaY || 0;
          var direction = 'next';
          if ((movement > -100 && movement < 100) || isAnimating) {
            return;
          }
          if (movement < 0) {
            direction = 'prev';
          }
  
          workpage.slideSlider(direction);
        },
  
        slideSlider: function(direction) {
          var activeIndex = $('.ed__work__slide--active').index(),
              maxSlides = $('.ed__work__slide').length - 1,
              newActive = 0;
  
          if(isAnimating) {
            return;
          }
  
          isAnimating = true;
  
          if(direction == 'prev') {
            newActive = (activeIndex - 1 < 0) ? maxSlides : activeIndex - 1;
  
            $('.ed__work__slide').addClass('ed__work__slide--no-transition');
            $('.ed__work__slider__numbers__item').addClass('ed__work__slider__numbers__item--no-transition');
            setTimeout(function(){
              $('.ed__work__slide:eq(' + newActive + ')').addClass('ed__work__slide--prev');
              $('.ed__work__slider__numbers__item:eq(' + newActive + ')').addClass('ed__work__slider__numbers__item--prev');
              setTimeout(function(){
                $('.ed__work__slide').removeClass('ed__work__slide--no-transition');
                $('.ed__work__slider__numbers__item').removeClass('ed__work__slider__numbers__item--no-transition');
  
                setTimeout(function(){
                  $('.ed__work__slide:eq(' + activeIndex + ')').removeClass('ed__work__slide--active');
                  $('.ed__work__slider__numbers__item:eq(' + activeIndex + ')').removeClass('ed__work__slider__numbers__item--active');
                  $('.ed__work__slide:eq(' + newActive + ')')
                    .addClass('ed__work__slide--active')
                    .removeClass('ed__work__slide--prev');
                  $('.ed__work__slider__numbers__item:eq(' + newActive + ')')
                    .addClass('ed__work__slider__numbers__item--active')
                    .removeClass('ed__work__slider__numbers__item--prev');
                }, 10);
              }, 20);
            }, 10);
  
          } else {
            newActive = (activeIndex + 1 > maxSlides) ? 0 : activeIndex + 1;
  
            $('.ed__work__slide:eq(' + activeIndex + ')')
              .addClass('ed__work__slide--prev')
              .removeClass('ed__work__slide--active');
            $('.ed__work__slider__numbers__item:eq(' + activeIndex + ')')
              .addClass('ed__work__slider__numbers__item--prev')
              .removeClass('ed__work__slider__numbers__item--active');
            $('.ed__work__slide:eq(' + newActive + ')').addClass('ed__work__slide--active');
            $('.ed__work__slider__numbers__item:eq(' + newActive + ')').addClass('ed__work__slider__numbers__item--active');
  
            setTimeout(function(){
              $('.ed__work__slide').addClass('ed__work__slide--no-transition');
              $('.ed__work__slider__numbers__item').addClass('ed__work__slider__numbers__item--no-transition');
              setTimeout(function(){
                $('.ed__work__slide--prev').removeClass('ed__work__slide--prev');
                $('.ed__work__slider__numbers__item--prev').removeClass('ed__work__slider__numbers__item--prev');
                setTimeout(function(){
                  $('.ed__work__slide').removeClass('ed__work__slide--no-transition');
                  $('.ed__work__slider__numbers__item').removeClass('ed__work__slider__numbers__item--no-transition');
                }, 20);
              }, 10);
            }, sliderTransition);
          }
  
          if (newActive === 0) {
            $('.ed__work__slider__control--prev').removeClass('active');
          } else {
            $('.ed__work__slider__control--prev').addClass('active');
          }
  
          setTimeout(function(){
            isAnimating = false;
          }, sliderTransition);
        }
  
      };
    }();
  
    $(function(){
      pages.init();
      workpage.init();
      intro.init();
      casePage.init();
    });
  })(jQuery);
  
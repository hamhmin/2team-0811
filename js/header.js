// 2단 메뉴 슬라이드
$(function () {
    $('header nav .depth1 li').hover(
        function () {
            $(this).find('.depth2').addClass('on');
        },
        function () {
            $(this).find('.depth2').removeClass('on');
        });
  });

//   gnb toggle
  $(function(){
    $('.gnb-toggle').click(function(){
        // $('#gnb').css('display','block');
        $('#gnb').slideDown();
    });
    $('.gnb-close').click(function(){
        // $('#gnb').css('display','none');
        $('#gnb').slideUp();
    });
  });
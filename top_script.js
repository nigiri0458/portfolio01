$(function() {

    var prev = 0;
    var now = 0;
    var fishDir = 1; //0:left 1:right

    $.fn.animateAppendTo = function(sel, speed){
        var $this = this;
        var currPos = $this.offset();
        var newEle = $this.clone(true).appendTo(sel);
        var newPos = newEle.offset();

        //console.log(`newleft=${newPos.left}, currleft=${currPos.left}`);

        var topMove = newPos.top - currPos.top;
        var leftMove = newPos.left - currPos.left;

        //console.log(topMove);
        //console.log(leftMove);
        
        newEle.css('opacity', '0');
        $this.css('position', 'absolute');
        $this.animate({
            top: `+=${topMove}px`,
            left: `+=${leftMove}px`,
        },
        speed,
        function() {
            newEle.css('opacity', '1');
            $this.remove();
        }); 
        
        return newEle;
    }

    $('.menu li').hover(
        function() {
            var now_id = $(this).attr('id');

            switch(now_id){
                case "menu_prof":
                    now = 1;
                    break;
                case "menu_works":
                    now = 2;
                    break;
                case "menu_travel":
                    now = 3;
                    break;
                case "menu_contact":
                    now = 4;
                    break;
                default:
                    now = 0;
                    break;
            }

            if(prev == 0){
                $(this).find('i').css('opacity', '1');
            }else if(prev < now){               
                if(fishDir == 1){
                    $('#fish').animateAppendTo('#'+now_id, 50);
                }else if(fishDir == 0){
                    fishDir = 1;
                    $('#fish').css('transform', 'scale(1, 1)');
                    $('#fish').animateAppendTo('#'+now_id, 50);
                }
            }else if(prev > now){                
                if(fishDir == 1){
                    fishDir = 0;
                    $('#fish').css('transform', 'scale(-1, 1)');
                    $('#fish').animateAppendTo('#'+now_id, 50);
                }else if(fishDir == 0){
                    $('#fish').animateAppendTo('#'+now_id, 50);
                }
            }
        },
        function() {
            prev = now;
            now = 0;
        }
    )

    var prev2 = 0;
    var now2 = 0;
    var fishDir2 = 1; //0:left 1:right

    $('.menu2 li').hover(
        function() {
            var now_id = $(this).attr('id');

            switch(now_id){
                case "menu_prof2":
                    now2 = 1;
                    break;
                case "menu_works2":
                    now2 = 2;
                    break;
                case "menu_travel2":
                    now2 = 3;
                    break;
                case "menu_contact2":
                    now2 = 4;
                    break;
                default:
                    now2 = 0;
                    break;
            }

            if(prev2 == 0){
                $(this).find('i').css('opacity', '1');
            }else if(prev2 < now2){               
                if(fishDir2 == 1){
                    $('#fish2').animateAppendTo('#'+now_id, 50);
                }else if(fishDir2 == 0){
                    fishDir2 = 1;
                    $('#fish2').css('transform', 'scale(1, 1)');
                    $('#fish2').animateAppendTo('#'+now_id, 50);
                }
            }else if(prev2 > now2){                
                if(fishDir2 == 1){
                    fishDir2 = 0;
                    $('#fish2').css('transform', 'scale(-1, 1)');
                    $('#fish2').animateAppendTo('#'+now_id, 50);
                }else if(fishDir2 == 0){
                    $('#fish2').animateAppendTo('#'+now_id, 50);
                }
            }
        },
        function() {
            prev2 = now2;
            now2 = 0;
        }
    )




    $(window).scroll(function() {
        var scrollTop = $(document).scrollTop();

        var profTop = $('.content_prof').offset().top - $(window).height()/2;
        var worksTop = $('.content_works').offset().top - $(window).height()/2;
        var travelTop = $('.content_travel').offset().top - $(window).height()/2;
        var contactTop = $('.content_contact').offset().top - $(window).height()/2;

        if(scrollTop > profTop){
            $('.prof_scroll-fade').show(200);
            $('.content_prof').hover(
                function() {
                    $('.prof_scroll-fade').hide(200);
                    $(this).css('background-color', 'rgba(0, 0, 0, 0.1)').css('background-blend-mode', 'darken').css('transition', 'all 0.2s');
                },
                function() {
                    $('.prof_scroll-fade').show(200);
                    $(this).css('background-color', 'rgba(255, 255, 255, 0.6)').css('background-blend-mode', 'lighten').css('transition', 'all 0.2s');
                }
            );
        }else{
            $('.prof_scroll-fade').hide()
        }

        if(scrollTop > worksTop){
            $('.works_scroll-fade').show(200);
            $('.content_works').hover(
                function() {
                    $('.works_scroll-fade').hide(200);
                    $(this).css('background-color', 'rgba(0, 0, 0, 0.1)').css('background-blend-mode', 'darken').css('transition', 'all 0.2s');
                },
                function() {
                    $('.works_scroll-fade').show(200);
                    $(this).css('background-color', 'rgba(255, 255, 255, 0.6)').css('background-blend-mode', 'lighten').css('transition', 'all 0.2s');
                }
            );
        }else{
            $('.works_scroll-fade').hide()
        }

        if(scrollTop > travelTop){
            $('.travel_scroll-fade').show(200);
            $('.content_travel').hover(
                function() {
                    $('.travel_scroll-fade').hide(200);
                    $(this).css('background-color', 'rgba(0, 0, 0, 0.1)').css('background-blend-mode', 'darken').css('transition', 'all 0.2s');
                },
                function() {
                    $('.travel_scroll-fade').show(200);
                    $(this).css('background-color', 'rgba(255, 255, 255, 0.6)').css('background-blend-mode', 'lighten').css('transition', 'all 0.2s');
                }
            );
        }else{
            $('.travel_scroll-fade').hide()
        }

        if(scrollTop > contactTop){
            $('.contact_scroll-fade').show(200);
            $('.content_contact').hover(
                function() {
                    $('.contact_scroll-fade').hide(200);
                    $(this).css('background-color', 'rgba(0, 0, 0, 0.1)').css('background-blend-mode', 'darken').css('transition', 'all 0.2s');
                },
                function() {
                    $('.contact_scroll-fade').show(200);
                    $(this).css('background-color', 'rgba(255, 255, 255, 0.6)').css('background-blend-mode', 'lighten').css('transition', 'all 0.2s');
                }
            );
        }else{
            $('.contact_scroll-fade').hide()
        }
    });
});

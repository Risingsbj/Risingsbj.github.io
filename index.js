$(document).ready(function() {
        var cn = ['首页', '技能', '项目', '评价', '联系'];
        $('.section').addClass('initing');
        $('#pagepiling').pagepiling({
            loopBottom: true,
            navigation: {
                'position': 'left',
                'tooltips':cn ,
            },
            menu:'#myMenu',
            anchors:['firstPage','secondPage','thirdPage','fourthPage','fifthPage'],
            onLeave: function(index, nextIndex, direction) {
                var $pages = $('.section');
                for (var i = 0; i < $pages.length; ++i) {
                    if (i + 1 !== nextIndex) {
                        $($pages[i]).addClass('leaving');
                    } else {
                        $($pages[i]).removeClass('leaving');
                    }
                }
            }
        });    
        $('.initing').removeClass('initing');
});
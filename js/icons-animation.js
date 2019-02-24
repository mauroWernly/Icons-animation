$(document).ready(function(){
    var icons = ['hamburger', 'arrow', 'triangle', 'cross'];

    $('.icon-container').on('click', function(e) {
        var index = $(this).attr('data-index'),
            newIndex = parseInt(index) + 1;

        if (newIndex > 3) {
            newIndex = 0;
        }

        $('.icon-container').attr('data-index', newIndex);
        $('.icon-container, body').removeClass(icons[index]);
        $('.icon-container, body').addClass(icons[newIndex]);
    });
});
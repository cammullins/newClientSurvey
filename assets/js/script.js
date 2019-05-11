const checkInputs4Value = function(e){
    $('input').each(function () {
        var $this = $(this),
        label = $this.prev('label');
        if (!$this.is(':focus')) {
            // console.log('focus')
            if ($this.val() === '') {
                label.removeClass('active highlight');
            } else {
                label.addClass('active highlight');
            }
        }
    })
}

$('.form1').find('input, textarea').on('focus', function (e) {
    checkInputs4Value();
    let $this = $(this),
        label = $this.prev('label');
    label.addClass('active highlight');

});

$(document).keyup(checkInputs4Value);
$(document).click(checkInputs4Value);

$('.tab a').on('click', function (e) {

    e.preventDefault();

    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');

    target = $(this).attr('href');

    $('.tab-content > div').not(target).hide();

    $(target).fadeIn(600);

});
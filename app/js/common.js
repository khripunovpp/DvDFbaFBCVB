var isFocus = function() {
    var fieldEl = '.form__field',
        groupEl = '.form__group',
        labelEl = '.form__label',
        onfocusClass = 'onfocus',
        completeClass = 'complete',
        value;

    $(fieldEl).each(function() {
        value = $(this).val();
        if (value.length > 0) $(this).closest(groupEl).addClass(onfocusClass).find(labelEl).fadeOut(200);
    })

    $(fieldEl).on('focus', function() {
        $(this).closest(groupEl).addClass(onfocusClass).find(labelEl).fadeOut(200);
    });

    $(fieldEl).on('blur', function() {
        value = $(this).val();
        $(this).closest(groupEl).removeClass(onfocusClass);
        if (value.length == 0) $(this).closest(groupEl).find(labelEl).fadeIn(200);
        if (value.length > 0) $(this).closest(groupEl).addClass(completeClass);
    });
}

var toForm = function() {
    $('.pre_toform').click(function(e) {
        e.preventDefault();
        var a = $('.js_submit');
        var b = a.closest('form');

        if ($('form#toform').length) {
            a = $('#toform .js_submit');
            b = a.closest('form#toform');
        }

        if (b.length && a.is(':visible')) {
            $("html,body").animate({ scrollTop: b.last().offset().top }, 1000);
        }
        return false;
    });
}

$(function() {
    isFocus()

    $('.effect__nav').on('click', function(event) {
        event.preventDefault();
        $(this).closest('.effect').focus()
    });

    toForm();
});
$(function() {
    $('form select').on('change', function() {
        if ($(this).find('option:selected').val() != '-1')
            $(this).addClass('active');
        else
            $(this).removeClass('active');
    });
});
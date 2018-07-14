var $menuli = $('.menu-position li');
$menuli.on('click', function (e) {
    e.preventDefault();
    $menuli.each(function () {
        $(this).removeClass('active');
    });
    $(this).addClass('active');
});
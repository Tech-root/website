$(document).ready(function () {
    $(".jqbtn").click(function () { 
        var btn_name = $(this).attr('data-btn-name');
        $.ajax({
            type: "get",
            url: "api.php",
            data: {
                get_pag:"true",
                name_page: btn_name,
            },
            dataType: "text",
            success: function (response) {
                if (server_send_erorr(response)) {
                    $('main').html(response);
                }
            }
        });
    });
});
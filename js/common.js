/*n_txt*/
$(function() {
    var len = $(".n_txt:gt(7)");
    var btn_more = $(".d_btn .a_more");
    console.log(len);
    len.hide();
    btn_more.click(function() {
        len.show();
        $(this).text('没有了');
		/*$(this).hide();
        $(".a_more01").show();*/
    });
});
var source = document.getElementById("intro-template").innerHTML;
var template = Handlebars.compile(source);
var content = {
  title: "GIỚI THIỆU",
  intro: "HỠI ĐỒNG BÀO NHÂN DÂN CẢ NƯỚC, NHÂN DÂN TA ĐỀU CÓ QUYỀN BÌNH ĐẲNG,HÃY ĐỨNG LÊN BẢO VỆ QUYỀN BÌNH ĐẲNG CỦA MÌNH NGAY TỪ HÔM NAY..."
}
var html = template(content);
document.getElementById("bodyPage").innerHTML += html;

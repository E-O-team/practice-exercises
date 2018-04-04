var source = document.getElementById("news-template").innerHTML;
var template = Handlebars.compile(source);
var content = {
  leftNews: [
    {picSource: "style\\images\\dab.jpg", alt: "Dab news", title: "Quân đội nhân dân Việt Nam", parag: "        Ngày hôm qua quân đội đi tập trận thật vui, ông gì đó đã bắn súng và không may bị trúng đạn rồi nhập viện. Thật may người ta đã chữa trị kịp thời cho ổng, ổng đã mắc căn bệnh ung thư, bệnh bại liệt và mất trí cùng lúc với sốt xuất huyết. Ông đã có nhiều đóng góp cho lĩnh vực quân sự việt nam, là một chỉ huy tài ba với khả năng quân sự ddinkout không ai bằng, ông đã dễ dàng quét tan quân địch. Ngày hôm qua quân đội đi tập trận thật vui, ông gì đó đã bắn súng và không may bị viện.người ta đã chữa trị kịp thời cho ổng, ổng đã mắc căn bệnh ung thư, bệnh bại liệt và mất trí cùng lúc với sốt xuất huyết. Ông đã có nhiều đóng góp cho lĩnh vực quân sự việt nam, là một chỉ huy tài ba với khả năng quân sự  đã dễ dàng quét tan quân địch."},
    {picSource: "style\\images\\dab.jpg", alt: "Dab news", title: "Quân đội nhân dân Việt Nam", parag: "        Ngày hôm qua quân đội đi tập trận thật vui, ông gì đó đã bắn súng và không may bị trúng đạn rồi nhập viện. Thật may người ta đã chữa trị kịp thời cho ổng, ổng đã mắc căn bệnh ung thư, bệnh bạiất huyết. Ông đã có nhiều đóng góp cho lĩnh vực quân sự việt nam, là một chỉ huy tài ba với khả năng quân sự ddinkout không ai bằng, ông đã dễ dàng quét tan quân địch. Ngày hôm qua quân đội đi tập trận thật vui, ông gì đó đã bắn súng và không may bị viện.người ta đã chữa trị kịp thời cho ổng, ổng đã mắc căn bệnh ung thư, bệnh bại liệt và mất trí cùng lúc với sốt xuất huyết. Ông đã có nhiều đóng góp cho lĩnh vực quân sự việt nam, là một chỉ huy tài ba với khả năng quân sự ddinkout không ai bằng, ông đã dễ dàng quét tan quân địch."},
    {picSource: "style\\images\\dab.jpg", alt: "Dab news", title: "Quân đội nhân dân Việt Nam", parag: "        Ngày hôm qua quân đội đi tập trận thật vui, ông gì đó đã bắn súng và không may bị trúng đạn rồi nhập viện. Thật may người ta đã chữa trị kịp thời cho ổng, ổng đã mắc căn bệnh ung thư, bệnh bại Ông đã có nhiều đóng góp cho lĩnh vực quân sự việt nam, là một chỉ huy tài ba với khả năng quân sự ddinkout không ai bằng, ông đã dễ dàng quét tan quân địch. Ngày hôm qua quân đội đi tập trận thật vui, ông gì đó đã bắn súng và không may bị viện.người ta đã chữa trị kịp thời cho ổng, ổng đã mắc căn bệnh ung thư, bệnh bại liệt và mất trí cùng lúc với sốt xuất huyết. Ông đã có nhiều đóng góp cho lĩnh vực quân sự việt nam, là một chỉ huy tài ba với khả năng quân sự ddinkout không ai bằng, ông đã dễ dàng quét tan quân địch."},
    {picSource: "style\\images\\dab.jpg", alt: "Dab news", title: "Quân đội nhân dân Việt Nam", parag: "sự việt nam, là một chỉ huy tài ba với khả năng quân sự ddinkout không ai bằng, ông đã dễ dàng quét tan quân địch."},
    {picSource: "style\\images\\dab.jpg", alt: "Dab news", title: "Quân đội nhân dân Việt Nam", parag: "        Ngày hôm qua quân đội đi tập trận thật vui, ông gì đó đã bắn súng và không may bị trúng đạn rồi nhập viện. Thật may người ta đã chữa trị kịp thời cho ổng, ổng đã mắc căn bệnh ung thư, bệnh bại liệt dinkout không ai bằng, ông đã dễ dàng quét tan quân địch. Ngày hôm qua quân đội đi tập trận thật vui, ông gì đó đã bắn súng và không may bị viện.người ta đã chữa trị kịp thời cho ổng, ổng đã mắc căn bệnh ung thư, bệnh bại liệt và mất trí cùng lúc với sốt xuất huyết. Ông đã có nhiều đóng góp cho lĩnh vực quân sự việt nam, là một chỉ huy tài ba với khả năng quân sự ddinkout không ai bằng, ông đã dễ dàng quét tan quân địch."}
  ],
  rightNews: [
    {picSource: "style\\images\\dab.jpg", alt: "Dab news", title: "Quân đội nhân dân Việt Nam", parag: "        Ngày hôm qua quân đội đi tập trận thật vui, ông gì đó đã bắn súng và không may bị trúng đạn rồi nhập viện. Thật may người ta đã chữa trị kịp thời cho ổng, ổng đã mắc căn bệnh ung thư, bệnh bại liệt và mất trí cùng lúc với sốt xuất huyết. Ông đã có nhiều đóng góp cho lĩnh vực quân sự việt nam, là một chỉ huy tài ba với khả năng quân sự ddinkout không ai bằng, ông đã dễ dàng quét tan quân địch. Ngày hôm qua quân đội đi tập trận thật vui, ông gì đó đã bắn súng và không may bị viện.người ta đã chữa trị kịp thời cho ổng, ổng đã mắc căn bệnh ung thư, bệnh bại liệt và mất trí cùng lúc với sốt xuất huyết. Ông đã có nhiều đóng góp cho lĩnh vực quân sự việt nam, là một chỉ huy tài ba với khả năng quân sự  đã dễ dàng quét tan quân địch."}
  ]
}
var html = template(content);
document.getElementById("bodyPage").innerHTML += html;

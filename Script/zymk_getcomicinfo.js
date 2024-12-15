let body = JSON.parse($response.body);
for (var i=0;i<body.data.chapter_list.length;i++) {
	body.data.chapter_list[i].price=0;
	body.data.chapter_list[i].download_price=0;
};
	body = JSON.stringify(body);
$done({body});

let body = JSON.parse($response.body);
body.data.coins = 6666;
body.data.golds = 6666;
body = JSON.stringify(body);
$done({body});

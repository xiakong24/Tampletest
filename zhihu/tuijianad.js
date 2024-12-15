var body = $response.body
var obj=JSON.parse(body)
obj['data'].forEach((element, index)=> {
    if(element['type']=='feed_advert'||element.hasOwnProperty('ad')){      
       obj['data'].splice(index,1)  
    }
})
body=JSON.stringify(obj)
$done({body})

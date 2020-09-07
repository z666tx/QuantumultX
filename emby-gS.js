 let url = $request.url;	
let obj = JSON.parse($response.body);	

 let getStatus = '/admin/service/registration/getStatus/';	


 if (url.indexOf(getStatus) != 1) {	
    obj= {	
	deviceStatus = "";	
        planType = "";	
        subscriptions = "{}";	
	 };	
} 	

 	body = JSON.stringify(obj);	

 $done({body});	

 //by horry

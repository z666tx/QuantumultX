 let url = $request.url;	
let obj = JSON.parse($response.body);	

 let validateDevice = '/admin/service/registration/validateDevice/';	

 if (url.indexOf(validateDevice) != 1) {	
   obj= {	
	cacheExpirationDays = "365";	
	message = "Device Valid";	
	resultCode = "GOOD";	
	};		
}	

 	body = JSON.stringify(obj);	

 $done({body});	

 //by horry

 let url = $request.url;	
let obj = JSON.parse($response.body);	

 let validate = '/admin/service/registration/validate/';	

 if (url.indexOf(validate) != 1) {	
    obj= {	
	featId = "";	
	registered = "true";	
        expDate = "2099-01-01";	
        key = "";	
	 };	
}	

 	body = JSON.stringify(obj);	

 $done({body});	

 //by horry

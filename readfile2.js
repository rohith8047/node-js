var fs=require('fs');
function readFile(x,cb){
	var retObj={};
	fs.readFile(x,function(err,context){
		if (err) {
			retObj.status=false;
		}else{
			retObj.status=true;
			retObj.length=context.toString().length;
		}
		cb(retObj);
	});
}
readFile('helloworls.txt',function(a){
	console.log(a);
readFile('helloworls.txt',function(a){
	console.log(a);
});
});
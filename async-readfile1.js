var fs=require('fs');
function readFile(x,callback){
	var retObj={};
	fs.readFile(x,function(err,context){
		if(err){
			retObj.status=false;
			callback(retObj);
		}
		else{
			retObj.status=true;
			retObj.length=context.toString().length;
			callback(retObj,'bye');
		}
	});
}
readFile('/home/mtw-12/Desktop/nodejs/helloworls.txt',function(a,b){
	console.log(a,b);
})
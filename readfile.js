var fs =require('fs');
function readFile1(x){
	fs.readFile(x,function(err,context){
		if (err) {
			console.log(err)
		}else{
			console.log(context.toString());
		}
	});
}
readFile1('/home/mtw-12/Desktop/helloworls.txt');

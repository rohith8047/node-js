var fs=require('fs');
var mongoDb=require('mongodb');
function readFile(x,cb){
	var retObj={};
	fs.readFile(x,function(err,context){
		if (err) {
			retObj.status=false;
			retObj.message="error reading file";
			cb(retObj);
		}
		else{
			var MongoClient=mongoDb.MongoClient;
			MongoClient.connect("mongodb://localhost:27017/mydb",function(err,db){
				if (err) {
					retObj.status=false;
					retObj.message="error connecting mongo";
					cb(retObj);
				}
				else{
					context={a:context.toString()};
					db.collection("text").insertOne(context,function(err,docs){
						if(err){
							retObj.status=false;
							retObj.message='error inserting file'
							cb(retObj);
						}
						else{
							retObj.status=true;
							retObj.message="file inserted";
							console.log("inserted")
							db.close();
							cb(retObj);
						}
					});
				}
			});
		}
	});
}
readFile('helloworls.txt',function(a){
	console.log(a);
});
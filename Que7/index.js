const fs=require('fs');


function delfile(filepath){
    return new Promise(function(success, fail){
        fs.unlink(filepath,(err,data)=>{
            if(err){
                fail(err);
            }else{
                success(data);
            }
        })
    })
}

delfile('./text1.txt')
    .then((data)=>{
        console.log(`File is SucessFully Deleted`);
    })
    .catch((err)=>{
        console.log(err);
    })
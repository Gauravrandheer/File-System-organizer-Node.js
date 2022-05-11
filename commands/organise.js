
const fs = require('fs')
const path = require('path')


function organizefn(dirpath){
    
    let despath;

    if(dirpath==undefined){
        console.log("Please enter a valid dirpath")
        return;
    }else{
        let doesexist = fs.existsSync(dirpath);

        //console.log(doesexist)
        if(doesexist==true){
           despath = path.join(dirpath,"organised_files")
           
           if(fs.existsSync(despath)==false){
               fs.mkdirSync(despath)
           }else{
               console.log("This folder already exists")
           }
        }else{
            console.log("Please enter a valid path")
        }
    }

   organizeHelper(dirpath,despath);
}

function organizeHelper(src,dest){
  
    let childNames = fs.readdirSync(src);

    for(let i =0;i<childNames.length;i++){
        let childAddress = path.join(src,childNames[i])

        let isFile = fs.lstatSync(childAddress).isFile()
        
        if(isFile==true){
            let filecategory = getcategory(childNames[i])
           
        sendfiles(childAddress,dest,filecategory)
        }
    }


}

function getcategory(name){
    let ext = path.extname(name)
    ext = ext.slice(1)
     
    for(let type in types){
        let ctypearr = types[type]

        for(let i=0;i<ctypearr.length;i++){
            if(ext == ctypearr[i]){
                return type
            }
        }
    }

    return "others"
}


function sendfiles(srcfilepath,dest,filecategory){
 
    let cat = path.join(dest,filecategory)

    if(fs.existsSync(cat)==false){
        fs.mkdirSync(cat)
    }

    let fileNames = path.basename(srcfilepath)
    let destfilepath = path.join(cat,fileNames)
   
    fs.copyFileSync(srcfilepath,destfilepath)
    fs.unlinkSync(srcfilepath)


  
}

module.exports={
    organisekey:organizefn
}
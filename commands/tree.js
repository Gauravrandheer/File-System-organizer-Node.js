const fs = require('fs')
const path = require('path')



function treehelp(dirpath){
        
    if(dirpath==undefined){
        console.log("Please enter a directory path")
    }else{
        let doesexist = fs.existsSync(dirpath)
        if(doesexist==true){
          treehelper(dirpath,' ')
        }
    }
  
}


function treehelper(dirpath,indent){
     let isfile = fs.lstatSync(dirpath).isFile()

     if(isfile==true){
         let fileName = path.basename(dirpath)
         console.log(indent+"├──"+fileName)
     }else{
         let foldername = path.basename(dirpath)
         console.log(indent+"└──"+foldername)


         let child = fs.readdirSync(dirpath)
         for(let i=0;i<child.length;i++){
             let childpath = path.join(dirpath,child[i])
             treehelper(childpath,indent+"\t")
         }
     }
}

module.exports={
    treekey:treehelp
}
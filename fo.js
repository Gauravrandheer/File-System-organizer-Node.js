
// We will be creating a File System Organizer////Features of the Project -
//If you have numerous Files in a folder and they are not Properly arranged
//So you can use this tool to arrange them in specific directory according to their extension
// like text files will go into text File Folder .exe files will go into application folder and so on
// so at the end you will have a arranged set of files in specific folders


const help = require("./commands/help")
const tree = require("./commands/tree")
const organise = require("./commands/organise")

let inputarr = process.argv.slice(2)
// console.log(inputarr)




let command  = inputarr[0]

let types = { media: ["mp4", "mkv", "mp3","png","jpg"],
 archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
 documents: ["docx", "doc", "pdf", "xlsx", "xls", "odt", "ods", "odp", "odg", "odf", "txt", "ps", "tex",], 
app: ["exe", "dmg", "pkg", "deb"], };


switch(command){
    case 'tree':
        tree.treekey(inputarr[1])
        break;
    case 'organize':
        organise.organisekey(inputarr[1])
        break;
    case "help":
        help.helpkey()
        break;
    default:
        console.log("Please enter a valid argument")
        break;
}







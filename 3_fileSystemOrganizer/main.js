//File organizer
// 1. Help = lists all commands
// 2.Organize = organizes files by type
//3. tree = tree structure for the directory
const fs = require('fs')
const path = require('path')

let command = process.argv[2] //input from cli
// console.log(command)

let srcPath = process.argv[3]
// console.log(srcPath) 

let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
    documents: [
        "docx",
        "doc",
        "pdf",
        "xlsx",
        "xls",
        "odt",
        "ods",
        "odp",
        "odg",
        "odf",
        "txt",
        "ps",
        "tex",
    ],
    app: ["exe", "dmg", "pkg", "deb"]
};

switch(command){
    case "help" : helpFn()
    break
    case "organize" : orgFn(srcPath)
    break
    case "tree" : treeFn(srcPath)
    break
    default : console.log("Please provide a valid command")
}

function helpFn(){
    console.log(`List of all available commands:
        1. node main.js help = help command
        2. node main.js organize <Path>
        3. node main.js tree <Path>`);
}

function orgFn(srcPath){
    // 1.valid input
    // console.log(srcPath)
    let destPath
    if(srcPath==undefined){
        console.log("Please provide a path")
        return
    }else{
        //2. valid dir
        let isValid = fs.existsSync(srcPath) && fs.lstatSync(srcPath).isDirectory();
        if(isValid){
            destPath = path.join(srcPath,"organized_files")
            if(!fs.existsSync(destPath)){
                fs.mkdirSync(destPath)
            }
        }else{
            console.log("Please provide a valid path")
            return
        }
    }
    orgHelper(srcPath,destPath);
}

function orgHelper(srcPath,destPath){
    //3. Identify all children
    let childNames = fs.readdirSync(srcPath)
    // console.log(childNames);
    for(let i=0;i<childNames.length;i++){
        let childPath = path.join(srcPath,childNames[i])
        let check = fs.lstatSync(childPath).isFile();
        // console.log(childNames[i]+"=>"+check)

        //4. Identify types of all children 
        if(check){
            let type = getType(childNames[i]);
            console.log(childNames[i]+"=> "+type);
        }
    }
    //5. Copy/Cut files
}

function getType(fileName){
    // console.log(fileName)
    let ext = path.extname(fileName)
    ext = ext.slice(1)
    // console.log(ext)

    for(let type in types){ //loop on object
        let typeArray = types[type]
        for(let i=0;i<typeArray.length;i++){
            if(ext == typeArray[i]){
                return type
            }
        }
    }
    // kuch nhi mila
    return "others"
}

function treeFn(srcPath){
    console.log(srcPath)
}
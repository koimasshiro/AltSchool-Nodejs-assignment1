import {resolve, sep, extname} from 'path';
import {pid} from 'process';
import {userInfo, platform} from 'os';

//print out the current working directory
function printWorkingDir(){
    const res = resolve();
    return res;
}
console.log(printWorkingDir())


//print out the separator of a given file
function printSeparator(){
    return sep;
}
console.log(printSeparator());

//print out the extension name of a file path
function printExtName(fileName){
    const ext = extname(fileName);
    return ext;
}
console.log(printExtName('mozarella.php'));

//print out the process id of the current running process
function printPid(){
    return pid;
}
console.log(printPid());

//print out the user information of the OS
console.log(userInfo());

//print out the platform of an operating system
console.log(platform());
module.exports.search=(...args)=>{
console.log(args);
var target=900;
for(let i=0;i<args.length;i++){
    if(args[i]===target){
        return args[i];
    }
}
return -1;
}
const os=require('os');
const fs=require('fs');
console.log(os.platform(),os.homedir());
fs.readFile('./docs/data.txt',(err,data)=>{
    if(err){
        console.log(err);
    }
console.log(data.toString());
});
const readStream = fs.createReadStream('./docs/data.txt');
const writeStream = fs.createWriteStream('./docs/data1.txt');
readStream.on('data', chunk => {
    writeStream.write('\nNEW CHUNK:\n');
    writeStream.write(chunk);
    console.log(chunk);
    console.log('New Chunk')
  });
  

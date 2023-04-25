const fs=require('fs');
fs.writeFile('./docs/data2.txt', 'hello, world', () => {

  console.log('file was written');
});

if (!fs.existsSync('./assets')) {
  fs.mkdir('./assets', err => {
    if (err) {
      console.log(err);
    }
    console.log('folder created');
});
}
else {
    fs.rmdir('./assets', err => {
      if (err) {
        console.log(err);
      }
      console.log('folder deleted');
    });
  }
  if (fs.existsSync('./docs/data1.txt')) {
    fs.unlink('./docs/data1.txt', err => {
      if (err) {
        console.log(err);
      }
      console.log('file deleted');
    });
  }

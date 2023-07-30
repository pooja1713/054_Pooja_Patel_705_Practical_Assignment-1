const fs=require('fs');
const zlib=require('zlib');

// This path for which file compress
const FileToZip='./files/file.txt';

// This path where to compress zip file
const CompressFileName='./files/newfile.gz';

// This is use for Read a File 
const readStream=fs.createReadStream(FileToZip);

// This is use for Write a File into zip
const writeStream=fs.createWriteStream(CompressFileName);

//This line compress a file into zip
readStream.pipe(zlib.createGzip()).pipe(writeStream);

// After the compress a file into zip this line of code given msg in console
writeStream.on('finish',()=>{
    console.log(`File Compressed too zip.File saved As:${CompressFileName}`);
});
const fs=require('fs');
const zlib=require('zlib');

const zipFilePath='./zip/file.gz';

const FileToCompressPath='./files/newtext1.txt';

const Readstrem=fs.createReadStream(zipFilePath);

const Writestream=fs.createWriteStream(FileToCompressPath);

Readstrem.pipe(zlib.createGunzip()).pipe(Writestream);

Writestream.on('finish',()=>{
    console.log(`Extract a Zip File.File Saved in ${FileToCompressPath}`);
})
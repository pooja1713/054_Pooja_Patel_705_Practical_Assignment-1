const fetch= require('node-fetch');

async function fetchGoogle(){
    const res= await fetch('https://google.com');
    console.log(res);
}
fetchGoogle();
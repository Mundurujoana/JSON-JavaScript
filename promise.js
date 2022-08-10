const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


//fetch is promise bases
fetch('https://jsonplaceholder.typicode.com/users')
.then(res => { 
    console.log(res);
    return res.json();
})
.then(json => console.log(json));
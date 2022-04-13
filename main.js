document.querySelector('.get-data').addEventListener('click', getData);

function getData() {
    const http = new EasyHttp;
    
    // http.getFun('test.json')
    //  .then(data => console.log(data))
    //  .catch(err => console.log(err))

    // http.postFun('https://jsonplaceholder.typicode.com/posts', {firstName: 'mohamed'})
    //  .then(data => console.log(data))
    //  .catch(err => console.log(err))

    // http.putFun('https://jsonplaceholder.typicode.com/posts/2', {firstName: 'mohamed'})
    //  .then(res => console.log(res))
    //  .catch(err => console.log(err))

    http.deleteFun('https://jsonplaceholder.typicode.com/posts/2')
     .then(res => console.log(res))
     .catch(err => console.log(err))

}

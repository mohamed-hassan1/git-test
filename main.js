document.querySelector('.get-data').addEventListener('click', getData);

function getData() {
    const http = new easyHttp;

    // http.getFun('https://www.mhdeveloper.com/api/test.json', function(status, results) {
    //     if (!status) {
    //         console.log(results)
    //     } else {
    //         console.log(status)
    //     }
    // });

    const data = {
        work: 'freelancer'
    }

    // http.postFun('https://jsonplaceholder.typicode.com/posts', data, function(status, results) {
    //     if (!status) {
    //         console.log(results)
    //     } else {
    //         console.log(status);
    //     }
    // })    

}

function createPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const err = false;
            if (err) {
                reject('Oops... something went wrong!');
            } else {
                console.log('create Post!');
                resolve();
            }
        }, 2000);
    })
}

function getPosts() {
    setTimeout(() => {
        console.log('get post');
    }, 1000);
}

createPost().then(getPosts).catch(err => console.log(err))

function fetchTxt() {
    fetch('test.json')
     .then(res => res.json())
     .then(data => console.log(data))
}

fetchTxt()
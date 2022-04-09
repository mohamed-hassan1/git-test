document.querySelector('.get-data').addEventListener('click', getData);

function getData() {

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'test.txt', true);

    xhr.onprogress = function() {
        console.log(this.readyState);
    }

    xhr.onload = function() {
        if (this.status === 200) {
            console.log(this.responseText);
        }
    }

    xhr.onerror = function() {
        console.log('Request error...');
    }

    xhr.send();


}
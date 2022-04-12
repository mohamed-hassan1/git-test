// function easyHttp() {
//     this.http = new XMLHttpRequest();
// }

// easyHttp.prototype.getFun = function(url, cb) {
//     this.http.open('GET', url, true);
//     const self = this;
//     this.http.onload = function() {
//         if (self.http.status === 200) {
//             cb(null, JSON.parse(self.http.responseText));
//         } else {
//             cb('Error... ' + self.http.readyState, self.http.responseText);
//         }
//     }
//     this.http.send();
// }

// easyHttp.prototype.postFun = function(url, data, cb) {
//     this.http.open('POST', url, true);
//     this.http.setRequestHeader('Content-Type', 'application/json');
//     const self = this;
//     this.http.onload = function() {
//         cb(null, self.http.responseText);
//     }
//     this.http.send(JSON.stringify(data))
// }


function easyHttp() {
    this.http = new XMLHttpRequest();
}

// GET
easyHttp.prototype.getFun = function(url, cb) {
    this.http.open('GET', url, true);
    this.http.onload = () => {
        if (this.http.status === 200) {
            cb(null, JSON.parse(this.http.responseText));
        }
    }
    this.http.onerror = () => {
        cb('Request Error... ' + this.http.status, JSON.parse(this.http.responseText));
    }

    this.http.send();

}

easyHttp.prototype.postFun = function(url, data, cb) {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');
    this.http.onload = () => {
        cb(null, JSON.parse(this.http.responseText))
    }
    this.http.onerror = () => {
        cb('Request Error... ' + JSON.parse(this.http.status, this.http.responseText));
    }
    this.http.send(JSON.stringify(data));
}

easyHttp.prototype.getFun2 = function(url) {
    return new Promise((resolve, reject) => {
        resolve();
    });
}


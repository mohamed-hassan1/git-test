/**
 * EasyHTTP Library
 * Library for making HTTP Request
 * 
 * @version 1.0
 * @author  Mohamed Hassan
 * @license MIT
 * 
 * 
 * 
 */



class EasyHttp {
    getFun(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
             .then(this.errorHandler)
             .then(res => res.json())
             .then(data => resolve(data))
             .catch(err => reject(err))
        })
    }

    postFun(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
             .then(this.errorHandler)
             .then(res => res.json())
             .then(res => resolve(res))
             .catch(err => reject(err))
        })
    }

    putFun(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
             .then(this.errorHandler)
             .then(res => res.json())
             .then(res => resolve(res))
             .catch(err => reject(err))
        })
    }

    deleteFun(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            })
             .then(this.errorHandler)
             .then(res => res.json())
             .then(() => resolve('Resources deleted...'))
             .catch(err => console.log(err))
        })
    }

    errorHandler(res) {
        if (!res.ok) throw new Error(res.error)
        return res;
    }
}
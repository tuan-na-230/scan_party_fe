import axios from 'axios';
const domain = 'http://localhost:4000'

function setUrl(url) {
    return `${domain}/${url}`
}

class Http {
    async httpGet(url) {
        await axios({
            method: 'get',
            url: setUrl(url),
        }).then((res) => {
            return res
        }).catch(err => {
            console.log(err)
        })
    }

    async httpPost(url, data) {
        await axios({
            method: 'post',
            url: setUrl(url),
            data: data
        }).then((res) => {
            return res
        }).catch(err => {
            console.log(err)
        })
    }

    async httpPut(url, data) {
        await axios({
            method: 'put',
            url: setUrl(url),
            data: data
        }).then((res) => {
            return res
        }).catch(err => {
            console.log(err)
        })

    }

    async httpDelete(url) {
        await axios({
            method: 'delete',
            url: setUrl(url)
        }).then((res) => {
            return res
        }).catch(err => {
            console.log(err)
        })
    }
}

const http = new Http();

export default http;
import axios from 'axios'
import {Indicator} from 'mint-ui'

const protocol = window.location.protocol
const host = window.location.host
axios.defaults.baseURL = `http://localhost:3000`
const config = {
    headers: {
        'Content-type': 'application/json'
    }
}
export default {
    get(url) {
        Indicator.open()
        return new Promise((resolve, reject) => {
            axios.get(url).then((res) => {
                if (res['data']['code'] === 0) {
                    reject(res['data']['data'])
                    Indicator.close()
                }
                if (res['data']['code'] === 1) {
                    resolve(res['data']['msg'])
                    Indicator.close()
                }
            }).catch((rej) => {
                reject(rej.toString())
                Indicator.close()
            })
        })
    },
    post(url, params) {
        Indicator.open('加载中...')
        return new Promise((resolve, reject) => {
            axios.post(url, params, config).then((res) => {
                if (res['data']['code'] === 0) {
                    reject(res['data']['msg'])
                    Indicator.close()
                }
                if (res['data']['code'] === 1) {
                    resolve(res['data']['data'])
                    Indicator.close()
                }
            }).catch((rej) => {
                reject(rej.toString())
                Indicator.close()
            })
        })
    }
}

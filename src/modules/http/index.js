import axios from './http'
import apis from './apis'

var depot = {}

depot.get = function({ url, config = {}, cb }) {
    let urlTpm = apis[url] || url;
    axios.get(urlTpm, config).then((res) => {
        if (res.status === 200) {
            let result = res.data;
            cb(result);
        }
    }).catch((error) => {
        console.log('请求错误：' + error);
    });
};

depot.post = function({ url, data, config, cb }) {
    let urlTpm = apis[url] || url;
    axios.post(urlTpm, data, config).then(
        (res) => {
            if (res.status === 200) {
                if (res.status === 200) {
                    let result = res.data;
                    cb(result);
                }
            }
        }).catch((error) => {
        console.log(error);
    });
};
depot.put = function({ url, data, config, cb }) {
    let urlTpm = apis[url] || url;
    axios.put(urlTpm, data, config).then(
        (res) => {
            if (res.status === 200) {
                if (res.status === 200) {
                    let result = res.data;
                    cb(result);
                }
            }
        }).catch((error) => {
        console.log(error);
    });
};
depot.delete = function({ url, config = {}, cb }) {
    let urlTpm = apis[url] || url;
    axios.delete(urlTpm, config).then((res) => {
        if (res.status === 200) {
            let result = res.data;
            cb(result);
        }
    }).catch((error) => {
        console.log('请求错误：' + error);
    });
};

export default () => {
    window.depot = depot;
};
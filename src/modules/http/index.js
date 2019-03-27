import axios from './http'
import apis from './apis'

var depot = {}

var replaceUrlParams = function(url, config) {
    if (!url) return
    var params = config.params || {}

    Object.keys(params).forEach(function(key) {
        var reg = new RegExp('{' + key + '}', 'g')
        url = url.replace(reg, params[key])
    })
    return url
}

depot.get = function({ url, config = {}, cb }) {
    let urlTpm = replaceUrlParams(apis[url] || url, config);
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
    let urlTpm = replaceUrlParams(apis[url] || url, config);
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
    let urlTpm = replaceUrlParams(apis[url] || url, config);
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
    let urlTpm = replaceUrlParams(apis[url] || url, config);
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
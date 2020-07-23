
const baseUrl = 'https://api.yqkkn.com'   
const api = (url = '', date = {}, type = 'POST', header = {
 "X-Requested-With": "XMLHttpRequest",
 "x-app":"gc",
 "x-auth":"42af80b90b7adc79bf3dfb8ad9aecca1",
 "Content-Type": "application/x-www-form-urlencoded",
}) => {
    return new Promise((resolve, reject) => {
        uni.showLoading({
            mask: true,
        })
 
        uni.request({
            method: type,
            url: baseUrl + url,
            data: date,
            header: header,
         
        }).then((response) => {
            setTimeout(function() {
                uni.hideLoading();
            }, 200);
            let [error, res] = response;
            resolve(res.data);
        }).catch(error => {
            let [err, res] = error;
            reject(err)
        })
    });
}
export default api

import axios from 'axios';

const baseEndpoint = 'https://cataas.com/cat';

export function getCat() {
    const imgPromise = axios.get(baseEndpoint + 'cat', { responseType: 'blob' })
        .then(res => {
            return res;
            // res.blob().then(catImgBlob => {
            //     return catImgBlob;
            // })
            // const catImg = 'data:' + res.headers.content-type + ';base64,' + btoa(unescape(encodeURIComponent(res.data)));
            // Promise.resolve(catImg);
        });

    return imgPromise;
} 
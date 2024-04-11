import axios from 'axios';

const baseEndpoint = 'https://cataas.com/';

export function getCat(width, height) {
    let serviceLink = baseEndpoint + 'cat';
    if (width && height) {
        serviceLink += '?width=' + width + '&height=' + height;
    }
    const imgPromise = axios.get(serviceLink, { responseType: 'blob' })
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

export function getCatByTag(tag) {
    let serviceLink = baseEndpoint + 'cat';
    if (tag) {
        serviceLink += '/' + tag;
    }

    const imgPromise = axios.get(serviceLink, { responseType: 'blob' })
        .then(res => {
            return res;
        });

    return imgPromise;
}
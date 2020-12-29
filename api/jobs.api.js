import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.naukri.com',
    headers: {
        appid: 109,
        systemid: 109,
    },
});

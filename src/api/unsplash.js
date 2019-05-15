import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 5966ec79bf5f80c9cd33b79255b73315e5e40e9e83e682395d4a53ba32aab656'
    }
})
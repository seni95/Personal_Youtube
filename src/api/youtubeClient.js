import axios from "axios"

export default class YoutubeClient{
    constructor(){
        this.httpClient = axios.create({
            baseURL:'https://www.googleapis.com/youtube/v3',
            params:{key: 'AIzaSyBKF2oJ0yF-ehn6nye-gZriD8CxV3j0VYU'},
        })
    }

     async search(params)
    {return this.httpClient.get('search',params);
    }

    async videos(params){
        return this.httpClient.get('videos',params);
    }
    

    }
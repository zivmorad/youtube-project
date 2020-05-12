import axios from 'axios';
import {SECRET_KEY} from '../config/apicode'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 5,
      key:SECRET_KEY
  }
})

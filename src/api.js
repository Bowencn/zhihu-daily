import axios from 'axios'
const news = '/api/4/news/latest'
const newsById = '/api/4/news/'
const newsByDate = '/api/4/news/before/'
export default{
  getNews(){
    return axios.get(news)
  },
  getNewsId(id){
    return axios.get(newsById + id)
  },
  getNewsDate(date){
    return axios.get(newsByDate + date)
  }
}
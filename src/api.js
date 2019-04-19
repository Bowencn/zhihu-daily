    // this.$axios
    //   .get(this.$http + '/api/4/news/latest')
    //   .then(res => (
    //     this.dataList = res.data.stories,
    //     this.getDate(res.data.date),
    //     // eslint-disable-next-line no-console
    //       console.log(res.data)
    //   ))
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
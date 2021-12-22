import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Sppiner from './Sppiner'
import PropTypes from 'prop-types'

// Harshit=7ae21ed023164911b60a0a04bde18727
// Akalesh=a07a6c87bbe34de7860bc9a650d54cd5

export class News extends Component {
    static defaultProps = {
        country:"in",
        pagesize: '9',
        category:"general"
      }
    static propTypes={
       country: PropTypes.string,
       pagesize:  PropTypes.number,
       category: PropTypes.string,
    }
    constructor(props) {
        super(props)
        console.log("news item")
        this.state = {
            articles: [],
            loding: true,
            page: 1,
            // totalResult:""
        }
        document.title=`${this.capitalise(this.props.category)}-World Wide News`
    }

    async updateNews(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a07a6c87bbe34de7860bc9a650d54cd5&page=${this.state.page}&pageSize=${this.props.pagesize}`
        this.setState({ loding: true })
        let data = await fetch(url);
        let parshData = await data.json();
        this.setState({
            articles: parshData.articles,
             totalResults:parshData.totalResults,
            loding: false
        })
     }
     
     capitalise=(s)=>{
         return  s.charAt(0).toUpperCase()+s.slice(1)
     }
    async componentDidMount() {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a07a6c87bbe34de7860bc9a650d54cd5&page=${this.state.page}&pageSize=${this.props.pagesize}`
        // this.setState({ loding: true })
        // let data = await fetch(url);
        // let parshData = await data.json();
        // this.setState({
        //     articles: parshData.articles,
        //      totalResults:parshData.totalResults,
        //     loding: false
        // })
        // console.log(parshData)
        this.updateNews()
    }
    previousBtn =  () => {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a07a6c87bbe34de7860bc9a650d54cd5&page=${this.state.page - 1}&pageSize=${this.props.pagesize}`
        // this.setState({ loding: true })
        // let data = await fetch(url);
        // let parshData = await data.json();
        // this.setState({
        //     articles: parshData.articles,
        //     page: this.state.page - 1,
        //     loding: false
        // })
        // console.log(parshData)
        this.setState({
            page:this.state.page-1
        })
        this.updateNews()
    }
    NextBtn =  () => {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a07a6c87bbe34de7860bc9a650d54cd5&page=${this.state.page+1}&pageSize=${this.props.pagesize}`
        // this.setState({ loding: true })
        // let data = await fetch(url);
        // let parshData = await data.json();
        // this.setState({
        //     articles: parshData.articles,
        //     page: this.state.page + 1,
        //     loding: false
        // })
        // console.log(parshData)
        this.setState({
            page:this.state.page+1
        })
        this.updateNews()

    }
    render() {
        return (
            <>
                <div className="container ">
                    <h1 className="text-center mt-2 mb-5" > Top  {this.capitalise(this.props.category) } News 🐱</h1>
                    {this.state.loding && <Sppiner />}
                    <div className="row">
                        {
                            !this.state.loding && this.state.articles.map((e) => {
                                return <div className="col-md-4 mb-4" >
                                    <NewsItem title={e.title} discription={e.description} source={e.source.name} imgurl={e.urlToImage} url={e.url}  publishedAt={e.publishedAt}/>
                                </div>
                            })
                        }
                    </div>
                    {/* {this.state.loding && <Sppiner/>} */}
                </div>
                <div className='container d-flex justify-content-around my-4'>
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-outline-primary" onClick={this.previousBtn}> &larr; Previous</button>
                    <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/9)} type="button" className="btn btn-outline-primary" onClick={this.NextBtn}>Next &rarr;</button>
                </div>
            </>
        )
    }
}

export default News

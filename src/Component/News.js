import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Sppiner from './Sppiner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

// Harshit=7ae21ed023164911b60a0a04bde18727
// Akalesh=a07a6c87bbe34de7860bc9a650d54cd5

const News=(props)=> {
const [articles,setarticles]=useState([]);
const [loding,setloding]=useState(true);
const [page,setpage]=useState(1);
const [totalResults,settotalResults]=useState(0);


const updateNews=async()=> {
        document.title = `${capitalise(props.category)}-World Wide News`
        props.setprogress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=7ae21ed023164911b60a0a04bde18727&page=${page}&pageSize=${props.pagesize}`
        setloding(true)
        let data = await fetch(url);
        let parshData = await data.json();
        setarticles(parshData.articles)
        settotalResults(parshData.totalResults)
        setloding(false)
        props.setprogress(100)
    }

    const capitalise = (s) => {
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    useEffect(() => {
        updateNews()
       
    }, [])


    const previousBtn = () => {
        setpage(page-1)
        updateNews()
    }


    const NextBtn = () => {
        setpage(page+1)
        updateNews()
    }


    const load = async () => {
        
        setpage(page+1)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=7ae21ed023164911b60a0a04bde18727&page=${page}&pageSize=${props.pagesize}`
        setloding(true)
        let data = await fetch(url);
        let parshData = await data.json();
        setarticles(articles.concat(parshData.articles),)
        settotalResults(parshData.totalResults)
        setloding(false)
    }
    
        return (
            <>
                <div className="container ">
                    <h1 className="text-center" style={{margin:"60px 0px"}} > Top  {capitalise(props.category)} News 🐱</h1>
                    {loding && <Sppiner />}
                    <InfiniteScroll
                        dataLength={articles.length}
                        next={load}
                        hasMore={articles.length != totalResults}
                        loader={<Sppiner />}>
                        <div className="container py-3 ">
                            <div className="row">
                                {
                                    articles.map((e) => {
                                        return <div className="col-md-4 mb-4" >
                                            <NewsItem title={e.title} discription={e.description} source={e.source.name} imgurl={e.urlToImage} url={e.url} publishedAt={e.publishedAt} />
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </InfiniteScroll>
                </div>
                {/* <div className='container d-flex justify-content-around my-4'>
                    <button disabled={page <= 1} type="button" className="btn btn-outline-primary" onClick={previousBtn}> &larr; Previous</button>
                    <button disabled={page + 1 > Math.ceil(totalResults / 9)} type="button" className="btn btn-outline-primary" onClick={NextBtn}>Next &rarr;</button>
                </div> */}
            </>
        )
    }

// News defaultProps = {
//     country: "in",
//     pagesize: '9',
//     category: "general"
// }
// News propTypes = {
//     country: PropTypes.string,
//     pagesize: PropTypes.number,
//     category: PropTypes.string,
// }
export default News

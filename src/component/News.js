import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'; //importing proptypes
import InfiniteScroll from "react-infinite-scroll-component";


 
 
 

export default function News(props) {

  const[articles, setArticles] = useState([])
  const[loading, setLoading] = useState(true)
  const[page, setPage] = useState(1)
  const[totalResults, settotalResults] = useState(0)




  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }



    const updatenews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pagesize=${props.pagesize}`
    setLoading(true)
    let data = await fetch(url)
    let parseddata = await data.json()
    console.log(parseddata)
    setArticles(parseddata.articles)
    settotalResults(parseddata.totalResults)
    setLoading(false)


  }

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} News `
    updatenews()
    //eslint-disable-next-line
  }, [])



   const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pagesize=${props.pagesize}`
    setPage(page+1)
    let data = await fetch(url)
    let parseddata = await data.json()
    setArticles(articles.concat(parseddata.articles))
    settotalResults(parseddata.totalResults)
    
  };




  return (
    <>
      <h1 className='text-center ' style={{ margin: '35px 0px',marginTop:'65px' }}>NewsMINT - Top {capitalizeFirstLetter(props.category)} headlines</h1>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className='container'>
          <div className='row'>
            {articles.map((element) => {
              return <div className='col-md-4' key={element.url} >
                <Newsitem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageurl={element.urlToImage} newsurl={element.url} date={element.publishedAt} author={element.author} source={element.source.name} />
              </div>
            })}
          </div>
        </div>

      </InfiniteScroll>


    </>
  )
}



News.defaultProps = {
  country: "in",
  pagesize: 12,
  category: 'General'

}

News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string
}

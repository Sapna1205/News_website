
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {

    //useState is used in the form of constructor
    constructor(){
        super();
        console.log("hello")
        this.state = {
           articles : [],
           loading: false,
           page  : 1
        }
    }
 
    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=da0ad19460ad4618af6309f946a990ee&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading: true})
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({articles: parsedData.articles, totalResults:parsedData.totalResults, loading : false})
        }
    
    handlePrevClick = async()=>{
        console.log("Previous");
        let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=da0ad19460ad4618af6309f946a990ee&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true})
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            page:this.state.page - 1,
            articles: parsedData.articles,
            loading : false
        })
    }
    handleNextClick = async()=>{
        console.log("Next");
        if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
            let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=da0ad19460ad4618af6309f946a990ee&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading: true})
            let data = await fetch(url);
            let parsedData = await data.json()
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading : false
        })}
    }
  render() {
    return (
      <div className='container my-5 '>
          <h1 className='text-center'>Aaj ki top headlines</h1>
          {this.state.loading &&<Spinner/>} 
          <div className="row">
              {!this.state.loading && this.state.articles.map((element) =>{
                  return  <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title?element.title.slice(0,30):" "} description={element.description?element.description.slice(0,70):" "} imageUrl={element.urlToImage} newsUrl={element.url}/>
               </div>
              })}          
          </div>

         <div className='container d-flex justify-content-between'>
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
         </div>
      </div>
    )
  }
}

export default News
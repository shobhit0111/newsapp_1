import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general',
    }

    static propTypes ={
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string

    }

    capitalize = (string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props){
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0 
        }
        document.title = `${this.capitalize(this.props.category)} - NewsHub`;
    }

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d12c17c2e312476883da6185d384fc1f
        &page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({articles: parsedData.articles, 
            totalResults: parsedData.totalResults,
            loading:false})
        
    }

    handlePreviousClick = async()=>{
        console.log("Previous")
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d12c17c2e312476883da6185d384fc1f&page=${this.state.page - 1}
        &pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            page: this.state.page - 1, 
            articles: parsedData.articles,
            loading: false
        })
        
    }

    handleNextClick = async ()=>{
        console.log("Next");
        if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d12c17c2e312476883da6185d384fc1f&page=${this.state.page + 1}
            &pageSize=${this.props.pageSize}`;
            this.setState({loading:true});
            let data = await fetch(url);
            let parsedData = await data.json()
            this.setState({
                page: this.state.page + 1, 
                articles: parsedData.articles,
                loading:false
            })
        }
        
     }

     fetchMoreData = async() => {
       
        let page= this.state.page + 1;
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d12c17c2e312476883da6185d384fc1f
        &page=${page}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: [...this.state.articles, ...parsedData.articles], 
            totalResults: parsedData.totalResults,
            page: page
        })
        
        
      };

    render() {
        return (
               <>
               
                    <h1 className='text-center' style={{margin: '40px 0px'}}>NewsHub - Top  {this.capitalize(this.props.category)} Headlines </h1>
                     {/* {this.state.loading && <Spinner/>} */}
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length !== this.state.totalResults}
                        loader={<Spinner/>}
                    >
                    <div className="container">
                          
                    <div className="row">
                        {this.state.articles.map((element)=>{
                            return <div className="col-md-4" key={element.url}>
                            <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}
                             author={element.author} date={element.publishedAt}/> 
                            </div>

                        })}
                        
                    </div> 
                    </div>
                    </InfiniteScroll>
                    

                    {/* <div className="container my-3 d-flex justify-content-between">
                        <button disabled={this.state.page<=1} type="button"  className="btn btn-dark" 
                        onClick={this.handlePreviousClick}> &larr; Previous</button>
                       
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark"
                        onClick={this.handleNextClick}>Next &rarr;</button>
                    </div> */}
               </>
        )
  }
}

export default News

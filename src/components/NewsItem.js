import React, { Component } from 'react'

export class NewsItem extends Component {
    
  render() {
    let {title, description, imageUrl, newsUrl, author, date,} = this.props;
    return (
       <div className = "my-3">
            <div className = "card" >
                <img src  ={!imageUrl?"https://img.freepik.com/free-psd/3d-rendering-news-sales-background_23-2150732563.jpg?w=900&t=st=1710673297~exp=1710673897~hmac=10308c90430fa5abc040495145c86dadde915ee8c5a5cd6ae8f650ed24a3d1a2.png":imageUrl} className ="card-img-top" alt="..."/>
                <div className ="card-body">
                    <h5 className ="card-title">{title}...</h5>
                    <p className ="card-text">{description}...</p>
                    <p className='card-text'><small className='text-muted'>By {!author?"Unkown":author} on {new Date(date).toGMTString()}</small></p>
                    <a href ={newsUrl} target="blank" className ="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
  }
}

export default NewsItem



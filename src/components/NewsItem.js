/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
     let {title, description, imageUrl, newsUrl} = this.props;
    return (
         <div className='my-4'>
            <div  className="card" style={{width : "18rem"}}>
               <img src={!imageUrl?"https://www.cnet.com/a/img/-JKG69A9xmdlvxVwYtpIztVHxHI=/940x0/2018/08/21/09803db6-578f-41f7-9c7a-0b9efc5d6751/starshot-satellite-launch.jpg": imageUrl}  className="card-img-top" alt="..."/>
               <div  className="card-body">
                 <h5  className="card-title">{title}...</h5>
                 <p  className="card-text">{description}...</p>
                 <a href={newsUrl} target="_blank"  className="btn btn-sm btn-dark" rel="noreferrer">Read more</a>
               </div>
            </div>
        </div>
    )
  }
}

export default NewsItem
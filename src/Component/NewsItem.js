import React, { Component } from 'react'



export class NewsItem extends Component {
    render() {
        let { title, discription, imgurl, url, publishedAt,source } = this.props;
        return (
            <>
                <div className="card" style={{ height: "", background: "", border: "" }} key={url}>
                    <span className="position-absolute  badge  bg-primary">
                        {source}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                    <img src={!imgurl ? "https://s.yimg.com/os/creatr-uploaded-images/2021-12/cf1459a0-5b88-11ec-aded-e4c12238adb4" : imgurl} style={{ height: "200px" }} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{discription}...</p>
                        <p className="card-text"><small className="text-primary"> {new Date(publishedAt).toGMTString()}</small></p>
                        <a href={url} target="_blank"  className="btn btn-dark btn-sm">Read More 💨</a>
                    </div>
                    
                </div>
            </>
        )
    }
}

export default NewsItem

import React from 'react'
import NoImage from "./NoImage.png";

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className="my-3">
            <div className="card shadow">
                <img src={!imageUrl ? NoImage : imageUrl} className="card-img-top" alt="Sorry, Image not available" />
                <div className="card-body">
                    <h5 className="card-title">{title} <span className="badge bg-danger text-light">{source}</span></h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toDateString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-warning"><b>Read More</b></a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem

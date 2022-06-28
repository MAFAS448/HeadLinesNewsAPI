import React from "react";

function NewsArticle({ data }) {
 
  return (
    <div className="news">
      <h1 className="news__title"><a href={`${data.url}`}>{data.title}</a></h1>
      <h3 className="news__by">By <span></span>
      <span className="news__author">{data.author}</span>
      <span className="news__source">- {data.source.name}</span><br /></h3>
      <span className="news__published">{data.publishedAt}</span><br /><br />
     <span className="grid-rows-1">
      <span className="grid-cols-1">
      <span className="news__pic"><img alt="NewsImage" height={200} src={`${data.urlToImage}`}></img></span>
      </span>
      <span className="grid-cols-2">
      <p className="news__desc">{data.description}</p>
      </span>
      </span>
    </div>
  );
}


export default NewsArticle;
import React from 'react';
import $ from 'jquery';
import Utils from './../Utils';
import Tag from './../common/Tag'

export default class ArticleList extends  React.Component{
  constructor(props) {
    super(props);
  }

  getCover(article){
    if(article.cover){
      return(
        <div className="photo">
          <a href={"./view/article.html"+"?id="+article.id}><img src={Utils.getPath(article.cover)} /></a>
        </div>
      )
    }
  }

  getArticle(article){
    return (
       <div className="article">
         <div className="time">
           <a href={"./view/article.html"+"?id="+article.id}>{article.created_at}</a>
         </div>
         <h1 className="title"><a href={"./view/article.html"+"?id="+article.id}>{article.title}</a></h1>
         {this.getCover(article)}
         <div className="summary"><p>{article.summary}</p></div>
         <Tag tag={article.tag}></Tag>
       </div>
       );
  }
  render(){
    var nodes = this.props.articleList.map((article)=>{
      return this.getArticle(article);
    });
    return(
      <div className="article-box">
        {nodes}
      </div>
    )
  }
}

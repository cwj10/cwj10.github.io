import React from 'react';
import $ from 'jquery';
import Api from './../api';
import Tag from './../common/Tag'
import Utils from './../Utils'

export default class Content extends  React.Component{
  constructor(props) {
    super(props);
    this.state = {article: {}};
  }
  componentDidMount() {
    Api.getArticle((article,preId,nextId)=>{
      this.setState({article:article,preId:preId,nextId:nextId})
      Api.markdownit(article.path,"content");
    });
  }

  getArticle(){
    return (
       <div className="article">
         <h1 className="title"><a href="">{this.state.article.title}</a></h1>
         <div className="time">
           <a href="">{this.state.article.created_at}</a>
         </div>
         
         <div id='content' className="markdown-body"></div>
         <Tag tag={this.state.article.tag}></Tag>
       </div>
       );
  }

  getPager(){
    var nodes =[] ;
    if(this.state.preId){
      var prePath = Utils.getPath()+"/view/article.html?id="+this.state.preId;
      nodes.push(<a className='pre' href={prePath} >&lt; 上一篇</a>);
    }
    if(this.state.nextId){
      var nextPath = Utils.getPath()+"/view/article.html?id="+this.state.nextId;
      nodes.push(<a className='next' href={nextPath} >下一篇 &gt;</a>);
    }
    return(
      <div className="article-pager">
        {nodes}
      </div>
    );
  }
  render(){
    return(
      <div className="article-box">
        {this.getArticle()}
        {this.getPager()}
      </div>
    )
  }
}

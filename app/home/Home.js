import React from 'react';
import Aside from './../common/Aside'
import Footer from './../common/Footer'
import Header from './../common/Header'
import ArticleList from './ArticleList'
import Pager from './../common/Pager'
import Api from './../api';
import Utils from './../Utils';

export default class Home extends  React.Component{
  constructor(props) {
    super(props);
    this.state = {articleList: [],total:0,page:0,prePage:"",nextPage:""};
  }
  componentDidMount() {
    Api.getArticleList((data,total,page)=>{
      var prePage = Utils.getPath()+"?page="+(page-1);
      var nextPage = Utils.getPath()+"?page="+(page+1);
      this.setState({articleList: data,total:total,page:page,prePage:prePage,nextPage:nextPage});
    });
  }

  render(){
    return(
      <div className="main">
        <div className="pagea"></div>
        <div className="pageb"></div>
        <div className="page">
          <Header></Header>
          <Aside></Aside>
          <ArticleList articleList={this.state.articleList}></ArticleList>
          <Pager total={this.state.total} page={this.state.page} prePage={this.state.prePage} nextPage={this.state.nextPage}></Pager>
        </div>
      </div>
    )
  }
}

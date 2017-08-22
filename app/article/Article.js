import React from 'react';
import Aside from './../common/Aside'
import Footer from './../common/Footer'
import Header from './../common/Header'
import Content from './Content'


export default class Article extends  React.Component{
  render(){
    return(
      <div className="main">
        <div className="pagea"></div>
        <div className="pageb"></div>
        <div className="page">
          <Header></Header>
          <Aside></Aside>
          <Content></Content>
        </div>
      </div>
    )
  }
}

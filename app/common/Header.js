import React from 'react';
import Utils from './../Utils'

export default class Header extends  React.Component{

  render(){
    return(
      <div className="header">
        <div>
          <h1><a href={Utils.getPath()} title="首页" rel="prefetch">始于代码</a></h1>
        </div>
      </div>
    )
  }
}

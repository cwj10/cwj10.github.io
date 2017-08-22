import React from 'react';
import avatar from './../../image/avatar.png';

export default class Aside extends  React.Component{

  render(){
    return(
      <div className="aside">
        <div className="about  clearfix">
          <img className="avatar" src={avatar}></img>
          <h2>关于我</h2>
          <div className="content">cwj</div>
        </div>
        <div className="tool">
          <ul>
            <li>
              <a href="">归档</a>
            </li>
            <li>
              <a href="">联系我</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

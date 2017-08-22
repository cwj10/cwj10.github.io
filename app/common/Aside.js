import React from 'react';
import avatar from './../../image/avatar.png';

export default class Aside extends  React.Component{

  render(){
    return(
      <div className="aside">
        <div className="about  clearfix">
          <a href="/view/about.html"><img className="avatar" src={avatar}></img></a>
          <h2><a href="/view/about.html"> 关于我</a></h2>
          <div className="content">cwj</div>
        </div>
        <div className="tool">
          <ul>
            <li>
              <a href="">归档</a>
            </li>
            <li>
              <a href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=kPPn_r7z--T14tDh4b7z--0">联系我</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

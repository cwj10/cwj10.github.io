import React from 'react';

export default class Tag extends  React.Component{
  getTag(){
    if(this.props.tag){
      var tags = this.props.tag.split(",");
      var nodes = tags.map((t)=>{
        return ( <a href="">{t}</a>);
      });
      return(
        <p className="tag">标签：
          {nodes}
        </p>
      )
    }
  }
  render(){
    return(
      <div className="divider">
          {this.getTag()}
     </div>
    )
  }
}

import React from 'react';


export default class Pager extends  React.Component{

  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div className="pager">
        <a className="prev" href={this.props.prePage} >←</a>
				<span className="num">{this.props.page} / {this.props.total}</span>
				<a className="next" href={this.props.nextPage}>→</a>
				<a className="top" href="#top" target="_self" >▲</a>
      </div>
    )
  }
}

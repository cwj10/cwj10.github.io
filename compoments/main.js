/**
 * Created by cwj on 2015/11/19.
 */
var BlogHeader = React.createClass({
  render:function(){
    return (
      <header>
        <div className="header clearfix">
          <div className="logo">
            <a href="/"><img src="./img/logo.png" alt="cwj" /></a>
          </div>
          <div className="text-logo">
            <h1 className="site-name"><a href="/" >CWJ</a></h1>
            <h2 className="blog-motto">Not Only A Coder</h2>
          </div>
          <nav className="animated">
            <ul>
              <li><a href="#">主页 | Home</a></li>
              <li><a href="#">索引 | Index</a></li>
              <li><a href="#">简介 | About</a></li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
})

 var ArticleItem = React.createClass({
   articleDetail:function(id){
     window.location.href = './view/article.html?id='+this.props.index
   },
   render:function(){
     return(
       <li onClick={this.articleDetail}>
         <a className="item"href='#'>
           <h1 >{this.props.title}</h1>
           <p >{this.props.description}</p>
           <time >{this.props.time}</time>
         </a>
       </li>
     )
   }
 });
 var ArticleList = React.createClass({
   render:function(){
     var articleNodes = this.props.data.map(function(article) {
       return (
           <ArticleItem title={article.title} description={article.description} time={article.time} index={article.id}>
           </ArticleItem>
         );
       });
       return (
         <ul>
         {articleNodes}
         </ul>
       );
   }
 });
 var ArticlePage = React.createClass({
   render:function(){
     var page= parseInt(this.props.page);
     var len = ARTICLES.length;
     var total =  Math.ceil(len/5) ;
     if(!page || page<=0 || page> total){
       page = 1;
     }
     var next = (page+1);
     var pre = (page-1);
     var rows = [];
     if (page > 1) {
       rows.push( <a className="prev" rel="prev" ><span value={pre} onClick={this.props.changePage}>Prev</span></a>);
     }
     var i = 1;
     for(;i<=total;i++){

       if(page == i){
         rows.push(<span>{i}</span>);
       }else{
         var temp = i;
         rows.push(<a href='#' value='num' onClick={this.props.changePage}>{temp}</a>);
       }

     }
     if(page < total){
       rows.push(<a className="next" rel="next"><span value={next} onClick={this.props.changePage}>Next</span></a>);
     }
     return (
       <nav className="page-nav clearfix">
          {rows}
       </nav>
     )
   }
 })
 var ArticleBox = React.createClass({
   getDataBypage:function(page){
     var len = ARTICLES.length;
     var start = (page-1)*5;
     if (start >=len) {
       start = 0;
     }
     var end = start + 5;
     var newData = ARTICLES.slice(start,end);
     return newData;
   },
   getPage:function(){
     var page= parseInt(GetQueryString("page"));
     var len = ARTICLES.length;
     var total =  Math.ceil(len/5) ;
     if(!page || page<=0 || page> total){
       page = 1;
     }
     return page;
   },
   changePage:function(e){
      e.preventDefault();
      var page = e.target.getAttribute("value");
      if(page&&page == 'num'){
        page= e.target.innerHTML;
      }
      var data = this.getDataBypage(parseInt(page));
      this.setState({page: page, data: data});
   },
   getInitialState: function() {
     var page= this.getPage();
     var data = this.getDataBypage(page);
     return {page: page, data: data};
    },

   render: function() {
     return (
       <div>
         <BlogHeader></BlogHeader>
         <div id="article-box" className="main">
           <ArticleList data = {this.state.data} page = {this.state.page}></ArticleList>
           <ArticlePage data = {this.state.data} page = {this.state.page} changePage={this.changePage}></ArticlePage>
         </div>
       </div>
     );
   }
 });
 ReactDOM.render(
   <ArticleBox ></ArticleBox>,
   document.getElementById('container')
 );

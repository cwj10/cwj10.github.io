var BlogHeader = React.createClass({
  render:function(){
    return (
      <header>
        <div className="header clearfix">
          <div className="logo">
            <a href="/"><img src="../img/logo.png" alt="cwj" /></a>
          </div>
          <div className="text-logo">
            <h1 className="site-name"><a href="/" >CWJ</a></h1>
            <h2 className="blog-motto">Not Only A Coder</h2>
          </div>
          <nav className="animated">
            <ul>
              <li><a href="../index.html">主页 | Home</a></li>
              <li><a href="#">索引 | Index</a></li>
              <li><a href="../view/about.html">简介 | About</a></li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
});

var ArticleDetail = React.createClass({

  getInitialState: function() {
     var id= parseInt(GetQueryString("id"));

     return getArticle(id);
  },

  changeArticle:function(e){
    e.preventDefault();
    var tag = e.target.getAttribute("value");
    var article = this.state.article;
    var id= article.id;
    var newId = 0;
    if(tag && tag == 'pre'  ){
        newId = id - 1;
    }
    if(tag && tag == 'next'  ){
      newId = id + 1;
    }
    var data = getArticle(newId);
    this.setState({article:data.article,preArticle:data.preArticle,preStyle:data.preStyle,nextArticle:data.nextArticle,nextStyle:data.nextStyle});
    loadData(data.article.path);
  }
  ,
  componentDidMount: function() {
    loadData(this.state.article.path);
  },
  render:function(){
    return (
      <div>
        <BlogHeader ></BlogHeader>
        <div  className='article-detail'>
          <div className='article-header'>
            <h1>{this.state.article.title}</h1>
            <time>发表于 {this.state.article.time}</time>
          </div>
          <div id='content'></div>
          <div  className='article-footer clearfix'>
            <a href='#' >
              <div value = 'pre' onClick={this.changeArticle} className={this.state.preStyle}>
                <p value = 'pre'>上一篇</p>
                <span value = 'pre'>{this.state.preArticle.title}</span>
              </div>
            </a>
            <a href='#'>
              <div  value = 'next'onClick={this.changeArticle} className={this.state.nextStyle}>
                <p value = 'next'>下一篇</p>
                <span value = 'next'>{this.state.nextArticle.title}</span>
              </div>
            </a>
          </div>
         </div>
      </div>
    )
  }
})
ReactDOM.render(
  <ArticleDetail ></ArticleDetail>,
  document.getElementById('container')
);

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
var About = React.createClass({
  render:function(){
    return (
      <div>
        <BlogHeader ></BlogHeader>
        <div className='about-box'>
          <ul>
            <li className='divider'>
              <h2>简介</h2>
              <span className='introduce'>
                主要记录了在工作学习中遇到的一些问题及解决方法。
              </span>
            </li>
            <li>
              <h2>联系方式</h2>
              <div>
                <a className='mail' target="_blank" href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=kPPn_r7z--T14tDh4b7z--0" >给我发邮件</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
});

ReactDOM.render(
  <About ></About>,
  document.getElementById('container')
);

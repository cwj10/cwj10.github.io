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
              <li><a href="#">简介 | About</a></li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
});

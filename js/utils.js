/**
 * Created by cwj on 2015/11/19.
 */

var loadData = function(path){
    $.ajax({
        type: "get",
        cache:false,
        url:"../data/"+path,
        success: function(data){
            var md = window.markdownit();
            var result = md.render(data);
            document.getElementById('content').innerHTML = result;
        }
    });
}

function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}
function getArticleIndexById(id){
  var index = 0;
  for (var i in ARTICLES) {
    if (ARTICLES[i].id == id) {
      index = i;
      break;
    }
  }
  return parseInt(index);
}
function getArticle(id){
  var id= getArticleIndexById(id);
  var article = ARTICLES[id];
  var len = ARTICLES.length;
  var preIndex = id-1;
  var nextIndex = id+1;
  var preArticle = DEFAULT_ARTICLE;
  var nextArticle = DEFAULT_ARTICLE;
  var preStyle = 'display-none';
  var nextStyle = 'display-none';
  if (preIndex >= 0 && preIndex < len) {
       preStyle = 'pre';
       preArticle = ARTICLES[preIndex];
  }
  if (nextIndex >= 0 && nextIndex < len) {
       nextStyle = 'next';
       nextArticle = ARTICLES[nextIndex];
  }
  return {article:article,preArticle:preArticle,preStyle:preStyle,nextArticle:nextArticle,nextStyle:nextStyle}
}

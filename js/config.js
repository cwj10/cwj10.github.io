/**
 * Created by cwj on 2015/11/19.
 */
 var ARTICLES = [
   {'id':1,'title':'开发规范','description':'开发规范','time':'2015-12-04','path':'android/开发规范.md'},
   {'id':2,'title':'热更新实现','description':'热更新实现','time':'2015-12-04','path':'android/热更新实现.md'},
   {'id':3,'title':'数据缓存','description':'数据缓存','time':'2015-12-04','path':'android/数据缓存.md'},
   {'id':4,'title':'数据解析','description':'数据解析','time':'2015-12-04','path':'android/数据解析.md'},
   {'id':5,'title':'正则表达式','description':'正则表达式','time':'2015-12-04','path':'其他/正则表达式.md'},
   {'id':6,'title':'项目架构','description':'项目架构','time':'2015-12-04','path':'android/项目架构.md','path':'android/项目架构.md'},
   {'id':7,'title':'SharedPreference使用','description':'SharedPreference使用','time':'2015-12-04','path':'android/SharedPreference使用.md'},
   {'id':8,'title':'屏幕适配','description':'屏幕适配','time':'2015-12-08','path':'android/屏幕适配.md'},
   {'id':9,'title':'Android常用网络框架比较','description':'Android常用网络框架比较','time':'2015-12-10','path':'android/Android常用网络框架比较.md'},
   {'id':10,'title':'git常用命令','description':'git常用命令','time':'2016-02-14','path':'android/git常用命令.md'},
   {'id':11,'title':'AsyncTask和Handler的比较','description':'AsyncTask和Handler的比较','time':'2016-02-15','path':'android/AsyncTask和Handler的比较.md'},
   {'id':12,'title':'Android动画','description':'Android动画','time':'2016-02-15','path':'android/Animation.md'},
   {'id':13,'title':'图片处理','description':'图片处理','time':'2016-02-16','path':'android/图片处理.md'},
   {'id':14,'title':'序列化','description':'序列化','time':'2016-02-17','path':'android/序列化.md'}

 ];
ARTICLES = resetArticle();

var DEFAULT_ARTICLE =  {'id':0,'title':'','description':'','time':'','path':'/default.md'}
function getArticleById(id){
  var article = DEFAULT_ARTICLE;
  for (var i in ARTICLES) {
    if (ARTICLES[i].id == id) {
      article = ARTICLES[i];
      break;
    }
  }
  return article;
}
function resetArticle(){
  var data = new Array();
  for (var i = ARTICLES.length-1; i >=0; i--) {
     data.push(ARTICLES[i])
  }
  return data;
}

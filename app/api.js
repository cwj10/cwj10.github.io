import $ from 'jquery';
import Utils from './Utils';

export default {
  getArticleList(callback){
    var page = Utils.getQueryString("page");
    var limit = 5;
    $.ajax({
      type: "get",
      cache:true,
      url:Utils.getPath()+"/data/config.json",
      success: function(data,status){
        var json =  eval(data);
        var len = json.length;
        var total =  Math.ceil(len/limit) ;
        if(!page){
          page = 1;
        }else if(page<= 0 ||page >total){
          window.location.href = Utils.getPath();
          return;
        }
        var start = (page-1)*limit;
        if (start >=len) {
          start = 0;
        }
        var end = start + limit;

        var newData = json.slice(start,end);
        callback(newData,total,page)
      }
    });
  },
  getArticle(callback){
    $.ajax({
        type: "get",
        cache:true,
        url:Utils.getPath()+"/data/config.json",//有数据库时根据id从数据库查询
        success: function(data){
          var json =  eval(data);
          var id = Utils.getQueryString("id");
          var preId;
          var nextId;
          var len = json.length;
          for (var i in json) {
            if(json[i].id == id){
              if(parseInt(i)-1>=0){
                preId = json[parseInt(i)-1].id;
              }
              if(parseInt(i)+1<len){
                nextId = json[parseInt(i)+1].id;
              }
              callback(json[i],preId,nextId);
              break;
            }
          }
        }
    });
  },
  markdownit(path,elementId){
    $.ajax({
        type: "get",
        cache:true,
        url:Utils.getPath(path),//有数据库时从数据库查询
        success: function(data){

          // var converter = new showdown.Converter(); 
          // var result = converter.makeHtml(data);  

          var md = window.markdownit();
          var result = md.render(data);
          document.getElementById(elementId).innerHTML = result;
        }
    });
  }
};

export default {
  getQueryString(name){
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
  },
  getPath(path){
    var url =  window.location.protocol +"//"+ window.location.host;
    if(path)
      url += path;
    console.log(url);
    return url;
  }
}

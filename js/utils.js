/**
 * Created by cwj on 2015/11/19.
 */

var loadData = function(name){
    $.ajax({
        type: "get",
        url:"../data/android/"+name,
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

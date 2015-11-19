/**
 * Created by cwj on 2015/11/19.
 */

var loadData = function(name){
    $.ajax({
        type: "get",
        url:"./data/"+name,
        success: function(data){
            var md = window.markdownit();
            var result = md.render(data);
            document.getElementById('content').innerHTML = result;
        }
    });
}

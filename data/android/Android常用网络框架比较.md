## Android常用网络框架比较
网络操作一般都会使用HttpClient以及HttpConnection这两个包，前者是apache的开源库，后者是android自带的api。既然提到了他们，都二者进行一个比较，谷歌在官方文档已经说明了，建议在2.3以及以上版本使用 HttpConnection。具体原因呢，是因为对2.1和2.2版本，HttpURLConnection有那么几个Bug，所以建议用Apache 的HTTP Client；之后的版本，建议用HttpURLConnection。Apache的HTTP Client比较强大，拥有庞大而灵活的API，这个实现很稳定，并且Bug很少。然而，也就是因为太庞大了，以至于很难在保证兼容性的情况下改进它，故 android 开发团队不应该维护该库而是转投更为轻量级的httpurlconnection。**另外Google在6.0版本里面删除了HttpClient相关API**。

- [volley](https://android.googlesource.com/platform/frameworks/volley/)   
Google官方推出的针对Android平台上的网络通信库，能使网络通信更快，更简单，更健壮，Volley在提供了高性能网络通讯功能的同时，对网络图片加载也提供了良好的支持，完全可以满足简单REST客户端的需求。它的设计目标就是非常适合去进行数据量不大，但通信频繁的网络操作，而对于大数据量的网络操作，比如说下载文件等，Volley的表现就会非常糟糕。
- [android-async-http](https://github.com/loopj/android-async-http)    
 通过AsyncHttpClient类的实例就可以执行网络请求，包括get、put、post、head、delete。并指定一个ResponseHandlerInterface的实例接收请求结果。Google在6.0版本里面删除了HttpClient相关API架。
- [okhttp](https://github.com/square/okhttp)  [retrofit](https://github.com/square/retrofit)    
  OkHttp 相较于其它的实现有以下的优点:  

    1、使用GZIP压缩下载内容，且压缩操作对用户是透明的。
    2、利用响应缓存来避免重复的网络请求。    
    3、当网络出现问题的时候，OKHttp会依然有效，它将从常见的连接问题当中恢复。    
    4、如果你的服务端有多个IP地址，当第一个地址连接失败时，OKHttp会尝试连接其他的地址，这对IPV4和IPV6以及寄宿在多个数据中心的服务而言，是非常有必要的。

    ----
    retrofit是默认使用okhttp  volley也支持okhttp作为其底层通信的部件。retrofit的特点是使用清晰简单的接口，非常方便，而 volley在使用的时候也还简单，不过要使用高级一点的功能需要自己自定义很多东西   
- [androidquery](https://github.com/androidquery/androidquery)
- [AndroidAsync](https://github.com/koush/AndroidAsync)

选用一个框架应该考虑它的执行速度、方便集成、代码整洁、可扩展性。推荐使用框架Volley或者retrofit。

[demo](https://github.com/cwj10/Networking)
## 参考资料
[http://instructure.github.io/blog/2013/12/09/volley-vs-retrofit/](http://instructure.github.io/blog/2013/12/09/volley-vs-retrofit/)    
[http://blog.csdn.net/t12x3456/article/details/9221611](http://blog.csdn.net/t12x3456/article/details/9221611)    
[http://square.github.io/okhttp/](http://square.github.io/okhttp/)    
[http://stackoverflow.com/questions/16902716/comparison-of-android-networking-libraries-okhttp-retrofit-volley#](http://stackoverflow.com/questions/16902716/comparison-of-android-networking-libraries-okhttp-retrofit-volley#)

<%@ page import="java.util.Date" %>
<%--
  Created by IntelliJ IDEA.
  User: liujie
  Date: 2014/12/2
  Time: 14:14
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>WebDemo</title>
  </head>
  <body>
    <div id="uploader" class="wu-example">
        <!--用来存放文件信息-->

        <div class="btns">
            <div id="image">选择文件</div>
        </div>

        <div>
            <img id="picshow" width="200" height="124" src="" />
        </div>

    </div>
  </body>
</html>
<!--引入CSS-->
<link rel="stylesheet" type="text/css" href="css/webuploader.css">
<!--引入JS-->
<script>
    var webRoot = "WebDemo";
</script>
<script type="text/javascript" src="js/jquery-1.10.1.min.js"></script>
<script type="text/javascript" src="js/webuploader.js"></script>
<script type="text/javascript" src="js/index.js"></script>


$(function(){
	fileupload();
});

function fileupload(){
	var uploader = WebUploader.create({
	    auto: true,
	    swf: webRoot + '/web/js/Uploader.swf',
	    server: webRoot + '/web/common/file',
	    fileSingleSizeLimit :  5 * 1024 * 1024,    // 5 M
	    fileVal: "upfile",
	    // 选择文件的按钮。可选。
	    // 内部根据当前运行是创建，可能是input元素，也可能是flash.
	    pick: '#image',
	    // 只允许选择图片文件。
	    accept: {
	        title: 'Images',
	        extensions: 'gif,jpg,jpeg,bmp,png',
	        mimeTypes: 'image/*'
	    }
	});
	uploader.on( 'uploadSuccess', function( file, response ) {
		        var info = eval("("+response._raw+")");
		        if (typeof (info.state) != 'undefined') {
		            if (info.state=='SUCCESS') {
		                $("#picshow").attr("src", webRoot + info.url);
		            } else {
		                alert('上传出错');
		            }
		        } else {
		            alert('上传出错');
		        }          
	   
	});
	uploader.on( 'uploadError', function( file ) {
	    alert('上传出错');
	});
	uploader.on( 'error', function( type ) {
	    if ("F_EXCEED_SIZE"== type){    
	       alert('图片大小不能超过5M！');
	       return;
	    }
	    if ("Q_TYPE_DENIED"== type){
	       alert('文件类型不正确');
	       return;
	    }
	});
}

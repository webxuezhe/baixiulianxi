$.ajax({
  type:'get',//get或post
  url:'',//请求的地址
  data:{},//如果不需要传，则注释掉 请求的参数，a=1&b=2或{a:1,b:2}或者jq中的serialize方法，或者formData收集
  dataType:'json',//text,json,xml,jsonp
  success:function(result){//成功的回调函数
    console.log(result)
  }
})
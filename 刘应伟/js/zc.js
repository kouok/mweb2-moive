// 获取验证码
	$(function(){

// 正则验证手机号
		let input1=document.getElementsByTagName('input')[0];
		let denglu=document.querySelector(".denglu")
		let a=1;
		let shouji=/^1[0-9]{10}$/
		denglu.addEventListener("click",function(){
			if(shouji.test(input1.value)){
				alert("手机号正确");
				a=0;
			}else{
				alert("手机号错误");
				a=1
			}
			// console.log(input1.value)			
})

		$(".yanz").click(function(){
			if(a==0){
				let yanz=document.querySelector(".yanz");
				let num=10;
				// console.log(0);
				let uu=setInterval(function(){
					num--;
					// console.log(num)
					if(num!=0){
						yanz.innerText="验证码还有:"+num;
						$(".yanz").attr("disabled","disabled")
						$(".yanz").css("background","#666")
					}else{
						$(".yanz").val("获取验证码");
						yanz.innerText="获取短信验证码";
						$(".yanz").attr("disabled",false)
						$(".yanz").css("background","#FF9600")
						clearInterval(uu);
					}
				},1000);				
			}else{
				alert("请先输入正确的手机号");
			}

		})
	})

	$(function(){
		let a=1;
		let b=1;
		let input1=document.getElementsByTagName('input')[0];
		let denglu=document.querySelector(".denglu")
		let shouji=/^1[0-9]{10}$/

		let input2=document.getElementsByTagName('input')[1];
		let mima=/[0-9]{6,}$/
		denglu.addEventListener("click",function(){
			// // 正则验证手机号
			if(shouji.test(input1.value)){
				alert("手机号正确");
				a=0;
			}else{
				alert("手机号错误");
				a=1;
			}
			// 正则验证密码
			if(mima.test(input2.value)){
				alert("密码正确");
				b=0;
			}else{
				alert("密码错误");
				b=1;
				console.log(a);console.log(b)
			}	
			if(a==0 && b==0){
				location.href="wd.html";
		}		
		})

	})


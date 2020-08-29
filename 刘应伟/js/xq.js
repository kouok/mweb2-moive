//弹窗
$(function(){
	let oo=document.querySelector('.guige');
	oo.addEventListener("click",function(){
		$(".chu").slideDown();
		$(".zhegai").css("display","block");
	})
let zhegai=document.querySelector('.zhegai');
let cha=document.querySelector('.cha');
	zhegai.addEventListener("click",function(){
		$(".chu").slideUp();
		$(".zhegai").css("display","none");
	})
	cha.addEventListener("click",function(){
		$(".chu").slideUp();
		$(".zhegai").css("display","none");
	})


let gui=document.querySelectorAll(".gui>div");
for(var i=0;i<gui.length;i++){
	gui[i].addEventListener("click",function(){
		// console.log($(this))
		$(this).addClass("on").siblings().removeClass("on");
	})
}
// 价格数量自增自减
let jian=document.querySelector("#jian");
let jia=document.querySelector("#jia");
let inpu=document.querySelector("#inpu");
let ip=document.querySelectorAll(".sanwen>p")[2];
var olan=document.querySelector(".lan");
console.log(ip)
// 事件
	jia.addEventListener("click",function(){
		let a=parseInt(inpu.value);
		inpu.value=a+1;
		// console.log(inpu.value);
		ip.innerText="数量:"+inpu.value+"台";
		olan.innerText="￥"+inpu.value*6988+".00";
	})
	jian.addEventListener("click",function(){
		let a=parseInt(inpu.value);
		if(a>0){
			inpu.value=a-1;
			ip.innerText="数量:"+inpu.value+"台";
			olan.innerText="￥"+inpu.value*6988+".00";
		}
	})
})


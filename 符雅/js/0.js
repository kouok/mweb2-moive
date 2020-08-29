var vm=new Vue({
	    el:"#app",
	    data:{
	        list:{}
	    },
	    methods:{
	        
	    },
	    computed:{
	        
	    },
	    watch:{
	
	    },
	    // 声明周期函数，在创建实例时会自动执行
	    created(){
	        var that=this;
	        // 在这里嵌入ajax代码，通过ajax将数据读取出来，并且放到data中即可
	        console.log(1);
	        //如果使用js的ajax，则可以不导入jquery
	        $.ajax({
	            url:"https://www.imovietrailer.com/superhero/index/carousel/list?qq=947876",  
	            success:function(res){
	                // console.log(res)
	                // console.log(this)
	                // 找到vue的data的list，并且将数据赋值给给它
	                that.list=res;
	            }
	        });
	    }
	});
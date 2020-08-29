$(function(){
	// banner
	Vue.component("banner",{
		props:['lunbo'],
		template:`
				<div id="slideBox" class="slideBox">
				
				            <div class="bd">
				                    <ul id="banner">
				                       <li  v-for="t,i in lunbo" style="display: table-cell; vertical-align: top;">
				                           <a class="pic" href="#"><img :src="t.image"></a>
				                       </li>
				                    </ul>
				            </div>
				             <div class="hd">
				                     <ul>
				                        <li></li>
				                        
				                    </ul>
				             </div>
				        </div>
		`
	});
	//热门超英
	// 热门预告 和 猜你喜欢
	Vue.component("renmcy",{
		props:['rmcy'],
		template:`
			<div class="rmcy">
				<p class="biaoti"><img src="img/ia_100000053.png"><span>热门超英</span></p>
				<ul class="rmcy1">
					<li v-for="t,i in rmcy">
						<p><img :src="t.cover" class="fenm"></p>
						<p class="cutFont fenm2">{{t.name}}</p>
						<p class="fenm3">
							<img src="img/ia_100000092.png">
							<img src="img/ia_100000092.png">
							<img src="img/ia_100000092.png">
							<img src="img/ia_100000092.png">
							<img src="img/ia_100000093.png">
							<span>{{t.score}}</span></p>
					</li>
				</ul>
			</div>	
		`
	});
	// 热门预告 和 猜你喜欢
	Vue.component("renmyg",{
		props:['rmyg','cnxh'],
		template:`
		<!--热门预告-->
			<div class="rmyg">
				<p class="biaoti"><img src="img/ia_100000054.png"><span>热门预告</span></p>
				<ul id="shiping">
						<li v-for="t,i in rmyg">
							<video controls :src="t.trailer" :poster="t.poster" loop="loop">
							</video>	
						</li>
				</ul>
				
				<!-- 猜你喜欢 -->
				<div class="cnxh">
					<p class="biaoti"><img src="img/ia_100000059.png"><span>猜你喜欢</span></p>
					<ul class="cnxh1">
						<li v-for="t,i in cnxh">
							<div class="cnxh2"><img :src="t.cover"></div>
							<div class="cnxh3">
								<h2 class="cutFont">{{t.name}}</h2>
								<p>
									<img src="img/ia_100000092.png">
									<img src="img/ia_100000092.png">
									<img src="img/ia_100000092.png">
									<img src="img/ia_100000092.png">
									<img src="img/ia_100000093.png">
								</p>
								<p>{{t.basicInfo}}</p>
								<p>{{t.releaseDate}}</p>
							</div>
							<div class="cnxh4">
								<p><img src="img/ia_100000094.png" /></p>
								<p>赞一下</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
			
		`
	});
	
	var vm=new Vue({
			el:"#app",
			data:{
				list:[],
				list2:[],
				list3:[],
				list4:[]
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
				console.log(1);
				// banner
				$.ajax({
					 type:"post",
					url:"https://www.imovietrailer.com/superhero/index/carousel/list?qq=947876",  
					success:function(res){
						that.list=res.data;
						console.log(that.list);
					}
				});
				// 热门超英
				$.ajax({  
				            type:"post",
				            url:"https://www.imovietrailer.com/superhero/index/movie/hot?type=superhero&&qq=947876",
				            // success是一个事件属性，当数据获取成功后会自动执行
				            success:function(res){
								that.list2=res.data;
								console.log(that.list2);
				            }
				          
				       });
				//热门预告
				$.ajax({          
					            type:"post",  
					            url:"https://www.imovietrailer.com/superhero/index/movie/hot?type=trailer&&qq=947876",
					            success:function(res){
									that.list3=res.data;
					            }, 
					       });
				// 猜你喜欢
				$.ajax({
				            type:"post",
				            url:"https://www.imovietrailer.com/superhero/index/guessULike?qq=947876",
				            success:function(res){
								that.list4=res.data;
				            }
				           
				       });
			},
			updated()
			{
				TouchSlide({
				         slideCell:"#slideBox",
				         titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
				         mainCell:".bd ul", 
				         effect:"leftLoop", 
				         autoPage:true,//自动分页
				         autoPlay:true //自动播放
				     });
			}
		});
		
		
});
$(function()
{
     // $.trim(); 去掉首尾空格
    // $.each();  for循环

    //jquery 版本的ajax更好用，更简单
    //$.方法名  全局的方法
    //$("css选择器")  对象方法，用来操作html
       $.ajax({
            // 如果获取数据的方式为get,type这一行可省
            // 如果值为get，那么这一行可以省略
            type:"post",
            // 数据源：json的地址
            // 本地的地址："json/school.json"
            // 在线的json地址（接口地址）：https://www.disanping.com/wp-admin/admin-ajax.php?action=getJson&cat=2
            // url:"https://www.disanping.com/wp-admin/admin-ajax.php?action=getJson&cat=1",
            url:"https://www.imovietrailer.com/superhero/index/carousel/list?qq=947876",
            // success是一个事件属性，当数据获取成功后会自动执行
            success:function(res){
                // res相当于JSON.parse(xhr.responseText);
                // console.log(res);
                // 在这里获取了你要的数据后，ajax的工作就完成了，接下来就需要使用JSON解析的知识去解析或处理该数据，并且把它渲染到页面中
                var html = "";
                $.each(res.data,function(i,item)
                {
                
                    // console.log(item.image);
                    html+=`
                            <li style="display: table-cell; vertical-align: top;">
                                <a class="pic" href="#"><img src="${item.image}"></a>
                            </li>
                            `;


                })
                  $("#banner").html(html);
              
            },
            error:function(){
                alert("获取失败，请稍后再试！");
            }

       });

//<!-- 热门超英 -->
		$.ajax({
            // 如果获取数据的方式为get,type这一行可省
            // 如果值为get，那么这一行可以省略
            type:"post",
            // 数据源：json的地址
            // 本地的地址："json/school.json"
            // 在线的json地址（接口地址）：https://www.disanping.com/wp-admin/admin-ajax.php?action=getJson&cat=2
            // url:"https://www.disanping.com/wp-admin/admin-ajax.php?action=getJson&cat=1",
            url:"https://www.imovietrailer.com/superhero/index/movie/hot?type=superhero&&qq=947876",
            // success是一个事件属性，当数据获取成功后会自动执行
            success:function(res){
                // res相当于JSON.parse(xhr.responseText);
                // console.log(res);
                // 在这里获取了你要的数据后，ajax的工作就完成了，接下来就需要使用JSON解析的知识去解析或处理该数据，并且把它渲染到页面中
                var html = "";
                $.each(res.data,function(i,item)
                {
                	//console.log(item);
                	// for(var a=0;a<item.length;a++)
                	// {
                 	  // console.log(item);
                 	   html+=`
	                 	   	<div class="card1">
	                            <img src="${item.cover}" class="img1">
								 <h4 class="cutFont"">${item.name}</h4>

								  <img src="images/ia_100000092.png" style="width:0.2rem">
					                    <img src="images/ia_100000092.png" style="width:0.2rem">
					                    <img src="images/ia_100000092.png" style="width:0.2rem">
					                    <img src="images/ia_100000092.png" style="width:0.2rem">
					                    <img src="images/ia_100000093.png" style="width:0.2rem">
								 		<span>&emsp;</span><span>${item.score}</span>
							</div>
						
                            `;

                })
                      // }
                  $("#hot").html(html);
              
            },
            error:function(){
                alert("获取失败，请稍后再试！");
            }

       });

// <!--热门预告 -->
	$.ajax({
            // 如果获取数据的方式为get,type这一行可省
            // 如果值为get，那么这一行可以省略
            type:"post",
            // 数据源：json的地址
            // 本地的地址："json/school.json"
            // 在线的json地址（接口地址）：https://www.disanping.com/wp-admin/admin-ajax.php?action=getJson&cat=2
            // url:"https://www.disanping.com/wp-admin/admin-ajax.php?action=getJson&cat=1",
            url:"https://www.imovietrailer.com/superhero/index/movie/hot?type=trailer&&qq=947876",
            // success是一个事件属性，当数据获取成功后会自动执行
            success:function(res){
                // res相当于JSON.parse(xhr.responseText);
                // console.log(res);
                // 在这里获取了你要的数据后，ajax的工作就完成了，接下来就需要使用JSON解析的知识去解析或处理该数据，并且把它渲染到页面中
                var html = "";
                $.each(res.data,function(i,item)
                {
                	//console.log(item);
            
                 	   //console.log(item.poster);
                 	   html+=`
	                 	   	<div class="m1">
	                 	   		<video controls src="${item.trailer}" poster="${item.poster}" loop="loop">
	                 	   		</video>	
	                 	   	</div>
                 	   			`;
                    ;

                })
                      // }
                  $("#moive").html(html);
              
            },
            error:function(){
                alert("获取失败，请稍后再试！");
            }

       });
//猜你喜欢
		$.ajax({
            // 如果获取数据的方式为get,type这一行可省
            // 如果值为get，那么这一行可以省略
            type:"post",
            // 数据源：json的地址
            // 本地的地址："json/school.json"
            // 在线的json地址（接口地址）：https://www.disanping.com/wp-admin/admin-ajax.php?action=getJson&cat=2
            // url:"https://www.disanping.com/wp-admin/admin-ajax.php?action=getJson&cat=1",
            url:"https://www.imovietrailer.com/superhero/index/guessULike?qq=947876",
            // success是一个事件属性，当数据获取成功后会自动执行
            success:function(res){
                // res相当于JSON.parse(xhr.responseText);
                // console.log(res);
                // 在这里获取了你要的数据后，ajax的工作就完成了，接下来就需要使用JSON解析的知识去解析或处理该数据，并且把它渲染到页面中
                var html = "";
                $.each(res.data,function(i,item)
                {
                	//console.log(item);
            
                 	   console.log(item);
                 	   html+=`  
                 	   	<div class="likeMain1">
					               <div><img src="${item.cover}" style="width:2rem"></div>
					                <div style="width:2.6rem;">
					                    <h2>${item.name}</h2>
					                    <img src="images/ia_100000092.png" style="width:0.2rem">
					                    <img src="images/ia_100000092.png" style="width:0.2rem">
					                    <img src="images/ia_100000092.png" style="width:0.2rem">
					                    <img src="images/ia_100000092.png" style="width:0.2rem">
					                    <img src="images/ia_100000093.png" style="width:0.2rem">
					                    <p>${item.basicInfo}</p>
					                    <p>${item.releaseDate}</p>
					                    
					                </div>

					                <div class="hr1"></div>

					                <div>
					                     <img src="images/ia_100000094.png" style="width:0.4rem">
					                    <p>赞一下</p>
					                </div>
					         </div>
	                 	   
                 	   			`;
                    

                })
                      // }
                  $(".likeMain").html(html);
              
            },
            error:function(){
                alert("获取失败，请稍后再试！");
            }

       });

// banner
           TouchSlide({ 
            slideCell:"#slideBox",
            titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
            mainCell:".bd ul", 
            effect:"leftLoop", 
            autoPage:true,//自动分页
            autoPlay:true //自动播放
        });
})
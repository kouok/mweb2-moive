$(function() {

	// 获取轮播图突破
	Vue.component("index-banner", {
		props: ["list"],
		data() {
			return {}
		},
		methods: {},
		template: `
			<div class="row">
				<div class="col p-0">
					<div id="slideBox" class="slideBox">
						<div class="bd">
							<ul>
								<li v-for="item,i in list.data" v-if="i<5">
									<a class="pic" href="#"><img :src="item.image"/></a>
								</li>
							</ul>
						</div>
						<div class="hd">
							<ul>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			 `
	});

	// 热门影音
	Vue.component("index-hotmu", {
		props: ["hotmu"],
		data() {
			return {}
		},
		methods: {},
		template: `
			<div class="row pb-1">
				<div class="col hotmu p-0">
					<div v-for="item,i in hotmu.data" v-if="i<5">
						<a style="color:#000; " :href="item.trailer">
							<img style="width: 2.6rem;" :src="item.cover" alt="加载失败">
							<h6 class="cutFont">{{item.name}}</h6>
							<img style="width: 0.3rem;" src="images/ia_100000092.png" alt="加载失败" v-for="i in parseInt(item.score/2)">
							<img style="width: 0.3rem;" class="img-l" src="images/ia_100000093.png" alt="加载失败" v-for="i in 5-parseInt(item.score/2)">
							<span>{{item.score}}</span>
						</a>
					</div>
				</div>
			</div>
			 `
	});

	//热门预告
	Vue.component("index-mv", {
		props: ["mv"],
		data() {
			return {}
		},
		methods: {},
		template: `
			<div class="row pb-1 mv">
				<div class="col-6" v-for="item,i in mv.data" v-if="i<2">
					<a :href='item.trailer'>
						<video id="vm" class="img-fluid" :poster="item.poster">
							<source :src="item.trailer">
						</video>
					</a>
				</div>
			</div>
			 `
	});

	//猜你喜欢
	Vue.component("index-lv", {
		props: ["lv"],
		data() {
			return {}
		},
		methods: {},
		template: `
			<div class="row pb-1">
				<div class="col-12">
					<div class="container-fluid lv">
						<a style="color:#d4d4d4" v-for="item,i in lv.data" :href="item.trailer" >
								<div class="row">
									<div class="col-4">
										<img :src="item.cover">
									</div>
									<div class="col-5">
										<h4 class="cutFont">{{item.name}}</h4><br>
										<img style="width: 0.3rem;" src="images/ia_100000092.png" alt="加载失败" v-for="i in parseInt(item.score/2)">
										<img style="width: 0.3rem;" class="img-l" src="images/ia_100000093.png" alt="加载失败" v-for="i in 5-parseInt(item.score/2)">
										<p>{{item.basicInfo}}<br><br></p>
									</div>
									<div class="col-3">
										<div>
										<img src="images/ia_100000094.png">
										<h5>赞一下</h5>
										</div>
									</div>
								</div>
						</a>
					</div>
				</div>
			</div>
			 `
	});

	var vm = new Vue({
		el: "#app",
		data: {
			list: {},
			hotmu: {},
			mv: {},
			lv: {}
		},
		created() {
			var that = this;
			$.ajax({
				type: "post",
				url: "https://www.imovietrailer.com/superhero/index/carousel/list?qq=947876",
				success: function(res) {
					that.list = res
				},
				error: function() {
					alert("获取失败，请稍后再试！");
				},
			});

			$.ajax({
				type: "post",
				url: "https://www.imovietrailer.com/superhero/index/movie/hot?type=superhero&&qq=947876",
				success: function(res) {
					that.hotmu = res
				},
				error: function() {
					alert("获取失败，请稍后再试！");
				}
			});

			$.ajax({
				type: "post",
				url: "https://www.imovietrailer.com/superhero/index/movie/hot?type=trailer&&qq=947876",
				success: function(res) {
					that.mv = res
				},
				error: function() {
					alert("获取失败，请稍后再试！");
				}
			});

			$.ajax({
				type: "post",
				url: "https://www.imovietrailer.com/superhero/index/guessULike?qq=947876",
				success: function(res) {
					that.lv = res
				},
				error: function() {
					alert("获取失败，请稍后再试！");
				}
			});
		},
		updated() {
			TouchSlide({
				slideCell: "#slideBox",
				titCell: ".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
				mainCell: ".bd ul",
				effect: "leftLoop",
				autoPage: true, //自动分页
				autoPlay: true //自动播放
			});
		}
	});
	/* $.ajax({
		type: "post",
		url: "https://www.imovietrailer.com/superhero/index/carousel/list?qq=947876",
		success: function(res) {
			// console.log(res);
			var html = "";
			$.each(res, function(index, item) {
				html = "";
				for (var a = 0; a < res.data.length; a++) {
					html +=
						`<li>
							<a class="pic" href="#"><img src="${res.data[a].image}" /></a>
						</li>`;
					if (a >= 5) {
						break;
					}
				}
			});
			$(".bd").find("ul").html(html);
		},
		error: function() {
			alert("获取失败，请稍后再试！");
		}
	}); */

	/* $.ajax({
		type: "post",
		url: "https://www.imovietrailer.com/superhero/index/movie/hot?type=superhero&&qq=947876",
		success: function(res) {
			var con;
			$.each(res, function(index, time) {
				html = "";
				for (var i = 0; i < res.data.length; i++) {
					if (i >= 5) {
						break;
					}
					html +=
						`
						<div>
							<a style="color:#000; " href="${res.data[i].trailer}">
								<img style="width: 2.6rem;" src="${res.data[i].cover}" alt="加载失败">
								<h6 class="cutFont">${res.data[i].name}</h6>`;
					con = parseInt(res.data[i].score / 2);
					for (var j = 0; j < con; j++) {
						html += `<img style="width: 0.3rem;" src="images/ia_100000092.png" alt="加载失败">`;
					}
					for (var j = 0; j < 5 - con; j++) {
						html += `<img style="width: 0.3rem;" src="images/ia_100000093.png" alt="加载失败">`;
					}
					html += `<span>${res.data[i].score}</span></a></div>`;
				}
			});
			$(".hotmu").html(html);
		},
		error: function() {
			alert("获取失败，请稍后再试！");
		}
	}); */

	//热门预告
	/* $.ajax({
		type: "post",
		url: "https://www.imovietrailer.com/superhero/index/movie/hot?type=trailer&&qq=947876",
		success: function(res) {
			$.each(res, function(index, time) {
				html = "";
				for (var i = 0; i < res.data.length; i++) {
					if (i >= 2) {
						break;
					}
					html +=
						`<div class="col-6">
							<a href='${res.data[i].trailer}'>
								<video id="vm"  class="img-fluid" poster="${res.data[i].poster}">
									<source src="${res.data[i].trailer}">
								</video>
							</a>
						</div>`
				}
			})
			$(".mv").html(html);
		},
		error: function() {
			alert("获取失败，请稍后再试！");
		}
	}); */

	//猜你喜欢
	/* $.ajax({
		type: "post",
		url: "https://www.imovietrailer.com/superhero/index/guessULike?qq=947876",
		success: function(res) {
			// console.log(res);
			$.each(res, function(index, time) {
				html = "";
				for (var i = 0; i < res.data.length; i++) {
					html +=
						`<a style="color:#d4d4d4" href="${res.data[i].trailer}">
								<div class="row">
									<div class="col-4">
										<img src="${res.data[i].cover}">
									</div>
									<div class="col-5">
										<h4 class="cutFont">${res.data[i].name}</h4>`;
					con = parseInt(res.data[i].score / 2);
					for (var j = 0; j < con; j++) {
						html += `<img style="width: 0.3rem;" src="images/ia_100000092.png" alt="加载失败">`;
					}
					for (var j = 0; j < 5 - con; j++) {
						html += `<img style="width: 0.3rem;" src="images/ia_100000093.png" alt="加载失败">`;
					}
					html +=
						`		<p>${res.data[i].basicInfo}<br><br></p>
										<p>${res.data[i].releaseDate}</p>
									</div>
									<div class="col-3">
										<img src="images/ia_100000094.png">
										<h5>赞一下</h5>
									</div>
								</div>
							</a>`
				}
			})
			$(".lv").html(html);
		},
		error: function() {
			alert("获取失败，请稍后再试！");
		}
	}); */
});

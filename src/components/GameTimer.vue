<template>
	<div class="content">
		<div class="circle-box">
			<div v-for="n in 60" v-bind:id="['item'+n]" class='item'>{{n}}</div>
			<!-- <div class="item_center" v-on:click="toggleClock"></div> -->
			<img src="../img/idol.png" v-on:click="toggleClock" class="item_center">
		</div>
</div>
</template>

<script>
	var default_time = 60;
	export default {
  name: 'GameTimer',
  data () {
    return {
			time: default_time,
			clockMethod:null,
    }
  },
	methods:{
		toggleClock: function(){
			this.resetClock();
			this.clockMethod = setInterval(()=>this.viewTimer(), 1000);
		},
		resetClock: function(){
			clearInterval(this.clockMethod);
			this.clockMethod = null;
			this.time = default_time;
		},
		viewTimer: function(){
			const timer = this.time;
			this.time = timer-1;

			$('#item'+timer).addClass('appear');
			$('#item'+(timer+1)).removeClass('appear');
			if(this.time == 0) this.resetClock();
		},
	},
	computed:{
	},
  created:function(){
	},
}


$(document).ready(function(){
  $(window).mousemove(function(){
			//console.log(event.clientX);
			//console.log(event.clientY);
			//206,328
  });
});

$(function(){
		const popup = $('div.circle-box');
    var item_num = $('div.item').length;
		//円周角
    var deg = 360.0/item_num;
		//半円で考える
    //var deg = deg / 2;
		//ラジアンにする
    var radian = deg * (Math.PI/180.0);
		//var radian = radian * (-1) / 2;
		//半径
    var rad = $(window).width() / 2.5;
		//中央の点の座標
		//var centerX = parent.offset().left + ( parent.width() / 2 );
		//var centerY = parent.offset().top + ( parent.height() / 2 );
		var centerX = $(window).width() / 2 -16;
		var centerY = $(window).height() / 2 -16;
		console.log(centerX);
		console.log(centerY);
    $('div.item').each(function(i, elem) {
        var x = centerX + Math.cos(radian * i) * rad;
        var y = centerY + Math.sin(radian * i) * rad;
		//console.log('id:'+i+', x;'+x);
		//console.log('id:'+i+', rad;'+radian*i);
		$("img.item_center").bind("load",function(){
			const img_height = $(this).height();
			const img_width = $(this).width();
        $(elem).css('left', x);
        $(elem).css('top', y);
				const item_centerX = centerX - (img_width/ 2) +16;
				const item_centerY = centerY - (img_height / 2);
        $('.item_center').css('width', 300);
        $('.item_center').css('left', item_centerX);
        $('.item_center').css('bottom', item_centerY);
		});
    });

});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}

.idol{
	transition:1s;
	transform:rotateY(360deg);
}

#idol{
	width : 60vh;
	height : auto;
}

.circle2{
    width: 80vh;
    height: 80vh;
		/*heightとline-heightを一致させると中央*/
		line-height:80vh;

		font-size:5vw;
		color:white;
		font-family:"Arial Black";

    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
		border: 50px solid #FEAE00;
}

.circle-box {
	position:relative;
    margin: 0 auto;
		background-image:url('../img/background.png');
		height:100vh;
}
div.item {
    position: absolute;
		/*
		display:none;
		*/
		display:block;
    width: 10vw;
    height: 10vw;
		/*heightとline-heightを一致させると中央*/
		line-height:10vw;

		font-size:5vw;
		color:white;
		font-family:"Arial Black";

    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    background-color: #FEAE00;
}
div#item1{
	display:block;
}
/*
.item:after{
  content: "";
  position: absolute;
  right: 0;
  bottom: 10px;
  left: -10vw;
  width: 0px;
  height: 0px;
  margin: auto;
  border-style: solid;
  border-color: #FEAE00 transparent transparent transparent;
  border-width: 3vw 20px 0 20px;
	transform: rotate(75deg);
}
*/
div.appear{
	display:block!important;

}
.item_center {
	position: absolute;
    width: 200px;
    height: auto;
}
 
@keyframes img_box_9955 {
  0% { transform: translateY(0) }
  33.33333% { transform: translateY(-10px) }
  66.66667% { transform: translateY(0) }
  100% { transform: translateY(0) }
}
div.spin{
	transform:rotateY(360deg);
	transition:1s;

}
		.float{
		animation: img_box_9955 3s linear infinite;
		transform-origin: 50% 50%;
		}
		div.content{
		background-image:url('../img/background.png');
		}

		body{
		}


</style>

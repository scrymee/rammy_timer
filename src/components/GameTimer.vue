<template>
	<div class="content">
				{{this.time}}
	<div class="timer" style="background:red;">
	<section class="main-contents">
		<section class="circle-box">
			<div v-for="n in 60" v-bind:id="['item'+n]" class='item'>{{n}}</div>
			<div class="item_center"v-on:click="toggleClock"></div>
		</section>
	</section>
	</div>
</div>
</template>

<script>
	var default_time = 60;
	export default {
  name: 'GameTimer',
	//data()の中身は、Viewに返す値
  data () {
    return {
			time: default_time,
			clockMethod:null,
    }
  },
	methods:{
		toggleClock: function(){
			this.resetClock();
			this.startClock();
		},
		startClock: function(){
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
			if(this.time == 0) this.stopClock();
		},
	},
	computed:{
	},
  created:function(){
			console.log('hoge');
	},
}




$(function(){
    var item_num = $('div.item').length;
		//円周角
    var deg = 360.0/item_num;
		//半円で考える
    var deg = deg / 2;
		//ラジアンにする
    var radian = (deg*Math.PI/180.0);
		var radian = radian * (-1);
		//半径
    var rad = 250;
		//中央の点の座標
		var centerX = rad;
		var centerY = rad;
    $('div.item').each(function(i, elem) {
        var x = centerX + Math.cos(radian * i) * rad ;
        var y = centerY + Math.sin(radian * i) * rad ;
        $(elem).css('left', x);
        $(elem).css('top', y);
    });
		$('div.item_center').css('left',rad);
		$('div.item_center').css('top',rad);
		$('div.item_center').css('margin-left',-50);
		$('div.item_center').css('margin-top',-150);

});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
	--square :calc(100vmin - 10vmin);
	width: var(--square);
	height: var(--square);
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	margin: auto;
	background-color:#FFD580;
	line-height:var(--square);
}


.clock{
	font-size:100px;
	color:#fff;
	font-family:sans-serif;

}


h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.idol{
	transition:1s;
	transform:rotateY(360deg);
}

.main-contents {
    position: relative;
    width: 100%;
}
.circle-box {
    position: relative;
    margin: 0 auto;
}
div.item {
    position: absolute;
		display:none;
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
div#item40{
	display:block;
}
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
div.appear{
	display:block!important;

}
div.item_center {
    position: absolute;
    width: 200px;
    height: 300px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
		background-image:url('../img/idol.png');
		background-size: contain;
		background-repeat:  no-repeat; 
  animation: img_box_9955 3s linear infinite;
  transform-origin: 50% 50%;
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
</style>

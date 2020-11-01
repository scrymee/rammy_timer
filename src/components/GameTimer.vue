<style>
body{
	margin :0!important;
}

.title{
	font-size : 10vw;
	color : #666;
	font-weight: bold;
	font-family: 'ヒラギノ角ゴ StdN','Hiragino Kaku Gothic StdN','ヒラギノ角ゴシック','Hiragino Sans',sans-serif;
}

.fukidashi_area{
}
#photos {
   /* Prevent vertical gaps */
   line-height: 0;
   -webkit-column-count: 4;
   -webkit-column-gap:   0px;
   -moz-column-count:    4;
   -moz-column-gap:      0px;
   column-count:         4;
   column-gap:           0px;
 
}
#photos div {
  /* Just in case there are inline attributes */
  /*width: 100% !important;*/
  height: auto !important;
}
div.fukidashi{
	/*visibility:hidden;*/
	visibility:hidden;
	display:inline-block;
	position:relative;
	--height: 20vw ;
	width: 25vw;
	height: var(--height);
	line-height:var(--height);

	font-size:8vw;
	color:white;
	font-family:"Arial Black";

	-webkit-border-radius: 50%;
	-moz-border-radius: 50%;
	border-radius: 50%;
	background-color: #FEAE00;
}
div.fukidashi:after{
  content: "";
  position: absolute;
  width: 0px;
  height: 0px;
  margin: auto;
  border-style: solid;
  border-color: #FEAE00 transparent transparent transparent;
  border-width: 3vw 20px 0 20px;
}
div.fukidashi1{
	margin-left:2vw;
	margin-top:5vh;
}
div.fukidashi1:after{
  right: 0;
  bottom: 0px;
  left: 10vw;
	transform: rotate(75deg);
}
div.fukidashi2{
	margin-top:3vh;
}
div.fukidashi2:after{
  right: 0;
  bottom: 0px;
  left: 5vw;
	transform: rotate(95deg);
}
div.fukidashi3{
	margin-top:1vh;
}
div.fukidashi3:after{
  right: 0;
  bottom: -1vw;
  left: -5vw;
	transform: rotate(125deg);
}
div.fukidashi4{
	margin-top:7vh;
	margin-left:0;
}
div.fukidashi4:after{
  right: 0;
  bottom: 1vw;
  left: -15vw;
	transform: rotate(175deg);
}
</style>
<template>
	<div class="content" v-on:click="toggleClock">
		<div class="none">
			<!-- {{this.time}}                    -->
			<!-- {{this.isStart}}                 -->
			<!-- <p>{{this.fukidashi.hidden}}</p> -->
			<!-- <p>{{this.fukidashi.appear}}</p> -->
			<div class="fukidashi_area" id="photos">
				<div class="fukidashi fukidashi1">{{this.time}}</div>
				<div class="fukidashi fukidashi2">{{this.time}}</div>
				<div class="fukidashi fukidashi3">{{this.time}}</div>
				<div class="fukidashi fukidashi4">{{this.time}}</div>
			</div>
			<div class="none">
				<img src="../img/idol.png" class="idol float" id="idol">
			</div>
			<span class="title">RAMMY TIMER</span>
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
			isStart: false,
			fukidashi:{
					appear:null,
					hidden:[
							"fukidashi1",
							"fukidashi2",
							"fukidashi3",
							"fukidashi4",
						],
				}
    }
  },
	methods:{
		toggleClock: function(){
		if(!this.isStart) this.isStart = true;
			//if(this.isStart) $('#idol').css({'transform':'rotateY(-360deg)'});
			$('#idol').toggleClass('spin');
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
				const hidden_fukidashi = this.fukidashi.hidden;
				//新しく表示させるやつを選ぶ。
				const new_appear_fukidashi = hidden_fukidashi[Math.floor( Math.random() * hidden_fukidashi.length )];
				var index = hidden_fukidashi.indexOf(new_appear_fukidashi);
				if (index > -1) hidden_fukidashi.splice(index, 1);
				console.log(hidden_fukidashi);
				$('.'+this.fukidashi.appear).toggleClass('appear');
				//今まで使っていたやつを消す
				console.log(this.fukidashi.appear)
				if(!this.fukidashi.appear){
				$('.'+new_appear_fukidashi).toggleClass('appear');
				this.fukidashi.appear = new_appear_fukidashi;
				this.fukidashi.hidden = hidden_fukidashi
					}else{
				this.fukidashi.hidden.push(this.fukidashi.appear);
				this.fukidashi.appear = new_appear_fukidashi;
				$('.'+new_appear_fukidashi).toggleClass('appear');
				this.fukidashi.hidden = hidden_fukidashi
						}


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

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}

.idol{
	transition:1s;
	/*transform:rotateY(360deg)*/;
}
.spin{
	transform:rotateY(-360deg);
}

#idol{
	width : 50vh;
	height : auto;
}

.circle{
	display:inline-block;
    width: 60vh;
    height: 60vh;
		/*heightとline-heightを一致させると中央*/
		line-height:80vh;

		font-size:5vw;
		color:white;
		font-family:"Arial Black";

    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
		border: 20px solid #FEAE00;
}

.content {
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
	visibility:visible;

}
 
@keyframes img_box_9955 {
  0% { transform: translateY(0) }
  33.33333% { transform: translateY(-10px) }
  66.66667% { transform: translateY(0) }
  100% { transform: translateY(0) }
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

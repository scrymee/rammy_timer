
<template>
  <div id="app">
		<p>私のホームページです</p>
  <!--   <img src="./assets/logo.png">       -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
};
//ここは各コンポーネントを繋ぐためのページ
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* #app {
  font-family: 'Sen-Regular', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
} */

@font-face {
  font-family: 'Sen-Regular';
  src: url('./assets/fonts/Sen/Sen-Regular.ttf');
}

@font-face {
  font-family: 'Sen-Bold';
  src: url('./assets/fonts/Sen/Sen-Bold.ttf');
}

@font-face {
  font-family: 'Sen-ExtraBold';
  src: url('./assets/fonts/Sen/Sen-ExtraBold.ttf');
}


</style>

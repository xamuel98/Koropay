<template>
  <div id="app" class="scroller">
    <router-view/>
  </div>
</template>

<script>
import Scrollbar from 'smooth-scrollbar';

export default {
    name: 'App',
    mounted() {
        // let bodyScrollBar = Scrollbar.init(document.body, {
        //     damping: 0.1,
        //     delegateTo: document,
        // });
        // ScrollTrigger.scrollerProxy(".scroller", {
        //     scrollTop(value) {
        //         if (arguments.length) {
        //             bodyScrollBar.scrollTop = value;
        //         }
        //         return bodyScrollBar.scrollTop;
        //     },
        // });

        // // update ScrollTrigger when scrollbar updates
        // bodyScrollBar.addListener(ScrollTrigger.update);
    }
}
</script>

<style>
/* #app {
  font-family: 'Sen-Regular', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
} */

.scroller {
  height: 100vh;
}

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

<template>
    <div>
        <app-navbar></app-navbar>
        <section class="how-video container slice pt-8 pb-5">
            <div class="container position-relative">
                <div class="row justify-content-center align-items-center">
                    <div class="col-md-12 col-lg-11 col-xl-10 text-center hiw">
                        <h1 class="ff__sb mb-5">Find out how our customers are accessing their wage in real-time</h1>
                    </div>
                </div>
                <div class="video-gif d-flex justify-content-center">
                    <video
                        class=""
                        muted loop 
                        poster='image-poster' 
                        crossorigin="anonymous"
                        autoplay
                    >
                        <source src="@/assets/video.mp4" type="video/mp4">
                        <p>Your browser doesn't support HTML5 video. Here is a 
                            <router-link to="/">link to the video</router-link> instead.
                        </p>
                    </video>
                </div>
            </div>
        </section>
        <app-footer></app-footer>
    </div>
</template>

<script>
import {gsap, ScrollTrigger} from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);

export default {
    methods: {
        startAnimations() {
            let tl = new TimelineMax({onUpdate: updatePercentage})

            tl.to(".video-gif video", 1, {width: "70%", height: "70%"}, 0)
            tl.to(".video-gif video", 1, {width: "65%", height: "65%", transition: ".3s all" }, 3)

            const scene = this.$scrollmagic.scene({
                triggerElement: '.video-gif',
                triggerHook: 0,
                duration: "300%"
            })
            .setTween(tl)

            this.$scrollmagic.addScene(scene)

            function updatePercentage() {
                tl.progress()
            }
        },
    },
    mounted() {
        this.startAnimations()
        document.body.style.overflow = 'auto'
    }
}
</script>

<style>

</style>
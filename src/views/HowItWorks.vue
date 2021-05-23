<template>
    <div class="scroller">
        <app-navbar></app-navbar>
        <section class="how-video container pt-8 pb-5">
            <div class="container position-relative">
                <div class="row justify-content-center align-items-center">
                    <div class="col-md-12 col-lg-11 col-xl-10 text-center hiw">
                        <h1 class="ff__sb mb-5">Find out how our customers are accessing their wage in real-time</h1>
                    </div>
                </div>
                <div class="video-gif d-flex justify-content-center position-relative">
                    <video
                        class=""
                        muted loop 
                        playsinline
                        poster='image-poster' 
                        crossorigin="anonymous"
                        autoplay
                    >
                        <source src="@/assets/video.mp4" type="video/mp4">
                        <p>Your browser doesn't support HTML5 video. Here is a 
                            <router-link to="/">link to the video</router-link> instead.
                        </p>
                    </video>
                    <button class="d-flex align-items-center video-play-button" style="opacity: 1; visibility: inherit;">
                        <span class="d-flex justify-content-center align-items-center mr-2 mr-lg-3 video-play-icon">
                            <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.48285 11.5548C1.67214 11.6494 1.86144 11.681 2.05073 11.681C2.27158 11.681 2.52398 11.6179 2.71327 11.4601L9.08623 7.10631C9.40172 6.88546 9.59102 6.50687 9.59102 6.12828C9.59102 5.74969 9.40173 5.37109 9.05468 5.15025L2.68172 0.922641C2.30313 0.670246 1.86144 0.670246 1.4513 0.859542C1.07271 1.08039 0.820312 1.45898 0.820312 1.90067V10.4821C0.851862 10.9553 1.07271 11.3655 1.48285 11.5548Z" fill="#403E3D"></path>
                            </svg>
                        </span>
                        Watch Now
                    </button>
                </div>
            </div>
        </section>
        <section class="steps app-steps py-6 bg-section-secondary">
            <div class="container postion-relative">
                <div class="row justify-content-start align-items-center mb-5">
                    <div class="col-lg-6">
                        <h1 class="ff__sb">
                            Get acquinted with Koropay in 4 simple steps
                        </h1>
                    </div>
                </div>
                <div class="row justify-content-center align-items-center">
                    <div class="col-12 col-lg-6 mb-4">
                        <div class="step-wrapper step-1">
                            <h4 class="step-number">1</h4>
                            <h3 class="ff__sb step-title">Sign up</h3>
                            <p class="step-text">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum hic iure quisquam ducimus pariatur. Maiores, quos accusamus. Eaque, consectetur quas.
                            </p>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 mb-4">
                        <div class="step-wrapper step-2">
                            <h4 class="step-number">2</h4>
                            <h3 class="ff__sb step-title">Request and receive</h3>
                            <p class="step-text">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum hic iure quisquam ducimus pariatur. Maiores, quos accusamus. Eaque, consectetur quas.
                            </p>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 mb-4 mb-lg-0">
                        <div class="step-wrapper step-3">
                            <h4 class="step-number">3</h4>
                            <h3 class="ff__sb step-title">Repay and repeat</h3>
                            <p class="step-text">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum hic iure quisquam ducimus pariatur. Maiores, quos accusamus. Eaque, consectetur quas.
                            </p>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 mb-lg-0">
                        <div class="step-wrapper step-4">
                            <h4 class="step-number">4</h4>
                            <h3 class="ff__sb step-title">Repay and repeat</h3>
                            <p class="step-text">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum hic iure quisquam ducimus pariatur. Maiores, quos accusamus. Eaque, consectetur quas.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="benefits-sec py-6">
            <div class="container">
                <div class="row justify-content-start align-items-center mb-5">
                    <div class="col-lg-6">
                        <h1 class="ff__sb">
                            More benefits of using koropay
                        </h1>
                    </div>
                </div>
                <div class="row justify-content-center align-items-center">
                    <div class="col-12 col-lg-4 mb-4">
                        <div class="grid-item">
                            <div class="square d-flex align-items-center justify-content-center" style="background-color: #e3f7fc;">
                                <div class="emoji-wrapper">
                                    <!-- <img data-src="" alt="Emoji of girl raising hand" class="lazy lazy-active" src="" /> -->
                                </div>
                            </div>
                            <h2 class="ff__sb my-4">Lorem, ipsum dolor.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, quibusdam?</p>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4 mb-4">
                        <div class="grid-item">
                            <div class="square d-flex align-items-center justify-content-center" style="background-color: #e3f7fc;">
                                <div class="emoji-wrapper">
                                    <!-- <img data-src="" alt="Emoji of girl raising hand" class="lazy lazy-active" src="" /> -->
                                </div>
                            </div>
                            <h2 class="ff__sb my-4">Lorem, ipsum dolor.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, quibusdam?</p>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4 mb-4">
                        <div class="grid-item">
                            <div class="square d-flex align-items-center justify-content-center" style="background-color: #e3f7fc;">
                                <div class="emoji-wrapper">
                                    <!-- <img data-src="" alt="Emoji of girl raising hand" class="lazy lazy-active" src="" /> -->
                                </div>
                            </div>
                            <h2 class="ff__sb my-4">Lorem, ipsum dolor.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, quibusdam?</p>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4 mb-4">
                        <div class="grid-item">
                            <div class="square d-flex align-items-center justify-content-center" style="background-color: #e3f7fc;">
                                <div class="emoji-wrapper">
                                    <!-- <img data-src="" alt="Emoji of girl raising hand" class="lazy lazy-active" src="" /> -->
                                </div>
                            </div>
                            <h2 class="ff__sb my-4">Lorem, ipsum dolor.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, quibusdam?</p>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4 mb-4">
                        <div class="grid-item">
                            <div class="square d-flex align-items-center justify-content-center" style="background-color: #e3f7fc;">
                                <div class="emoji-wrapper">
                                    <!-- <img data-src="" alt="Emoji of girl raising hand" class="lazy lazy-active" src="" /> -->
                                </div>
                            </div>
                            <h2 class="ff__sb my-4">Lorem, ipsum dolor.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, quibusdam?</p>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4 mb-4">
                        <div class="grid-item">
                            <div class="square d-flex align-items-center justify-content-center" style="background-color: #e3f7fc;">
                                <div class="emoji-wrapper">
                                    <!-- <img data-src="" alt="Emoji of girl raising hand" class="lazy lazy-active" src="" /> -->
                                </div>
                            </div>
                            <h2 class="ff__sb my-4">Lorem, ipsum dolor.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, quibusdam?</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="faqs py-6 bg-section-secondary">
            <div class="container">
                <div class="row justify-content-center-align-items-center">
                    <div class="col-md-6 sidebar mb-5 mb-lg-0">
                        <h1 class="ff__sb mb-4">
                            Have you got questions? We've got answers
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere maxime libero ullam. Amet dolorem eius neque nulla voluptatibus praesentium sunt? Repudiandae laudantium et, alias eius fuga vel ratione delectus sit?
                        </p>
                    </div>
                    <div class="col-md-6">
                        <div class="row justify-content-center align-items-center">
                            <div class="col-md-12 faqs__single-question" v-for="n in 5" :key="n">
                                <blockquote class="faqs__single-question-content">
                                    <div class="d-flex justify-content-between">
                                        <h4 class="ff__sb mr-3">Q: </h4>
                                        <h4 class="ff__sb">What identification documents do you accept?</h4>
                                    </div>
                                    <div class="d-flex justify-content-between mt-4">
                                        <h4 class="ff__sb mr-3">A: </h4>
                                        <p class="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam nesciunt officia optio iste voluptates alias.</p>
                                    </div>
                                </blockquote>
                            </div>
                            <router-link :to="{name: 'FAQs'}" class="more--testimonial-link">
                                <span class="more--testimonial-link-text">
                                    Read more FAQs
                                </span>
                                <svg class="icon" width="35" height="35" viewBox="0 0 32 32" aria-hidden="true">
                                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                                        <circle cx="16" cy="16" r="15.5"></circle>
                                        <line x1="10" y1="18" x2="16" y2="12"></line>
                                        <line x1="16" y1="12" x2="22" y2="18"></line>
                                    </g>
                                </svg>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="container download-app py-6">
            <div class="container bg__primary position-relative py-5">
                <div class="scroll text1">
                    <div>
                        Koropay Koropay Koropay Koropay
                    </div>
                    <div>
                        Koropay Koropay Koropay Koropay
                    </div>
                </div>
                <div class="scroll text2">
                    <div>
                        Koropay Koropay Koropay Koropay
                    </div>
                    <div>
                        Koropay Koropay Koropay Koropay
                    </div>
                </div>
                <div class="scroll text3">
                    <div>
                        Koropay Koropay Koropay Koropay
                    </div>
                    <div>
                        Koropay Koropay Koropay Koropay
                    </div>
                </div>
                <div class="scroll text4">
                    <div>
                        Koropay Koropay Koropay Koropay
                    </div>
                    <div>
                        Koropay Koropay Koropay Koropay
                    </div>
                </div>
                <div class="scroll text5">
                    <div>
                        Koropay Koropay Koropay Koropay
                    </div>
                    <div>
                        Koropay Koropay Koropay Koropay
                    </div>
                </div>
                <div class="scroll text6">
                    <div>
                        Koropay Koropay Koropay Koropay
                    </div>
                    <div>
                        Koropay Koropay Koropay Koropay
                    </div>
                </div>
                <div class="scroll text7">
                    <div>
                        Koropay Koropay Koropay Koropay
                    </div>
                    <div>
                        Koropay Koropay Koropay Koropay
                    </div>
                </div>
                <div class="download-app-content">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-lg-7 col-xl-6 text-center">
                            <h1 class="ff__sb mb-3">
                                Stop wasting your time.
                            </h1>
                            <h1 class="ff__sb mb-4 mb-lg-3">
                                Be smart and use Koropay
                            </h1>
                            <p class="text-white mb-5 mb-lg-4">
                                Tempor nulla id Lorem culpa eiusmod. Esse consectetur excepteur consectetur enim ut consectetur consequat.
                            </p>
                            <div class="d-flex justify-content-center align-items-center">
                                <div class="google__play mr-4">
                                    <img
                                        src="@/assets/images/svg/google-play.svg"
                                        alt="google play badge"
                                    />
                                </div>
                                <div class="app__store">
                                    <img
                                        src="@/assets/images/svg/app-store.svg"
                                        alt="app store badge"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
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
        // document.body.style.overflow = 'auto'
    }
}
</script>

<style>
.scroller {
  height: 100vh;
}
</style>
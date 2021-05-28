<template>
    <div>
        <app-navbar></app-navbar>
        <section class="company pt-8 pt-lg-7 pb-5 bg-section-secondary">
            <div class="container">
                <div class="row justify-content-center align-items-center">
                    <div class="col-md-7 mb-5 mb-lg-0">
                        <h1 class="ff__sb mb-4 company--header">
                            You want to know more about Koropay?
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere maxime libero ullam. Amet dolorem eius neque nulla voluptatibus praesentium sunt?
                        </p>
                    </div>
                    <div class="col-md-5">
                        <ul class="company--hero-insight">
                            <li class="text-center">
                                <span class="">20XX</span>
                                <span>founded</span>
                            </li>
                            <li class="text-center">
                                <span class="">$20m</span>
                                <span>in funding</span>
                            </li>
                            <li class="text-center">
                                <span class="">20XX</span>
                                <span>32</span>
                            </li>
                            <li class="text-center">
                                <span class="">4</span>
                                <span>countries</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section class="our-people">
            <div class="position-relative">
                <VueSlickCarousel v-bind="settings">
                    <!-- <img src="@/assets/images/lifestyle/lifestyle-12.jpg" alt=""> -->
                    <img src="@/assets/images/lifestyle/lifestyle-14.jpg" alt="">
                    <img src="@/assets/images/lifestyle/lifestyle-15.jpg" alt="">
                    <img src="@/assets/images/lifestyle/lifestyle-16.jpg" alt="">
                </VueSlickCarousel>
                <div class="container">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-12 text-center">
                            <h2 >We’re people people</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="our-team py-6">
            <div class="container">
                <div class="row justify-content-start align-items-center">
                    <div class="col-lg-6">
                        <h1 class="ff__sb">
                            The faces behind Koropay
                        </h1>
                        <p>
                            We’re a diverse, close-knit team on an adventure to build something enduring, while learning something new, every day.
                        </p>
                    </div>
                </div>
                <div class="row justify-content-center align-items-center mt-5">
                    <div class="col-6 col-lg-3 mb-4 mb-lg-3">
                        <div class="team-member text-center">
                            <div class="team-member--avatar mx-auto">   
                                <img src="@/assets/images/members/member-1.jpeg" alt="" class="">
                            </div>
                            <h5>Essien <span class="team-member-country">🇬🇭</span> </h5>
                            <p>Software Engineering</p>
                        </div>
                    </div>
                    <div class="col-6 col-lg-3 mb-4 mb-lg-3">
                        <div class="team-member text-center">
                            <div class="team-member--avatar mx-auto">   
                                <img src="@/assets/images/members/member-1.jpeg" alt="" class="">
                            </div>
                            <h5>Tuunji <span class="team-member-country">🇬🇭</span> </h5>
                            <p>Software Engineering</p>
                        </div>
                    </div>
                    <div class="col-6 col-lg-3 mb-4 mb-lg-3">
                        <div class="team-member text-center">
                            <div class="team-member--avatar mx-auto">   
                                <img src="@/assets/images/members/member-1.jpeg" alt="" class="">
                            </div>
                            <h5>Patrick <span class="team-member-country">🇳🇬</span> </h5>
                            <p>Product</p>
                        </div>
                    </div>
                    <div class="col-6 col-lg-3 mb-4 mb-lg-3">
                        <div class="team-member text-center">
                            <div class="team-member--avatar mx-auto">   
                                <img src="@/assets/images/members/member-1.jpeg" alt="" class="">
                            </div>
                            <h5>Naomi <span class="team-member-country">🇳🇬</span> </h5>
                            <p>Human Resources</p>
                        </div>
                    </div>
                    <div class="col-6 col-lg-3 mb-5 mb-lg-3">
                        <div class="team-member text-center">
                            <div class="team-member--avatar mx-auto">   
                                <img src="@/assets/images/members/member-1.jpeg" alt="" class="">
                            </div>
                            <h5>Ifeanyi <span class="team-member-country">🇳🇬</span> </h5>
                            <p>Software Engineering</p>
                        </div>
                    </div>
                    <div class="col-6 col-lg-3 mb-5 mb-lg-3">
                        <div class="team-member text-center">
                            <div class="team-member--avatar mx-auto">   
                                <img src="@/assets/images/members/member-1.jpeg" alt="" class="">
                            </div>
                            <h5>Gaudencia <span class="team-member-country">🇿🇦</span> </h5>
                            <p>Country Launcher - South Africa</p>
                        </div>
                    </div>
                    <div class="col-6 col-lg-3 mb-5 mb-lg-3">
                        <div class="team-member text-center">
                            <div class="team-member--avatar mx-auto">   
                                <img src="@/assets/images/members/member-1.jpeg" alt="" class="">
                            </div>
                            <h5>Nathaniel <span class="team-member-country">🇷🇼</span> </h5>
                            <p>Product</p>
                        </div>
                    </div>
                    <div class="col-6 col-lg-3 mb-5 mb-lg-3">
                        <div class="team-member text-center">
                            <div class="team-member--avatar mx-auto">   
                                <img src="@/assets/images/members/member-1.jpeg" alt="" class="">
                            </div>
                            <h5>Kingsley <span class="team-member-country">🇷🇼</span> </h5>
                            <p>Sales Development Representative</p>
                        </div>
                    </div>
                    <div class="col-6 col-lg-3 mb-5 mb-lg-3">
                        <div class="team-member text-center">
                            <div class="team-member--avatar mx-auto">   
                                <img src="@/assets/images/members/member-1.jpeg" alt="" class="">
                            </div>
                            <h5>Adelusi <span class="team-member-country">🇳🇬</span> </h5>
                            <p>Product</p>
                        </div>
                    </div>
                    <div class="col-6 col-lg-3 mb-5 mb-lg-3">
                        <div class="team-member text-center">
                            <div class="team-member--avatar mx-auto">   
                                <img src="@/assets/images/members/member-1.jpeg" alt="" class="">
                            </div>
                            <h5>Maryanne <span class="team-member-country">🇿🇦</span> </h5>
                            <p>HR Associate</p>
                        </div>
                    </div>
                    <div class="col-6 col-lg-3 mb-0 mb-lg-3">
                        <div class="team-member text-center">
                            <div class="team-member--avatar mx-auto">   
                                <img src="@/assets/images/members/member-1.jpeg" alt="" class="">
                            </div>
                            <h5>Oluwatobi <span class="team-member-country">🇳🇬</span> </h5>
                            <p>Software Engineering</p>
                        </div>
                    </div>
                    <div class="col-6 col-lg-3 mb-0 mb-lg-3">
                        <div class="team-member text-center">
                            <div class="team-member--avatar mx-auto">   
                                <img src="@/assets/images/members/member-1.jpeg" alt="" class="">
                            </div>
                            <h5>Sanni <span class="team-member-country">🇳🇬</span> </h5>
                            <p>Software Engineer, Scrum Master</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="our-values py-6 bg-section-secondary">
            <div class="container">
                <div class="row justify-content-center-align-items-center">
                    <div class="col-md-6 sidebar mb-5 mb-lg-0">
                        <h1 class="ff__sb mb-4">
                            Koropay's core values evolved with us
                        </h1>
                        <p>
                            We’re a deeply mission-driven company, and these are the core ideas we return to when we make decisions.
                        </p>
                    </div>
                    <div class="col-md-6">
                        <div class="row justify-content-center align-items-center">
                            <div class="col-md-12 faqs__single-question" v-for="n in 5" :key="n">
                                <blockquote class="faqs__single-question-content">
                                    <div class="d-flex justify-content-between">
                                        <h4 class="ff__sb">What identification documents do you accept?</h4>
                                    </div>
                                    <div class="d-flex justify-content-between mt-4">
                                        <p class="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam nesciunt officia optio iste voluptates alias.</p>
                                    </div>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default {
    components: { VueSlickCarousel },
    data() {
        return {
            settings: {
                dots: false,
                arrows: false,
                autoplay: true,
                fade: true,
                focusOnSelect: true,
                infinite: true,
                speed: 200,
                slidesToShow: 1,
            }
        }
    }
}
</script>

<style>

</style>
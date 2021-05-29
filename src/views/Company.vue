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
                    <div class="col-6 col-lg-3 mb-lg-3" v-for="member in members" :key="member.id" :class="[(member.id == members.length - 1 || member.id == members.length) ? 'mb-0' : 'mb-4']">
                        <div class="team-member text-center">
                            <div class="team-member--avatar mx-auto">   
                                <img :src="member.photo" :alt="member.name">
                            </div>
                            <h5>{{member.name}} <span class="team-member-country">{{member.country_code}}</span> </h5>
                            <p>{{member.role}}</p>
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
                        <div class="container-sm">
                            <div class="row justify-content-center align-items-center">
                                <div class="col-md-12 values__single-value" v-for="(value, index) in values" :key="index">
                                    <blockquote class="values__single-value-content">
                                        <div class="d-lg-flex justify-content-between position-relative">
                                            <div class="pr-4 mb-3 mb-lg-0" :class="[`value-${index}--icon`]">
                                                <img src="@/assets/images/svg/icons/transparent.svg" alt="">
                                            </div>
                                            <div class="">
                                                <div class="d-flex justify-content-between">
                                                    <h4 class="ff__sb">{{value.title}}</h4>
                                                </div>
                                                <div class="d-flex justify-content-between mt-4">
                                                    <p class="">{{value.text}}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="our-lifestyle py-6 mb-5">
            <div class="container mb-3 mb-lg-5">
                <div class="row justify-content-start">
                    <div class="col-lg-6">
                        <h1 class="ff__sb">
                            A glimpse of life at Koropay
                        </h1>
                        <p>
                            We’re a diverse, close-knit team on an adventure to build something enduring, while learning something new, every day.
                        </p>
                    </div>
                </div>
            </div>
            <VueSlickCarousel v-bind="lifestyleSettings">
                <img src="@/assets/images/lifestyle/lifestyle-12.jpg" alt="" class="lifestyle-img">
                <img src="@/assets/images/lifestyle/lifestyle-20.jpeg" alt="" class="lifestyle-img">
                <img src="@/assets/images/lifestyle/lifestyle-17.jpg" alt="" class="lifestyle-img">
                <img src="@/assets/images/lifestyle/lifestyle-18.jpeg" alt="" class="lifestyle-img">
                <img src="@/assets/images/lifestyle/lifestyle-19.jpeg" alt="" class="lifestyle-img">
                <img src="@/assets/images/lifestyle/lifestyle-21.jpeg" alt="" class="lifestyle-img" style="display: none;">
                <template #prevArrow>
                    <div class="custom-arrow">
                        <arrow-right-icon size="1.5x" class="custom-class" style="transform: rotate(-180deg);"></arrow-right-icon>
                    </div>
                </template>
                <template #nextArrow>
                    <div class="custom-arrow">
                        <arrow-right-icon size="1.5x" class="custom-class"></arrow-right-icon>
                    </div>
                </template>
                <!-- <template #nextArrow="arrowOption">
                    <div class="custom-navigator">
                        {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
                    </div>
                </template> -->
            </VueSlickCarousel>
        </section>
        <section class="come-join-us py-6 bg-section-secondary">
            <div class="container">
                <div class="d-lg-flex justify-content-between align-items-center">
                    <div class="text-lg-left mb-4 mb-lg-0">
                        <h1 class="ff__sb w-lg-73">
                            Become a part of our team
                        </h1>
                        <p>
                            Come do meaningful work with kind, smart colleagues who're invested in your growth
                        </p>
                    </div>
                    <div class="text-lg-right">
                        <router-link to="/register" class="button text-white">
                            See open positions 
                        </router-link>
                    </div>
                </div>
            </div>
        </section>
        <app-footer></app-footer>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import member_photo from '@/assets/images/members/member-1.jpeg'
import member_photo_1 from '@/assets/images/members/member-1.jpeg'
import member_photo_2 from '@/assets/images/members/member-2.jpeg'
import member_photo_3 from '@/assets/images/members/member-3.jpeg'
import member_photo_4 from '@/assets/images/members/member-4.jpeg'
import member_photo_5 from '@/assets/images/members/member-5.jpeg'
import values_sprites from '@/assets/images/svg/icons/values-sprites.svg'
import { ArrowRightIcon } from 'vue-feather-icons'

export default {
    components: { VueSlickCarousel, ArrowRightIcon },
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
            },
            lifestyleSettings: {
                dots: false,
                infinite: false,
                arrows: true,
                centerMode: true,
                lazyLoad: "ondemand",
                edgeFriction: 0.35,
                focusOnSelect: true,
                // draggable: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 0,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                        }
                    },
                    {
                        breakpoint: 350,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ]
            },
            members: [
                {id: '1', name: 'Essien', country_code: '🇬🇭', role: 'Software Engineering', photo: member_photo_1},
                {id: '2', name: 'Tuunji', country_code: '🇬🇭', role: 'Software Engineering', photo: member_photo_2},
                {id: '3', name: 'Patrick', country_code: '🇳🇬', role: 'Software Engineering', photo: member_photo_3},
                {id: '4', name: 'Naomi', country_code: '🇳🇬', role: 'Human Resources', photo: member_photo},
                {id: '5', name: 'Ifeanyi', country_code: '🇳🇬', role: 'Software Engineering', photo: member_photo_4},
                {id: '6', name: 'Gaudencia', country_code: '🇿🇦', role: 'Country Launcher - South Africa', photo: member_photo},
                {id: '7', name: 'Nathaniel', country_code: '🇷🇼', role: 'Product', photo: member_photo_5},
                {id: '8', name: 'Kingsley', country_code: '🇷🇼', role: 'Sales Development Representative', photo: member_photo},
                {id: '9', name: 'Adelusi', country_code: '🇳🇬', role: 'Product', photo: member_photo},
                {id: '10', name: 'Maryanne', country_code: '🇿🇦', role: 'HR Associate', photo: member_photo},
                {id: '11', name: 'Oluwatobi', country_code: '🇳🇬', role: 'Software Engineering', photo: member_photo},
                {id: '12', name: 'Sanni', country_code: '🇳🇬', role: 'Software Engineer, Scrum Master', photo: member_photo}
            ],
            values: [
                {image: values_sprites, title: 'Don\'t stop learning', 
                    text: 'You always develop yourself and learn from mistakes. You are curious about new ideas and practices.'
                },
                {image: values_sprites, title: 'Care for the user', 
                    text: 'The user is your main priority. You ensure all users have the best experience possible. You are happy when the user succeeds.'
                },
                {image: values_sprites, title: 'Be clear and truthful', 
                    text: 'You communicate clearly even with people in different locations. You move information from within your mind to the shared environment.'
                },
                {image: values_sprites, title: 'Strength in diversity', 
                    text: 'You focus on being one team. You remain accommodative for everyone. You are respectful of differences.'
                },
                {image: values_sprites, title: 'Insist on High Standards', 
                    text: 'You focus on being one team. You remain accommodative for everyone. You are respectful of differences.'
                },
            ]
        }
    },
}
</script>

<style>

</style>
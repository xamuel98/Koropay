<template>
    <div>
        <app-navbar></app-navbar>
        <section class="customers pt-8 pt-lg-7 pb-5 bg-section-secondary">
            <div class="container">
                <div class="row justify-content-center-align-items-center">
                    <div class="col-md-7 sidebar mb-5 mb-lg-0">
                        <h1 class="ff__sb mb-4">
                            Trusted by thousands of customers across Africa
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere maxime libero ullam. Amet dolorem eius neque nulla voluptatibus praesentium sunt? Repudiandae laudantium et, alias eius fuga vel ratione delectus sit?
                        </p>
                    </div>
                    <div class="col-md-5">
                        <div class="row justify-content-center align-items-center">
                            <div class="col-md-12 clients__single-quote" v-for="n in 10" :key="n">
                                <blockquote class="clients__single-quote-content">
                                    <svg width="60px" height="42px" viewBox="0 0 60 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> 
                                        <title>icon_quote</title> 
                                        <desc>
                                        Created with Sketch.
                                        </desc> 
                                        <g id="CASE-STUDIES" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> 
                                        <g id="Bespoke_CS_Temi" transform="translate(-387.000000, -5684.000000)" fill="#45D7B6" fill-rule="nonzero"> 
                                        <g id="Group-5"> 
                                        <g id="Group" transform="translate(0.000000, 960.000000)"> 
                                            <g id="QUOTE-1" transform="translate(387.000000, 4724.000000)"> 
                                            <g id="icon_quote"> 
                                                <path d="M4.28571429,42 L17.1428571,42 L25.7142857,25.2 L25.7142857,0 L0,0 L0,25.2 L12.8571429,25.2 L4.28571429,42 Z M38.5714286,42 L51.4285714,42 L60,25.2 L60,0 L34.2857143,0 L34.2857143,25.2 L47.1428571,25.2 L38.5714286,42 Z" id="Shape"></path> 
                                            </g> 
                                            </g> 
                                        </g> 
                                        </g> 
                                        </g> 
                                        </g> 
                                    </svg>
                                    <main class="clients-quotes-module__text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sed velit ipsam inventore itaque cupiditate?
                                    </main>
                                    <footer class="clients-quotes-module__quote-footer">
                                        <div class="clients-quotes-module__avatar" :style="{backgroundImage: `url(${client1})`}"></div>
                                        <div class="clients-quotes-module__author">
                                            Hima Mandali 
                                            <div class="clients-quotes-module__position">
                                                CTO at Solarisbank 
                                            </div> 
                                        </div>
                                    </footer>
                                </blockquote>
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
import client1 from '@/assets/images/customers/customer-img-1.png'

export default {
    data() {
        return {
            client1,
        }
    },
    mounted() {
        // document.body.style.overflow = 'auto'
    }
}
</script>

<style scoped>





</style>
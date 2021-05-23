<template>
    <footer class="footer py-6 position-relative">
        <div class="container position-relative">
            <div class="row justify-content-center mb-4 mb-lg-5">
                <div class="col-6 col-md-3 col-lg-3">
                    <div class="footer-menu">
                        <h5 class="ff__sb mb-3">Why Koropay</h5>
                        <ul class="u-list mb-2">
                            <li>
                                <a href="#">Why Koropay</a>
                            </li>
                        </ul>
                        <ul class="u-list">
                            <li>
                                <a href="#">For Personal</a>
                            </li>
                            <li>
                                <a href="#">For Corporates</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-6 col-md-3 col-lg-3">
                    <div class="footer-menu">
                        <h5 class="ff__sb mb-3">Pricing</h5>
                        <ul class="u-list mb-2">
                            <li>
                                <a href="#">Nigeria</a>
                            </li>
                            <li>
                                <a href="#">Ghana</a>
                            </li>
                            <li>
                                <a href="#">Rwanda</a>
                            </li>
                            <li>
                                <a href="#">South Africa</a>
                            </li>
                        </ul>
                    </div>

                    <div class="footer-menu mt-4">
                        <h5 class="ff__sb mb-3">Customers</h5>
                        <ul class="u-list mb-2">
                            <li>
                                <router-link :to="{name: 'Customers'}">Testimonials</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-6 col-md-3 col-lg-3 mt-n6 mt-lg-0">
                    <div class="footer-menu">
                        <h5 class="ff__sb mb-3">Developers</h5>
                        <ul class="u-list mb-2">
                            <li>
                                <a href="#">Overview</a>
                            </li>
                            <li>
                                <a href="#">Documentation</a>
                            </li>
                            <li>
                                <a href="#">Status Page</a>
                            </li>
                            <li>
                                <a href="#">South Africa</a>
                            </li>
                        </ul>
                    </div>

                    <div class="footer-menu mt-4">
                        <h5 class="ff__sb mb-3">Support</h5>
                        <ul class="u-list mb-2">
                            <li>
                                <a href="#">Help Desk</a>
                            </li>
                            <li>
                                <a href="#">Contact Us</a>
                            </li>
                            <li>
                                <a href="#">FAQs</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-6 col-md-3 col-lg-3">
                    <div class="footer-menu">
                        <h5 class="ff__sb mb-3">About</h5>
                        <ul class="u-list mb-2">
                            <li>
                                <a href="#">Company</a>
                            </li>
                            <li>
                                <a href="#">Careers</a>
                            </li>
                            <li>
                                <a href="#">Press</a>
                            </li>
                            <li>
                                <a href="#">Privacy &amp; Terms</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="dashed-border"></div>
            <div class="row justify-content-start mt-5 mt-lg-5">
                <div class="col-6 col-md-3 col-lg-3">
                    <div class="footer-menu">
                        <h5 class="ff__sb mb-3">Contact</h5>
                        <ul class="u-list mb-2">
                            <li>
                                <a href="mailto:hello@koropay.com">hello@koropay.com</a>
                            </li>
                            <li class="d-flex justify-content-start align-items-center">
                                <a title="Facebook" href="#" rel="external" class="mr-4 footer__social-link">
                                    <svg width="20" height="20" viewBox="299 22 16 16">
                                        <path
                                            d="M299,25.0094776 C299,23.347389 300.336631,22 302.009478,22 L311.990522,22 C313.652611,22 315,23.3366311 315,25.0094776 L315,34.9905224 C315,36.652611 313.663369,38 311.990522,38 L302.009478,38 C300.347389,38 299,36.6633689 299,34.9905224 L299,25.0094776 Z M310.03529,38 L310.03529,31.8064419 L312.114271,31.8064419 L312.425522,29.3926592 L310.03529,29.3926592 L310.03529,27.8515655 C310.03529,27.1527191 310.229327,26.6764345 311.231515,26.6764345 L312.509717,26.6758951 L312.509717,24.5170337 C312.288593,24.4876704 311.529882,24.4219326 310.647185,24.4219326 C308.804309,24.4219326 307.542706,25.5467865 307.542706,27.6125843 L307.542706,29.3926592 L305.458451,29.3926592 L305.458451,31.8064419 L307.542706,31.8064419 L307.542706,38 L310.03529,38 Z"
                                            stroke="none"
                                            fill="#6a6d70"
                                            fill-rule="evenodd"
                                        ></path>
                                    </svg>
                                </a>
                                <a title="Twitter" href="#" rel="external" class="mr-4 footer__social-link">
                                    <svg width="20" height="20" viewBox="262 24 17 14">
                                        <path
                                            d="M277.972039,24.25 C277.309208,24.625002 276.592932,24.885416 275.823191,25.03125 C275.160359,24.343746 274.337176,24 273.353618,24 C272.434206,24 271.643095,24.322914 270.980263,24.96875 C270.317431,25.614586 269.98602,26.385412 269.98602,27.28125 C269.98602,27.531252 270.018092,27.781248 270.082237,28.03125 C268.713809,27.96875 267.425581,27.63542 266.217515,27.03125 C265.009451,26.42708 263.988491,25.614588 263.154605,24.59375 C262.83388,25.093752 262.67352,25.64583 262.67352,26.25 C262.67352,27.416672 263.175982,28.322914 264.180921,28.96875 C263.646379,28.96875 263.143917,28.833334 262.67352,28.5625 L262.67352,28.625 C262.67352,29.395838 262.924751,30.08333 263.42722,30.6875 C263.92969,31.29167 264.576475,31.677082 265.367599,31.84375 C265.068255,31.90625 264.768916,31.9375 264.469572,31.9375 C264.255756,31.9375 264.041941,31.916666 263.828125,31.875 C264.063324,32.54167 264.464223,33.08854 265.03084,33.515624 C265.597454,33.94271 266.244241,34.15625 266.971217,34.15625 C265.752461,35.0937546 264.362671,35.5625 262.801809,35.5625 C262.545229,35.5625 262.277962,35.5520834 262,35.53125 C263.582245,36.5104216 265.303444,37 267.163651,37 C268.660369,37 270.028776,36.7187528 271.268914,36.15625 C272.509053,35.5937472 273.519321,34.85938 274.299752,33.953124 C275.080185,33.04687 275.684209,32.04688 276.111842,30.953124 C276.539475,29.85937 276.753289,28.760422 276.753289,27.65625 L276.753289,27.25 C277.416121,26.77083 277.972037,26.19792 278.421053,25.53125 C277.800983,25.802084 277.159542,25.979166 276.496711,26.0625 C277.223687,25.624998 277.715458,25.020838 277.972039,24.25 L277.972039,24.25 Z"
                                            stroke="none"
                                            fill="#6a6d70"
                                            fill-rule="evenodd"
                                        ></path>
                                    </svg>
                                </a>
                                <a title="Instagram" href="#" rel="external" class="mr-4 footer__social-link">
                                    <svg width="20" height="20" viewBox="0 0 17 18">
                                        <path
                                            d="M8.497.005c-2.307 0-2.597.01-3.503.05C4.09.1 3.472.242 2.93.452c-.558.22-1.03.51-1.504.982-.472.472-.763.946-.98 1.505C.236 3.47.092 4.09.05 5 .01 5.905 0 6.194 0 8.502c0 2.307.01 2.597.05 3.503.042.905.186 1.522.396 2.063.217.558.508 1.03.98 1.504.473.472.946.763 1.505.98.55.21 1.16.354 2.07.395.91.04 1.2.05 3.51.05s2.6-.01 3.507-.05c.905-.042 1.523-.186 2.063-.396.56-.21 1.032-.5 1.504-.98.476-.47.766-.94.98-1.5.21-.54.357-1.16.4-2.06.04-.9.05-1.19.05-3.5s-.01-2.593-.05-3.5c-.043-.905-.186-1.523-.396-2.063-.22-.56-.51-1.033-.98-1.505-.472-.47-.946-.76-1.506-.98-.54-.205-1.16-.35-2.06-.39C11.1.02 10.81.01 8.505.01zm0 1.53c2.27 0 2.538.01 3.434.05.83.04 1.28.177 1.58.294.4.15.68.33.98.63.3.3.48.58.64.97.12.3.26.75.3 1.58.04.89.05 1.16.05 3.43 0 2.27-.01 2.533-.05 3.43-.04.83-.175 1.28-.292 1.576-.153.4-.337.68-.634.98-.3.3-.58.483-.977.64-.3.114-.75.253-1.58.29-.895.04-1.164.05-3.433.05-2.27 0-2.54-.01-3.437-.05-.83-.038-1.28-.177-1.577-.293-.4-.156-.68-.34-.98-.638-.3-.297-.48-.58-.636-.977-.114-.3-.253-.75-.29-1.578-.04-.895-.05-1.163-.05-3.43 0-2.27.01-2.54.05-3.436.038-.83.177-1.28.293-1.58.154-.393.338-.676.636-.974.3-.3.58-.48.98-.637.3-.12.75-.26 1.575-.297.896-.04 1.164-.05 3.43-.05z"
                                            fill="#6a6d70"
                                            fill-rule="evenodd"
                                        ></path>
                                        <path
                                            d="M8.497 11.335c-1.564 0-2.832-1.268-2.832-2.832 0-1.565 1.268-2.833 2.832-2.833 1.565 0 2.833 1.268 2.833 2.833 0 1.564-1.268 2.832-2.833 2.832zm0-7.196c-2.41 0-4.363 1.95-4.363 4.36s1.953 4.36 4.363 4.36 4.363-1.95 4.363-4.36-1.95-4.36-4.36-4.36zm5.556-.18c0 .56-.457 1.02-1.02 1.02s-1.02-.46-1.02-1.02.457-1.02 1.02-1.02 1.02.45 1.02 1.02z"
                                            fill="#6a6d70"
                                            fill-rule="evenodd"
                                        ></path>
                                    </svg>
                                </a>
                                <a title="YouTube" href="#" rel="external" class="mr-4 footer__social-link">
                                    <svg width="20" height="20" viewBox="0 0 24 17">
                                        <path
                                            d="M23.723 3.665S23.49 2 22.771 1.267C21.86.305 20.838.3 20.37.244 17.016 0 11.986 0 11.986 0h-.01s-5.03 0-8.384.244c-.467.056-1.49.061-2.4 1.023C.474 2 .239 3.665.239 3.665S0 5.618 0 7.573v1.833c0 1.955.24 3.908.24 3.908s.234 1.664.952 2.397c.912.963 2.109.932 2.641 1.034 1.917.184 8.148.243 8.148.243s5.035-.007 8.39-.253c.469-.057 1.49-.061 2.4-1.024.718-.733.952-2.397.952-2.397s.24-1.955.24-3.908V7.573c0-1.955-.24-3.908-.24-3.908zm-14.217 7.96V4.84l6.475 3.405-6.475 3.38z"
                                            fill-rule="evenodd"
                                            fill="#6a6d70"
                                        ></path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-6 col-md-3 col-lg-3">
                    <div class="footer-menu">
                        <h5 class="ff__sb mb-3">Nigeria 🇳🇬</h5>
                        <ul class="u-list mb-2">
                            <li>
                                <address>
                                    23B, Ogunsanya Abayomi Street, Victoria Island, Lagos, Nigeria.
                                </address>
                            </li>
                        </ul>
                    </div>

                    <div class="footer-menu mt-4">
                        <h5 class="ff__sb mb-3">South Africa 🇿🇦</h5>
                        <ul class="u-list mb-2">
                            <li>
                                <address>
                                    64A, Nelson Mandela Square, Malboro, South Africa.
                                </address>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-6 col-md-3 col-lg-3 mt-n10 mt-lg-0">
                    <div class="footer-menu">
                        <h5 class="ff__sb mb-3">Ghana 🇬🇭</h5>
                        <ul class="u-list mb-2">
                            <li>
                                <address>
                                    190, Essien Kwado Street, Effwa, Accra, Ghana.
                                </address>
                            </li>
                        </ul>
                    </div>

                    <div class="footer-menu mt-4">
                        <h5 class="ff__sb mb-3">Rwanda 🇷🇼</h5>
                        <ul class="u-list mb-2">
                            <li>
                                <address>
                                    3CA, Unity Road, Rwanda.
                                </address>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <img src="@/assets/images/svg/koropay-stroke.svg" alt="" class="koropay-stroke">
    </footer>
</template>

<script>
export default {

}
</script>

<style>

</style>
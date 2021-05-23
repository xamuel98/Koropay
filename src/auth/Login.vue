<template>
    <section class="auth py-4 py-lg-6">
        <div class="container">
            <router-link class="navbar-brand kp-logo" to="/">Koropay</router-link>
            <div class="row justify-content-center align-items-center">
                <div class="col-md-6">
                    <h1 class="ff__sb mb-4">
                        Changing the way people get paid
                    </h1>
                    <h5 class="ff__sb text--secondary mb-5 mb-lg-0">
                        Sign in to your account here
                    </h5>
                </div>
                <div class="col-md-6 text-lg-righ">
                    <form action="">
                        <div class="form-group">
                            <label for="email" class="text-left" ref="email">Email Address</label>
                            <input type="email" class="form-control" @focus="onFocus('email')"
                                @blur="onBlur('email')" placeholder="Email Address"
                            >
                        </div>
                        <div class="form-group">
                            <label for="password" class="text-left" ref="password">Password</label>
                            <input :type="passwordFieldType" class="form-control form-control-appended" @focus="onFocus('password')"
                                @blur="onBlur('password')" placeholder="Password">
                            <i :class="appendEyeIconType" class="password-visibility" @click="switchVisibility" style="cursor: pointer;"></i>
                        </div>
                        <router-link to="/" class="auth--link">Forgot Password?</router-link>
                        <div class="d-lg-flex justify-content-lg-between align-items-center mt-4">
                            <span class="create-account--link mr-4 mr-lg-0">Don't own an account?&nbsp;<router-link to="/register" class="auth--link">Create one</router-link></span>
                            <router-link to="/" class="button text-white mt-4 mt-lg-0 mr-4 mr-lg-0">Sign in</router-link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            passwordFieldType: 'password',
            appendEyeIconType: 'feather-eye',
        }
    },
    methods: {
        onFocus(getRef) {
            const formField = this.$refs[getRef]
            formField.classList.add('active')
        },
        onBlur(getRef) {
            const formField = this.$refs[getRef]
            if (formField.classList.contains('active') && formField.nextElementSibling.value !== ''){
                formField.classList.add('active')
            }
            else {
                formField.classList.remove('active')
            }
        },
        switchVisibility() {
            this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
            this.appendEyeIconType = this.appendEyeIconType === 'feather-eye' ? 'feather-eye-off' : 'feather-eye'
        },
    },
    mounted() {
        document.body.style.overflow = 'auto'
    }
}
</script>

<style scoped>
.auth .kp-logo {
    height: 32px;
    margin-bottom: 100px;
}

.form-group {
    position: relative;
}

.form-group:nth-child(1) {
    margin-bottom: 30px;
}

.form-group>label {
    color: #6c7591;
    background-color: #fff;
    position: absolute;
    margin-bottom: 0;
    user-select: none;
    padding: 0 10px;
    font-size: 0.989rem;
    top: 0;
    left: 0;
    visibility: hidden;
    cursor: text;
    -webkit-transition: color .2s ease-out, -webkit-transform .2s ease-out;
    transition: color .2s ease-out, -webkit-transform .2s ease-out;
    transition: transform .2s ease-out, color .2s ease-out;
    transition: transform .2s ease-out, color .2s ease-out, -webkit-transform .2s ease-out;
    -webkit-transform-origin: 0% 100%;
    transform-origin: 0% 100%;
    text-align: initial;
    -webkit-transform: translateY(15px);
    transform: translateY(15px);
}

.form-group>label:not(.label-icon).active {
    -webkit-transform: translateY(-10px) scale(0.8);
    transform: translateY(-10px) scale(0.8);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    visibility: visible;
}

.form-group label {
    left: .75rem;
}

input[type] {
    height: 54px;
}

input[type].form-control:focus {
    outline: none;
    box-shadow: none;
    border-color: #1B0B27;
    transition: .2s opacity ease-out, .2s color ease-out;
}

.password-visibility {
    height: 16px;
    cursor: pointer;
    /* fill: #0a2e65; */
    top: 20px;
    width: 16px;
    opacity: .3;
    position: absolute;
    right: 16px;
}

input[type]:focus::-webkit-input-placeholder { opacity: 0; }
input[type]:focus:-moz-placeholder { opacity: 0; }
input[type]:focus::-moz-placeholder { opacity: 0; } 
input[type]:focus:-ms-input-placeholder { opacity: 0; }

input[type]::-webkit-input-placeholder { opacity: 1; }
input[type]:-moz-placeholder { opacity: 1; }
input[type]::-moz-placeholder { opacity: 1; } 
input[type]:-ms-input-placeholder { opacity: 1; }

.auth--link {
    font-size: 14px;
    font-family: 'Sen-Bold';
    color: #1b0b27;
    text-decoration: none;
    transition: .2s all;
}

.create-account--link {
    font-size: 14px;
    color: #888;
}

.auth--link:hover {
    color: rgba(27, 11, 39, .3);
}

/* @media screen and (max-width: 1024px) {
    button[type=submit] {
        margin-top: 30px;
    }
} */

@media screen and (max-width: 768px) {
    .auth .kp-logo {
        margin-bottom: 40px;
    }
}
</style>
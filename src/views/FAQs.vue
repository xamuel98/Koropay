<template>
    <div>
        <app-navbar></app-navbar>
        <div class="our-faqs pt-10 pb-7 position-relative bg-section-secondary">
            <div class="container">
                <div class="row justify-content-center-align-items-center">
                    <div class="col-md-5 sidebar">
                        <h3>
                            Frequently Asked <br>
                            <span>Questions</span>
                        </h3>
                    </div>
                    <div class="col-md-7 faqs-content">
                        <FaqAccordion :items="faqQuestions" activeColor="#212529" borderColor="#F8F5FF" fontColor="#5d656dd1"/>
                    </div>
                </div>
            </div>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
import FaqAccordion from '@/components/FaqsAccordion'
export default {
    data() {
        return {
            faqQuestions: [
                {
                    title: 'It’s my first time recharging my meter, how do I load my energy token?',
                    value: 'Activate your meter with the factory reset/key change tokens, by following the instructions given to you by your Electrical Distribution Company (Disco) customer care.',
                },
                {
                    title: 'Why is my meter monitor blank?',
                    value: 'This is a technical issue, kindly contact your Electrical Distribution Company (Disco) customer care to make a complaint.',
                },
                {
                    title: 'Why is my monitor displaying an Error E5 message?',
                    value: 'Your smart card or your monitor unit might be faulty. Kindly contact your Electrical Distribution Company (Disco) customer care for further assistance.',
                },
                {
                    title: 'Why is my monitor displaying an Error E9 message?',
                    value: 'This could be as a result of the following; The monitor card is not properly connected to the meter or the monitor unit of the meter is faulty. Kindly contact your Electrical Distribution Company (Disco) customer care for assistance.',
                },
                {
                    title: 'How can I get a prepaid meter?',
                    value: 'Please contact your Electrical Distribution Company (Disco) customer care, visit their website or office for more information on current process for acquiring meters.',
                },
                {
                    title: 'I purchased energy on my smart card but it read zero units when I inserted it into my meter. What could be wrong?',
                    value: 'This could be as a result of the chip on your smart car having partial contact with the meter or network failure at the point of purchase. Please visit your Electrical Distribution Company (Disco) customer care closest to you with the original copy of the purchase receipt.',
                },
                {
                    title: 'I have lost my prepaid meter smart card, what do I do?',
                    value: 'Visit any of your electricity distribution company office closest to you with the copy of your previous vending/purchase receipt. Replacing your card will likely come at a fee.',
                },
                {
                    title: 'I have lost my STS card, what do I do?',
                    value: 'Please check the meter serial number on the face plate of the meter or a previous vending/purchase receipt. You can continue to vend with this number. Replacing your STS card is no longer necessary.',
                },
                {
                    title: 'I bought a prepaid meter into my flat, I am moving into a new apartment, Can I move with the meter?',
                    value: 'Prepaid Meters are not moveable, we advise you negotiate with your landlord.',
                },
                {
                    title: 'Why do I still receive bills even though I now have a prepaid meter?',
                    value: 'Please visit your Electrical Distribution Company (Disco) customer care office closest to you with a copy of the meter installation documents and your postpaid bill.',
                },
                {
                    title: 'Why is my meter displaying an error message?',
                    value: 'This could be due to low voltage. Please wait until the voltage is normal.',
                },
            ]
        }
    },
    components: {
        FaqAccordion
    },
}
</script>

<style>

</style>
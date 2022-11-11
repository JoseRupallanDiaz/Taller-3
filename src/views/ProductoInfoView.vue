<template>
    <div class="d-flex flex-column align-items-center">
        <div class="mt-5 d-flex gap-5 justify-content-center p-3 w-50 bg-success bg-opacity-10 rounded shadow-sm">
            <img :src="productoInfo.images[0]" class="img-info rounded">
            <div class="d-flex flex-column">
                <h1>{{ productoInfo.name }}</h1>
                <h4>{{ productoInfo.createdAt }}</h4>
                <span class="py-5">{{ productoInfo.description }}</span>
            </div>
        </div>
        <div class="my-2 w-50">
            <h3 class="my-2 text-center">Reviews</h3>
            <div class="bg-primary rounded shadow-sm bg-opacity-10 p-3 my-3" v-for="review in reviews" :key="review">
                <reviewComponent :review="review"/>
            </div>
            <div class="bg-primary rounded shadow-sm bg-opacity-25 p-3 my-3">
                <h5>Nueva Reseña</h5>
                <form class="d-flex flex-column gap-2" id="formReview" @submit.prevent="reviewPost()">
                    <label for="review">Descripción</label>
                    <textarea id="review" v-model="msg"></textarea>
                    <button type="submit">Enviar Reseña</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import reviewComponent from '@/components/Review.vue'

export default {
    components: {
        reviewComponent
    },
    props: {
        id: String
    },
    data() {
        return {
            productoInfo: {
                images: []
            },
            reviews: [],
            msg: null
        }
    },
    async mounted() {
        const response = await axios.get("http://170.239.85.65:4000/products")
        response.data.forEach(producto => {
            if (producto._id === this.id) {
                this.productoInfo = producto
            }
        });
        const responseReview = await axios.get("http://170.239.85.65:4000/products/"+this.id+"/reviews")
        this.reviews = responseReview.data
    },
    methods:{
        reviewPost(){
            axios.post("http://170.239.85.65:4000/products/"+this.id+"/reviews",JSON.stringify({
                review: this.msg
            }),
            {
                headers: {
                    apikey: "549a1f20-84aa-41a5-ad24-13ac557617e6",
                    "Content-Type": "application/json"
                }
            })
            .then(window.location.reload)
            .catch( err => {
                console.log(err)
            })
        }
    }
}
</script>

<style>
.img-info {
    max-width: 300px;
}
</style>
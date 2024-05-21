<template>
    <!-- Use v-model to get data from the form -->
    <div class="modal-box flex flex-col gap-3">
        <h3 class="font-bold text-lg">Add a product</h3>
        <label class="input input-bordered flex items-center gap-2">
            Name
            <input type="text" class="grow" placeholder="Product" v-model="this.product.name" required />
        </label>
        <label class="input input-bordered flex items-center gap-2">
            Description
            <input type="text" class="grow" placeholder="This a product" v-model="this.product.description" required />
        </label>
        <label class="input input-bordered flex items-center gap-2">
            Price
            <input type="number" class="grow" placeholder="9.99$" v-model="this.product.price" required />
        </label>

        <label class="input input-bordered flex items-center gap-2">
            Quantity
            <input type="number" class="grow" placeholder="9.99$" v-model="this.product.quantity" required />
        </label>

        <div class="modal-action">
            <form method="dialog" class="inline-flex justify-end gap-4">
                <!-- Use @click to execute the addProduct() function -->
                <button class="btn btn-info" @click="this.addProduct">Add</button>
                <button class="btn">Close</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
    name: "AddProduct",
    data() {
        return {
            product: {}
        }
    },
    methods: {
        async addProduct() {
            try {
                const response = await axios.post("http://127.0.0.1:8000/api/products", this.product)
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }
    }

}


</script>

<style></style>
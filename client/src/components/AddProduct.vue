<template>
    <!-- Use v-model to get data from the form -->
    <div class="modal-box flex flex-col gap-3">
        <h3 class="font-bold text-lg">Add a product</h3>
        <label class="input input-bordered flex items-center gap-2">
            Name
            <input type="text" class="grow" placeholder="Product" required />
        </label>
        <label class="input input-bordered flex items-center gap-2">
            Description
            <input type="text" class="grow" placeholder="This a product" required />
        </label>
        <label class="input input-bordered flex items-center gap-2">
            Price
            <input type="number" class="grow" placeholder="9.99$" required />
        </label>

        <label class="input input-bordered flex items-center gap-2">
            Quantity
            <input type="number" class="grow" placeholder="9.99$" required />
        </label>

        <div class="modal-action">
            <form method="dialog" class="inline-flex justify-end gap-4">
                <!-- Use @click to execute the addProduct() function -->
                <button class="btn btn-info">Add</button>
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
            // Define  the object that will store our new product
        }
    },
    methods: {
        addProduct() {
            // Code for adding a new product goes here
            // Make sure that the function is an  async one
        }
    }

}


</script>

<style></style>
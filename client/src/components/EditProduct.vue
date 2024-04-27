<template>
    <!-- Use v-model to get data from the form -->
    <!-- You can bind the Value attribut to showcase the product to be edited -->
    <div class="modal-box flex flex-col gap-3">
        <h3 class="font-bold text-lg">Edit product</h3>
        <label class="input input-bordered flex items-center gap-2">
            Id
            <input type="text" class="grow cursor-no-drop" disabled />
        </label>

        <label class="input input-bordered flex items-center gap-2">
            Name
            <input type="text" class="grow"  required />
        </label>

        <label class="input input-bordered flex items-center gap-2">
            Desc
            <input type="text" class="grow"  
                required />
        </label>

        <label class="input input-bordered flex items-center gap-2">
            Price
            <input type="number" class="grow "   />
        </label>

        <label class="input input-bordered flex items-center gap-2">
            Quantity
            <input type="number" class="grow "  />
        </label>

        <div class="modal-action">
            <form method="dialog" class="inline-flex justify-end gap-4">
                <!-- Use @click to execute the editProduct() function -->
                <button class="btn btn-info ">Confirm</button>
                <button class="btn">Close</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
export default {
    name: "EditProduct",
    props: {
        // Prop goes here
    },
    methods: {
        editProduct(){
           // Code for editing product
        }
    }
}
</script>

<style></style>
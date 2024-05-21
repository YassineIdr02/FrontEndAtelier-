<template>
    <div class="modal-box flex flex-col gap-3">
        <h3 class="font-bold text-lg">Are you sure you want to delete?</h3>
        <div class="modal-action">
            <form method="dialog" class="inline-flex justify-end gap-4">
                <!-- Use @click to execute the deleteProduct() function -->
                <button class="btn btn-error" @click="this.deleteProduct">Delete</button>
                <button class="btn">Cancel</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
    name: "DeleteConfirmation",
    props: {
        productId: "",
       
    },
    methods: {
        async deleteProduct() {
            const response = await  axios.delete(`http://localhost:8000/api/products/${this.productId}`)
            
        }
    }
}
</script>

<style></style>
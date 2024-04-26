<template>
    <div class="modal-box flex flex-col gap-3">
        <h3 class="font-bold text-lg">Edit product</h3>
        <label class="input input-bordered flex items-center gap-2">
            Id
            <input type="text" class="grow cursor-no-drop" :value="this.product.id" disabled />
        </label>

        <label class="input input-bordered flex items-center gap-2">
            Name
            <input type="text" class="grow" v-model="this.product.name"  required />
        </label>

        <label class="input input-bordered flex items-center gap-2">
            Desc
            <input type="text" class="grow" v-model="this.product.description" 
                required />
        </label>

        <label class="input input-bordered flex items-center gap-2">
            Price
            <input type="number" class="grow " v-model="this.product.price"  />
        </label>

        <label class="input input-bordered flex items-center gap-2">
            Quantity
            <input type="number" class="grow " v-model="this.product.quantity" />
        </label>

        <div class="modal-action">
            <form method="dialog" class="inline-flex justify-end gap-4">
                <button class="btn btn-info " @click="this.editProduct()">Confirm</button>
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
        product: Object,
    },
    methods: {
        async editProduct(){
            try {
                const response = await axios.patch(`http://127.0.0.1:8000/api/products/${this.product.id}`,this.product)
                toast.success("Updated Successfully!")
                setTimeout(function () { window.location.reload(); }, 1000);
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>

<style></style>
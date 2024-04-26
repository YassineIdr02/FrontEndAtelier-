
<template>
  <div class="flex flex-col gap-5 items-center mt-32">
    <div class="overflow-x-auto w-[90%]">
      <table class="table table-zebra">
        <!-- head -->
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Description</th>
            <th>Price ($)</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index ) in this.products" :key="index">
            <th>{{ index + 1 }}</th>
            <td>{{ product.name }}</td>
            <td>{{ product.description }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.quantity }}</td>
            <td class="flex flex-row gap-3">
              <font-awesome-icon icon="fa-solid fa-trash" class="hover:cursor-pointer" @click="showDeleteConfirmation(product.id)" />
              <font-awesome-icon icon="fa-solid fa-eye" class="hover:cursor-pointer"  />
              <font-awesome-icon icon="fa-solid fa-pen" class="hover:cursor-pointer" @click="showEditModal(product)" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <button class="btn btn-success mx-auto" onclick="add_form.showModal()">
      <font-awesome-icon icon="fa-solid fa-plus w-[20px]" />Add product
    </button>

    <dialog id="add_form" class="modal">
      <AddProduct />
    </dialog>

    <dialog id="edit_form" class="modal">
      <EditProduct :product="this.editProduct" />
    </dialog>

    <dialog id="dc_form" class="modal">
      <DeleteConfirmation :productId="this.productId" />
    </dialog>

  </div>
</template>

<script >
import AddProduct from './AddProduct.vue'
import DeleteConfirmation from './DeleteConfirmation.vue'
import EditProduct from './EditProduct.vue'
import axios from 'axios'

export default {
  name: "TableView",
  components: {
    AddProduct,
    EditProduct,
    DeleteConfirmation
  },

  data() {
    return {
      products: [],
      editProduct: {},
      productId: ""
    }
  },

  methods: {
    async getProducts() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/products");
        this.products = response.data;
      } catch (error) {
        console.log(response);
      }
    },
    showEditModal(product) {
      this.editProduct = product;
      edit_form.showModal();
    },
    showDeleteConfirmation(productid) {
      this.productId = productid;
      dc_form.showModal();
    },
  },

  mounted() {
    this.getProducts()
  }


}
</script>


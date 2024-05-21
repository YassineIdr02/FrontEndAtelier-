
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

              <!-- Call up the function  to edit/delete a product. Use @click event for button -->
              <font-awesome-icon icon="fa-solid fa-trash" class="hover:cursor-pointer"  @click="this.showDeleteConfirmation(product.id)" />
              <font-awesome-icon icon="fa-solid fa-pen" class="hover:cursor-pointer" onclick="edit_form.showModal()" />

              <!-- Feel free to add a popup to show  more details about the product. Use the api endpoint http://127.0.0.1:8000/api/products/:id -->
              <font-awesome-icon icon="fa-solid fa-eye" class="hover:cursor-pointer"  />
            </td>

          </tr>
        </tbody>
      </table>
    </div>
    <button class="btn btn-success mx-auto" onclick="add.showModal()">
      <font-awesome-icon icon="fa-solid fa-plus w-[20px]" />Add product
    </button>

    <dialog id="add" class="modal">
      <AddProduct />
    </dialog>

    <dialog id="edit_form" class="modal">
      <!-- Pass down the product to be edit as a prop -->
      <EditProduct  />
    </dialog>

    <dialog id="dc_form" class="modal">
      <!-- Pass down the product Id to be deleted as a prop -->
      <DeleteConfirmation :productId="this.productId" />
    </dialog>

    <dialog id="prd_form" class="modal">
      <DeleteConfirmation  />
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
      productId:""
      // Define the product array
      // Define edit variables to be used in editing a product (will be passed down as a prop)
      // Define product Id for use with delete function (will be passed down as a prop)
    }
  },

  methods: {
    // Make sure this function is an async one
    async getProducts() {
     const response = await axios.get("http://127.0.0.1:8000/api/products")
     console.log(response);
     this.products = response.data;
    },

    showEditModal(product) {
      // Set the edited product
      edit_form.showModal();
    },

    showDeleteConfirmation(productid) {
      this.productId = productid
      dc_form.showModal();
    },
  },

  mounted() {
    this.getProducts();
  }
}
</script>


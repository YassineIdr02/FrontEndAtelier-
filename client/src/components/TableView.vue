
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
            <td><!-- product name here --></td>
            <td><!-- product description here --></td>
            <td><!-- product price here --></td>
            <td><!-- product Quantity here --></td>
            <td class="flex flex-row gap-3">
              <!-- Call up the function  to edit/delete a product. Use @click event for button -->
              <font-awesome-icon icon="fa-solid fa-trash" class="hover:cursor-pointer"  />
              <font-awesome-icon icon="fa-solid fa-pen" class="hover:cursor-pointer"  />

              <!-- Feel free to add a popup to show  more details about the product. Use the api endpoint http://127.0.0.1:8000/api/products/:id -->
              <font-awesome-icon icon="fa-solid fa-eye" class="hover:cursor-pointer"  />
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
      <!-- Pass down the product to be edit as a prop -->
      <EditProduct  />
    </dialog>

    <dialog id="dc_form" class="modal">
      <!-- Pass down the product Id to be deleted as a prop -->
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
      // Define the product array
      // Define edit variables to be used in editing a product (will be passed down as a prop)
      // Define product Id for use with delete function (will be passed down as a prop)
    }
  },

  methods: {
    // Make sure this function is an async one
    getProducts() {
      // Code for  getting products goes here
    },

    showEditModal(product) {
      // Set the edited product
      edit_form.showModal();
    },

    showDeleteConfirmation(productid) {
      // Set the productId
      dc_form.showModal();
    },
  },

  mounted() {
    // Call the get Products method when the component is loaded
  }


}
</script>


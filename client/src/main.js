import "./style.css";
import { createApp } from "vue";
import axios from "axios";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrash,
  faEye,
  faPen,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Vue3Toastify from "vue3-toastify";
import "vue3-toastify/dist/index.css";

createApp(App).config.globalProperties.$axios = axios;
library.add(faTrash, faEye, faPen, faPlus);

axios.defaults.baseURL = "http://127.0.0.1:8000/api";

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(Vue3Toastify, {
    autoClose: 3000,
    // ...
  })
  .mount("#app");

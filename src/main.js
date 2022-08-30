import {
    createApp
} from "vue";

import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap';
import '@coreui/coreui/dist/css/coreui.min.css'

import axios from 'axios'
import VueAxios from 'vue-axios'
// Import component
import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'

import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

import CKEditor from '@ckeditor/ckeditor5-vue';

//自訂義message
import $messageState from '@/methods/messageState';
import { numberAddComma } from "@/libs/filters";


import {
    Field,
    Form,
    ErrorMessage,
    defineRule,
    configure,
    
} from 'vee-validate'
// Vee Validate－規則
import {
    required,
    email,
    min
} from '@vee-validate/rules'
// Vee Validate－多國語系
import {
    localize,
    setLocale
} from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

import 'animate.css/animate.css';



import App from "./App.vue";
import router from "./router";



// Vee Validate－規則
defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
configure({
    generateMessage: localize({
        zh_TW: zhTW
    }),
    validateOnInput: false
})
setLocale('zh_TW')

const app = createApp(App);

//千分位
app.config.globalProperties.$filters = { numberAddComma };
//訊息
app.config.globalProperties.$messageState = $messageState;

app.use(VueAxios, axios);
app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)
app.component('Loading', Loading)
app.use(CKEditor);

app.component(Swal)
app.use(router);


app.mount("#app");
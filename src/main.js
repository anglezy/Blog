/*
 * @Description: 这是***页面（组件）
 * @Date: 2019-08-05 18:38:15
 * @Author: 米虫
 * @LastEditors: 米虫
 * @LastEditTime: 2019-11-12 11:02:59
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import VueResource from "vue-resource";
import VueImgInputer from "vue-img-inputer";
import vUploader from "v-uploader";
import Viewer from "v-viewer";
import "viewerjs/dist/viewer.css";
import ElementUI from "element-ui"; //cdn
import "element-ui/lib/theme-chalk/index.css"; //cdn
Vue.use(VueResource);
Vue.use(ElementUI);
Vue.use(Viewer);
Viewer.setDefaults({
  Options: {
    inline: true,
    button: true,
    navbar: true,
    title: true,
    toolbar: true,
    tooltip: true,
    movable: true,
    zoomable: true,
    rotatable: true,
    scalable: true,
    transition: true,
    fullscreen: true,
    keyboard: true,
    url: "data-source"
  }
});

/**
 * v-uploader plugin global config
 */
const uploaderConfig = {
  uploadFileUrl: "http://xxx/upload",
  deleteFileUrl: "http://xxx/delete",
  showMessage: (vue, message) => {
    //using v-dialogs to show message
    vue.$vDialog.alert(message, null, { messageType: "error" });
  }
};

//install plugin with options
Vue.use(vUploader, uploaderConfig);

Vue.component("VueImgInputer", VueImgInputer);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});

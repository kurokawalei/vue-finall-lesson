<template>
  <div
    id="productModal"
    ref="productModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div
          :class="isNew ? 'bg-primary' : 'bg-warning'"
          class="modal-header text-white"
        >
          <h5 id="productModalLabel" class="modal-title text-center">
            <span v-if="isNew">新增產品</span>
            <span v-else style="color: #000">編輯產品</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-3">
                <label for="uploadImg" class="form-label">新增主圖</label>

                <input
                  accept="image/*"
                  type="file"
                  class="form-control mb-3"
                  id="uploadImg"
                  ref="pathClear"
                  @change="upload('main', $event)"
                />

                <img class="img-fluid mb-3" :src="tempProduct.imageUrl" />

                圖片寬度為:{{ width }}

                <button
                  class="btn btn-outline-danger btn-sm d-block w-100"
                  v-if="tempProduct.imageUrl"
                  @click="tempProduct.imageUrl = ''"
                >
                  刪除
                </button>
              </div>
              <!-- 多圖設置 file選擇檔案 -->
              <div class="mb-3">
                <div v-if="Array.isArray(tempProduct.imagesUrl)">
                  <label for="uploadImgs" class="form-label">多圖設置</label>
                  <input
                    v-if="
                      !tempProduct.imagesUrl.length ||
                      tempProduct.imagesUrl[tempProduct.imagesUrl.length - 1]
                    "
                    type="file"
                    class="form-control mb-3"
                    id="uploadImgs"
                    ref="pathesClear"
                    @change="upload('sub', $event)"
                  />
                  <template
                    v-for="(img, index) in tempProduct.imagesUrl"
                    :key="index"
                  >
                    <img
                      class="img-fluid"
                      :src="tempProduct.imagesUrl[index]"
                    />
                    <button
                      class="btn btn-outline-danger btn-sm d-block w-100 mb-3"
                      @click="tempProduct.imagesUrl.splice(index, 1)"
                    >
                      刪除檔案
                    </button>
                  </template>
                </div>
                <div v-else>
                  <label for="uploadImgs" class="form-label">多圖設置</label>
                  <input
                    type="file"
                    class="form-control"
                    id="uploadImgs"
                    placeholder="請輸入圖片網址"
                    @change="upload('sub', $event)"
                  />
                </div>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="form-floating mb-3">
                <input
                  id="title"
                  type="text"
                  class="form-control"
                  placeholder="請輸入標題"
                  v-model="tempProduct.title"
                />
                <label for="title" class="form-label">標題</label>
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <div class="form-floating">
                    <!-- v-model 綁定 tempProduct.category -->
                    <input
                      id="category"
                      type="text"
                      class="form-control"
                      placeholder="請輸入分類"
                      v-model="tempProduct.category"
                    />
                    <label for="category" class="form-label">分類</label>
                  </div>
                </div>
                <div class="mb-3 col-md-6">
                  <div class="form-floating">
                    <!-- v-model 綁定 tempProduct.unit -->
                    <input
                      id="unit"
                      type="text"
                      class="form-control"
                      placeholder="請輸入單位"
                      v-model="tempProduct.unit"
                    />
                    <label for="unit" class="form-label">單位</label>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <!-- 產品原價 -->
                  <!-- v-model 綁定 tempProduct.origin_price -->
                  <div class="form-floating">
                    <input
                      id="origin_price"
                      type="number"
                      min="0"
                      class="form-control"
                      placeholder="請輸入原價"
                      v-model="tempProduct.origin_price"
                    />
                    <label for="origin_price" class="form-label">原價</label>
                  </div>
                </div>
                <div class="mb-3 col-md-6">
                  <!-- 產品售價 -->
                  <!-- v-model 綁定 tempProduct.price -->
                  <div class="form-floating">
                    <input
                      id="price"
                      type="number"
                      min="0"
                      class="form-control"
                      placeholder="請輸入售價"
                      v-model="tempProduct.price"
                    />
                    <label for="price" class="form-label">售價</label>
                  </div>
                </div>
              </div>
              <hr />
              <div class="mb-3">
                <div class="form-floating">
                  <!-- v-model 綁定 tempProduct.description -->
                  <textarea
                    id="description"
                    type="text"
                    class="form-control"
                    placeholder="請輸入產品描述"
                    v-model="tempProduct.description"
                  ></textarea>
                  <label for="description" class="form-label">產品描述</label>
                </div>
              </div>
              <div class="mb-3">
                <div class="form-floating">
                  <!-- v-model 綁定 tempProduct.content -->
                  <textarea
                    id="description"
                    type="text"
                    class="form-control"
                    placeholder="請輸入說明內容"
                    v-model="tempProduct.content"
                    style="height: 100px"
                  ></textarea>

                  <!-- <ckeditor                 
                  :editor="editor"
                  :config="editorConfig"
                  v-model="tempProduct.content"
                ></ckeditor> -->
                </div>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    id="is_enabled"
                    class="form-check-input"
                    type="checkbox"
                    :true-value="1"
                    :false-value="0"
                    v-model="tempProduct.is_enabled"
                  />
                  <label class="form-check-label" for="is_enabled"
                    >是否啟用</label
                  >
                </div>
              </div>
            </div>

            <!-- button end -->
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            @click="updateProduct"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
  `
</template>

<script>
import Modal from "bootstrap/js/dist/modal";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const MAX_WIDTH = 800;
const MAX_HEIGHT = 450;

export default {
  props: ["product", "isNew"],
  emits: ["get-data", "loaded"],
  inject: ["emitter"],

  data() {
    return {
      imageLoaded: false,
      image: {
        size: "",
        height: "",
        width: "",
      },
      modal: "",
      Util: {},
      check: true,
      width: "",

      tempProduct: {},
      editor: ClassicEditor,
      editorConfig: {
        toolbar: ["heading", "typing", "bold", "italic", "|", "link"],
      },
    };
  },
  watch: {
    product() {
      this.tempProduct = JSON.parse(JSON.stringify(this.product)); // 因為單向數據流的關係，所以要用深拷貝另外一個物件來存資料
    },
  },
  methods: {
    updateProduct() {
      let url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/admin/product`;
      let http = "post";

      if (!this.isNew) {
        //修改產品
        url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
        http = "put";
      }

      this.$http[http](url, { data: this.tempProduct })
        .then((res) => {
          // 外層的方法
          this.$emit("get-data");
          this.modal.hide();
          this.emitter.emit("push-message", {
            style: "success",
            title: "已更新",
            content: res.data.message,
          });
        })
        .catch((err) => {
          this.emitter.emit("push-message", {
            style: "danger",
            title: "更新失敗",
            content: err.data,
          });
        });
    },
    openModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },

    upload(isMain, event) {
      // 圖片上傳
      // console.dir(event);
      // this.imageLoaded = false;
      const file = event.target.files[0];
      if (!file || file.type.indexOf("image/") !== 0) return;
      console.log("f", file);

      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (evt) => {
        let img = new Image();
        img.onload = () => {
          this.image.width = img.width;
          this.image.height = img.height;
          this.imageLoaded = true;
          console.log(this.image);
          if (this.image.width !== MAX_WIDTH) {
           // ("圖片寬度不正確");
            this.emitter.emit("push-message", {
                    style: "error",
                    title: "圖片格式錯誤",
                   
                  });
            this.imageLoaded = false;
            return;
          }
          if (this.image.height !== MAX_HEIGHT) {
            //  this.imageError = `The image height (${this.image.height}) is too much (max is ${MAX_HEIGHT}).`;
            //("圖片高度不正確");
                this.emitter.emit("push-message", {
                    style: "error",
                    title: "圖片格式錯誤",
                   
                  });
            this.imageLoaded = false;
            return;
          }

          console.log(this.imageLoaded);

          if (this.imageLoaded) {
            const formData = new FormData();
            formData.append("file-to-upload", file);

            //console.log( formData)
            this.$http
              .post(
                `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/admin/upload`,
                formData
              )
              .then((res) => {
                if (isMain === "main") {
                  this.tempProduct.imageUrl = res.data.imageUrl;
                  this.$refs.pathClear.value = "";
                  this.emitter.emit("push-message", {
                    style: "success",
                    title: "已更新",
                    content: res.data.message,
                  });
                } else if (
                  isMain === "sub" &&
                  !Array.isArray(this.tempProduct.imagesUrl)
                ) {
                  this.tempProduct.imagesUrl = [];
                  this.tempProduct.imagesUrl.push(res.data.imageUrl);
                  this.$refs.pathesClear.value = "";
                  this.emitter.emit("push-message", {
                    style: "success",
                    title: "已更新",
                    content: res.data.message,
                  });
                } else if (
                  isMain === "sub" &&
                  Array.isArray(this.tempProduct.imagesUrl)
                ) {
                  this.tempProduct.imagesUrl.push(res.data.imageUrl);
                  this.$refs.pathesClear.value = "";
                  this.emitter.emit("push-message", {
                    style: "success",
                    title: "已更新",
                    content: res.data.message,
                  });
                }
              })
              .catch((err) => {
                console.log(err);
              });
          } else {
            return;
          }
        };
        img.src = evt.target.result;
      };

      reader.onerror = (evt) => {
        console.error(evt);
      };

    },
  },

  mounted() {
    this.modal = new Modal(this.$refs.productModal, {
      keyboard: false,
      backdrop: "static",
    });
  },
};
</script>

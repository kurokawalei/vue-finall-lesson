<template>
  <div
    class="modal fade"
    id="articleModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="articleModal"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span v-if="status === 'add'">新增貼文</span>
            <span v-else>編輯貼文</span>
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
                <label for="title" class="form-label">標題</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  v-model="tempArticle.title"
                  placeholder="請輸入標題"
                />
              </div>
              <div class="mb-3">
                <!-- <label for="image" class="form-label">輸入圖片網址</label>
                <input
                  type="text"
                  class="form-control"
                  id="image"
                  v-model="tempArticle.imageUrl"
                  placeholder="請輸入圖片連結"
                /> -->

                 <div class="mb-3">
                <label for="uploadImg" class="form-label">新增主圖</label>
                <input
                  type="file"
                  class="form-control mb-3"
                  id="uploadImg"
                  ref="pathClear"
                  @change="upload('main', $event)"
                />
                <img class="img-fluid mb-3" :src="tempArticle.imageUrl" />
                <button
                  class="btn btn-outline-danger btn-sm d-block w-100"
                  v-if="tempArticle.imageUrl"
                  @click="tempArticle.imageUrl = ''"
                >
                  刪除檔案
                </button>
              </div>


               
              </div>
              <div class="mb-3">
                <label for="author" class="form-label">作者</label>
                <input
                  type="text"
                  class="form-control"
                  id="author"
                  v-model="tempArticle.author"
                  placeholder="請輸入標題"
                />
              </div>
              <div class="mb-3">
                <label for="createAt">文章建立日期</label>
                <input
                  type="date"
                  class="form-control"
                  id="createAt"
                  v-model="createAt"
                />
              </div>
            </div>
            <div class="col-sm-8">
              <label for="tag" class="form-label">標籤</label>
              <div class="row gx-1 mb-3">
                <div
                  class="col-md-2 mb-1"
                  v-for="(label, key) in tempArticle.tag"
                  :key="key"
                >
                  <div class="input-group input-group-sm">
                    <input
                      type="text"
                      class="form-control form-control"
                      id="tag"
                      v-model="tempArticle.tag[key]"
                      placeholder="請輸入標籤"
                    />
                    <button
                      type="button"
                      class="btn btn-outline-danger"
                      @click="tempArticle.tag.splice(key, 1)"
                    >
                      <i class="bi bi-x"></i>
                    </button>
                  </div>
                </div>
                <div
                  class="col-md-2 mb-1"
                  v-if="
                    tempArticle.tag[tempArticle.tag.length - 1] ||
                    !tempArticle.tag.length
                  "
                >
                  <button
                    class="btn btn-outline-primary btn-sm d-block w-100"
                    @click="tempArticle.tag.push('')"
                  >
                    新增標籤
                  </button>
                </div>
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">文章描述</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="description"
                  v-model="tempArticle.description"
                  placeholder="請輸入文章描述"
                ></textarea>
              </div>
              <div class="mb-3">
                <ckeditor
                  :editor="editor"
                  :config="editorConfig"
                  v-model="tempArticle.content"
                ></ckeditor>
                <!-- <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  v-model="tempArticle.content"
                ></textarea> -->
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    v-model="tempArticle.isPublic"
                    id="isPublic"
                  />
                  <label class="form-check-label" for="isPublic">
                    是否公開
                  </label>
                </div>
              </div>
            </div>
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
          <button type="button" class="btn btn-primary" @click="updateArticle">
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "bootstrap/js/dist/modal";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

//編輯器語系
import '@ckeditor/ckeditor5-build-classic/build/translations/zh';
import MyUploadAdapter from "@/methods/uploadImg.js"


function MyCustomUploadAdapterPlugin(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
        // Configure the URL to the upload script in your back-end here!
        return new MyUploadAdapter(loader);
    };
}

export default {
  inject: ["emitter"],
  props: {
    article: {
      type: Object,
      default() {
        return {};
      },
    },
    status: {
      type: String,
      default: "",
    },
    currentPage: {
      // currentPage = pagination.current_page 把當前頁面帶進來
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      tempArticle: {
        tag: [""],
        imageUrl:''
      },
      articleModal: "",
      createAt: 0,
      // CKEditor 文字編輯器
      editor: ClassicEditor,
      editorConfig: {
      // toolbar: ["heading", "bold", "italic", "fontColor","|", "link","uploadImage"],
       toolbar: ['heading', 'bold', 'fontSize', 'fontColor', 'italic' ,'blockquote', 'link', '|','insertTable','uploadImage' ,'numberedList', 'bulletedList','HtmlEmbed', '|', 'undo', 'redo'],
       extraPlugins:[MyCustomUploadAdapterPlugin],
       language:'zh'
     
      
      },
    };
  },
  watch: {
    article() {
      this.tempArticle = {
        ...this.article,
        tag: this.article.tag || [],
        isPublic: this.article.isPublic || false,
      };
      console.log(this.tempArticle);
      // 時間戳轉換 yyyy-mm-dd
      const dateAndTime = new Date(this.tempArticle.create_at * 1000)
        .toISOString()
        .split("T");
      [this.createAt] = dateAndTime;
    },
    createAt() {
      this.tempArticle.create_at = Math.floor(new Date(this.createAt) / 1000);
    },
  },
  methods: {
    updateArticle() {
      // 狀態判斷新增或修改(新增=新資料，修改=舊資料)
      let url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/article`;
      let httpMethod = "post";
      let status = "新增";
      if (this.status !== "add") {
        const { id } = this.article; // 解構式取出 id
        url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/article/${id}`;
        httpMethod = "put";
        status = "更新";
      }
      this.$http[httpMethod](url, { data: this.tempArticle })
        .then((res) => {
          this.$messageState(res, status);

          this.$emit("update-article");
          this.closeArticleModal();
        })
        .catch((err) => {
          this.$messageState(err.response, "錯誤訊息");
        });
    },
    openArticleModal() {
      // 開啟新增、編輯文章 modal
      this.articleModal.show();
    },
    closeArticleModal() {
      // 關閉新增、編輯文章 modal
      this.articleModal.hide();
    },
     upload(isMain, event) {
      //圖片上傳
      console.dir(event);
      const file = event.target.files[0];
      //console.log(file);
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
            this.tempArticle.imageUrl = res.data.imageUrl;
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
    },
  },
  mounted() {
    this.articleModal = new Modal(this.$refs.articleModal);
  },
};
</script>

<style>
.ck-editor__editable_inline {
  min-height: 300px;
}
.ck-editor__editable {
  min-height: 200px;
}
/* 主要是 link 功能與 Modal 的 focus 有衝突 */
:root {
    --ck-z-default: 100;
    --ck-z-modal: calc( var(--ck-z-default) + 999 );
}
</style>
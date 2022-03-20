import axios from 'axios';

class MyUploadAdapter {
    constructor(loader) {
        // The file loader instance to use during the upload.
        this.loader = loader;
    }

    // Starts the upload process.
    upload() {
        const formData = new FormData();
        const url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/admin/upload`;

        return new Promise((resolve) => {
            this.loader.file
                .then((loadFile) => {
                        formData.append("file-to-upload", loadFile);
                        return axios.post(url, formData)
                            .then((res) => {
                                // this.tempProduct.imageUrl = res.data.imageUrl;
                                console.log(res.data.imageUrl);
                                resolve({
                                    default: res.data.imageUrl,
                                })
                            })
                            .catch((err) => {
                                console.log(err);
                            });
                    }


                )

        })



    }


    // Aborts the upload process.
    abort() {
        if (this.xhr) {
            this.xhr.abort();
        }
    }


}


export default MyUploadAdapter;
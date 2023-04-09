<template>
    <section v-show="!preview" class="container">
        <h1>Create new blog</h1>
        <small class="text-secondary">Share your expertise with the world by creating informative and thought-provoking articles that offer unique insights and perspectives. </small>
    
        <div class="w-100 bg-light p-2 d-flex justify-content-between align-items-center shadow-sm my-3 rounded">
            <div class="point d-flex align-items-center justify-content-around justify-content-lg-evenly gap-4">
            
              <span class="material-symbols-outlined" :class="{'text-info':blogMedia}" title="embed code instead of adding images" @click="blogMedia = true">code</span>            
              <span class="material-symbols-outlined" :class="{'text-info':!blogMedia}" title="add images instead of embed code" @click="blogMedia = false">add_photo_alternate</span>            
              <span class="material-symbols-outlined" title="preview changes" @click="blog.preview">preview</span>              
              <span class="material-symbols-outlined" title="Optimize images and save to drive">magic_button</span>
              <span class="material-symbols-outlined" title="enable Arabic">format_align_right</span>
            
            </div>
            
            <!-- <span class="spinner-grow spinner-grow-sm"></span> -->
            <i class="bi bi-upload d-block d-lg-none btn btn-sm btn-dark"></i>
            <button class="btn btn-outline-dark btn-sm d-none d-lg-block">
              <!-- <span class="spinner-grow spinner-grow-sm"></span> -->
              <div><i class="bi bi-github me-1"></i><span class="pop">Deploy</span></div>
            </button>
        </div>

        <div class="d-flex flex-column gap-2">
            
            <input v-show="!blogMedia" type="file" accept="image/png, image/jpg, image/jpeg" multiple class="form-control pop" id="blogSlides">
            <div v-show="blogMedia" class="input-group" id="blog-embed-code">            
                <span id="custom-thubnail" class="input-group-text material-symbols-outlined fs-5 point" title="Add custom thubnail">add_photo_alternate</span>
                <input v-model="blog.embed" type="text" class="form-control font-monospace" id="blog-embed-code" placeholder="Paste HTML here">
            </div>
            <grammarly-editor-plugin>        
                <input v-model="blog.title" type="text" class="form-control pop" placeholder="Blog Title">
            </grammarly-editor-plugin>
            <grammarly-editor-plugin>
                <input v-model="blog.seoDescription" class="form-control" placeholder="SEO Description">
            </grammarly-editor-plugin>
            <grammarly-editor-plugin>
                <input v-model="blog.seoKeywords" class="form-control" placeholder="SEO Keywords seperated by comma">
            </grammarly-editor-plugin>

            <!-- <textarea name="" id="" class="form-control" cols="30" rows="3" placeholder="Blog Article"></textarea> -->
            <grammarly-editor-plugin>
                <p contenteditable id="editor" class="form-control pop text-secondary" style="overflow: auto; resize: vertical; height: 200px;">Dotmark Article</p>
            </grammarly-editor-plugin>
            
        </div>
    </section>
    <section v-show="preview" class="container">
        <div class="row g-3 justify-content-center justify-content-lg-start"><button class="col-3 col-lg-1 btn btn-sm btn-outline-secondary" @click="preview =!preview">back</button></div>
        <div class="row g-3 my-3 justify-content-center">
            <section class="col-12 col-lg-5 p-2 shadow-sm ">     
                <figure id="blogPreviewFigure"></figure>
                <h1 class="text-info bebas"> {{blog.title}} </h1>
                <article id="blogPreviewArticle"></article>
            </section>
        </div>
    </section>
</template>
<script>
export default {
    data(){
        return{
            blogMedia:true,// true is for embed
            preview:false,
            slides64:[],
            blog:{
                title:'',
                thubnail:'',
                embed:'',
                slides:'',
                date:'',
                url:'',
                seoDescription:'',
                seoKeywords:'',
                article:'',
                preview:()=>{
                    //will render as html
                    this.preview = true
                    if(this.blogMedia) this.parseHTML('blogPreviewFigure',this.blog.embed)

                    this.parseHTML('blogPreviewArticle',this.compile('editor'))
                }
            }
        }
    },
    methods:{
        parseHTML(id,value){ document.getElementById(id).innerHTML = value },
        
        compile(id) {
            var editor = document.getElementById(id)
            var content = editor.innerText
            content = content.replace(/(\r\n|\n|\r)/g, "<br>");
            content = content.replace(/_([^*]+)_/g, `<u>$1</u>`);
            content = content.replace(/~([^*]+)~/g, `<s>$1</s>`);
            content = content.replace(/\.\.\.\.(.+?)\.\.\.\./g, "<code>$1</code>");
            content = content.replace(/\.\.\.(.+?)\.\.\./g, "<i>$1</i>");
            content = content.replace(/\.\.(.+?)\.\./g, "<b>$1</b>");
            content = content.replace(/!!([\w-]+)/g, `<i class="bi bi-$1"></i>`);
            content = content.replace(/(?<name>[^\s]+)::(?<url>[^\s]+)/gm, '<a href="$2" title="$2" >$1</a>')
            return content
        },

    },
    mounted(){
        const slidesInput = document.getElementById('blogSlides')
        slidesInput.addEventListener('change',e => {
            const files = e.target.files
            for(let i = 0 ; i < files.length ; i++){
                var reader = new FileReader()
                reader.readAsDataURL(files[i])
                reader.onload = () => {
                    console.log(`# 1 ${reader.result}`)
                }
            }
        })
    }
}
</script>

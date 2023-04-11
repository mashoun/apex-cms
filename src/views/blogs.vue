<template>
    <section v-show="!preview" class="container">
        <h1>Create new blog</h1>
        <small class="text-secondary">Share your expertise with the world by creating informative and thought-provoking articles that offer unique insights and perspectives. </small>
    
        <div class="w-100 bg-light p-2 d-flex justify-content-between align-items-center shadow-sm my-3 rounded">
            <div class="point d-flex align-items-center justify-content-around justify-content-lg-evenly gap-4" style="user-select:none;">
            
              <span class="material-symbols-outlined" :class="{'text-info':blogMedia}" title="embed code instead of adding images" @click="blogMedia = true">code</span>            
              <span class="material-symbols-outlined" :class="{'text-info':!blogMedia}" title="add images instead of embed code" @click="blogMedia = false">add_photo_alternate</span>            
              <span class="material-symbols-outlined" title="preview changes" @click="blog.preview">preview</span>              
              <span class="material-symbols-outlined" :class="{'text-info':isOptimized}" title="Optimize images and save to drive" @click="optimizeSlides64()">magic_button</span>
              <span class="material-symbols-outlined" :class="{'text-info':rtl}" @click="rtl = !rtl" title="enable Arabic">format_align_right</span>
            
            </div>
            
            <!-- <span class="spinner-grow spinner-grow-sm"></span> -->
            <i class="bi bi-upload d-block d-lg-none btn btn-sm btn-dark"></i>
            <button @click="test" class="btn btn-outline-dark btn-sm d-none d-lg-block">
              <!-- <span class="spinner-grow spinner-grow-sm"></span> -->
              <div><i class="bi bi-github me-1"></i><span class="pop">Deploy</span></div>
            </button>
        </div>

        <div class="d-flex flex-column gap-2">
            <input v-show="!blogMedia" type="file" accept="image/png, image/jpg, image/jpeg" multiple class="form-control pop" id="blogSlides">
            <img v-if="(customThubnail && blogMedia)" :src="customThubnail" alt="thubnail" width="40" class="img-fluid rounded ms-1">
            <div v-show="blogMedia" class="input-group" id="blog-embed-code">            
                <span @click="setCustomEmbedThubnail" id="custom-thubnail" class="input-group-text material-symbols-outlined fs-5 point" title="Add custom thubnail">add_photo_alternate</span>
               
                <input v-model="blog.embed" type="text" class="form-control font-monospace" id="blog-embed-code" placeholder="Paste HTML here">
            </div>
                    
            <input :dir="dir(rtl)" v-model="blog.title" type="text" class="form-control pop" placeholder="Blog Title">     
        
            <input :dir="dir(rtl)" v-model="blog.seoDescription" class="form-control" placeholder="SEO Description">        
        
            <input :dir="dir(rtl)" v-model="blog.seoKeywords" class="form-control" placeholder="SEO Keywords seperated by comma">      

            <p :dir="dir(rtl)" contenteditable id="editor" class="form-control pop text-secondary" style="overflow: auto; resize: vertical; height: 200px;">Dotmark Article</p>
        </div>
    </section>
    <section v-show="preview" class="container">
        <div class="row g-3 my-3 justify-content-center">
            <section class="col-12 col-lg-5 p-2 shadow-sm ">     
                <figure v-show="blogMedia" id="blogPreviewFigure"></figure>
                <figure v-show="!blogMedia && slides64.length != 0">
                <div id="carouselExampleIndicators" class="carousel slide">
                    
                    <div  class="carousel-inner">
                        <div class="carousel-item" :class="{active:activeCarousel(s.alt,'MM0')}" v-for="s in slides64" :key="s">
                            <img :src="s.src64" class="d-block w-100" :alt="s.alt">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="btn btn-sm btn-dark carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="btn btn-sm btn-dark carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                </figure>
                <h1 class="text-info bebas"> {{blog.title}} </h1>
                <article id="blogPreviewArticle"></article>
            </section>
        </div>
        <div class="row g-3 justify-content-center"><button class="col-3 col-lg-1 btn btn-sm btn-outline-secondary" @click="preview =!preview">back</button></div>

    </section>
</template>
<script>

import {useProfile} from '../stores/profile'
import Blog from '../assets/js/Blog'
import {compile, getCurrentDate, file64, parseHTML, optimizeImageQuality} from '../assets/js/Utilities'
export default {
    setup(){
        const store = useProfile()
        return {store}
    },
    data(){
        return{
            rtl:false,
            blogMedia:true,// true is for embed
            preview:false,
            slides64:[],
            isOptimized:false,
            customThubnail:false,
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
                    if(this.blogMedia) parseHTML('blogPreviewFigure',this.blog.embed)

                    parseHTML('blogPreviewArticle',compile('editor'))
                }
            }
        }
    },
    methods:{
        // parseHTML(id,value){ document.getElementById(id).innerHTML = value },

        async getThubnail(embedCode) {
            if (!this.blog.thubnail) {
                // means use the youtube default img thubnail
                // Extract the video ID from the embed code
                var videoId = embedCode.match(/embed\/([^\"]*)/)[1];

                // Return the URL for the maxresdefault thumbnail
                return 'https://img.youtube.com/vi/' + videoId + '/sddefault.jpg';
            }
            // else save the thubnail and return the url
            // this.spinner = true
            var api = this.api
            api += `?username=${this.username}&password=${this.password}&uploadImageToDrive=1&folderId=1HF4xxC9F_P7sUtE7Yvb9wOAGP5yBgCSm`
            // saving images to drive
            var res = await fetch(api, {
                method: "POST",
                headers: {
                "Content-Type": "text/plain",
                },
                body: JSON.stringify(this.images)
            })
            res = await res.json()
            return res[0].src
        },

        dir(x) { if (x) return 'rtl'; return 'ltr' },

        setCustomEmbedThubnail(){
            const input = document.createElement('input')
            input.type = 'file'
            input.click()
            input.addEventListener('change',e => {
                file64(e.target.files[0]).then(res=>{
                    // console.log(res)
                    this.customThubnail = res
                })
            })
        },
        activeCarousel(a,b){ return a.includes(b) },

        async optimizeSlides64(){
            if(this.customThubnail || this.slides64.length != 0){
                this.isOptimized = false
                if(this.customThubnail) this.customThubnail = await optimizeImageQuality(this.customThubnail,0.7)
                this.slides64.forEach( async slide => {
                    slide.src64 = await optimizeImageQuality(slide.src64,0.7)
                    // console.log(slide.src64)
                    
                })
                this.isOptimized = true
            }else alert('No selected image!')
        },

        generateBlogPage(){
            
        }


        


    },
    mounted(){
        const slidesInput = document.getElementById('blogSlides')
        slidesInput.addEventListener('change',async e => {
            this.slides64 = []
            const files = e.target.files
            for(let i = 0 ; i < files.length ; i++){
               this.slides64.push({
                    alt:`MM${i}-${getCurrentDate()}`,
                    src64: await file64(e.target.files[i])
                })
            }
        })

        // console.log( new Blog('hello').getPage())
    }
}
</script>

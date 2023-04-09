<template>
    <section class="container">
        <h1>Create Blog</h1>
        <small class="text-secondary">Share your expertise with the world by creating informative and thought-provoking articles that offer unique insights and perspectives. </small>
    
        <div class="w-100 bg-light p-2 d-flex justify-content-between align-items-center shadow-sm my-3 rounded">
            <div class="point d-flex align-items-center justify-content-around justify-content-lg-evenly gap-4">
            
              <span class="material-symbols-outlined" title="embed code instead of adding images">code</span>            
              <span class="material-symbols-outlined" title="add images instead of embed code">add_photo_alternate</span>            
              <span class="material-symbols-outlined" title="preview changes">preview</span>              
              <span class="material-symbols-outlined" title="Optimize images and save to drive">magic_button</span>
              <span class="material-symbols-outlined" title="enable Arabic">format_align_right</span>
            
            </div>
            
            <span v-if="spinner" class="spinner-grow spinner-grow-sm"></span>
            <i v-else class="bi bi-upload d-block d-lg-none btn btn-sm btn-dark" @click="deploy"></i>
            <button class="btn btn-outline-dark btn-sm d-none d-lg-block" @click="deploy">
              <span v-if="spinner" class="spinner-grow spinner-grow-sm"></span>
              <div v-else ><i class="bi bi-github me-1"></i><span class="pop">Deploy</span></div>
            </button>
        </div>

        <div class="d-flex flex-column gap-2">
            
            <input type="file" multiple class="form-control pop" id="blog-images">
            <div class="input-group" id="blog-embed-code">            
                <span id="custom-thubnail" class="input-group-text material-symbols-outlined fs-5 point" title="Add custom thubnail">add_photo_alternate</span>
                <input type="text" class="form-control font-monospace" id="blog-embed-code" placeholder="Paste HTML here"></div>
            <grammarly-editor-plugin>        
                <input type="text" class="form-control pop" placeholder="Blog Title">
            </grammarly-editor-plugin>
            <grammarly-editor-plugin>
                <input class="form-control" placeholder="SEO Description">
            </grammarly-editor-plugin>
            <grammarly-editor-plugin>
                <input class="form-control" placeholder="SEO Keywords seperated by comma">
            </grammarly-editor-plugin>

            <!-- <textarea name="" id="" class="form-control" cols="30" rows="3" placeholder="Blog Article"></textarea> -->
            <grammarly-editor-plugin>
                <p contenteditable id="editor" class="form-control pop text-secondary" style="overflow: auto; resize: vertical; height: 200px;">Dotmark Article</p>
            </grammarly-editor-plugin>
            
        </div>
    </section>
</template>
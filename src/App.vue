<template>
  <header class="w-100 position-fixed bg-light top-0 start-0 z-3 p-3 d-flex justify-content-between align-items-center shadow-sm pop">
    <section class="w-100 d-flex align-items-center justify-content-between">
      <div class="d-flex gap-3 align-items-center">
        <div class="position-relative point" title="check notifications">    
          <img :src="pic" data-bs-toggle="modal" data-bs-target="#notifications" alt="logo" class="img-fluid rounded-circle" width="35" height="35">
          <span class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-1"><span class="visually-hidden">unread messages</span></span>
        </div>
        <h5 class="text-secondary fs-4 m-0">Mashoun CMS</h5>
      </div>
      <i class="fs-4 bi bi-three-dots-vertical d-block d-lg-none" type="button" data-bs-toggle="dropdown"></i>
      <ul class="dropdown-menu">
        <li><router-link class="dropdown-item link-underline-opacity-100-hover link-primary link-offset-3 link-underline-opacity-0" to="/">Profile</router-link></li>
        <li><router-link class="dropdown-item link-underline-opacity-100-hover link-primary link-offset-3 link-underline-opacity-0"  to="/blogs">Blogs</router-link></li>
        <li><router-link class="dropdown-item link-underline-opacity-100-hover link-primary link-offset-3 link-underline-opacity-0"  to="/experience">Experience</router-link></li>
        <li><router-link class="dropdown-item link-underline-opacity-100-hover link-primary link-offset-3 link-underline-opacity-0"  to="/analytics">Analytics</router-link></li>
      </ul>
    </section>
    <nav class="d-none d-lg-flex gap-3 align-items-center">
      <router-link class="link-underline-opacity-100-hover link-primary link-offset-3 link-underline-opacity-0" to="/">Profile</router-link>
      <router-link class="link-underline-opacity-100-hover link-primary link-offset-3 link-underline-opacity-0"  to="/blogs">Blogs</router-link>
      <router-link class="link-underline-opacity-100-hover link-primary link-offset-3 link-underline-opacity-0"  to="/experience">Experience</router-link>
      <router-link class="link-underline-opacity-100-hover link-primary link-offset-3 link-underline-opacity-0"  to="/analytics">Analytics</router-link>
    </nav>
  </header>
  <main class="py-5 my-5">
    <router-view></router-view>
  </main>
  
  <!-- Modals -->
  <div class="modal fade" id="notifications" tabindex="-1" aria-labelledby="notifications" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-6" id="exampleModalLabel">You have 4 notifications</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="p-2">
            <span class="fs-xsmall pop">22 hrs ago</span>
            <div class="d-flex align-items-center gap-2">
              <i class="bi bi-camera-reels text-info"></i>
              <small class="pop text-secondary">mokhtar.ayoubi@live.com want to meet !</small>
            </div>
          </div>
          <hr>
          <div class="p-2">
            <span class="fs-xsmall pop">22 hrs ago</span>
            <div class="d-flex align-items-center gap-2">
              <i class="bi bi-star text-danger"></i>
              <small class="pop text-secondary">mohamad.ayoubi@gmail.com have subscribed to your newsLetter !</small>
            </div>
          </div>
          <hr>
          <div class="p-2">
            <span class="fs-xsmall pop">22 hrs ago</span>
            <div class="d-flex align-items-center gap-2">
              <i class="bi bi-chat-square-dots text-warning"></i>
              <small class="pop text-secondary">yarahoro7@gmail.com commented on a blog !</small>
            </div>
          </div>


        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Clear</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      pic : "https://drive.google.com/uc?export=view&id=1carhdDO1t8HQlqGYBC9ad57n2WQamfaa"
    }
  }
}
</script>
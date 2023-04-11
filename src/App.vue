<template>

  <!-- Login section -->
  <section v-if="!isLogedIn" class="w-100 h-100 bg-light position-fixed top-0 start-0 z-3">

    <div class="container my-5">
      <div class="row justify-content-center p-3">
        <section class="col-12 col-md-8 col-lg-5 shadow-sm px-3 py-4 bg-light rounded d-flex flex-column gap-2 align-items-center">
          
          <img :src="pic" alt="logo" width="70" height="70" class="img-fluid rounded-pill skeleton">
          <h6 class="pop fs-4 text-secondary text-center"><strong>Mahmoud Mashoun</strong></h6>
          <div class="w-100 d-flex flex-column gap-2 pop mt-3">
            <div class="form-floating">
              <input v-model="username" type="email" class="form-control" id="username" @keyup.enter="focus('password')"
                placeholder="name@example.com">
              <label for="username">Username</label>
            </div>
            <div class="form-floating">
              <input v-model="password" @keyup.enter="login" type="password" class="form-control" id="password"
                placeholder="Password">
              <label for="password">Password</label>
            </div>
            <button class="btn btn-primary ls-1 w-100" @click="login">
              <span v-if="loginSpinner" class="spinner-grow text-light spinner-grow-sm"></span>
              <span v-else>Login</span>
            </button>
            <small class="fs-xsmall text-secondary pop text-center mt-2">Access your account and start
              exploring !</small>
          </div>
        </section>
      </div>
    </div>
  </section>
  <header v-if="isLogedIn" class="w-100 position-fixed bg-light top-0 start-0 z-3 p-3 d-flex justify-content-between align-items-center shadow-sm pop">
    <section class="w-100 d-flex align-items-center justify-content-between">
      <div class="d-flex gap-3 align-items-center">
        <div class="position-relative point" title="check notifications">    
          <img :src="pic" data-bs-toggle="modal" data-bs-target="#notifications" alt="logo" class="img-fluid rounded-circle" width="40" height="40">
          <span v-if="notifyBadge" class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-pill bg-danger font-monospace fs-xsmall m-0">{{notifications.length}}</span>
        </div>
        <h5 class="text-secondary fs-4 m-0">Mashoun CMS </h5>
      </div>
      <i class="fs-4 bi bi-three-dots-vertical d-block d-lg-none" type="button" data-bs-toggle="dropdown"></i>
      <ul class="dropdown-menu">
        <li><router-link class="dropdown-item link-underline-opacity-100-hover link-primary link-offset-3 link-underline-opacity-0" to="/">Profile</router-link></li>
        <li><router-link class="dropdown-item link-underline-opacity-100-hover link-primary link-offset-3 link-underline-opacity-0" to="/comments">Comments</router-link></li>
        <li><router-link class="dropdown-item link-underline-opacity-100-hover link-primary link-offset-3 link-underline-opacity-0"  to="/blogs">Blogs</router-link></li>
        <li><router-link class="dropdown-item link-underline-opacity-100-hover link-primary link-offset-3 link-underline-opacity-0"  to="/experience">Experience</router-link></li>
        <li><router-link class="dropdown-item link-underline-opacity-100-hover link-primary link-offset-3 link-underline-opacity-0"  to="/analytics">Analytics</router-link></li>
      </ul>
    </section>
    <nav class="d-none d-lg-flex gap-3 align-items-center">
      <router-link class="link-underline-opacity-100-hover link-primary link-offset-3 link-underline-opacity-0" to="/">Profile</router-link>
      <router-link class="link-underline-opacity-100-hover link-primary link-offset-3 link-underline-opacity-0" to="/comments">Comments</router-link>
      <router-link class="link-underline-opacity-100-hover link-primary link-offset-3 link-underline-opacity-0"  to="/blogs">Blogs</router-link>
      <router-link class="link-underline-opacity-100-hover link-primary link-offset-3 link-underline-opacity-0"  to="/experience">Experience</router-link>
      <router-link class="link-underline-opacity-100-hover link-primary link-offset-3 link-underline-opacity-0"  to="/analytics">Analytics</router-link>
    </nav>
  </header>
  <main v-if="isLogedIn" class="py-5 my-5">
    <!-- <router-view :username="username" :password="password" :github="github" :api="api"></router-view> -->
    <router-view></router-view>
  </main>
  
  <!-- Modals -->
  <div class="modal fade" id="notifications" tabindex="-1" aria-labelledby="notifications" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-6 text-primary pop" id="exampleModalLabel">You have {{notifications.length}} notifications</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="px-3 d-flex flex-column">
          <span v-if="!notifyBadge" class="text-center material-symbols-outlined text-secondary display-1">notification_important</span>
          <span></span>
          <div v-for="n in notifications" :key="n" class="p-2">
            <span class="fs-xsmall pop">{{timo(n.date)}}</span>
            <div class="d-flex align-items-center gap-2">
              <i :class="iconClass(n)"></i>
              <small class="pop text-dark">{{n.title}}</small>
            </div>
          </div>


        </div>
        <div class="modal-footer">
          <button type="button" @click="clearNotifications" :disabled="!notifyBadge" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Clear</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { timo } from './assets/js/Utilities'
import {useProfile} from './stores/profile'
export default {
  setup(){
    const store = useProfile()
    return {store}
  },
  data(){
    return{

      api:'https://script.google.com/macros/s/AKfycbwhJnLMf1roJKCdImxSeXnrKNDhrptSMBkgeXDmLz2SWvuYKcDEs6alwVezKWCJrkhM3g/exec',
      // pic : "https://drive.google.com/uc?export=view&id=1carhdDO1t8HQlqGYBC9ad57n2WQamfaa",
      pic:'https://drive.google.com/uc?id=1QcQg7qzryHaTBoOjgRt-A8URIZ4N1Qmf&export=view',
      username: '',
      password: '',
      isLogedIn: false,
      loginSpinner: false,
      github: '',
      notifications:'',
      notifyBadge:false
    }
  },
  
  methods: {
    iconClass(notif){
      if(notif.icon == 'star') return 'text-danger bi bi-star'
      if(notif.icon == 'camera-reels') return 'text-info bi bi-camera-reels'
      return 'text-warning bi bi-chat-square'
    },
    login() {
      this.loginSpinner = true;
      var api = this.api
      api += `?username=${this.username}&password=${this.password}`

      fetch(api).then(res => res.json()).then(res => {
        // console.log(res)
        if (res != '500') {
          this.isLogedIn = true;
          this.loginSpinner = false;
          this.github = res
          this.getNotifications()
          this.store.setProfile(this.username,this.password,this.github,this.api)

        } else {

          document.getElementById('username').classList.add('is-invalid')
          document.getElementById('password').classList.add('is-invalid')
          this.username = ''
          this.password = ''
          this.loginSpinner = false;
        }
      }).catch(e => {
        console.log(e)
        alert('Weak Network Login again please')
        this.loginSpinner = false;

      })
    },
    async getNotifications(){
      var api = this.api
      api += `?username=${this.username}&password=${this.password}&getNotifications=1`
      var res = await fetch(api)
      res = await res.json()
      // console.log(res)
      if(res != '500' && res.length != 0) {

        const music = new Audio('./src/assets/media/tone.wav')
        this.notifications = res
        this.notifyBadge = true
        music.play()

      }

      // console.log(res)
    },
    async clearNotifications(){
      this.notifications = []
      this.notifyBadge = false
      var api = this.api
      api += `?clearNotifications=1&username=${this.username}&password=${this.password}`
      var res = await fetch(api)
      res = await res.json()
      // console.log(res)



    }
  }
}
</script>
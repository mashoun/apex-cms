<template>
    <section class="container gap-5 d-flex flex-column">
        <!-- Contact info -->
        <div class="row g-3">
            <div class="col-12 d-flex justify-content-between">
                <h5 class="pop text-center text-primary text-lg-start">Contact Info</h5>
                <button @click="setProfile" class="btn btn-sm btn-outline-primary" :disabled="spinner">Save profile</button>
            </div>
            <div class="col-12">
                <div v-if="spinner" class="skeleton rounded-circle" style="height:70px;width:70px"></div>
                <img v-else :src="profile.pic" alt="profile pic" width="70" height="70" class="skeleton img-fluid rounded-circle shadow-sm">
                
                <div class="mt-3">
                    <label v-if="!spinner" for="profilePic" class="form-label ps-1 fs-smaller pop">Set new profile pic </label>
                    <div v-if="spinner" class="skeleton rounded" style="height:2rem"></div>
                    <input v-show="!spinner" type="file" class="form-control" id="profilePic" accept="image/png, image/jpg, image/jpeg">
                </div>
            </div>
            
            <div v-if="spinner" class="col-12 col-lg-6"> <div class="skeleton rounded" style="height:3rem"></div> </div>
            <div v-else class="col-12 col-lg-6">
                <div class="form-floating">
                    <input v-model="profile.bio" class="form-control" type="text" placeholder="Leave a comment here" id="floatingTextarea">
                    <label for="floatingTextarea" class="fs-smaller">Your bio</label>
                </div>
            </div>

            <div v-if="spinner" class="col-12 col-lg-6"> <div class="skeleton rounded" style="height:3rem"></div> </div>
            <div v-else class="col-12 col-lg-6">
                <div class="form-floating">
                    <input v-model="profile.email" type="email" class="form-control" id="floatingInput1" placeholder="placeholderInput">
                    <label for="floatingInput1" class="fs-smaller">Email address</label>
                </div>
            </div>

            <div v-if="spinner" class="col-12 col-lg-6"> <div class="skeleton rounded" style="height:3rem"></div> </div>
            <div v-else class="col-12 col-lg-6">
                <div class="form-floating">
                    <input v-model="profile.number"  type="number" class="form-control" id="floatingInput2" placeholder="placeholderInput">
                    <label for="floatingInput2" class="fs-smaller">Phone number</label>
                </div>
            </div>

            <div v-if="spinner" class="col-12 col-lg-6"> <div class="skeleton rounded" style="height:3rem"></div> </div>
            <div v-else class="col-12 col-lg-6">
                <div class="form-floating">
                    <input v-model="profile.waCall"  type="url" class="form-control" id="floatingInput3" placeholder="placeholderInput">
                    <label for="floatingInput3" class="fs-smaller">Whatsapp call</label>
                </div>
            </div>

            <div v-if="spinner" class="col-12 col-lg-6"> <div class="skeleton rounded" style="height:3rem"></div> </div>
            <div v-else class="col-12 col-lg-6">
                <div class="form-floating">
                    <input v-model="profile.waChat"  type="url" class="form-control" id="floatingInput4" placeholder="placeholderInput">
                    <label for="floatingInput4" class="fs-smaller">Whatsapp chat</label>
                </div>
            </div>

            <div v-if="spinner" class="col-12 col-lg-6"> <div class="skeleton rounded" style="height:3rem"></div> </div>
            <div v-else class="col-12 col-lg-6">
                <div class="form-floating">
                    <input v-model="profile.waGroup"  type="url" class="form-control" id="floatingInput5" placeholder="placeholderInput">
                    <label for="floatingInput5" class="fs-smaller">Whatsapp group</label>
                </div>
            </div>

            <div v-if="spinner" class="col-12 col-lg-6"> <div class="skeleton rounded" style="height:3rem"></div> </div>
            <div v-else class="col-12 col-lg-6">
                <div class="form-floating">
                    <input v-model="profile.linkedIn"  type="url" class="form-control" id="floatingInput6" placeholder="placeholderInput">
                    <label for="floatingInput6" class="fs-smaller">LinkedIn</label>
                </div>
            </div>

            <div v-if="spinner" class="col-12 col-lg-6"> <div class="skeleton rounded" style="height:3rem"></div> </div>
            <div v-else class="col-12 col-lg-6">
                <div class="form-floating">
                    <input v-model="profile.github"  type="url" class="form-control" id="floatingInput7" placeholder="placeholderInput">
                    <label for="floatingInput7" class="fs-smaller">Github</label>
                </div>
            </div>

            <div v-if="spinner" class="col-12 col-lg-6"> <div class="skeleton rounded" style="height:3rem"></div> </div>
            <div v-else class="col-12 col-lg-6">
                <div class="form-floating">
                    <input v-model="profile.youtube"  type="url" class="form-control" id="floatingInput8" placeholder="placeholderInput">
                    <label for="floatingInput8" class="fs-smaller">Youtube</label>
                </div>
            </div>

            <div v-if="spinner" class="col-12 col-lg-6"> <div class="skeleton rounded" style="height:3rem"></div> </div>
            <div v-else class="col-12 col-lg-6">
                <div class="form-floating">
                    <input v-model="profile.stackOverflow"  type="url" class="form-control" id="floatingInput9" placeholder="placeholderInput">
                    <label for="floatingInput9" class="fs-smaller">Stack overflow</label>
                </div>
            </div>
        </div>

        <!-- Adding Links -->
        <div class="row g-3">
            <div class="col-12 d-flex justify-content-between">
                <h5 class="pop text-primary text-center text-lg-start">Custom links</h5>
                <button class="btn btn-sm btn-outline-primary" @click="addLink" :disabled="spinner">Add link</button>
                <!-- <span class="material-symbols-outlined fs-3 text-primary point" title="add link">add_link</span> -->
            </div>

            <div v-if="spinner" class="col-12 col-lg-6"> <div class="skeleton rounded" style="height:3rem"></div> </div>
            <div v-else class="col-12 col-lg-6">
                <div class="form-floating">
                    <input v-model="newLink.title" type="text" class="form-control" id="floatingInput10" placeholder="placeholderInput">
                    <label for="floatingInput10">Link title</label>
                </div>
            </div>

            <div v-if="spinner" class="col-12 col-lg-6"> <div class="skeleton rounded" style="height:3rem"></div> </div>
            <div v-else class="col-12 col-lg-6">
                <div class="form-floating">
                    <input v-model="newLink.url" type="url" class="form-control" id="floatingInput11" placeholder="placeholderInput">
                    <label for="floatingInput11">Link URL</label>
                </div>
            </div>
        </div>

        <!-- Adding Slides -->
        <div class="row g-3">
            <div class="col-12 d-flex justify-content-between">
                <h5 class="pop text-primary text-center text-lg-start">Image slides</h5>
                <button class="btn btn-sm btn-outline-primary" :disabled="spinner" @click="addSlide">Add Image</button>
                <!-- <span class="material-symbols-outlined fs-3 text-primary point" title="save image">save</span> -->
            </div>

            <div v-if="spinner" class="col-12 col-lg-6"> <div class="skeleton rounded" style="height:3rem"></div> </div>
            <div v-else class="col-12 col-lg-6">
                <div class="mb-3">
                    <label for="formFile" class="form-label ps-1 fs-smaller pop">Alt text</label>
                    <input v-model="slideAlt" class="form-control" type="text" id="formFile">
                </div>
            </div>

            <div v-show="spinner" class="col-12 col-lg-6"> <div class="skeleton rounded" style="height:3rem"></div> </div>
            <div v-show="!spinner" class="col-12 col-lg-6">
                <div class="mb-3">
                    <label for="addSlideBtn" class="form-label ps-1 fs-smaller pop">Select image </label>
                    <input class="form-control" type="file" id="addSlideBtn"  accept="image/png, image/jpg, image/jpeg">
                </div>
            </div>
        </div>

    </section>
</template>

<script>
export default {
    data(){
        return{
            newSlide:'',
            slideAlt:'',
            newLink:{
                title:'',
                url:''
            },
            spinner:false,
            profile:{
                email:'',
                number:'',
                waCall:'',
                waChat:'',
                waGroup:'',
                linkedIn:'',
                github:'',
                youtube:'',
                stackOverflow:'',
                pic:'',
                bio:''
            }
        }
    },
    methods:{
        
        getCurrentDate() {
        const currentDate = new Date();
        const day = currentDate.getDate().toString().padStart(2, '0');
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        const year = currentDate.getFullYear().toString();
        const hours = currentDate.getHours().toString().padStart(2, '0');
        const minutes = currentDate.getMinutes().toString().padStart(2, '0');
        const seconds = currentDate.getSeconds().toString().padStart(2, '0');

        return `${year}${month}${day}${hours}${minutes}${seconds}`;
        },
        async getProfile(){
            this.spinner = true
            var api = this.api
            api += `?getProfile=1`

            var res = await fetch(api)
            res = await res.json()
            
            console.log(res)
            this.profile = res
            this.spinner = false

        },
        async setProfile(){
           try{
            var profile = this.profile
            delete profile.links
            delete profile.slides
            delete profile.blogs

            var api = this.api
            api += `?setProfile=1&username=${this.username}&password=${this.password}`
            this.spinner = true
            var res = await fetch(api,{
                method:'POST',
                headers:{
                    'Content-Type':'text/plain'
                },
                body:JSON.stringify(profile)
            })
            res = await res.json()
            // console.log(res)
            this.spinner = false
           }catch(err){
            console.log(err)
            this.spinner = false

           }

        },
        async addLink(){
            try{
                this.spinner = true
                var api = this.api
                api += `?username=${this.username}&password=${this.password}&addLink=1&title=${this.newLink.title}&url=${this.newLink.url}`
                var res = await fetch(api)
                res = await res.json()

                console.log(res)
                this.spinner = false
            }catch(err){
                console.log(new Error(err))
            }
        },
        async addSlide(){
            try{
                
                this.spinner = true
                var api = this.api
                api += `?username=${this.username}&password=${this.password}&addSlide=1&folderId=1szJRlALMY075a2lRCmXUxCCRIZJWf5nu`
                var slides = []
                slides.push(this.newSlide)

                var res = await fetch(api,{
                    method:'POST',
                    headers:{
                        'Content-Type':'text/plain'
                    },
                    body:JSON.stringify(slides)
                })
                res = await res.json()

                console.log(res)
                this.spinner = false
            }catch(err){
                console.log(err)
                this.spinner = false
            }


            
        }
    },
    props:['api','username','password'],
    mounted(){
        this.getProfile()
        const profilePicBtn = document.getElementById('profilePic')
        profilePicBtn.addEventListener('change',e=>{
        
            const file = e.target.files[0]
            var reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = ()=>{
                this.profile.pic = reader.result
            }
        })

        const addSlideBtn = document.getElementById('addSlideBtn')
        addSlideBtn.addEventListener('change',e=>{
            const file = e.target.files[0]
            console.log(file)
            var reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = ()=>{
                this.newSlide = {
                    alt:`${this.slideAlt}-${this.getCurrentDate()}`,
                    src64:reader.result
                }
            }

        })

    }
}
</script>
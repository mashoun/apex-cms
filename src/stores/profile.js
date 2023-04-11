import { defineStore } from "pinia";

export const useProfile = defineStore('profile',{
    state:() => ({
        username:'',
        password:'',
        github:'',
        api:''
    }),
    actions:{
        setProfile(username,password,github,api){
            this.username = username
            this.password = password
            this.github = github
            this.api = api
        }

    }
})
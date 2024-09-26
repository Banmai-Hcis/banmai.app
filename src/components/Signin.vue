<script setup>
  import { RouterLink } from 'vue-router';
  import { FaArrowRightToBracket } from '@kalimahapps/vue-icons';
  import { BsExclamationTriangleFill } from '@kalimahapps/vue-icons';
  import { FaArrowRotateRight } from '@kalimahapps/vue-icons';
</script>

<script>
  import axios from 'axios';
  const sheet = 'https://script.google.com/macros/s/AKfycbxDTwd1XzUpL537ADs5TtQHx6H-5guyhSI_ldHDV7G8hbXNRbiGzgJJ9hM69G8mBnU/exec';

  export default {
    data() {
      return {
        status: 'null',
        responesData: undefined,
        signinLoading: false,
      }
    },
    methods: {
      signin() {
        const username = this.$refs.username.value;
        const password = this.$refs.password.value;

        this.signinLoading = true
        
        if (username == '' && password == ''){
          console.log('กรุณากรอกข้อมูล');
          this.status = 'undefineds'
          this.signinLoading = false
        } else {

          axios.get(sheet, 
            { params: { action: 'signin', user: username, password: password }}, 
            { headers: { 'Access-Control-Allow-Origin':'*' ,'Content-Type': 'application/json' }, mode: 'no-cors'}
          )
          .then(response => (
            this.responesData = response.data.data
          ))
          .catch(error => { 
            console.log(error) 
          })
          .finally(() => {
            if (this.responesData != undefined) {
              //console.log('Success');
              const responseUser = JSON.parse(JSON.stringify(this.responesData))
                this.$cookies.set('user', {name: responseUser.name, moo:responseUser.moo }, '1d');
                this.$router.push('/screen_list')
                //const user = this.$cookies.get('user');
                //console.log(user);
                
            } else {
              //console.log('Fail');
              this.status = 'fail'
              this.signinLoading = false
            }
          })
        }
      },
    },
  }
</script>

<template>
  <div class="p-5">
    <div class="bg-white rounded-3xl shadow-xl p-5">
      <div>
        <div class="flex flex-row justify-center">
          <div class="rotate-[-25deg]">
            <img class="animate-pulse h-14 p-5 mt-4 rotate-180" src="../assets/images/pharmacy.png">
          </div>
          <h1 class="text-center font-bold text-3xl py-3 mt-1">Banmai HCIS</h1>
          <img class="animate-pulse h-14 p-4 ms-0.5 mb-4 rotate-12" src="../assets/images/pharmacy.png">
        </div>
        <img class="image-full py-2" src="../assets/images/Signin.svg">

        <div class="pt-5 relative ">
          <h1 class="absolute top-0 left-4 font-bold text-xl bg-white p-1 pt-1.5 px-3 ps-2">เข้าสู่ระบบ</h1>
          <div class="border-2 border-dashed rounded-2xl p-5">
            
            <div v-if="status == 'undefineds'" class="flex flex-row gap-2 justify-center font-bold text-error text-sm">
              <BsExclamationTriangleFill class="mt-1"/>
              <span class="font-bold">กรุณากรอกข้อมูล</span>
            </div>

            <div v-if="status == 'fail'" class="flex flex-row gap-2 justify-center font-bold text-error text-sm">
              <BsExclamationTriangleFill class="mt-1"/>
              <span class="font-bold">Username / Password ไม่ถูกต้อง</span>
            </div>

            <label class="form-control w-full">
              <div class="label">
                <span class="label-text">Username</span>
              </div>
              <input type="text" ref="username" placeholder="Username" class="input input-bordered rounded-3xl w-full" />
            </label>
            <label class="form-control w-full">
              <div class="label">
                <span class="label-text">Password</span>
              </div>
              <input type="password" ref="password" placeholder="Password" class="input input-bordered rounded-3xl w-full mb-4" />
            </label>
          </div>
          <button v-if="signinLoading" class="btn btn-primary text-violet-50 item-center rounded-3xl shadow w-full mt-5 mb-2 animate-pulse"><FaArrowRotateRight class=" animate-spin" />กำลังเข้าสู่ระบบ</button>
          <button v-else v-on:click="signin" class="btn btn-primary text-violet-50 item-center rounded-3xl shadow w-full mt-5 mb-2"><FaArrowRightToBracket/>เข้าสู่ระบบ</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="">
    
</style>
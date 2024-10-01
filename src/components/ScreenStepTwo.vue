<script setup>
  import { reactive, ref } from 'vue'
  import { RouterLink } from 'vue-router';
  import Vue3Signature from "vue3-signature"

  // icon
  import { FaChevronLeft } from '@kalimahapps/vue-icons';
  import { FaXmark } from '@kalimahapps/vue-icons';
  import { FaRegPaste } from '@kalimahapps/vue-icons';

</script>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        title_name: 'คัดกรองบุหรี่และแอลกอฮอล์',
        // // data inherited
        // inherPID: this.$cookies.get('personData').personPID,
        // inherGender: this.$cookies.get('personData').personGender,
        // inherAge: this.$cookies.get('personData').personAge,
        // inherBMI: 0,
        // data form input
        btnCkeckCigarette: 0,
        btnCkeckCigaretteRole: 0,
        btnCkeckAlcohol: 0,
        btnCkeckAlcoholRole: 0,
        // formHight: "",
        // formBpTop: "",
        // formBpDown: "",
        // formWaist: "",
        // formBloodSugar: "",
        // // data process
        // interpretation: 1,
        // // error check
        // formWeightError: 0,
        // formHightError: 0,
        // formBpTopError: 0,
        // formBpDownError: 0,
        // formWaistError: 0,
        // formBloodSugarError: 0,
      }
    },
    methods: {
     
    },
    computed: {
    
    },
    methods: {
      goToScreenList() {
        this.$router.push('/screen_list')
      },
    },

  }
</script>

<template>
  <dialog id="my_modalCigaretteRole" class="modal modal-bottom sm:modal-middle">
    <div class="modal-box">
      <h3 class="text-lg font-bold">ระดับการสูบ</h3>
      <p class="pb-2 pt-1">โปรดเลือกระดับการสูบบุหรี่</p>
      <div class="modal-action mb-8">
        <form method="dialog" class="flex flex-col w-full gap-3 px-3">
          <button @click="btnCkeckCigaretteRole = 1" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">สูบนานๆ ครั้ง</button>
          <button @click="btnCkeckCigaretteRole = 2" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">สูบเป็นครั้งคราว</button>
          <button @click="btnCkeckCigaretteRole = 3" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">สูบเป็นประจำ</button>
        </form>
      </div>
    </div>
  </dialog>

  <dialog id="my_modalAlcoholRole" class="modal modal-bottom sm:modal-middle">
    <div class="modal-box">
      <h3 class="text-lg font-bold">ระดับการดื่ม</h3>
      <p class="pb-2 pt-1">โปรดเลือกระดับการดื่มแอลกอฮอล์</p>
      <div class="modal-action mb-8">
        <form method="dialog" class="flex flex-col w-full gap-3 px-3">
          <button @click="btnCkeckAlcoholRole = 1" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">ดื่มนานๆ ครั้ง</button>
          <button @click="btnCkeckAlcoholRole = 2" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">ดื่มเป็นครั้งคราว</button>
          <button @click="btnCkeckAlcoholRole = 3" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">ดื่มเป็นประจำ</button>
        </form>
      </div>
    </div>
  </dialog>


  <!-- nav bar -->
  <div class="flex item-center navbar bg-white shadow rounded-3xl rounded-tl-none rounded-tr-none p-0 px-4">
    <div class="navbar-start">
      <button class="text-primary" @click="goToScreenList()"><FaChevronLeft class="" /></button>
    </div>
    <div class="navbar-center">
      <div class="text-lg font-bold text-slate-600">{{ title_name }}</div>
    </div>
    <div class="navbar-end">

    </div>
  </div>
  <!-- nav bar -->

  <div class="relative w-full ">
    <div class="absolute items-center px-5 pt-7 mt-6">
      <span class=""><strong class="font-bold text-slate-500">คำอธิบาย</strong> </span>
        <ul class="list-disc ps-6 text-sm flex flex-col mt-1 gap-1">
          <li>คัดกรองความเสี่ยงจากการสูบบุหรี่</li>
          <li>คัดกรองความเสี่ยงจากการดื่มเครื่องดื่มแอลกอฮอล์</li>
          <!-- <li>การให้คำแนะนำ</li> -->
        </ul>
    </div>

    <svg width="100%" height="50%" id="svg" viewBox="0 0 1440 690" xmlns="http://www.w3.org/2000/svg" class=""><path d="M 0,700 L 0,131 C 100.02820512820514,139.46153846153845 200.0564102564103,147.92307692307693 275,139 C 349.9435897435897,130.07692307692307 399.802564102564,103.76923076923077 474,100 C 548.197435897436,96.23076923076923 646.7333333333335,115.00000000000001 729,116 C 811.2666666666665,116.99999999999999 877.2641025641024,100.23076923076923 953,118 C 1028.7358974358976,135.76923076923077 1114.2102564102565,188.07692307692307 1197,196 C 1279.7897435897435,203.92307692307693 1359.8948717948717,167.46153846153845 1440,131 L 1440,700 L 0,700 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="0.4" class="transition-all duration-300 ease-in-out delay-150 path-0"></path><path d="M 0,700 L 0,306 C 73.83589743589741,316.5051282051282 147.67179487179482,327.0102564102564 241,332 C 334.3282051282052,336.9897435897436 447.14871794871794,336.4641025641026 523,322 C 598.851282051282,307.5358974358974 637.7333333333333,279.1333333333333 714,267 C 790.2666666666667,254.86666666666665 903.9179487179488,259.00256410256407 986,267 C 1068.0820512820512,274.99743589743593 1118.5948717948718,286.8564102564103 1189,294 C 1259.4051282051282,301.1435897435897 1349.702564102564,303.57179487179485 1440,306 L 1440,700 L 0,700 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-1"></path><path d="M 0,700 L 0,481 C 94.0205128205128,501.1435897435897 188.0410256410256,521.2871794871794 265,511 C 341.9589743589744,500.71282051282054 401.8564102564103,459.9948717948718 475,461 C 548.1435897435897,462.0051282051282 634.5333333333332,504.73333333333335 708,499 C 781.4666666666668,493.26666666666665 842.0102564102565,439.0717948717949 922,427 C 1001.9897435897435,414.9282051282051 1101.425641025641,444.97948717948714 1191,461 C 1280.574358974359,477.02051282051286 1360.2871794871794,479.01025641025643 1440,481 L 1440,700 L 0,700 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-2"></path></svg>

  </div>
  
  <div class="p-0">
    <div class="bg-white flex flex-col shadow">
         <div class="m-5 mx-4 mt-0 border-2 border-dashed rounded-2xl bg-white p-4">
          <div class="flex flex-col text-slate-500">
            <span class="font-bold w-4/5">การสูบบุหรี่</span><span class="indent-4 text-sm mt-2"> คัดกรองความเสี่ยงจากการสูบบุหรี่ โดยเลือกตัวเลือกดังต่อไปนี้</span>  
          </div>
          <hr class="my-4">

          <div class="w-full mt-4">
            <div class="y-5">
              <div class="flex flex-col">
                <div v-if="btnCkeckCigarette == ''" class=" flex flex-col w-full gap-2">
                  <button @click="btnCkeckCigarette = 1" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">ไม่เคยสูบบุหรี่</button>
                  <button @click="btnCkeckCigarette = 2" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เคยสูบบุหรี่แต่เลิกแล้ว</button>
                  <button @click="btnCkeckCigarette = 3" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]" onclick="my_modalCigaretteRole.showModal()">สูบ</button>
                </div>

                <div v-else-if="btnCkeckCigarette == 1" class=" flex flex-col w-full gap-2">
                  <button @click="btnCkeckCigarette = 1" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px]">ไม่เคยสูบบุหรี่</button>
                  <button @click="btnCkeckCigarette = 2" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เคยสูบบุหรี่แต่เลิกแล้ว</button>
                  <button @click="btnCkeckCigarette = 3" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]" onclick="my_modalCigaretteRole.showModal()">สูบ</button>
                </div>

                <div v-else-if="btnCkeckCigarette == 2" class=" flex flex-col w-full gap-2">
                  <button @click="btnCkeckCigarette = 1" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">ไม่เคยสูบบุหรี่</button>
                  <button @click="btnCkeckCigarette = 2" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px]">เคยสูบบุหรี่แต่เลิกแล้ว</button>
                  <button @click="btnCkeckCigarette = 3" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]" onclick="my_modalCigaretteRole.showModal()">สูบ</button>
                </div>

                <div v-else-if="btnCkeckCigarette == 3" class=" flex flex-col w-full gap-2">
                  <button @click="btnCkeckCigarette = 1" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">ไม่เคยสูบบุหรี่</button>
                  <button @click="btnCkeckCigarette = 2" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เคยสูบบุหรี่แต่เลิกแล้ว</button>
                  <div v-if = "btnCkeckCigaretteRole == 1">
                    <button @click="btnCkeckCigarette = 3" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px] w-full">สูบ ( สูบนานๆ ครั้ง )</button>
                  </div>
                  <div v-else-if = "btnCkeckCigaretteRole == 2">
                    <button @click="btnCkeckCigarette = 3" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px] w-full">สูบ ( สูบเป็นครั้งคราว )</button>
                  </div>
                  <div v-else-if = "btnCkeckCigaretteRole == 3">
                    <button @click="btnCkeckCigarette = 3" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px] w-full">สูบ ( สูบเป็นประจำ )</button>
                  </div>
                  <div v-else>
                    <button @click="btnCkeckCigarette = 3" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px] w-full">สูบ</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr class="mt-4">
        </div>

        <div class="m-5 mx-4 mt-0 border-2 border-dashed rounded-2xl bg-white p-4"> 
          <div class="flex flex-col text-slate-500">
            <span class="font-bold w-4/5">การดื่มแอลกอฮอล์</span><span class="indent-4 text-sm mt-2"> คัดกรองความเสี่ยงจากการดื่มแอลกอฮอล์ โดยเลือกตัวเลือกดังต่อไปนี้</span>  
          </div>
          <hr class="my-4">

          <div class="w-full mt-4">
            <div class="y-5">
              <div class="flex flex-col">
                <div v-if="btnCkeckAlcohol == ''" class=" flex flex-col w-full gap-2">
                  <button @click="btnCkeckAlcohol = 1" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">ตลอดชีวิตไม่เคยดื่มเลย</button>
                  <button @click="btnCkeckAlcohol = 2" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เคยดื่มแต่เลิกแล้ว 1 ปีขึ้นไป</button>
                  <button @click="btnCkeckAlcohol = 3" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]" onclick="my_modalAlcoholRole.showModal()">ดื่ม</button>
                </div>

                <div v-else-if="btnCkeckAlcohol == 1" class=" flex flex-col w-full gap-2">
                  <button @click="btnCkeckAlcohol = 1" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px]">ตลอดชีวิตไม่เคยดื่มเลย</button>
                  <button @click="btnCkeckAlcohol = 2" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เคยดื่มแต่เลิกแล้ว 1 ปีขึ้นไป</button>
                  <button @click="btnCkeckAlcohol = 3" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]" onclick="my_modalAlcoholRole.showModal()">ดื่ม</button>
                </div>

                <div v-else-if="btnCkeckAlcohol == 2" class=" flex flex-col w-full gap-2">
                  <button @click="btnCkeckAlcohol = 1" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">ตลอดชีวิตไม่เคยดื่มเลย</button>
                  <button @click="btnCkeckAlcohol = 2" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px]">เคยดื่มแต่เลิกแล้ว 1 ปีขึ้นไป</button>
                  <button @click="btnCkeckAlcohol = 3" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]" onclick="my_modalAlcoholRole.showModal()">ดื่ม</button>
                </div>

                <div v-else-if="btnCkeckAlcohol == 3" class=" flex flex-col w-full gap-2">
                  <button @click="btnCkeckAlcohol = 1" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">ตลอดชีวิตไม่เคยดื่มเลย</button>
                  <button @click="btnCkeckAlcohol = 2" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เคยดื่มแต่เลิกแล้ว 1 ปีขึ้นไป</button>
                  <div v-if = "btnCkeckAlcoholRole == 1">
                    <button @click="btnCkeckAlcohol = 3" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px] w-full">ดื่ม ( ดื่มนานๆ ครั้ง )</button>
                  </div>
                  <div v-else-if = "btnCkeckAlcoholRole == 2">
                    <button @click="btnCkeckAlcohol = 3" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px] w-full">ดื่ม ( ดื่มเป็นครั้งคราว )</button>
                  </div>
                  <div v-else-if = "btnCkeckAlcoholRole == 3">
                    <button @click="btnCkeckAlcohol = 3" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px] w-full">ดื่ม ( ดื่มเป็นประจำ )</button>
                  </div>
                  <div v-else>
                    <button @click="btnCkeckAlcohol = 3" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px] w-full">ดื่ม</button>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <hr class="mt-4">
        </div>

    </div>
  </div>

</template>
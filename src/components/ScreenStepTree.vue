<script setup>
  import { reactive, ref } from 'vue'
  import { RouterLink } from 'vue-router';
  import Vue3Signature from "vue3-signature"

  // icon
  import { FaChevronLeft, SiFramework7 } from '@kalimahapps/vue-icons';
  import { FaXmark } from '@kalimahapps/vue-icons';
  import { FaRegPaste } from '@kalimahapps/vue-icons';
  import { FaAnglesRight } from '@kalimahapps/vue-icons';

  import { FaCaretRight } from '@kalimahapps/vue-icons';
  import { Fa1 } from '@kalimahapps/vue-icons';
  import { Fa2 } from '@kalimahapps/vue-icons';
  import { Fa3 } from '@kalimahapps/vue-icons';
  import { Fa4 } from '@kalimahapps/vue-icons';
  import { Fa5 } from '@kalimahapps/vue-icons';
  import { Fa6 } from '@kalimahapps/vue-icons';
  import { Fa7 } from '@kalimahapps/vue-icons';
  import { Fa8 } from '@kalimahapps/vue-icons';
  import { Fa9 } from '@kalimahapps/vue-icons';

</script>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        title_name: 'คัดกรองโรคซึมเศร้า',
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
        sq9_1_answer: 0,
        sq9_2_answer: 0,
        sq9_3_answer: 0,
        sq9_4_answer: 0,
        sq9_5_answer: 0,
        sq9_6_answer: 0,
        sq9_7_answer: 0,
        sq9_8_answer: 0,
        sq9_9_answer: 0,
        // sq9_sum: "",
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
      btnNext() {

      },
      goToScreenList() {
        this.$router.push('/screen_two')
      },
    },

  }
</script>

<template>

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
    <div class="absolute items-center px-5 pt-7 mt-1">
      <span class=""><strong class="font-bold text-slate-500">คำอธิบาย</strong> </span>
        <ul class="list-disc ps-6 text-sm flex flex-col mt-1 gap-1">
          <li>คัดกรองโรคซึมเศร้าด้วย 9 คําถาม (9Q)</li>
          <li>ถามคำถามผู้รับบริการ และเลือกตัวเลือกที่ตรงกับผู้รับบริการมากที่สุด</li>
        </ul>
    </div>
    <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 490" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,500 L 0,125 C 110.61244019138758,154.9043062200957 221.22488038277515,184.80861244019138 326,175 C 430.77511961722485,165.19138755980862 529.7129186602871,115.66985645933015 622,102 C 714.2870813397129,88.33014354066985 799.9234449760766,110.51196172248804 884,107 C 968.0765550239234,103.48803827751196 1050.5933014354068,74.28229665071771 1143,73 C 1235.4066985645932,71.71770334928229 1337.7033492822966,98.35885167464114 1440,125 L 1440,500 L 0,500 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-0"></path><path d="M 0,500 L 0,291 C 103.97129186602868,309.01913875598086 207.94258373205736,327.0382775119618 308,335 C 408.05741626794264,342.9617224880382 504.2009569377991,340.86602870813397 594,342 C 683.7990430622009,343.13397129186603 767.2535885167465,347.49760765550235 847,332 C 926.7464114832535,316.50239234449765 1002.7846889952152,281.14354066985646 1101,271 C 1199.2153110047848,260.85645933014354 1319.6076555023924,275.92822966507174 1440,291 L 1440,500 L 0,500 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-1"></path></svg>
  </div>
  
  <div class="p-0">
    <div class="bg-white flex flex-col px-4">
      <div class="mt-6">
        <span class="flex flex-row font-bold items-center ps-1"><Fa1 class="me-2"/>เบื่อ ไม่สนใจอยากทําอะไร<span class="text-error ps-1">*</span></span>
        <div class="mt-3 mx-5">
          <div v-if="sq9_1_answer == 0">
            <div class="join flex justify-between rounded-2xl bg-white ">
              <button @click="sq9_1_answer = 1" class="join-item btn btn-square text-slate-500 bg-white w-1/4">ไม่มีเลย</button>
              <button @click="sq9_1_answer = 2" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบางวัน</button>
              <button @click="sq9_1_answer = 3" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบ่อย</button>
              <button @click="sq9_1_answer = 4" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นทุกวัน</button>
            </div>
          </div>
          <div v-else-if="sq9_1_answer == 1">
            <div class="join flex justify-between rounded-2xl bg-white ">
              <button @click="sq9_1_answer = 1" class="join-item btn btn-square bg-primary text-white w-1/4">ไม่มีเลย</button>
              <button @click="sq9_1_answer = 2" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบางวัน</button>
              <button @click="sq9_1_answer = 3" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบ่อย</button>
              <button @click="sq9_1_answer = 4" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นทุกวัน</button>
            </div>
          </div>
          <div v-else-if="sq9_1_answer == 2">
            <div class="join flex justify-between rounded-2xl bg-white ">
              <button @click="sq9_1_answer = 1" class="join-item btn btn-square text-slate-500 bg-white w-1/4">ไม่มีเลย</button>
              <button @click="sq9_1_answer = 2" class="join-item btn btn-square bg-primary text-white w-1/4">เป็นบางวัน</button>
              <button @click="sq9_1_answer = 3" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบ่อย</button>
              <button @click="sq9_1_answer = 4" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นทุกวัน</button>
            </div>
          </div>
          <div v-else-if="sq9_1_answer == 3">
            <div class="join flex justify-between rounded-2xl bg-white ">
              <button @click="sq9_1_answer = 1" class="join-item btn btn-square text-slate-500 bg-white w-1/4">ไม่มีเลย</button>
              <button @click="sq9_1_answer = 2" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบางวัน</button>
              <button @click="sq9_1_answer = 3" class="join-item btn btn-square bg-primary text-white w-1/4">เป็นบ่อย</button>
              <button @click="sq9_1_answer = 4" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นทุกวัน</button>
            </div>
          </div>
          <div v-else-if="sq9_1_answer == 4">
            <div class="join flex justify-between rounded-2xl bg-white ">
              <button @click="sq9_1_answer = 1" class="join-item btn btn-square text-slate-500 bg-white w-1/4">ไม่มีเลย</button>
              <button @click="sq9_1_answer = 2" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบางวัน</button>
              <button @click="sq9_1_answer = 3" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบ่อย</button>
              <button @click="sq9_1_answer = 4" class="join-item btn btn-square bg-primary text-white w-1/4">เป็นทุกวัน</button>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-5">
        <span class="flex flex-row font-bold items-center ps-1"><Fa2 class="me-2"/>ไม่สบายใจ ซึมเศร้า ท้อแท้<span class="text-error ps-1">*</span></span>
        <div class="mt-3 mx-5">
          <div v-if="sq9_2_answer == 0">
            <div class="join flex justify-between rounded-2xl bg-white ">
              <button @click="sq9_2_answer = 1" class="join-item btn btn-square text-slate-500 bg-white w-1/4">ไม่มีเลย</button>
              <button @click="sq9_2_answer = 2" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบางวัน</button>
              <button @click="sq9_2_answer = 3" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบ่อย</button>
              <button @click="sq9_2_answer = 4" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นทุกวัน</button>
            </div>
          </div>
          <div v-else-if="sq9_2_answer == 1">
            <div class="join flex justify-between rounded-2xl bg-white ">
              <button @click="sq9_2_answer = 1" class="join-item btn btn-square bg-primary text-white w-1/4">ไม่มีเลย</button>
              <button @click="sq9_2_answer = 2" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบางวัน</button>
              <button @click="sq9_2_answer = 3" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบ่อย</button>
              <button @click="sq9_2_answer = 4" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นทุกวัน</button>
            </div>
          </div>
          <div v-else-if="sq9_2_answer == 2">
            <div class="join flex justify-between rounded-2xl bg-white ">
              <button @click="sq9_2_answer = 1" class="join-item btn btn-square text-slate-500 bg-white w-1/4">ไม่มีเลย</button>
              <button @click="sq9_2_answer = 2" class="join-item btn btn-square bg-primary text-white w-1/4">เป็นบางวัน</button>
              <button @click="sq9_2_answer = 3" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบ่อย</button>
              <button @click="sq9_2_answer = 4" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นทุกวัน</button>
            </div>
          </div>
          <div v-else-if="sq9_2_answer == 3">
            <div class="join flex justify-between rounded-2xl bg-white ">
              <button @click="sq9_2_answer = 1" class="join-item btn btn-square text-slate-500 bg-white w-1/4">ไม่มีเลย</button>
              <button @click="sq9_2_answer = 2" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบางวัน</button>
              <button @click="sq9_2_answer = 3" class="join-item btn btn-square bg-primary text-white w-1/4">เป็นบ่อย</button>
              <button @click="sq9_2_answer = 4" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นทุกวัน</button>
            </div>
          </div>
          <div v-else-if="sq9_2_answer == 4">
            <div class="join flex justify-between rounded-2xl bg-white ">
              <button @click="sq9_2_answer = 1" class="join-item btn btn-square text-slate-500 bg-white w-1/4">ไม่มีเลย</button>
              <button @click="sq9_2_answer = 2" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบางวัน</button>
              <button @click="sq9_2_answer = 3" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบ่อย</button>
              <button @click="sq9_2_answer = 4" class="join-item btn btn-square bg-primary text-white w-1/4">เป็นทุกวัน</button>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-5">
        <span class="flex flex-row font-bold items-center ps-1"><Fa3 class="me-2"/>หลับยาก หรือหลับ ๆ ตื่น ๆ หรือหลับมากไป<span class="text-error ps-1">*</span></span>
        <div class="mt-3 mx-5">
          <div v-if="sq9_3_answer == 0">
            <div class="join flex justify-between rounded-2xl bg-white ">
              <button @click="sq9_3_answer = 1" class="join-item btn btn-square text-slate-500 bg-white w-1/4">ไม่มีเลย</button>
              <button @click="sq9_3_answer = 2" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบางวัน</button>
              <button @click="sq9_3_answer = 3" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบ่อย</button>
              <button @click="sq9_3_answer = 4" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นทุกวัน</button>
            </div>
          </div>
          <div v-else-if="sq9_3_answer == 1">
            <div class="join flex justify-between rounded-2xl bg-white ">
              <button @click="sq9_3_answer = 1" class="join-item btn btn-square bg-primary text-white w-1/4">ไม่มีเลย</button>
              <button @click="sq9_3_answer = 2" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบางวัน</button>
              <button @click="sq9_3_answer = 3" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบ่อย</button>
              <button @click="sq9_3_answer = 4" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นทุกวัน</button>
            </div>
          </div>
          <div v-else-if="sq9_3_answer == 2">
            <div class="join flex justify-between rounded-2xl bg-white ">
              <button @click="sq9_3_answer = 1" class="join-item btn btn-square text-slate-500 bg-white w-1/4">ไม่มีเลย</button>
              <button @click="sq9_3_answer = 2" class="join-item btn btn-square bg-primary text-white w-1/4">เป็นบางวัน</button>
              <button @click="sq9_3_answer = 3" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบ่อย</button>
              <button @click="sq9_3_answer = 4" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นทุกวัน</button>
            </div>
          </div>
          <div v-else-if="sq9_3_answer == 3">
            <div class="join flex justify-between rounded-2xl bg-white ">
              <button @click="sq9_3_answer = 1" class="join-item btn btn-square text-slate-500 bg-white w-1/4">ไม่มีเลย</button>
              <button @click="sq9_3_answer = 2" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบางวัน</button>
              <button @click="sq9_3_answer = 3" class="join-item btn btn-square bg-primary text-white w-1/4">เป็นบ่อย</button>
              <button @click="sq9_3_answer = 4" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นทุกวัน</button>
            </div>
          </div>
          <div v-else-if="sq9_3_answer == 4">
            <div class="join flex justify-between rounded-2xl bg-white ">
              <button @click="sq9_3_answer = 1" class="join-item btn btn-square text-slate-500 bg-white w-1/4">ไม่มีเลย</button>
              <button @click="sq9_3_answer = 2" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบางวัน</button>
              <button @click="sq9_3_answer = 3" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบ่อย</button>
              <button @click="sq9_3_answer = 4" class="join-item btn btn-square bg-primary text-white w-1/4">เป็นทุกวัน</button>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-5">
        <span class="flex flex-row font-bold items-center ps-1"><Fa4 class="me-2"/>เหนื่อยง่าย หรือ ไม่ค่อยมีแรง<span class="text-error ps-1">*</span></span>
        <div class="mt-3 mx-5">
          <div v-if="sq9_4_answer == 0">
            <div class="join flex justify-between rounded-2xl bg-white ">
              <button @click="sq9_4_answer = 1" class="join-item btn btn-square text-slate-500 bg-white w-1/4">ไม่มีเลย</button>
              <button @click="sq9_4_answer = 2" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบางวัน</button>
              <button @click="sq9_4_answer = 3" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบ่อย</button>
              <button @click="sq9_4_answer = 4" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นทุกวัน</button>
            </div>
          </div>
          <div v-else-if="sq9_4_answer == 1">
            <div class="join flex justify-between rounded-2xl bg-white ">
              <button @click="sq9_4_answer = 1" class="join-item btn btn-square bg-primary text-white w-1/4">ไม่มีเลย</button>
              <button @click="sq9_4_answer = 2" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบางวัน</button>
              <button @click="sq9_4_answer = 3" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบ่อย</button>
              <button @click="sq9_4_answer = 4" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นทุกวัน</button>
            </div>
          </div>
          <div v-else-if="sq9_4_answer == 2">
            <div class="join flex justify-between rounded-2xl bg-white ">
              <button @click="sq9_4_answer = 1" class="join-item btn btn-square text-slate-500 bg-white w-1/4">ไม่มีเลย</button>
              <button @click="sq9_4_answer = 2" class="join-item btn btn-square bg-primary text-white w-1/4">เป็นบางวัน</button>
              <button @click="sq9_4_answer = 3" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบ่อย</button>
              <button @click="sq9_4_answer = 4" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นทุกวัน</button>
            </div>
          </div>
          <div v-else-if="sq9_4_answer == 3">
            <div class="join flex justify-between rounded-2xl bg-white ">
              <button @click="sq9_4_answer = 1" class="join-item btn btn-square text-slate-500 bg-white w-1/4">ไม่มีเลย</button>
              <button @click="sq9_4_answer = 2" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบางวัน</button>
              <button @click="sq9_4_answer = 3" class="join-item btn btn-square bg-primary text-white w-1/4">เป็นบ่อย</button>
              <button @click="sq9_4_answer = 4" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นทุกวัน</button>
            </div>
          </div>
          <div v-else-if="sq9_4_answer == 4">
            <div class="join flex justify-between rounded-2xl bg-white ">
              <button @click="sq9_4_answer = 1" class="join-item btn btn-square text-slate-500 bg-white w-1/4">ไม่มีเลย</button>
              <button @click="sq9_4_answer = 2" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบางวัน</button>
              <button @click="sq9_4_answer = 3" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบ่อย</button>
              <button @click="sq9_4_answer = 4" class="join-item btn btn-square bg-primary text-white w-1/4">เป็นทุกวัน</button>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-5">
        <span class="flex flex-row font-bold items-center ps-1"><Fa5 class="me-2"/>เบื่ออาหาร หรือ กินมากเกินไป<span class="text-error ps-1">*</span></span>
        <div class="mt-3 mx-5">
          <div v-if="sq9_5_answer == 0">
            <div class="join flex justify-between rounded-2xl bg-white ">
              <button @click="sq9_5_answer = 1" class="join-item btn btn-square text-slate-500 bg-white w-1/4">ไม่มีเลย</button>
              <button @click="sq9_5_answer = 2" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบางวัน</button>
              <button @click="sq9_5_answer = 3" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบ่อย</button>
              <button @click="sq9_5_answer = 4" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นทุกวัน</button>
            </div>
          </div>
          <div v-else-if="sq9_5_answer == 1">
            <div class="join flex justify-between rounded-2xl bg-white ">
              <button @click="sq9_5_answer = 1" class="join-item btn btn-square bg-primary text-white w-1/4">ไม่มีเลย</button>
              <button @click="sq9_5_answer = 2" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบางวัน</button>
              <button @click="sq9_5_answer = 3" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบ่อย</button>
              <button @click="sq9_5_answer = 4" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นทุกวัน</button>
            </div>
          </div>
          <div v-else-if="sq9_5_answer == 2">
            <div class="join flex justify-between rounded-2xl bg-white ">
              <button @click="sq9_5_answer = 1" class="join-item btn btn-square text-slate-500 bg-white w-1/4">ไม่มีเลย</button>
              <button @click="sq9_5_answer = 2" class="join-item btn btn-square bg-primary text-white w-1/4">เป็นบางวัน</button>
              <button @click="sq9_5_answer = 3" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบ่อย</button>
              <button @click="sq9_5_answer = 4" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นทุกวัน</button>
            </div>
          </div>
          <div v-else-if="sq9_5_answer == 3">
            <div class="join flex justify-between rounded-2xl bg-white ">
              <button @click="sq9_5_answer = 1" class="join-item btn btn-square text-slate-500 bg-white w-1/4">ไม่มีเลย</button>
              <button @click="sq9_5_answer = 2" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบางวัน</button>
              <button @click="sq9_5_answer = 3" class="join-item btn btn-square bg-primary text-white w-1/4">เป็นบ่อย</button>
              <button @click="sq9_5_answer = 4" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นทุกวัน</button>
            </div>
          </div>
          <div v-else-if="sq9_5_answer == 4">
            <div class="join flex justify-between rounded-2xl bg-white ">
              <button @click="sq9_5_answer = 1" class="join-item btn btn-square text-slate-500 bg-white w-1/4">ไม่มีเลย</button>
              <button @click="sq9_5_answer = 2" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบางวัน</button>
              <button @click="sq9_5_answer = 3" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบ่อย</button>
              <button @click="sq9_5_answer = 4" class="join-item btn btn-square bg-primary text-white w-1/4">เป็นทุกวัน</button>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-5">
        <span class="flex flex-row font-bold items-start ps-1"><Fa6 class="mt-1 me-2"/>รู้สึกไม่ดีกับตัวเอง คิดว่า ตัวเองล้มเหลว <br>หรือ ทําให้ตนเองหรือครอบครัวผิดหวัง<span class="text-error ps-1">*</span></span>
        <div class="mt-3 mx-5">
          <div v-if="sq9_6_answer == 0">
            <div class="join flex justify-between rounded-2xl bg-white ">
              <button @click="sq9_6_answer = 1" class="join-item btn btn-square text-slate-500 bg-white w-1/4">ไม่มีเลย</button>
              <button @click="sq9_6_answer = 2" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบางวัน</button>
              <button @click="sq9_6_answer = 3" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบ่อย</button>
              <button @click="sq9_6_answer = 4" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นทุกวัน</button>
            </div>
          </div>
          <div v-else-if="sq9_6_answer == 1">
            <div class="join flex justify-between rounded-2xl bg-white ">
              <button @click="sq9_6_answer = 1" class="join-item btn btn-square bg-primary text-white w-1/4">ไม่มีเลย</button>
              <button @click="sq9_6_answer = 2" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบางวัน</button>
              <button @click="sq9_6_answer = 3" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบ่อย</button>
              <button @click="sq9_6_answer = 4" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นทุกวัน</button>
            </div>
          </div>
          <div v-else-if="sq9_6_answer == 2">
            <div class="join flex justify-between rounded-2xl bg-white ">
              <button @click="sq9_6_answer = 1" class="join-item btn btn-square text-slate-500 bg-white w-1/4">ไม่มีเลย</button>
              <button @click="sq9_6_answer = 2" class="join-item btn btn-square bg-primary text-white w-1/4">เป็นบางวัน</button>
              <button @click="sq9_6_answer = 3" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบ่อย</button>
              <button @click="sq9_6_answer = 4" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นทุกวัน</button>
            </div>
          </div>
          <div v-else-if="sq9_6_answer == 3">
            <div class="join flex justify-between rounded-2xl bg-white ">
              <button @click="sq9_6_answer = 1" class="join-item btn btn-square text-slate-500 bg-white w-1/4">ไม่มีเลย</button>
              <button @click="sq9_6_answer = 2" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบางวัน</button>
              <button @click="sq9_6_answer = 3" class="join-item btn btn-square bg-primary text-white w-1/4">เป็นบ่อย</button>
              <button @click="sq9_6_answer = 4" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นทุกวัน</button>
            </div>
          </div>
          <div v-else-if="sq9_6_answer == 4">
            <div class="join flex justify-between rounded-2xl bg-white ">
              <button @click="sq9_6_answer = 1" class="join-item btn btn-square text-slate-500 bg-white w-1/4">ไม่มีเลย</button>
              <button @click="sq9_6_answer = 2" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบางวัน</button>
              <button @click="sq9_6_answer = 3" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบ่อย</button>
              <button @click="sq9_6_answer = 4" class="join-item btn btn-square bg-primary text-white w-1/4">เป็นทุกวัน</button>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-5">
        <span class="flex flex-row font-bold items-start ps-1"><Fa7 class="mt-1 me-2"/>สมาธิไม่ดีเวลาทําอะไร เช่น ดูโทรทัศน์ ฟังวิทยุ หรือ ทํางานที่ต้องใช้ความตั้งใจ<span class="text-error ps-1">*</span></span>
        <div class="mt-3 mx-5">
          <div v-if="sq9_7_answer == 0">
            <div class="join flex justify-between rounded-2xl bg-white ">
              <button @click="sq9_7_answer = 1" class="join-item btn btn-square text-slate-500 bg-white w-1/4">ไม่มีเลย</button>
              <button @click="sq9_7_answer = 2" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบางวัน</button>
              <button @click="sq9_7_answer = 3" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบ่อย</button>
              <button @click="sq9_7_answer = 4" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นทุกวัน</button>
            </div>
          </div>
          <div v-else-if="sq9_7_answer == 1">
            <div class="join flex justify-between rounded-2xl bg-white ">
              <button @click="sq9_7_answer = 1" class="join-item btn btn-square bg-primary text-white w-1/4">ไม่มีเลย</button>
              <button @click="sq9_7_answer = 2" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบางวัน</button>
              <button @click="sq9_7_answer = 3" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบ่อย</button>
              <button @click="sq9_7_answer = 4" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นทุกวัน</button>
            </div>
          </div>
          <div v-else-if="sq9_7_answer == 2">
            <div class="join flex justify-between rounded-2xl bg-white ">
              <button @click="sq9_7_answer = 1" class="join-item btn btn-square text-slate-500 bg-white w-1/4">ไม่มีเลย</button>
              <button @click="sq9_7_answer = 2" class="join-item btn btn-square bg-primary text-white w-1/4">เป็นบางวัน</button>
              <button @click="sq9_7_answer = 3" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบ่อย</button>
              <button @click="sq9_7_answer = 4" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นทุกวัน</button>
            </div>
          </div>
          <div v-else-if="sq9_7_answer == 3">
            <div class="join flex justify-between rounded-2xl bg-white ">
              <button @click="sq9_7_answer = 1" class="join-item btn btn-square text-slate-500 bg-white w-1/4">ไม่มีเลย</button>
              <button @click="sq9_7_answer = 2" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบางวัน</button>
              <button @click="sq9_7_answer = 3" class="join-item btn btn-square bg-primary text-white w-1/4">เป็นบ่อย</button>
              <button @click="sq9_7_answer = 4" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นทุกวัน</button>
            </div>
          </div>
          <div v-else-if="sq9_7_answer == 4">
            <div class="join flex justify-between rounded-2xl bg-white ">
              <button @click="sq9_7_answer = 1" class="join-item btn btn-square text-slate-500 bg-white w-1/4">ไม่มีเลย</button>
              <button @click="sq9_7_answer = 2" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบางวัน</button>
              <button @click="sq9_7_answer = 3" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบ่อย</button>
              <button @click="sq9_7_answer = 4" class="join-item btn btn-square bg-primary text-white w-1/4">เป็นทุกวัน</button>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-5">
        <span class="flex flex-row font-bold items-start ps-1"><Fa8 class="mt-1 me-2"/>พูดช้า ทําอะไรช้าจนคนอื่นสังเกตเห็นได้ หรือ กระสับกระส่ายไม่สามารถอยู่นิ่งได้<br>เหมือนที่เคยเป็น<span class="text-error ps-1">*</span></span>
        <div class="mt-3 mx-5">
          <div v-if="sq9_8_answer == 0">
            <div class="join flex justify-between rounded-2xl bg-white ">
              <button @click="sq9_8_answer = 1" class="join-item btn btn-square text-slate-500 bg-white w-1/4">ไม่มีเลย</button>
              <button @click="sq9_8_answer = 2" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบางวัน</button>
              <button @click="sq9_8_answer = 3" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบ่อย</button>
              <button @click="sq9_8_answer = 4" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นทุกวัน</button>
            </div>
          </div>
          <div v-else-if="sq9_8_answer == 1">
            <div class="join flex justify-between rounded-2xl bg-white ">
              <button @click="sq9_8_answer = 1" class="join-item btn btn-square bg-primary text-white w-1/4">ไม่มีเลย</button>
              <button @click="sq9_8_answer = 2" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบางวัน</button>
              <button @click="sq9_8_answer = 3" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบ่อย</button>
              <button @click="sq9_8_answer = 4" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นทุกวัน</button>
            </div>
          </div>
          <div v-else-if="sq9_8_answer == 2">
            <div class="join flex justify-between rounded-2xl bg-white ">
              <button @click="sq9_8_answer = 1" class="join-item btn btn-square text-slate-500 bg-white w-1/4">ไม่มีเลย</button>
              <button @click="sq9_8_answer = 2" class="join-item btn btn-square bg-primary text-white w-1/4">เป็นบางวัน</button>
              <button @click="sq9_8_answer = 3" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบ่อย</button>
              <button @click="sq9_8_answer = 4" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นทุกวัน</button>
            </div>
          </div>
          <div v-else-if="sq9_8_answer == 3">
            <div class="join flex justify-between rounded-2xl bg-white ">
              <button @click="sq9_8_answer = 1" class="join-item btn btn-square text-slate-500 bg-white w-1/4">ไม่มีเลย</button>
              <button @click="sq9_8_answer = 2" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบางวัน</button>
              <button @click="sq9_8_answer = 3" class="join-item btn btn-square bg-primary text-white w-1/4">เป็นบ่อย</button>
              <button @click="sq9_8_answer = 4" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นทุกวัน</button>
            </div>
          </div>
          <div v-else-if="sq9_8_answer == 4">
            <div class="join flex justify-between rounded-2xl bg-white ">
              <button @click="sq9_8_answer = 1" class="join-item btn btn-square text-slate-500 bg-white w-1/4">ไม่มีเลย</button>
              <button @click="sq9_8_answer = 2" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบางวัน</button>
              <button @click="sq9_8_answer = 3" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบ่อย</button>
              <button @click="sq9_8_answer = 4" class="join-item btn btn-square bg-primary text-white w-1/4">เป็นทุกวัน</button>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-5">
        <span class="flex flex-row font-bold items-center ps-1"><Fa9 class="me-2"/>คิดทําร้ายตนเอง หรือคิดว่าถ้าตายไปคงจะดี<span class="text-error ps-1">*</span></span>
        <div class="mt-3 mx-5">
          <div v-if="sq9_9_answer == 0">
            <div class="join flex justify-between rounded-2xl bg-white ">
              <button @click="sq9_9_answer = 1" class="join-item btn btn-square text-slate-500 bg-white w-1/4">ไม่มีเลย</button>
              <button @click="sq9_9_answer = 2" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบางวัน</button>
              <button @click="sq9_9_answer = 3" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบ่อย</button>
              <button @click="sq9_9_answer = 4" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นทุกวัน</button>
            </div>
          </div>
          <div v-else-if="sq9_9_answer == 1">
            <div class="join flex justify-between rounded-2xl bg-white ">
              <button @click="sq9_9_answer = 1" class="join-item btn btn-square bg-primary text-white w-1/4">ไม่มีเลย</button>
              <button @click="sq9_9_answer = 2" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบางวัน</button>
              <button @click="sq9_9_answer = 3" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบ่อย</button>
              <button @click="sq9_9_answer = 4" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นทุกวัน</button>
            </div>
          </div>
          <div v-else-if="sq9_9_answer == 2">
            <div class="join flex justify-between rounded-2xl bg-white ">
              <button @click="sq9_9_answer = 1" class="join-item btn btn-square text-slate-500 bg-white w-1/4">ไม่มีเลย</button>
              <button @click="sq9_9_answer = 2" class="join-item btn btn-square bg-primary text-white w-1/4">เป็นบางวัน</button>
              <button @click="sq9_9_answer = 3" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบ่อย</button>
              <button @click="sq9_9_answer = 4" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นทุกวัน</button>
            </div>
          </div>
          <div v-else-if="sq9_9_answer == 3">
            <div class="join flex justify-between rounded-2xl bg-white ">
              <button @click="sq9_9_answer = 1" class="join-item btn btn-square text-slate-500 bg-white w-1/4">ไม่มีเลย</button>
              <button @click="sq9_9_answer = 2" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบางวัน</button>
              <button @click="sq9_9_answer = 3" class="join-item btn btn-square bg-primary text-white w-1/4">เป็นบ่อย</button>
              <button @click="sq9_9_answer = 4" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นทุกวัน</button>
            </div>
          </div>
          <div v-else-if="sq9_9_answer == 4">
            <div class="join flex justify-between rounded-2xl bg-white ">
              <button @click="sq9_9_answer = 1" class="join-item btn btn-square text-slate-500 bg-white w-1/4">ไม่มีเลย</button>
              <button @click="sq9_9_answer = 2" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบางวัน</button>
              <button @click="sq9_9_answer = 3" class="join-item btn btn-square text-slate-500 bg-white w-1/4">เป็นบ่อย</button>
              <button @click="sq9_9_answer = 4" class="join-item btn btn-square bg-primary text-white w-1/4">เป็นทุกวัน</button>
            </div>
          </div>
        </div>
      </div>

    <!-- <div>

      <div class="collapse border-2 border-dashed rounded-2xl bg-white mt-5">
        <input type="radio" name="my-accordion-2"  />
        <div class="collapse-title">
          <div class=" text-slate-500">
            <span class="flex flex-row font-bold items-center"><Fa1 class="me-0.5"/><FaCaretRight class="me-1"/> เบื่อ ไม่สนใจอยากทําอะไร</span>
            <span class="flex flex-row items-center">
              <strong class="font-bold text-sm ms-10 me-3">คำตอบ</strong>
              <span v-if="sq9_1_answer == 0" class=" font-bold text-error">ยังไม่ได้เลือกคำตอบ</span>
              <span v-else-if="sq9_1_answer == 1" class="font-bold text-primary">ไม่มีเลย</span>
              <span v-else-if="sq9_1_answer == 2" class="font-bold text-primary">เป็นบางวัน</span>
              <span v-else-if="sq9_1_answer == 3" class="font-bold text-primary">เป็นบ่อย</span>
              <span v-else-if="sq9_1_answer == 4" class="font-bold text-primary">เป็นทุกวัน</span>
            </span>
          </div>
        </div>
        <div class="collapse-content">
          <hr class="">
          <div class="w-full mt-4">
            <div class="">
              <div class="flex flex-col">
                <div v-if="sq9_1_answer == 0" class="flex flex-col w-full gap-2">
                  <button @click="sq9_1_answer = 1" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">ไม่มีเลย</button>
                  <button @click="sq9_1_answer = 2" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบางวัน</button>
                  <button @click="sq9_1_answer = 3" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบ่อย</button>
                  <button @click="sq9_1_answer = 4" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นทุกวัน</button>
                </div>
                <div v-else-if="sq9_1_answer == 1" class="flex flex-col w-full gap-2">
                  <button @click="sq9_1_answer = 1" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px]">ไม่มีเลย</button>
                  <button @click="sq9_1_answer = 2" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบางวัน</button>
                  <button @click="sq9_1_answer = 3" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบ่อย</button>
                  <button @click="sq9_1_answer = 4" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นทุกวัน</button>
                </div>
                <div v-else-if="sq9_1_answer == 2" class="flex flex-col w-full gap-2">
                  <button @click="sq9_1_answer = 1" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">ไม่มีเลย</button>
                  <button @click="sq9_1_answer = 2" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px]">เป็นบางวัน</button>
                  <button @click="sq9_1_answer = 3" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบ่อย</button>
                  <button @click="sq9_1_answer = 4" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นทุกวัน</button>
                </div>
                <div v-else-if="sq9_1_answer == 3" class="flex flex-col w-full gap-2">
                  <button @click="sq9_1_answer = 1" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">ไม่มีเลย</button>
                  <button @click="sq9_1_answer = 2" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบางวัน</button>
                  <button @click="sq9_1_answer = 3" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px]">เป็นบ่อย</button>
                  <button @click="sq9_1_answer = 4" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นทุกวัน</button>
                </div>
                <div v-else-if="sq9_1_answer == 4" class="flex flex-col w-full gap-2">
                  <button @click="sq9_1_answer = 1" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">ไม่มีเลย</button>
                  <button @click="sq9_1_answer = 2" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบางวัน</button>
                  <button @click="sq9_1_answer = 3" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบ่อย</button>
                  <button @click="sq9_1_answer = 4" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px]">เป็นทุกวัน</button>
                </div>
              </div>
            </div>
          </div>
          <hr class="mt-4 mb-1">
        </div>
      </div>

      <div class="collapse border-2 border-dashed rounded-2xl border-t-0 bg-white mt-0">
        <input type="radio" name="my-accordion-2" />
        <div class="collapse-title">
          <div class=" text-slate-500">
            <span class="flex flex-row font-bold items-center"><Fa2 class="me-1"/><FaCaretRight class="me-1"/> ไม่สบายใจ ซึมเศร้า ท้อแท้</span>
            <span class="flex flex-row items-center">
              <strong class="font-bold text-sm ms-10 me-3">คำตอบ</strong>
              <span v-if="sq9_2_answer == 0" class=" font-bold text-error">ยังไม่ได้เลือกคำตอบ</span>
              <span v-else-if="sq9_2_answer == 1" class="font-bold text-primary">ไม่มีเลย</span>
              <span v-else-if="sq9_2_answer == 2" class="font-bold text-primary">เป็นบางวัน</span>
              <span v-else-if="sq9_2_answer == 3" class="font-bold text-primary">เป็นบ่อย</span>
              <span v-else-if="sq9_2_answer == 4" class="font-bold text-primary">เป็นทุกวัน</span>
            </span>
          </div>
        </div>
        <div class="collapse-content">
          <hr class="">
          <div class="w-full mt-4">
            <div class="">
              <div class="flex flex-col">
                <div v-if="sq9_2_answer == 0" class="flex flex-col w-full gap-2">
                  <button @click="sq9_2_answer = 1" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">ไม่มีเลย</button>
                  <button @click="sq9_2_answer = 2" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบางวัน</button>
                  <button @click="sq9_2_answer = 3" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบ่อย</button>
                  <button @click="sq9_2_answer = 4" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นทุกวัน</button>
                </div>
                <div v-else-if="sq9_2_answer == 1" class="flex flex-col w-full gap-2">
                  <button @click="sq9_2_answer = 1" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px]">ไม่มีเลย</button>
                  <button @click="sq9_2_answer = 2" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบางวัน</button>
                  <button @click="sq9_2_answer = 3" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบ่อย</button>
                  <button @click="sq9_2_answer = 4" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นทุกวัน</button>
                </div>
                <div v-else-if="sq9_2_answer == 2" class="flex flex-col w-full gap-2">
                  <button @click="sq9_2_answer = 1" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">ไม่มีเลย</button>
                  <button @click="sq9_2_answer = 2" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px]">เป็นบางวัน</button>
                  <button @click="sq9_2_answer = 3" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบ่อย</button>
                  <button @click="sq9_2_answer = 4" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นทุกวัน</button>
                </div>
                <div v-else-if="sq9_2_answer == 3" class="flex flex-col w-full gap-2">
                  <button @click="sq9_2_answer = 1" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">ไม่มีเลย</button>
                  <button @click="sq9_2_answer = 2" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบางวัน</button>
                  <button @click="sq9_2_answer = 3" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px]">เป็นบ่อย</button>
                  <button @click="sq9_2_answer = 4" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นทุกวัน</button>
                </div>
                <div v-else-if="sq9_2_answer == 4" class="flex flex-col w-full gap-2">
                  <button @click="sq9_2_answer = 1" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">ไม่มีเลย</button>
                  <button @click="sq9_2_answer = 2" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบางวัน</button>
                  <button @click="sq9_2_answer = 3" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบ่อย</button>
                  <button @click="sq9_2_answer = 4" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px]">เป็นทุกวัน</button>
                </div>
              </div>
            </div>
          </div>
          <hr class="mt-4 mb-1">
        </div>
      </div>

      <div class="collapse border-2 border-dashed rounded-2xl border-t-0 bg-white mt-0">
        <input type="radio" name="my-accordion-2" />
        <div class="collapse-title">
          <div class=" text-slate-500">
            <span class="flex flex-row font-bold items-top"><Fa3 class=" me-1.5 mt-1"/><FaCaretRight class="me-1 mt-1"/> หลับยาก หรือหลับ ๆ ตื่น ๆ หรือหลับมากไป</span>
            <span class="flex flex-row items-center">
              <strong class="font-bold text-sm ms-9 ps-1 me-3">คำตอบ</strong>
              <span v-if="sq9_3_answer == 0" class=" font-bold text-error">ยังไม่ได้เลือกคำตอบ</span>
              <span v-else-if="sq9_3_answer == 1" class="font-bold text-primary">ไม่มีเลย</span>
              <span v-else-if="sq9_3_answer == 2" class="font-bold text-primary">เป็นบางวัน</span>
              <span v-else-if="sq9_3_answer == 3" class="font-bold text-primary">เป็นบ่อย</span>
              <span v-else-if="sq9_3_answer == 4" class="font-bold text-primary">เป็นทุกวัน</span>
            </span>
          </div>
        </div>
        <div class="collapse-content">
          <hr class="">
          <div class="w-full mt-4">
            <div class="">
              <div class="flex flex-col">
                <div v-if="sq9_3_answer == 0" class="flex flex-col w-full gap-2">
                  <button @click="sq9_3_answer = 1" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">ไม่มีเลย</button>
                  <button @click="sq9_3_answer = 2" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบางวัน</button>
                  <button @click="sq9_3_answer = 3" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบ่อย</button>
                  <button @click="sq9_3_answer = 4" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นทุกวัน</button>
                </div>
                <div v-else-if="sq9_3_answer == 1" class="flex flex-col w-full gap-2">
                  <button @click="sq9_3_answer = 1" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px]">ไม่มีเลย</button>
                  <button @click="sq9_3_answer = 2" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบางวัน</button>
                  <button @click="sq9_3_answer = 3" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบ่อย</button>
                  <button @click="sq9_3_answer = 4" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นทุกวัน</button>
                </div>
                <div v-else-if="sq9_3_answer == 2" class="flex flex-col w-full gap-2">
                  <button @click="sq9_3_answer = 1" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">ไม่มีเลย</button>
                  <button @click="sq9_3_answer = 2" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px]">เป็นบางวัน</button>
                  <button @click="sq9_3_answer = 3" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบ่อย</button>
                  <button @click="sq9_3_answer = 4" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นทุกวัน</button>
                </div>
                <div v-else-if="sq9_3_answer == 3" class="flex flex-col w-full gap-2">
                  <button @click="sq9_3_answer = 1" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">ไม่มีเลย</button>
                  <button @click="sq9_3_answer = 2" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบางวัน</button>
                  <button @click="sq9_3_answer = 3" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px]">เป็นบ่อย</button>
                  <button @click="sq9_3_answer = 4" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นทุกวัน</button>
                </div>
                <div v-else-if="sq9_3_answer == 4" class="flex flex-col w-full gap-2">
                  <button @click="sq9_3_answer = 1" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">ไม่มีเลย</button>
                  <button @click="sq9_3_answer = 2" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบางวัน</button>
                  <button @click="sq9_3_answer = 3" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบ่อย</button>
                  <button @click="sq9_3_answer = 4" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px]">เป็นทุกวัน</button>
                </div>
              </div>
            </div>
          </div>
          <hr class="mt-4 mb-1">
        </div>
      </div>

      <div class="collapse border-2 border-dashed rounded-2xl border-t-0 bg-white mt-0">
        <input type="radio" name="my-accordion-2" />
        <div class="collapse-title">
          <div class=" text-slate-500">
            <span class="flex flex-row font-bold items-center"><Fa4 class="me-1"/><FaCaretRight class="me-1"/> เหนื่อยง่าย หรือ ไม่ค่อยมีแรง</span>
            <span class="flex flex-row items-center">
              <strong class="font-bold text-sm ms-10 me-3">คำตอบ</strong>
              <span v-if="sq9_4_answer == 0" class=" font-bold text-error">ยังไม่ได้เลือกคำตอบ</span>
              <span v-else-if="sq9_4_answer == 1" class="font-bold text-primary">ไม่มีเลย</span>
              <span v-else-if="sq9_4_answer == 2" class="font-bold text-primary">เป็นบางวัน</span>
              <span v-else-if="sq9_4_answer == 3" class="font-bold text-primary">เป็นบ่อย</span>
              <span v-else-if="sq9_4_answer == 4" class="font-bold text-primary">เป็นทุกวัน</span>
            </span>
          </div>
        </div>
        <div class="collapse-content">
          <hr class="">
          <div class="w-full mt-4">
            <div class="">
              <div class="flex flex-col">
                <div v-if="sq9_4_answer == 0" class="flex flex-col w-full gap-2">
                  <button @click="sq9_4_answer = 1" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">ไม่มีเลย</button>
                  <button @click="sq9_4_answer = 2" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบางวัน</button>
                  <button @click="sq9_4_answer = 3" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบ่อย</button>
                  <button @click="sq9_4_answer = 4" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นทุกวัน</button>
                </div>
                <div v-else-if="sq9_4_answer == 1" class="flex flex-col w-full gap-2">
                  <button @click="sq9_4_answer = 1" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px]">ไม่มีเลย</button>
                  <button @click="sq9_4_answer = 2" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบางวัน</button>
                  <button @click="sq9_4_answer = 3" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบ่อย</button>
                  <button @click="sq9_4_answer = 4" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นทุกวัน</button>
                </div>
                <div v-else-if="sq9_4_answer == 2" class="flex flex-col w-full gap-2">
                  <button @click="sq9_4_answer = 1" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">ไม่มีเลย</button>
                  <button @click="sq9_4_answer = 2" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px]">เป็นบางวัน</button>
                  <button @click="sq9_4_answer = 3" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบ่อย</button>
                  <button @click="sq9_4_answer = 4" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นทุกวัน</button>
                </div>
                <div v-else-if="sq9_4_answer == 3" class="flex flex-col w-full gap-2">
                  <button @click="sq9_4_answer = 1" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">ไม่มีเลย</button>
                  <button @click="sq9_4_answer = 2" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบางวัน</button>
                  <button @click="sq9_4_answer = 3" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px]">เป็นบ่อย</button>
                  <button @click="sq9_4_answer = 4" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นทุกวัน</button>
                </div>
                <div v-else-if="sq9_4_answer == 4" class="flex flex-col w-full gap-2">
                  <button @click="sq9_4_answer = 1" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">ไม่มีเลย</button>
                  <button @click="sq9_4_answer = 2" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบางวัน</button>
                  <button @click="sq9_4_answer = 3" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบ่อย</button>
                  <button @click="sq9_4_answer = 4" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px]">เป็นทุกวัน</button>
                </div>
              </div>
            </div>
          </div>
          <hr class="mt-4 mb-1">
        </div>
      </div>

      <div class="collapse border-2 border-dashed rounded-2xl border-t-0 bg-white mt-0">
        <input type="radio" name="my-accordion-2" />
        <div class="collapse-title">
          <div class=" text-slate-500">
            <span class="flex flex-row font-bold items-center"><Fa5 class="me-1"/><FaCaretRight class="me-1"/> เบื่ออาหาร หรือ กินมากเกินไป</span>
            <span class="flex flex-row items-center">
              <strong class="font-bold text-sm ms-10 me-3">คำตอบ</strong>
              <span v-if="sq9_5_answer == 0" class=" font-bold text-error">ยังไม่ได้เลือกคำตอบ</span>
              <span v-else-if="sq9_5_answer == 1" class="font-bold text-primary">ไม่มีเลย</span>
              <span v-else-if="sq9_5_answer == 2" class="font-bold text-primary">เป็นบางวัน</span>
              <span v-else-if="sq9_5_answer == 3" class="font-bold text-primary">เป็นบ่อย</span>
              <span v-else-if="sq9_5_answer == 4" class="font-bold text-primary">เป็นทุกวัน</span>
            </span>
          </div>
        </div>
        <div class="collapse-content">
          <hr class="">
          <div class="w-full mt-4">
            <div class="">
              <div class="flex flex-col">
                <div v-if="sq9_5_answer == 0" class="flex flex-col w-full gap-2">
                  <button @click="sq9_5_answer = 1" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">ไม่มีเลย</button>
                  <button @click="sq9_5_answer = 2" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบางวัน</button>
                  <button @click="sq9_5_answer = 3" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบ่อย</button>
                  <button @click="sq9_5_answer = 4" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นทุกวัน</button>
                </div>
                <div v-else-if="sq9_5_answer == 1" class="flex flex-col w-full gap-2">
                  <button @click="sq9_5_answer = 1" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px]">ไม่มีเลย</button>
                  <button @click="sq9_5_answer = 2" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบางวัน</button>
                  <button @click="sq9_5_answer = 3" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบ่อย</button>
                  <button @click="sq9_5_answer = 4" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นทุกวัน</button>
                </div>
                <div v-else-if="sq9_5_answer == 2" class="flex flex-col w-full gap-2">
                  <button @click="sq9_5_answer = 1" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">ไม่มีเลย</button>
                  <button @click="sq9_5_answer = 2" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px]">เป็นบางวัน</button>
                  <button @click="sq9_5_answer = 3" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบ่อย</button>
                  <button @click="sq9_5_answer = 4" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นทุกวัน</button>
                </div>
                <div v-else-if="sq9_5_answer == 3" class="flex flex-col w-full gap-2">
                  <button @click="sq9_5_answer = 1" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">ไม่มีเลย</button>
                  <button @click="sq9_5_answer = 2" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบางวัน</button>
                  <button @click="sq9_5_answer = 3" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px]">เป็นบ่อย</button>
                  <button @click="sq9_5_answer = 4" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นทุกวัน</button>
                </div>
                <div v-else-if="sq9_5_answer == 4" class="flex flex-col w-full gap-2">
                  <button @click="sq9_5_answer = 1" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">ไม่มีเลย</button>
                  <button @click="sq9_5_answer = 2" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบางวัน</button>
                  <button @click="sq9_5_answer = 3" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบ่อย</button>
                  <button @click="sq9_5_answer = 4" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px]">เป็นทุกวัน</button>
                </div>
              </div>
            </div>
          </div>
          <hr class="mt-4 mb-1">
        </div>
      </div>

      <div class="collapse border-2 border-dashed rounded-2xl border-t-0 bg-white mt-0">
        <input type="radio" name="my-accordion-2" />
        <div class="collapse-title">
          <div class=" text-slate-500">
            <span class="flex flex-row font-bold items-top"><Fa6 class=" me-1.5 mt-1"/><FaCaretRight class="me-1 mt-1"/> รู้สึกไม่ดีกับตัวเอง คิดว่า ตัวเองล้มเหลว หรือ ทําให้ตนเองหรือครอบครัวผิดหวัง</span>
            <span class="flex flex-row items-center">
              <strong class="font-bold text-sm ms-9 ps-1 me-3">คำตอบ</strong>
              <span v-if="sq9_6_answer == 0" class=" font-bold text-error">ยังไม่ได้เลือกคำตอบ</span>
              <span v-else-if="sq9_6_answer == 1" class="font-bold text-primary">ไม่มีเลย</span>
              <span v-else-if="sq9_6_answer == 2" class="font-bold text-primary">เป็นบางวัน</span>
              <span v-else-if="sq9_6_answer == 3" class="font-bold text-primary">เป็นบ่อย</span>
              <span v-else-if="sq9_6_answer == 4" class="font-bold text-primary">เป็นทุกวัน</span>
            </span>
          </div>
        </div>
        <div class="collapse-content">
          <hr class="">
          <div class="w-full mt-4">
            <div class="">
              <div class="flex flex-col">
                <div v-if="sq9_6_answer == 0" class="flex flex-col w-full gap-2">
                  <button @click="sq9_6_answer = 1" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">ไม่มีเลย</button>
                  <button @click="sq9_6_answer = 2" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบางวัน</button>
                  <button @click="sq9_6_answer = 3" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบ่อย</button>
                  <button @click="sq9_6_answer = 4" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นทุกวัน</button>
                </div>
                <div v-else-if="sq9_6_answer == 1" class="flex flex-col w-full gap-2">
                  <button @click="sq9_6_answer = 1" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px]">ไม่มีเลย</button>
                  <button @click="sq9_6_answer = 2" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบางวัน</button>
                  <button @click="sq9_6_answer = 3" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบ่อย</button>
                  <button @click="sq9_6_answer = 4" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นทุกวัน</button>
                </div>
                <div v-else-if="sq9_6_answer == 2" class="flex flex-col w-full gap-2">
                  <button @click="sq9_6_answer = 1" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">ไม่มีเลย</button>
                  <button @click="sq9_6_answer = 2" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px]">เป็นบางวัน</button>
                  <button @click="sq9_6_answer = 3" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบ่อย</button>
                  <button @click="sq9_6_answer = 4" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นทุกวัน</button>
                </div>
                <div v-else-if="sq9_6_answer == 3" class="flex flex-col w-full gap-2">
                  <button @click="sq9_6_answer = 1" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">ไม่มีเลย</button>
                  <button @click="sq9_6_answer = 2" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบางวัน</button>
                  <button @click="sq9_6_answer = 3" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px]">เป็นบ่อย</button>
                  <button @click="sq9_6_answer = 4" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นทุกวัน</button>
                </div>
                <div v-else-if="sq9_6_answer == 4" class="flex flex-col w-full gap-2">
                  <button @click="sq9_6_answer = 1" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">ไม่มีเลย</button>
                  <button @click="sq9_6_answer = 2" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบางวัน</button>
                  <button @click="sq9_6_answer = 3" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบ่อย</button>
                  <button @click="sq9_6_answer = 4" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px]">เป็นทุกวัน</button>
                </div>
              </div>
            </div>
          </div>
          <hr class="mt-4 mb-1">
        </div>
      </div>

      <div class="collapse border-2 border-dashed rounded-2xl border-t-0 bg-white mt-0">
        <input type="radio" name="my-accordion-2" />
        <div class="collapse-title">
          <div class=" text-slate-500">
            <span class="flex flex-row font-bold items-top"><Fa7 class=" me-1.5 mt-1"/><FaCaretRight class="me-1 mt-1"/> สมาธิไม่ดีเวลาทําอะไร <br>เช่น ดูโทรทัศน์ ฟังวิทยุ <br>หรือ ทํางานที่ต้องใช้ความตั้งใจ</span>
            <span class="flex flex-row items-center">
              <strong class="font-bold text-sm ms-9 ps-1 me-3">คำตอบ</strong>
              <span v-if="sq9_7_answer == 0" class=" font-bold text-error">ยังไม่ได้เลือกคำตอบ</span>
              <span v-else-if="sq9_7_answer == 1" class="font-bold text-primary">ไม่มีเลย</span>
              <span v-else-if="sq9_7_answer == 2" class="font-bold text-primary">เป็นบางวัน</span>
              <span v-else-if="sq9_7_answer == 3" class="font-bold text-primary">เป็นบ่อย</span>
              <span v-else-if="sq9_7_answer == 4" class="font-bold text-primary">เป็นทุกวัน</span>
            </span>
          </div>
        </div>
        <div class="collapse-content">
          <hr class="">
          <div class="w-full mt-4">
            <div class="">
              <div class="flex flex-col">
                <div v-if="sq9_7_answer == 0" class="flex flex-col w-full gap-2">
                  <button @click="sq9_7_answer = 1" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">ไม่มีเลย</button>
                  <button @click="sq9_7_answer = 2" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบางวัน</button>
                  <button @click="sq9_7_answer = 3" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบ่อย</button>
                  <button @click="sq9_7_answer = 4" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นทุกวัน</button>
                </div>
                <div v-else-if="sq9_7_answer == 1" class="flex flex-col w-full gap-2">
                  <button @click="sq9_7_answer = 1" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px]">ไม่มีเลย</button>
                  <button @click="sq9_7_answer = 2" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบางวัน</button>
                  <button @click="sq9_7_answer = 3" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบ่อย</button>
                  <button @click="sq9_7_answer = 4" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นทุกวัน</button>
                </div>
                <div v-else-if="sq9_7_answer == 2" class="flex flex-col w-full gap-2">
                  <button @click="sq9_7_answer = 1" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">ไม่มีเลย</button>
                  <button @click="sq9_7_answer = 2" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px]">เป็นบางวัน</button>
                  <button @click="sq9_7_answer = 3" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบ่อย</button>
                  <button @click="sq9_7_answer = 4" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นทุกวัน</button>
                </div>
                <div v-else-if="sq9_7_answer == 3" class="flex flex-col w-full gap-2">
                  <button @click="sq9_7_answer = 1" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">ไม่มีเลย</button>
                  <button @click="sq9_7_answer = 2" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบางวัน</button>
                  <button @click="sq9_7_answer = 3" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px]">เป็นบ่อย</button>
                  <button @click="sq9_7_answer = 4" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นทุกวัน</button>
                </div>
                <div v-else-if="sq9_7_answer == 4" class="flex flex-col w-full gap-2">
                  <button @click="sq9_7_answer = 1" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">ไม่มีเลย</button>
                  <button @click="sq9_7_answer = 2" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบางวัน</button>
                  <button @click="sq9_7_answer = 3" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบ่อย</button>
                  <button @click="sq9_7_answer = 4" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px]">เป็นทุกวัน</button>
                </div>
              </div>
            </div>
          </div>
          <hr class="mt-4 mb-1">
        </div>
      </div>

      <div class="collapse border-2 border-dashed rounded-2xl border-t-0 bg-white mt-0">
        <input type="radio" name="my-accordion-2" />
        <div class="collapse-title">
          <div class=" text-slate-500">
            <span class="flex flex-row font-bold items-top"><Fa8 class=" me-1.5 mt-1"/><FaCaretRight class="me-1 mt-1"/> พูดช้า ทําอะไรช้า<br>จนคนอื่นสังเกตเห็นได้ <br>หรือ กระสับกระส่าย<br>ไม่สามารถอยู่นิ่งได้เหมือนที่เคยเป็น</span>
            <span class="flex flex-row items-center">
              <strong class="font-bold text-sm ms-9 ps-1 me-3">คำตอบ</strong>
              <span v-if="sq9_8_answer == 0" class=" font-bold text-error">ยังไม่ได้เลือกคำตอบ</span>
              <span v-else-if="sq9_8_answer == 1" class="font-bold text-primary">ไม่มีเลย</span>
              <span v-else-if="sq9_8_answer == 2" class="font-bold text-primary">เป็นบางวัน</span>
              <span v-else-if="sq9_8_answer == 3" class="font-bold text-primary">เป็นบ่อย</span>
              <span v-else-if="sq9_8_answer == 4" class="font-bold text-primary">เป็นทุกวัน</span>
            </span>
          </div>
        </div>
        <div class="collapse-content">
          <hr class="">
          <div class="w-full mt-4">
            <div class="">
              <div class="flex flex-col">
                <div v-if="sq9_8_answer == 0" class="flex flex-col w-full gap-2">
                  <button @click="sq9_8_answer = 1" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">ไม่มีเลย</button>
                  <button @click="sq9_8_answer = 2" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบางวัน</button>
                  <button @click="sq9_8_answer = 3" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบ่อย</button>
                  <button @click="sq9_8_answer = 4" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นทุกวัน</button>
                </div>
                <div v-else-if="sq9_8_answer == 1" class="flex flex-col w-full gap-2">
                  <button @click="sq9_8_answer = 1" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px]">ไม่มีเลย</button>
                  <button @click="sq9_8_answer = 2" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบางวัน</button>
                  <button @click="sq9_8_answer = 3" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบ่อย</button>
                  <button @click="sq9_8_answer = 4" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นทุกวัน</button>
                </div>
                <div v-else-if="sq9_8_answer == 2" class="flex flex-col w-full gap-2">
                  <button @click="sq9_8_answer = 1" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">ไม่มีเลย</button>
                  <button @click="sq9_8_answer = 2" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px]">เป็นบางวัน</button>
                  <button @click="sq9_8_answer = 3" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบ่อย</button>
                  <button @click="sq9_8_answer = 4" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นทุกวัน</button>
                </div>
                <div v-else-if="sq9_8_answer == 3" class="flex flex-col w-full gap-2">
                  <button @click="sq9_8_answer = 1" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">ไม่มีเลย</button>
                  <button @click="sq9_8_answer = 2" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบางวัน</button>
                  <button @click="sq9_8_answer = 3" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px]">เป็นบ่อย</button>
                  <button @click="sq9_8_answer = 4" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นทุกวัน</button>
                </div>
                <div v-else-if="sq9_8_answer == 4" class="flex flex-col w-full gap-2">
                  <button @click="sq9_8_answer = 1" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">ไม่มีเลย</button>
                  <button @click="sq9_8_answer = 2" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบางวัน</button>
                  <button @click="sq9_8_answer = 3" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบ่อย</button>
                  <button @click="sq9_8_answer = 4" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px]">เป็นทุกวัน</button>
                </div>
              </div>
            </div>
          </div>
          <hr class="mt-4 mb-1">
        </div>
      </div>

      <div class="collapse border-2 border-dashed rounded-2xl border-t-0 bg-white mt-0">
        <input type="radio" name="my-accordion-2" />
        <div class="collapse-title">
          <div class=" text-slate-500">
            <span class="flex flex-row font-bold items-top"><Fa9 class=" me-1.5 mt-1"/><FaCaretRight class="me-1 mt-1"/> คิดทําร้ายตนเอง หรือ <br>คิดว่าถ้าตายไปคงจะดี</span>
            <span class="flex flex-row items-center">
              <strong class="font-bold text-sm ms-9 ps-1 me-3">คำตอบ</strong>
              <span v-if="sq9_9_answer == 0" class=" font-bold text-error">ยังไม่ได้เลือกคำตอบ</span>
              <span v-else-if="sq9_9_answer == 1" class="font-bold text-primary">ไม่มีเลย</span>
              <span v-else-if="sq9_9_answer == 2" class="font-bold text-primary">เป็นบางวัน</span>
              <span v-else-if="sq9_9_answer == 3" class="font-bold text-primary">เป็นบ่อย</span>
              <span v-else-if="sq9_9_answer == 4" class="font-bold text-primary">เป็นทุกวัน</span>
            </span>
          </div>
        </div>
        <div class="collapse-content">
          <hr class="">
          <div class="w-full mt-4">
            <div class="">
              <div class="flex flex-col">
                <div v-if="sq9_9_answer == 0" class="flex flex-col w-full gap-2">
                  <button @click="sq9_9_answer = 1" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">ไม่มีเลย</button>
                  <button @click="sq9_9_answer = 2" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบางวัน</button>
                  <button @click="sq9_9_answer = 3" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบ่อย</button>
                  <button @click="sq9_9_answer = 4" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นทุกวัน</button>
                </div>
                <div v-else-if="sq9_9_answer == 1" class="flex flex-col w-full gap-2">
                  <button @click="sq9_9_answer = 1" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px]">ไม่มีเลย</button>
                  <button @click="sq9_9_answer = 2" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบางวัน</button>
                  <button @click="sq9_9_answer = 3" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบ่อย</button>
                  <button @click="sq9_9_answer = 4" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นทุกวัน</button>
                </div>
                <div v-else-if="sq9_9_answer == 2" class="flex flex-col w-full gap-2">
                  <button @click="sq9_9_answer = 1" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">ไม่มีเลย</button>
                  <button @click="sq9_9_answer = 2" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px]">เป็นบางวัน</button>
                  <button @click="sq9_9_answer = 3" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบ่อย</button>
                  <button @click="sq9_9_answer = 4" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นทุกวัน</button>
                </div>
                <div v-else-if="sq9_9_answer == 3" class="flex flex-col w-full gap-2">
                  <button @click="sq9_9_answer = 1" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">ไม่มีเลย</button>
                  <button @click="sq9_9_answer = 2" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบางวัน</button>
                  <button @click="sq9_9_answer = 3" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px]">เป็นบ่อย</button>
                  <button @click="sq9_9_answer = 4" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นทุกวัน</button>
                </div>
                <div v-else-if="sq9_9_answer == 4" class="flex flex-col w-full gap-2">
                  <button @click="sq9_9_answer = 1" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">ไม่มีเลย</button>
                  <button @click="sq9_9_answer = 2" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบางวัน</button>
                  <button @click="sq9_9_answer = 3" class="btn btn-outline btn-secondary rounded-2xl border-base-200 text-[16px]">เป็นบ่อย</button>
                  <button @click="sq9_9_answer = 4" class="btn btn-primary text-white rounded-2xl shadow-md text-[16px]">เป็นทุกวัน</button>
                </div>
              </div>
            </div>
          </div>
          <hr class="mt-4 mb-1">
        </div>
      </div>

    </div> -->


    </div>
  </div>

  <div class="relative">
    <div class="absolute w-full px-4 mt-10">
      <button class="btn btn-lg btn-outline btn-primary w-full border-double border-[6px] border-[#e5e7eb] rounded-full shadow-lg mb-10" @click="btnNext()">หน้าถัดไป<FaAnglesRight class="mt-0.5 "/></button>
    </div>
    <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 L 0,100 C 90.27751196172247,103.94258373205741 180.55502392344494,107.88516746411483 264,96 C 347.44497607655506,84.11483253588517 424.0574162679426,56.401913875598076 534,51 C 643.9425837320574,45.598086124401924 787.2153110047848,62.50717703349284 906,75 C 1024.7846889952152,87.49282296650716 1119.0813397129189,95.56937799043062 1204,99 C 1288.9186602870811,102.43062200956938 1364.4593301435407,101.2153110047847 1440,100 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path><path d="M 0,400 L 0,233 C 95.24401913875596,219.51674641148327 190.48803827751192,206.0334928229665 276,221 C 361.5119617224881,235.9665071770335 437.2918660287082,279.38277511961724 528,266 C 618.7081339712918,252.61722488038276 724.3444976076554,182.43540669856458 845,184 C 965.6555023923446,185.56459330143542 1101.33014354067,258.8755980861244 1203,279 C 1304.66985645933,299.1244019138756 1372.334928229665,266.0622009569378 1440,233 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 200)"></path></svg>
  </div>
  

</template>
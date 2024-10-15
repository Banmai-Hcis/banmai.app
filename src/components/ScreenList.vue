<script setup>
  import { FaChevronLeft } from '@kalimahapps/vue-icons';
  import { FaWandMagicSparkles } from '@kalimahapps/vue-icons';
  import { FaCircleChevronLeft } from '@kalimahapps/vue-icons';
  import { FaCircleChevronRight } from '@kalimahapps/vue-icons';
  import { FaRightFromBracket } from '@kalimahapps/vue-icons';
  import { FaXmark } from '@kalimahapps/vue-icons';
  import { FaFloppyDisk } from '@kalimahapps/vue-icons';
  import { FaFileSignature } from '@kalimahapps/vue-icons';
  import { FaFilePen } from '@kalimahapps/vue-icons';
  import { FaReply } from '@kalimahapps/vue-icons';
  import { FaArrowRotateRight } from '@kalimahapps/vue-icons';
  import { BsExclamationTriangleFill } from '@kalimahapps/vue-icons';
</script>

<script>
  import axios from 'axios';
  import vueSignature from "vue-signature";

  const sheet = 'https://script.google.com/macros/s/AKfycbwwq431WJ0fiogdpzmvqJXZeVOXLe7xb_KgwYLwJP1-dBn8UNASGCsXH77eKjt9njg/exec';
 
  export default {
    components: {
      vueSignature,
    },
    data() {
      return {
        title_name: 'ประเมินปัจจัยเสี่ยง',
        searchData: '',
        searchDataTotal: null,
        loading: true,
        screenLoading: true,
        // list
        responesData: null,
        dataTotal: null,
        previousData: 0,
        nextData: 5,
        limitData: 5,
        // person screen
        personName: '',
        personAge: '',
        personPID: '',
        personGender: '',
        genderType: '',
        screenBy: '',
        // vueSignature
        signatureStatus: 0,
        signatureError: 0,
        processStep: 0,
        option: {
          penColor: "#5a5e63",
          backgroundColor: "rgb(255,255,255)",
        },
        waterMark: {
          text: "________________________________________________________________________", 
          font: "20px Arial", 
          style: "all", 
          fillStyle: "#e5e7eb", 
          x: -10, 
          y: 110, 
          sx: 400, 
          sy: 200, 
        },
        disabled: false,
        screeDate: '',
        // dataUrl: "https://avatars2.githubusercontent.com/u/17644818?s=460&v=4",
      }
    },
    mounted() {
      axios.get(sheet, { params: { action: 'read' }}, { headers: { 'Access-Control-Allow-Origin':'*' ,'Content-Type': 'application/json' }, mode: 'no-cors'})
        .then(response => (
          this.responesData = response.data.data,
          this.dataTotal = response.data.data.length
        ))
        .catch(error => {
          console.log(error)
        })
        .finally(() => this.loading = false )
    },
    computed: {
      searchDataModel() {
        return this.responesData.filter(data => !!data.name.includes(this.searchData))
      }
    },
    methods: {
      save() {
        var _this = this;
        var svg = _this.$refs.signature.save("image/svg+xml");
        var imgLength = svg.length;
        var minImgLength = 0;
        var maxImgLength = 1500;
        var modImgLength = parseInt(imgLength / 1500);
        var sendCount = 0;
        this.signatureStatus = 2;
        this.processStep = 1;

        if(imgLength == 210){
          this.signatureStatus = 1;
          this.signatureError = 1; //empty
        } else if ((imgLength >= 211) && (imgLength <= 3000) ) {
          this.signatureStatus = 1;
          this.signatureError = 2; //repleat
        } else {
          this.signatureError = 0;
          window.scrollTo(0,0);
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

          for (let i = 0; i <= modImgLength; i++) {
            let signature_image = svg.slice(minImgLength, maxImgLength);
              var sheet = 'https://script.google.com/macros/s/AKfycbwwq431WJ0fiogdpzmvqJXZeVOXLe7xb_KgwYLwJP1-dBn8UNASGCsXH77eKjt9njg/exec';
              axios.get(sheet, { params: { action: 'update', pid: this.personPID, data:`{"signature_image`+ i +`":"` + signature_image + `"}` }}, { headers: { 'Access-Control-Allow-Origin':'*' ,'Content-Type': 'application/json' }, mode: 'no-cors'})
              .then(response => {
                sendCount++
                if (sendCount == modImgLength){
                    window.scrollTo(0,0);
                    document.body.scrollTop = 0; // For Safari
                    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
                    this.$router.push('/screen_one')
                  }
              })
              .catch(error => {
                this.signatureStatus = 1;
                this.signatureError = 3;
              })

            minImgLength += 1500;
            maxImgLength += 1500;
          }
        }
      },
      clear() {
        var _this = this;
        _this.$refs.signature.clear();
        _this.$refs.signature.addWaterMark({
          text: "________________________________________________________________________", 
          font: "20px Arial", 
          style: "all", 
          fillStyle: "#e5e7eb", 
          x: -10, 
          y: 110, 
          sx: 400, 
          sy: 200, 
        });
      },
      goToSignin() {
        window.scrollTo(0,0);
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        this.$cookies.remove('user');
        this.$router.push('/')
      },
      btnScreen(e) {
        if (e.target.getAttribute('data-persongender') == "หญิง") {
          this.genderType = false;
        } else if (e.target.getAttribute('data-persongender') == "ชาย") {
          this.genderType = true;
        } else {
          this.genderType = false;
        }
        this.$cookies.set('user',{userName: 'นายพยูง ศรีสูญจีน'})
        this.personName = e.target.getAttribute('data-personname');
        this.personAge = e.target.getAttribute('data-personage'); 
        this.personPID = e.target.getAttribute('data-personpid');
        this.personGender = e.target.getAttribute('data-persongender');
        this.screenBy = e.target.getAttribute('data-screenby');
        this.$cookies.set('personData', {personName: this.personName, personAge: this.personAge, personPID: this.personPID, personGender: this.personGender, personGenderType: this.genderType}, '1d');
        this.signatureStatus = 0;
        this.screenLoading = true;

        var sheet = 'https://script.google.com/macros/s/AKfycbwwq431WJ0fiogdpzmvqJXZeVOXLe7xb_KgwYLwJP1-dBn8UNASGCsXH77eKjt9njg/exec';
            axios.get(sheet, { params: { action: 'read', pid: this.personPID }}, { headers: { 'Access-Control-Allow-Origin':'*' ,'Content-Type': 'application/json' }, mode: 'no-cors'})
            .then(response => {
              this.screenBy = response.data.data.screen_by
              if ( this.screenBy == "" ) {
                this.screenLoading = false;
              } else {
                if (this.$cookies.get('user').userName == this.screenBy) {
                  this.screenLoading = false;
                } else {
                  this.signatureStatus = 4;
                }
              }
            })
            .catch(error => { 
              console.log(error);
            })

        var date = new Date()
        var result = date.toLocaleDateString('th-TH', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });

        this.screeDate = result;
        // console.log(this.$cookies.get('personData').personAge);
      },
      goToScreen() {
        let d = new Date()
        let month = '' + (d.getMonth() + 1)
        let day = '' + d.getDate()
        let year = d.getFullYear()

        if (month.length < 2) {
          month = '0' + month;
        }
        if (day.length < 2) {
          day = '0' + day;
        }

        var screen_date = year + '-' + month + '-' + day;
        axios.get(sheet, { params: { action: 'update', pid: this.$cookies.get('personData').personPID, data: `{"screen_by":"`+ this.$cookies.get('user').userName +`","screen_status": 1,"screen_age":`+ this.$cookies.get('personData').personAge +`, "screen_date":"`+ screen_date +`"}` }}, { headers: { 'Access-Control-Allow-Origin':'*' ,'Content-Type': 'application/json' }, mode: 'no-cors'})
          .then(response => {
           
          })
          .catch(error => { 
            console.log(error);
          })
        this.signatureStatus = 1;
        // this.$router.push('/screen_authen');
      },
      btnPrevious() {
        if (this.previousData < 0) {
          this.previousData = 0
          this.nextData = this.limitData
        } else {
          this.previousData = this.previousData - this.limitData
          this.nextData = this.nextData - this.limitData
        }
      },
      btnNext() {
        if (this.nextData < this.limitData) {
          this.previousData = 0
          this.nextData = this.limitData
        } else if (this.nextData > this.dataTotal) {
          this.previousData = this.previousData - this.limitData
          this.nextData = this.dataTotal
        } else {
          this.previousData = this.previousData + this.limitData
          this.nextData = this.nextData + this.limitData
        }
      },
    },

  }
</script>

<template>
  <dialog id="my_modal_signout" class="modal">
    <div class="modal-box bg-white">
      <h3 class="text-lg text-center font-bold text-slate-600 mt-4">ออกจากระบบ</h3>
      <div class="flex justify-center">
        <img class="image-full px-2" src="../assets/images/Alert.jpg">
      </div>
      <p class="py-4 text-center">ยืนยันการออกจากระบบ</p>
      <div class="flex flex-row justify-center w-full">
        <div class="modal-action mb-4">
          <form method="dialog" class="space-x-2">
            <button class="btn btn-error text-white rounded-xl" @click="goToSignin()"><FaRightFromBracket class="mt-0.5 rotate-180"/>ออกจากระบบ</button>
            <button class="btn btn-secondary btn-outline rounded-xl"><FaXmark class="mt-0.5"/>ยกเลิก</button>
          </form>
        </div>
      </div>
    </div>
  </dialog>

  <dialog id="my_modal_screen" class="modal">
    <div class="modal-box bg-white">

      <div v-if="signatureStatus == 1">
        <h3 class="text-lg text-center font-bold text-slate-600 my-4">ลงชื่อผู้รับบริการคัดกรอง</h3>
        <h3 class="texr-xs text-center text-slate-600 mb-4">เขียนลายเซ็น ในบริเวณกรอบด้านล่าง</h3>
        
        <div v-if="signatureError == 1" class="flex flex-row gap-2 justify-center font-bold text-error text-sm">
          <BsExclamationTriangleFill class="mt-1"/>
          <span class="font-bold">กรุณาให้ผู้รับบริการ "เขียนลายเซ็นก่อน"</span>
        </div>

        <div v-if="signatureError == 2" class="flex flex-row gap-2 justify-center font-bold text-error text-sm">
          <BsExclamationTriangleFill class="mt-1"/>
          <span class="font-bold">กรุณาให้ผู้รับบริการ "เขียนลายเซ็นใหม่" อีกครั้ง</span>
        </div>

        <div v-if="signatureError == 3" class="flex flex-row gap-2 justify-center font-bold text-error text-sm">
          <BsExclamationTriangleFill class="mt-1"/>
          <span class="font-bold">ไม่สามารถบันทึกได้ กรุณาลองใหม่อีกครั้ง</span>
        </div>

        <vueSignature
          class="border-2 border-dashed border-slate-600/40 w-auto rounded-2xl m-3 h-60 my-5"
          ref="signature"
          :sigOption="option"
          :w="'auto'"
          :h="'150px'"
          :disabled="disabled"
          :waterMark="waterMark"
        ></vueSignature>
          <div class="w-full flex flex-row justify-center gap-3 mt-5 mb-4">
            <button class="btn btn-success bg-gradient-to-r from-lime-300 to-lime-400 text-green-900 rounded-xl shadow px-6" @click="save"><FaFloppyDisk class="mt-0.5"/>บันทึก</button>
            <button class="btn btn-accent rounded-xl shadow" @click="clear"><FaWandMagicSparkles class="mt-0.5"/>เขียนใหม่</button>
        </div>
        <div class="w-full px-3 mb-5">
          <hr class="my-7">
            <button class="btn w-full btn-secondary btn-outline rounded-xl" @click="signatureStatus = 0"><FaReply class="mt-0.5"/>ย้อนกลับ</button>
        </div>
      </div>

      <div v-else-if="signatureStatus == 2">
        <h3 class="text-lg text-center font-bold text-slate-600 my-4">บันทึกภาพ</h3>
        <h3 class="text-center text-slate-600 mt-4 animate-pulse">กำลังแปลงไฟล์ภาพเป็นข้อมูลเข้ารหัส ...</h3>
          <div class="flex justify-center">
            <img class="image-full p-6 px-2 mb-2 animate-pulse" src="../assets/images/loadImage.svg">
          </div>
        <div class="mb-4 px-3">
          <button v-if="processStep == 1" class="btn w-full btn-accent rounded-xl animate-pulse shadow mb-3"><FaArrowRotateRight class="mt-0.5 animate-spin"/>กรุณารอสักครู่ ...</button>
          <button v-else class="btn w-full btn-secondary btn-outline rounded-xl" @click="signatureStatus = 0"><FaReply class="mt-0.5"/>ย้อนกลับ</button>
        </div>
      </div>

      <div v-else-if="signatureStatus == 4">
        <h3 class="text-lg text-center font-bold text-slate-600 my-4">ไม่สามารถดำเนินการได้ !</h3>
        <h3 class="text-center text-slate-600 text-sm mt-4">เนื่องจากผู้รับบริการ {{ personName }} <br>ได้รับบริการแล้ว หรือ กำลังอยู่ในขั้นตอนดำเนินการ</h3>
          <div class="flex justify-center">
            <img class="image-full py-2 px-4" src="../assets/images/preScreenBy.png">
          </div>
        <h3 class="text-center text-slate-600"><span class="font-bold">กำลังดำเนินการโดย </span>{{ screenBy }}</h3>

        <div class="mb-4 px-3 w-full mt-7">
          <!-- <button v-if="processStep == 1" class="btn w-full btn-accent rounded-xl animate-pulse shadow mb-3"><FaArrowRotateRight class="mt-0.5 animate-spin"/>กรุณารอสักครู่ ...</button> -->
          <form method="dialog" class="w-full">
              <button class="btn w-full btn-secondary btn-outline rounded-xl"><FaXmark class="mt-0.5"/>ปิด</button>
          </form>
        </div>
      </div>

      <div v-else>
        <h3 class="text-lg text-center font-bold text-slate-600 my-4">ยืนยันเพื่อเริ่มการคัดกรอง</h3>
        <div v-if="personAge <= 34" class="text-center w-full"><span class="text-center text-slate-600 w-full">แบบประเมินปัจจัยเสี่ยงกลุ่มอายุ 15 - 34 ปี</span></div>
        <div v-else class="text-center w-full"><span class="text-center text-slate-600 w-full">แบบประเมินปัจจัยเสี่ยงกลุ่มอายุ 35 - 70 ปี</span></div>
        <div class="flex justify-center mt-2">
          <img class="image-full" src="../assets/images/preScreen.svg">
        </div>
        <p class="py-4 px-1 text-center text-sm">โปรดแน่ใจว่าท่านได้ทำการ<span class="text-error font-bold"> ขอบริการยืนยันและพิสูจน์ตัวตน (Authentication) </span>ผู้รับบริการแล้ว</p>
        <hr class="my-1">
        <!-- <div class="flex flex-col gap-2 text-center w-full">
          <span class="text-center mb-0 w-full"><span class="font-bold text-slate-600">ผู้รับบริการ : </span> {{ personName }} </span>
          <span><span class="text-center font-bold text-slate-600"> คัดกรองวันที่ : </span><span class=" font-normal">{{ screeDate }}</span> </span>
        </div> -->
        
        <div class="flex flex-row justify-center w-full">
          <div class="modal-action mb-3">
            <button v-if="screenLoading == true" class="btn btn-success bg-gradient-to-r from-lime-300 to-lime-400 text-green-900 rounded-xl px-6 animate-pulse" ><FaArrowRotateRight class="mt-0.5 animate-spin"/>กำลังตรวจสอบ</button>
            <button v-else class="btn btn-success bg-gradient-to-r from-lime-300 to-lime-400 text-green-900 rounded-xl px-6" @click="goToScreen()"><FaFileSignature class="mt-0.5"/>เริ่มคัดกรอง</button>
            <form method="dialog" class="space-x-2 mb-2">
              <button class="btn btn-secondary btn-outline rounded-xl"><FaXmark class="mt-0.5"/>ยกเลิก</button>
            </form>
          </div>
        </div>

      </div>

    </div>
  </dialog>

  <!-- nav bar -->
  <div class="flex item-center navbar bg-white shadow rounded-3xl rounded-tl-none rounded-tr-none p-0 px-4 mb-3">
    <div class="navbar-start">
      <button class="text-primary" onclick="my_modal_signout.showModal()"><FaChevronLeft class="" /></button>
    </div>
    <div class="navbar-center">
      <div class="text-lg font-bold text-slate-600">{{ title_name }}</div>
    </div>
    <div class="navbar-end">

    </div>
  </div>
  <!-- nav bar -->

  <div class="relative">
      <div class="absolute items-center w-full">
          <img src="../assets/images/Screen.svg" class="w-full px-5" alt="" srcset="">
      </div>
      <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 690" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150">
        <path d="M 0,700 L 0,105 C 83.3397129186603,111.7846889952153 166.6794258373206,118.56937799043061 250,128 C 333.3205741626794,137.4306220095694 416.62200956937795,149.50717703349284 528,150 C 639.377990430622,150.49282296650716 778.8325358851674,139.4019138755981 892,123 C 1005.1674641148326,106.59808612440192 1092.0478468899523,84.88516746411483 1179,81 C 1265.9521531100477,77.11483253588517 1352.9760765550238,91.05741626794259 1440,105 L 1440,700 L 0,700 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="0.2" class="transition-all duration-300 ease-in-out delay-150 path-0"></path>
        <path d="M 0,700 L 0,245 C 126.7751196172249,243.31578947368422 253.5502392344498,241.6315789473684 333,231 C 412.4497607655502,220.3684210526316 444.57416267942574,200.78947368421055 535,194 C 625.4258373205743,187.21052631578945 774.1531100478468,193.21052631578945 894,207 C 1013.8468899521532,220.78947368421055 1104.8133971291868,242.36842105263162 1191,250 C 1277.1866028708132,257.6315789473684 1358.5933014354066,251.3157894736842 1440,245 L 1440,700 L 0,700 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="0.35" class="transition-all duration-300 ease-in-out delay-150 path-1"></path>
        <path d="M 0,700 L 0,385 C 96.5645933014354,374.5023923444976 193.1291866028708,364.0047846889952 293,363 C 392.8708133971292,361.9952153110048 496.0478468899522,370.4832535885168 599,378 C 701.9521531100478,385.5167464114832 804.6794258373207,392.0622009569378 889,385 C 973.3205741626793,377.9377990430622 1039.2344497607658,357.26794258373207 1128,355 C 1216.7655502392342,352.73205741626793 1328.3827751196172,368.86602870813397 1440,385 L 1440,700 L 0,700 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="0.45" class="transition-all duration-300 ease-in-out delay-150 path-2"></path>
        <path d="M 0,700 L 0,525 C 112.49760765550238,516.5598086124402 224.99521531100476,508.1196172248804 307,501 C 389.00478468899524,493.8803827751196 440.5167464114834,488.0813397129187 536,499 C 631.4832535885166,509.9186602870813 770.9377990430623,537.555023923445 892,549 C 1013.0622009569377,560.444976076555 1115.732057416268,555.6985645933015 1204,549 C 1292.267942583732,542.3014354066985 1366.1339712918661,533.6507177033493 1440,525 L 1440,700 L 0,700 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-3"></path>
      </svg>
  </div>

  <div class="p-0">
    <div class="bg-white flex flex-col items-center shadow pt-20">
      
      <div class="stats stats-vertical w-full bg-white px-4">
        <div class="stat px-0 py-5">
          <div class="stat-title flex flex-row items-center font-bold text-slate-500 text-lg px-3"> รายชื่อผู้ที่ต้องคัดกรอง</div>

          <label class="input input-bordered flex items-center rounded-full gap-2 mt-4 mx-2">
            <input type="text"
              v-model="searchData"
              class="grow" 
              maxlength="20" 
              placeholder="ค้นหาด้วยชื่อ"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="h-4 w-4 opacity-70">
                <path
                  fill-rule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clip-rule="evenodd" 
                />
            </svg>
          </label>
          
          <div v-if="searchData.length >= 1" class="flex flex-col justify-center items-center mt-4">
            <span v-if="searchDataModel.length >= 1" class="text-primary text-sm font-bold mb-2">พบข้อมูล {{ searchDataModel.length }} รายการ</span>
            <span v-else class="text-error text-sm font-bold mb-2">ไม่พบข้อมูลที่ท่านค้นหา !</span>
            <button @click="searchData = ''" class="btn btn-wide btn-accent text-slate-700 item-center rounded-3xl shadow "><FaWandMagicSparkles/>ล้างการค้นหา</button>
          </div>

          <div v-else class="flex flex-row justify-between px-3 mt-10">
            <span class="text-slate-500 font-bold">จำนวนข้อมูลทั้งหมด</span><span class="text-primary font-bold">{{ dataTotal }} รายการ</span>
          </div>

        </div>
      </div>

      <div class="px-4 w-full min-h-60">
        <div class="border-2 border-dashed rounded-3xl px-2">
            <div v-if="responesData != null">
              <div v-if="searchData.length >= 1" class="stats stats-vertical bg-white w-full ">

                <div v-for="item in searchDataModel" class="stat px-3">
                  <div class="collapse collapse-arrow text-neutral">
                    <input type="checkbox" />
                    <div class="collapse-title font-medium">{{ item.name }}</div>
                    <div class="collapse-content ps-0">
                      <ul class="menu w-full pt-0">
                        <li>
                          <h2 class="font-bold text-slate-500 pt-0">ข้อมูลส่วนตัว</h2>
                          <ul>
                            <li class=""><p class="flex flex-row items-center disabled">อายุ : {{ item.age }} / {{ item.pid }}</p></li>
                            <li class=""><p class="flex flex-row items-center disabled">ที่อยู่ : {{ item.messengeraddr }}</p></li>
                            <li class=""><p class="flex flex-row items-center">เบอร์โทร : {{ item.messengertel }} ( {{ item.patientrelate }} )</p></li>
                          </ul>
                          <li class="w-full flex flex-row justify-center mt-2 ps-5">
                            <button class="btn btn-wide bg-gradient-to-r from-lime-400 to-lime-600 bg-lime-400 text-green-900  rounded-3xl item-center shadow" 
                              :data-personName="item.name"
                              :data-personAge="item.age"
                              :data-personPid="item.pid"
                              :data-personGender="item.gender"
                              :data-screenBy="item.screen_by"
                              @click="btnScreen($event)"
                              onclick="my_modal_screen.showModal()"><FaFilePen class="mt-0.5"/>คัดกรอง
                            </button>
                          </li>
                        </li>
                      </ul> 
                    </div>
                  </div>
                </div>
                
              </div>

              <div v-else class="stats stats-vertical bg-white w-full">
                <div v-for="item in searchDataModel.slice(previousData, nextData)" class="stat px-3">

                  <div class="collapse collapse-arrow text-neutral">
                    <input type="checkbox" />
                    <div class="collapse-title font-medium">{{ item.name }}</div>
                    <div class="collapse-content ps-0">
                      <ul class="menu w-full pt-0">
                        <li>
                          <h2 class="font-bold text-slate-500 pt-0">ข้อมูลส่วนตัว</h2>
                          <ul>
                            <li class=""><p class="flex flex-row items-center disabled">อายุ : {{ item.age }}</p></li>
                            <li class=""><p class="flex flex-row items-center disabled">ที่อยู่ : {{ item.messengeraddr }}</p></li>
                            <li class=""><p class="flex flex-row items-center">เบอร์โทร : {{ item.messengertel }} ( {{ item.patientrelate }} )</p></li>
                          </ul>
                          <li class="w-full flex flex-row justify-center mt-2 ps-5">
                            <button class="btn btn-wide bg-gradient-to-r from-lime-300 to-lime-400 text-green-900  rounded-3xl item-center shadow" 
                              :data-personName="item.name"
                              :data-personAge="item.age"
                              :data-personPid="item.pid"
                              :data-personGender="item.gender"
                              :data-screenBy="item.screen_by"
                              @click="btnScreen($event)"
                              onclick="my_modal_screen.showModal()"><FaFilePen class="mt-0.5"/>คัดกรอง
                            </button>
                          </li>
                        </li>
                      </ul> 
                    </div>
                  </div>
                  
                </div>
              </div>
              
            </div>

            <div v-else>
              <div class="flex flex-col items-center p-5">
                <span className="loading loading-infinity loading-lg"></span>
                <p>กำลังโหลดข้อมูล</p>
              </div>
            </div>

        </div>
      </div>

    </div>
  </div>

  <div class="relative">
    <div class="absolute items-center w-full">
      <div v-if="searchData == '' && loading == false" >
        <div class="flex flex-row justify-between  p-5">
          <button v-if="previousData <= 0" class="btn btn-accent text-primary item-center rounded-3xl w-28 shadow" @click="btnPrevious" disabled><FaCircleChevronLeft class="text-lg" /> ก่อนหน้า</button>
          <button v-else class="btn btn-accent text-primary item-center rounded-3xl w-28 shadow" @click="btnPrevious"><FaCircleChevronLeft class="text-lg" /> ก่อนหน้า</button>

          <button v-if="nextData >= dataTotal" class="btn btn-accent text-primary item-center rounded-3xl w-28 shadow" @click="btnNext" disabled>ถัดไป <FaCircleChevronRight class="text-lg"/></button>
          <button v-else class="btn btn-accent text-primary item-center rounded-3xl w-28 shadow" @click="btnNext">ถัดไป <FaCircleChevronRight class="text-lg"/></button>
        </div>
      </div> 
    </div>
    <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 L 0,60 C 100.66985645933013,61.827751196172244 201.33971291866027,63.655502392344495 308,59 C 414.66028708133973,54.344497607655505 527.3110047846891,43.20574162679426 616,40 C 704.6889952153109,36.79425837320574 769.4162679425837,41.52153110047847 846,51 C 922.5837320574163,60.47846889952153 1011.0239234449762,74.70813397129187 1112,77 C 1212.9760765550238,79.29186602870813 1326.4880382775118,69.64593301435406 1440,60 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="0.265" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path><path d="M 0,400 L 0,140 C 115.35885167464113,122.21052631578948 230.71770334928226,104.42105263157896 331,114 C 431.28229665071774,123.57894736842104 516.488038277512,160.52631578947367 609,166 C 701.511961722488,171.47368421052633 801.33014354067,145.4736842105263 898,143 C 994.66985645933,140.5263157894737 1088.1913875598086,161.57894736842107 1178,165 C 1267.8086124401914,168.42105263157893 1353.9043062200958,154.21052631578948 1440,140 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="0.4" class="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 200)"></path><path d="M 0,400 L 0,220 C 95.65550239234449,231.40669856459328 191.31100478468898,242.8133971291866 278,249 C 364.688995215311,255.1866028708134 442.4114832535886,256.1531100478469 531,244 C 619.5885167464114,231.84688995215313 719.0430622009569,206.57416267942583 826,202 C 932.9569377990431,197.42583732057417 1047.4162679425838,213.55023923444978 1151,220 C 1254.5837320574162,226.44976076555022 1347.2918660287082,223.2248803827751 1440,220 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-2" transform="rotate(-180 720 200)"></path><path d="M 0,400 L 0,300 C 65.82775119617222,317.6937799043062 131.65550239234443,335.3875598086124 247,326 C 362.34449760765557,316.6124401913876 527.2057416267944,280.14354066985646 627,270 C 726.7942583732056,259.85645933014354 761.5215311004782,276.0382775119618 829,289 C 896.4784688995218,301.9617224880382 996.708133971292,311.70334928229664 1104,313 C 1211.291866028708,314.29665071770336 1325.645933014354,307.1483253588517 1440,300 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-3" transform="rotate(-180 720 200)"></path></svg>
  </div>

  



</template>
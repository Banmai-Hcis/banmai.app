<script setup>
  import { RouterLink } from 'vue-router';

  import { FaChevronLeft } from '@kalimahapps/vue-icons';
  import { FaPencil } from '@kalimahapps/vue-icons';
  import { FaWandMagicSparkles } from '@kalimahapps/vue-icons';

  import { FaCircleChevronLeft } from '@kalimahapps/vue-icons';
  import { FaCircleChevronRight } from '@kalimahapps/vue-icons';

  import { BsExclamationCircle } from '@kalimahapps/vue-icons';
  import { FaRightFromBracket } from '@kalimahapps/vue-icons';
  import { FaXmark } from '@kalimahapps/vue-icons';

  import { FaFloppyDisk } from '@kalimahapps/vue-icons';
  import { FaFileSignature } from '@kalimahapps/vue-icons';
  import { FaFilePen } from '@kalimahapps/vue-icons';
  import { FaReply } from '@kalimahapps/vue-icons';
  import { FaArrowRotateRight } from '@kalimahapps/vue-icons';

  import { BsExclamationTriangleFill } from '@kalimahapps/vue-icons';
  import { FaRegImage } from '@kalimahapps/vue-icons';
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
          for (let i = 0; i <= modImgLength; i++) {
            let signature_image = svg.slice(minImgLength, maxImgLength);
              var sheet = 'https://script.google.com/macros/s/AKfycbwwq431WJ0fiogdpzmvqJXZeVOXLe7xb_KgwYLwJP1-dBn8UNASGCsXH77eKjt9njg/exec';
              axios.get(sheet, { params: { action: 'update', pid: '195', data:`{"signature_image`+ i +`":"` + signature_image + `"}` }}, { headers: { 'Access-Control-Allow-Origin':'*' ,'Content-Type': 'application/json' }, mode: 'no-cors'})
              .then(response => {
                sendCount++
                if (sendCount == modImgLength){
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
        this.$cookies.remove('user');
        this.$router.push('/')
      },
      btnScreen(e) {
        this.personName = e.target.getAttribute('data-personname');
        this.personAge = e.target.getAttribute('data-personage'); 
        this.personPID = e.target.getAttribute('data-pid');
      },
      goToScreen() {
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
            <button class="btn btn-success text-slate-700 rounded-xl shadow px-6" @click="save"><FaFloppyDisk class="mt-0.5"/>บันทึก</button>
            <button class="btn btn-accent rounded-xl shadow" @click="clear"><FaWandMagicSparkles class="mt-0.5"/>เขียนใหม่</button>
        </div>
        <div class="w-full px-3 mb-5">
          <hr class="my-5">
            <button class="btn w-full btn-secondary btn-outline rounded-xl" @click="signatureStatus = 0"><FaReply class="mt-0.5"/>ย้อนกลับ</button>
        </div>
      </div>

      <div v-else-if="signatureStatus == 2">
        <h3 class="text-lg text-center font-bold text-slate-600 my-4">บันทึกภาพ</h3>
        <h3 class="text-center text-slate-600 mt-4 animate-pulse">กำลังแปลงข้อมูลเป็นไฟล์ภาพ ...</h3>
          <div class="flex justify-center">
            <img class="image-full p-6 px-2 mb-2" src="../assets/images/loadImage.svg">
          </div>
        <div class="mb-4 px-3">
          <button v-if="processStep == 1" class="btn w-full btn-accent rounded-xl animate-pulse shadow mb-3"><FaArrowRotateRight class="mt-0.5 animate-spin"/>กรุณารอสักครู่ ...</button>
          <button v-else class="btn w-full btn-secondary btn-outline rounded-xl" @click="signatureStatus = 0"><FaReply class="mt-0.5"/>ย้อนกลับ</button>
        </div>
      </div>

      <div v-else>

        <h3 class="text-lg text-center font-bold text-slate-600 mt-4">คัดกรอง</h3>
        <div class="flex justify-center">
          <img class="image-full px-2" src="../assets/images/preScreen.svg">
        </div>
        <p class="py-4 text-center">ยืนยันเพื่อเริ่มการคัดกรอง</p>
        <p class="text-center mb-0"> {{ personName }} </p>
        <p class="text-center"> อายุ : {{ personAge }} </p>
        <div class="flex flex-row justify-center w-full">
          <div class="modal-action mb-3">
            <button class="btn btn-success text-slate-700 rounded-xl px-6" @click="goToScreen()"><FaFileSignature class="mt-0.5"/>เริ่มคัดกรอง</button>
            <form method="dialog" class="space-x-2 mb-2">
              <button class="btn btn-secondary btn-outline rounded-xl"><FaXmark class="mt-0.5"/>ยกเลิก</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  </dialog>

  <!-- nav bar -->
  <div class="flex item-center navbar bg-white shadow rounded-3xl rounded-tl-none rounded-tr-none p-0 px-4 mb-5">
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

  <div class="relative mt-32">
    <div class="absolute w-full bottom-0" >
      <img class="image-full px-2" src="../assets/images/Screen.svg">
    </div>
    <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 690" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,700 L 0,131 C 100.02820512820514,139.46153846153845 200.0564102564103,147.92307692307693 275,139 C 349.9435897435897,130.07692307692307 399.802564102564,103.76923076923077 474,100 C 548.197435897436,96.23076923076923 646.7333333333335,115.00000000000001 729,116 C 811.2666666666665,116.99999999999999 877.2641025641024,100.23076923076923 953,118 C 1028.7358974358976,135.76923076923077 1114.2102564102565,188.07692307692307 1197,196 C 1279.7897435897435,203.92307692307693 1359.8948717948717,167.46153846153845 1440,131 L 1440,700 L 0,700 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="0.4" class="transition-all duration-300 ease-in-out delay-150 path-0"></path><path d="M 0,700 L 0,306 C 73.83589743589741,316.5051282051282 147.67179487179482,327.0102564102564 241,332 C 334.3282051282052,336.9897435897436 447.14871794871794,336.4641025641026 523,322 C 598.851282051282,307.5358974358974 637.7333333333333,279.1333333333333 714,267 C 790.2666666666667,254.86666666666665 903.9179487179488,259.00256410256407 986,267 C 1068.0820512820512,274.99743589743593 1118.5948717948718,286.8564102564103 1189,294 C 1259.4051282051282,301.1435897435897 1349.702564102564,303.57179487179485 1440,306 L 1440,700 L 0,700 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-1"></path><path d="M 0,700 L 0,481 C 94.0205128205128,501.1435897435897 188.0410256410256,521.2871794871794 265,511 C 341.9589743589744,500.71282051282054 401.8564102564103,459.9948717948718 475,461 C 548.1435897435897,462.0051282051282 634.5333333333332,504.73333333333335 708,499 C 781.4666666666668,493.26666666666665 842.0102564102565,439.0717948717949 922,427 C 1001.9897435897435,414.9282051282051 1101.425641025641,444.97948717948714 1191,461 C 1280.574358974359,477.02051282051286 1360.2871794871794,479.01025641025643 1440,481 L 1440,700 L 0,700 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-2"></path></svg>
  </div>
  
  <div class="p-0">
    <div class="bg-white flex flex-col items-center shadow min-h-screen pt-5">
      
      <div class="stats stats-vertical w-full bg-white px-4">
        <div class="stat px-0 py-5">
          <div class="stat-title flex flex-row items-center font-bold text-slate-500 text-lg px-3"> รายชื่อผู้ที่ต้องคัดกรอง</div>

          <label class="input input-bordered flex items-center rounded-full gap-2 mt-4 mx-3">
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

      <div class="px-4 w-full">
        <div class="border-2 border-dashed rounded-3xl px-2">
            <!-- {{ responesData }} -->
            <div v-if="responesData != null">
              <div v-if="searchData.length >= 1" class="stats stats-vertical bg-white w-full">

                <div v-for="item in searchDataModel" class="stat px-3">
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
                            <button class="btn btn-wide btn-success text-slate-700 rounded-3xl item-center shadow" 
                              :data-personName="item.name"
                              :data-personAge="item.age"
                              :date-pid="item.id"
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
                            <button class="btn btn-wide btn-success text-slate-700 rounded-3xl item-center shadow" 
                              :data-personName="item.name"
                              :data-personAge="item.age"
                              :date-pid="item.id"
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

      <div v-if="searchData == '' && loading == false" >
        <div class="flex flex-row space-x-36 p-5">
          <button v-if="previousData <= 0" class="btn btn-accent text-primary item-center rounded-3xl w-28 shadow" @click="btnPrevious" disabled><FaCircleChevronLeft class="text-lg" /> ก่อนหน้า</button>
          <button v-else class="btn btn-accent text-primary item-center rounded-3xl w-28 shadow" @click="btnPrevious"><FaCircleChevronLeft class="text-lg" /> ก่อนหน้า</button>

          <button v-if="nextData >= dataTotal" class="btn btn-accent text-primary item-center rounded-3xl w-28 shadow" @click="btnNext" disabled>ถัดไป <FaCircleChevronRight class="text-lg"/></button>
          <button v-else class="btn btn-accent text-primary item-center rounded-3xl w-28 shadow" @click="btnNext">ถัดไป <FaCircleChevronRight class="text-lg"/></button>
        </div>
      </div>  

      

    </div>
  </div>



</template>
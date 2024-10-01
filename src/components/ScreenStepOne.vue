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
        title_name: 'ตรวจสุขภาพทั่วไป',
        // data inherited
        inherPID: this.$cookies.get('personData').personPID,
        inherGender: this.$cookies.get('personData').personGender,
        inherAge: this.$cookies.get('personData').personAge,
        inherBMI: 0,
        // data form input
        formWeight: "",
        formHight: "",
        formBpTop: "",
        formBpDown: "",
        formWaist: "",
        formBloodSugar: "",
        // data process
        interpretation: 1,
        // error check
        formWeightError: 0,
        formHightError: 0,
        formBpTopError: 0,
        formBpDownError: 0,
        formWaistError: 0,
        formBloodSugarError: 0,
      }
    },
    methods: {
     
    },
    computed: {
    
    },
    methods: {
      btnInterpretation() {
        // set default
        this.formWeightError = 0; this.formHightError = 0; this.formBpTopError = 0; this.formBpDownError = 0; this.formWaistError = 0; this.formBloodSugarError = 0;
        // check error
        if (this.formWeight == "") { this.formWeightError = 1 }
        if (this.formHight == "") { this.formHightError = 1 }
        if (this.formWaist == "") { this.formWaistError = 1 }
        if (this.formBpTop == "") { this.formBpTopError = 1 }
        if (this.formBpDown == "") { this.formBpDownError = 1 }
        if ( this.inherAge >= 35) {
          if (this.formBloodSugar == "") { this.formBloodSugarError = 1 }
        } else {
          this.formBloodSugar = 0;
        }

        if (this.formWeightError != 1 && this.formHightError != 1 && this.formWaistError != 1 && this.formBpTopError != 1 && this.formBpDownError != 1 && this.formBloodSugarError != 1 ) {
          var bmiCal = this.formWeight / ( ( this.formHight / 100 ) ** 2 );
            this.inherBMI = bmiCal.toFixed(2);
            
            this.$cookies.set('personScreen', {
              personWeight: this.personWeight,
              personHight: this.personHight,
              personBMI: this.inherBMI,
              personBpTop: this.personBpTop,
              personBpDown: this.personBpDown,
              personWaist: this.personWaist,
              personBloodSugar: this.personBloodSugar,
            }, '1d');

            var dataPersonScreen = `
                   {"weight":` + this.formWeight + `,` 
                  +`"height":` + this.formHight + `,` 
                  +`"waistline":` + this.formWaist + `,`
                  +`"bp_top":` + this.formBpTop + `,` 
                  +`"bp_down":` + this.formBpDown + `,` 
                  +`"bmi":` + this.inherBMI + `,`  
                  +`"blood_sugar":`+ this.formBloodSugar 
                  +`}`;
            
            var sheet = 'https://script.google.com/macros/s/AKfycbwwq431WJ0fiogdpzmvqJXZeVOXLe7xb_KgwYLwJP1-dBn8UNASGCsXH77eKjt9njg/exec';
            axios.get(sheet, { params: { action: 'update', pid: this.personPID, data: dataPersonScreen }}, { headers: { 'Access-Control-Allow-Origin':'*' ,'Content-Type': 'application/json' }, mode: 'no-cors'})
            .then(response => {
            })
            .catch(error => { 
              this.interpretation = 1;
            })
          this.interpretation = 2;
        }
        window.scrollTo(0, 0);
      },
      goToScreenList() {
        this.$router.push('/screen_list')
      },
    },

  }
</script>

<template>

  <!-- nav bar -->
  <div class="flex item-center navbar bg-white shadow rounded-3xl rounded-tl-none rounded-tr-none p-0 px-4 mb-4">
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
    <div class="absolute items-center px-5 pt-7">
      <div v-if="interpretation == 1">
        <span class=""><strong class="font-bold text-slate-500">คำอธิบาย</strong> </span>
        <ul class="list-disc ps-6 text-sm flex flex-col mt-1 gap-1">
          <li>กรอกข้อมูลในช่องด้านล่างนี้ให้ครบถ้วน</li>
          <li>ชั่งน้ำหนัก วัดส่วนสูง วัดรอบเอว และวัดความดันโลหิต</li>
          <li>กรณีผู้รับบริการอายุมากกว่าหรือเท่ากับ 35 ปี ให้ตรวจระดับน้ำตาล โดยวิธีเจาะปลายนิ้ว</li>
        </ul>
      </div>
      <div v-if="interpretation == 2">
        <span class=""><strong class="font-bold text-slate-500">คำอธิบาย</strong> </span>
        <ul class="list-disc ps-6 text-sm flex flex-col mt-1 gap-1">
          <li>แปลผลดัชนีมวลกาย (BMI)</li>
          <li>แปลผลเส้นรอบเอว (ประเมินภาวะอ้วน)</li>
          <li>แปลผลความเสี่ยงการเกิดความดันโลหิตสูง</li>
          <li>แปลผลความเสี่ยงการเกิดโรคเบาหวาน</li>
        </ul>
      </div>
    </div>
    <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 690" xmlns="http://www.w3.org/2000/svg" class=""><path d="M 0,700 L 0,131 C 100.02820512820514,139.46153846153845 200.0564102564103,147.92307692307693 275,139 C 349.9435897435897,130.07692307692307 399.802564102564,103.76923076923077 474,100 C 548.197435897436,96.23076923076923 646.7333333333335,115.00000000000001 729,116 C 811.2666666666665,116.99999999999999 877.2641025641024,100.23076923076923 953,118 C 1028.7358974358976,135.76923076923077 1114.2102564102565,188.07692307692307 1197,196 C 1279.7897435897435,203.92307692307693 1359.8948717948717,167.46153846153845 1440,131 L 1440,700 L 0,700 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="0.4" class="transition-all duration-300 ease-in-out delay-150 path-0"></path><path d="M 0,700 L 0,306 C 73.83589743589741,316.5051282051282 147.67179487179482,327.0102564102564 241,332 C 334.3282051282052,336.9897435897436 447.14871794871794,336.4641025641026 523,322 C 598.851282051282,307.5358974358974 637.7333333333333,279.1333333333333 714,267 C 790.2666666666667,254.86666666666665 903.9179487179488,259.00256410256407 986,267 C 1068.0820512820512,274.99743589743593 1118.5948717948718,286.8564102564103 1189,294 C 1259.4051282051282,301.1435897435897 1349.702564102564,303.57179487179485 1440,306 L 1440,700 L 0,700 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-1"></path><path d="M 0,700 L 0,481 C 94.0205128205128,501.1435897435897 188.0410256410256,521.2871794871794 265,511 C 341.9589743589744,500.71282051282054 401.8564102564103,459.9948717948718 475,461 C 548.1435897435897,462.0051282051282 634.5333333333332,504.73333333333335 708,499 C 781.4666666666668,493.26666666666665 842.0102564102565,439.0717948717949 922,427 C 1001.9897435897435,414.9282051282051 1101.425641025641,444.97948717948714 1191,461 C 1280.574358974359,477.02051282051286 1360.2871794871794,479.01025641025643 1440,481 L 1440,700 L 0,700 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-2"></path></svg>

  </div>
  
  <div class="p-0">
    <div class="bg-white flex flex-col shadow">

      <div v-if="interpretation == 1">
          <div class="m-5 mx-4 mt-0 border-2 border-dashed rounded-2xl bg-white p-4"> 
            <div class="flex flex-row text-slate-500">
              <span class="font-bold w-1/4">ส่วนที่ 1 : </span><span class="w-3/4"> ประเมินดัชนีมวลกาย ชั่งน้ำหนัก  <br> วัดส่วนสูง และรอบเอว</span>  
            </div>

            <div class="w-full">
              <div class="y-5">

                <div class="flex flex-row gap-3">
                  <div class="w-1/3 max-w-md">
                    
                    <div v-if="formWeightError == 1">
                      <div class="label">
                        <span class="label-text text-error">น้ำหนัก</span>
                        <span class="label-text-alt text-error">*</span>
                      </div>
                      <label class="input input-bordered input-error flex items-center gap-2 text-error">
                        <input v-model="formWeight" type="number" pattern="[0-9]*" inputmode="numeric" class="grow w-1/3 input-bordered input-error" />
                        <span class="">กก.</span>
                      </label>
                    </div>
                    
                    <div v-else>
                      <div class="label">
                        <span class="label-text text-slate-500">น้ำหนัก</span>
                        <span class="label-text-alt text-error">*</span>
                      </div>
                      <label class="input input-bordered flex items-center gap-2">
                        <input v-model="formWeight" type="number" pattern="[0-9]*" inputmode="numeric" class="grow w-1/3" />
                        <span class="">กก.</span>
                      </label>
                    </div>

                  </div>

                  <div class="w-1/3 max-w-md">

                    <div v-if="formHightError == 1">
                      <div class="label">
                        <span class="label-text text-error">ส่วนสูง</span>
                        <span class="label-text-alt text-error">*</span>
                      </div>
                      <label class="input input-bordered input-error flex items-center gap-2 text-error">
                        <input v-model="formHight" type="number" pattern="[0-9]*" inputmode="numeric" class="grow w-1/3" />
                        <span class="">ซม.</span>
                      </label>
                    </div>

                    <div v-else>
                      <div class="label">
                        <span class="label-text text-slate-500">ส่วนสูง</span>
                        <span class="label-text-alt text-error">*</span>
                      </div>
                      <label class="input input-bordered flex items-center gap-2">
                        <input v-model="formHight" type="number" pattern="[0-9]*" inputmode="numeric" class="grow w-1/3" />
                        <span class="">ซม.</span>
                      </label>
                    </div>

                  </div>

                  <div class="w-1/3 max-w-md">

                    <div v-if="formWaistError == 1">
                      <div class="label">
                        <span class="label-text text-error">รอบเอว</span>
                        <span class="label-text-alt text-error">*</span>
                      </div>
                      <label class="input input-bordered input-error flex items-center gap-2 text-error">
                        <input v-model="formWaist" type="number" pattern="[0-9]*" inputmode="numeric" class="grow w-1/3" />
                        <span class="">ซม.</span>
                      </label>
                    </div>

                    <div v-else>
                      <div class="label">
                        <span class="label-text text-slate-500">รอบเอว</span>
                        <span class="label-text-alt text-error">*</span>
                      </div>
                      <label class="input input-bordered flex items-center gap-2">
                        <input v-model="formWaist" type="number" pattern="[0-9]*" inputmode="numeric" class="grow w-1/3" />
                        <span class="">ซม.</span>
                      </label>
                    </div>

                  </div>

                </div>
                
              </div>
            </div>
          </div>
          <div class="m-5 mx-4 mt-0 border-2 border-dashed rounded-2xl bg-white p-4"> 
            <div class="flex flex-row text-slate-500">
              <span class="font-bold w-1/4">ส่วนที่ 2 : </span><span class="w-3/4"> ตรวจวัดความดันโลหิต</span>  
            </div>

            <div class="w-full bg-white">
              <div class="">

                <div class="flex flex-row gap-3">
                  <div class="w-2/4 max-w-md">
                    
                    <div v-if="formBpTopError == 1">
                      <div class="label">
                        <span class="label-text text-error"> ค่าความดันตัวบน</span>
                        <span class="label-text-alt text-error">*</span>
                      </div>
                      <label class="input input-bordered input-error text-error flex items-center gap-2">
                        <input v-model="formBpTop" type="number" pattern="[0-9]*" inputmode="numeric" class="grow w-1/3" />
                        <span class="">mmHg</span>
                      </label>
                    </div>

                    <div v-else>
                      <div class="label">
                        <span class="label-text text-slate-500"> ค่าความดันตัวบน</span>
                        <span class="label-text-alt text-error">*</span>
                      </div>
                      <label class="input input-bordered flex items-center gap-2">
                        <input v-model="formBpTop" type="number" pattern="[0-9]*" inputmode="numeric" class="grow w-1/3" />
                        <span class="">mmHg</span>
                      </label>
                    </div>
                    
                  </div>

                  <div class="w-2/4 max-w-md">

                    <div v-if="formBpDownError == 1">
                      <div class="label">
                        <span class="label-text text-error">ค่าความดันตัวล่าง</span>
                        <span class="label-text-alt text-error">*</span>
                      </div>
                      <label class="input input-bordered input-error text-error flex items-center gap-2">
                        <input v-model="formBpDown" type="number" pattern="[0-9]*" inputmode="numeric" class="grow w-1/3" />
                        <span class="">mmHg</span>
                      </label>
                    </div>

                    <div v-else>
                      <div class="label">
                        <span class="label-text text-slate-500">ค่าความดันตัวล่าง</span>
                        <span class="label-text-alt text-error">*</span>
                      </div>
                      <label class="input input-bordered flex items-center gap-2">
                        <input v-model="formBpDown" type="number" pattern="[0-9]*" inputmode="numeric" class="grow w-1/3" />
                        <span class="">mmHg</span>
                      </label>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="inherAge >= 35" class="m-5 mx-4 mt-0 border-2 border-dashed rounded-2xl bg-white p-4"> 
            <div class="flex flex-row text-slate-500">
              <span class="font-bold"> ระดับน้ำตาลในเลือด</span>  
            </div>

            <div class="w-full bg-white">
              <div class="">

                <div class="flex flex-row gap-3">
                  <div class="w-3/4 max-w-md">

                    <div v-if="formBloodSugarError == 1">
                      <div class="label">
                        <span class="label-text text-error"> ระดับน้ำตาลโดยวิธีเจาะปลายนิ้ว</span>
                        <span class="label-text-alt text-error">*</span>
                      </div>
                      <label class="input input-bordered input-error text-error flex items-center gap-2">
                        <input v-model="formBloodSugar" type="number" pattern="[0-9]*" inputmode="numeric" class="grow w-2/3" />
                        <span class="">มก./ดล.</span>
                      </label>
                    </div>

                    <div v-else>
                      <div class="label">
                        <span class="label-text text-slate-500"> ระดับน้ำตาลโดยวิธีเจาะปลายนิ้ว</span>
                        <span class="label-text-alt text-error">*</span>
                      </div>
                      <label class="input input-bordered flex items-center gap-2">
                        <input v-model="formBloodSugar" type="number" pattern="[0-9]*" inputmode="numeric" class="grow w-2/3" />
                        <span class="">มก./ดล.</span>
                      </label>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="inherAge <= 34" class="m-5 mx-4 mt-0 border-2 border-dashed rounded-2xl bg-white p-4"> 
            <div class="flex flex-row text-slate-500">
              <span class="font-bold line-through"> ระดับน้ำตาลในเลือด</span>  
            </div>

            <div class="w-full bg-white">
              <div class="">

                <div class="flex flex-row gap-3">
                  <div class="w-3/4 max-w-md">
                    <div class="label">
                      <span class="label-text line-through text-slate-500"> ระดับน้ำตาลโดยวิธีเจาะปลายนิ้ว</span>
                      <span class="label-text-alt text-error"></span>
                    </div>
                    <label class="input input-bordered flex items-center gap-2">
                      <input type="number" pattern="[0-9]*" inputmode="numeric" class="grow w-2/3" disabled />
                      <span class="">มก./ดล.</span>
                    </label>
                  </div>
                
                </div>
              </div>
            </div>
          </div>
      </div>

      <div v-else>
        <div class="m-5 mx-4 mt-0 border-2 border-dashed rounded-2xl bg-white p-4"> 
          <div class="flex flex-row text-slate-600">
            <span class="font-bold text-center w-full text-lg">แปลผลการประเมินสุขภาพ</span>
          </div>

          <div class="w-full">
            <div class="y-5">
              <hr class="my-4">
              <div class="flex flex-col gap-1">
                <span class="font-bold text-slate-500 mx-3">แปลผลดัชนีมวลกาย (BMI) </span>
                <div class="flex flex-row justify-between px-3">
                  <span class="text-slate-500 text-nowrap"> คะแนน BMI ที่ได้ </span><span class="text-slate-500 text-nowrap overflow-hidden px-3"> ---------------------------- </span><span class="text-slate-500 text-nowrap ps-3"> {{  inherBMI }} คะแนน</span>
                </div>
                <ul class="list-disc ps-9 flex flex-col mt-1 gap-1">
                  <li v-if="inherBMI < 18.5"><span class="text-slate-500"> อยู่ในระดับ : 😅 ต่ำกว่าเกณฑ์</span></li>
                  <li v-else-if="(inherBMI >= 18.5) && inherBMI <= 22.9"><span class="text-slate-500"> อยู่ในระดับ : 😀 ปกติสมส่วน</span></li>
                  <li v-else-if="(inherBMI >= 23) && inherBMI <= 24.9"><span class="text-slate-500"> อยู่ในระดับ : 😕 น้ำหนักเกิน</span></li>
                  <li v-else-if="(inherBMI >= 25) && inherBMI <= 29.9"><span class="text-slate-500"> อยู่ในระดับ : 😣 อ้วนระดับ 1</span></li>
                  <li v-else-if="inherBMI > 30"><span class="text-slate-500"> อยู่ในระดับ : 😖 อ้วนระดับ 2</span></li>
                </ul>
              </div>

              <hr class="my-4">
              <div class="flex flex-col gap-1">
                <span class="font-bold text-slate-500 mx-3">แปลผลเส้นรอบเอว (ประเมินภาวะอ้วน) </span>
                <div class="flex flex-row justify-between px-3">
                  <span class="text-slate-500 text-nowrap"> ขนาดเส้นรอบเอว </span><span class="text-slate-500 text-nowrap overflow-hidden px-3"> ------------------------------------------- </span><span class="text-slate-500 text-nowrap ps-3"> {{ formWaist }} ซม. </span>
                </div>
                <ul class="list-disc ps-9 flex flex-col mt-1 gap-1">
                  <div v-if="inherGender == 'ชาย'">
                    <li v-if="formWaist >= 90"><span class="text-slate-500"> อยู่ในระดับ : 🥹 อ้วน </span></li>
                    <li v-else><span class="text-slate-500"> อยู่ในระดับ : 😀 ปกติ </span></li>
                  </div>
                  <div v-if="inherGender == 'หญิง'">
                    <li v-if="formWaist >= 80"><span class="text-slate-500"> อยู่ในระดับ : 🥹 อ้วน </span></li>
                    <li v-else><span class="text-slate-500"> อยู่ในระดับ : 😀 ปกติ </span></li>
                  </div>
                </ul>
              </div>

              <hr class="my-4">
              <div class="flex flex-col gap-1">
                <span class="font-bold text-slate-500 mx-3">แปลผลความเสี่ยงการเกิดความดันโลหิตสูง </span>
                <div class="flex flex-row justify-between px-3">
                  <span class="text-slate-500 text-nowrap"> ค่าความดันโลหิต </span><span class="text-slate-500 text-nowrap overflow-hidden px-3"> ---------------------------- </span><span class="text-slate-500 text-nowrap ps-3"> {{ formBpTop }} / {{ formBpDown }} mmHg. </span>
                </div>
                <ul class="list-disc ps-9 flex flex-col mt-1 gap-1">
                  <li v-if="(formBpTop < 120) || (formBpDown < 80)"><span class="text-slate-500"> อยู่ในระดับ : 😅 ต่ำกว่าเกณฑ์ </span></li>

                  <li v-else-if="((formBpTop >= 140) && (formBpDown < 90))"><span class="text-slate-500"> อยู่ในระดับ : 😨 สูงกว่าเกณฑ์</span></li>
                  <li v-else-if="(formBpTop >= 180) || (formBpDown >= 110)"><span class="text-slate-500"> อยู่ในระดับ : 😨 สูงกว่าเกณฑ์</span></li>
                  
                  <li v-else-if="((formBpTop >= 160) && (formBpTop <= 179)) || ((formBpDown >= 100) && (formBpDown <= 109))"><span class="text-slate-500"> อยู่ในระดับ : 😨 สูงกว่าเกณฑ์</span></li>
                  <li v-else-if="((formBpTop >= 140) && (formBpTop <= 159)) || ((formBpDown >= 90) && (formBpDown <= 99))"><span class="text-slate-500"> อยู่ในระดับ : 😨 สูงกว่าเกณฑ์</span></li>
                  <li v-else-if="((formBpTop >= 130) && (formBpTop <= 139)) || ((formBpDown >= 85) && (formBpDown <= 89))"><span class="text-slate-500"> อยู่ในระดับ : 😨 สูงกว่าเกณฑ์</span></li>
                  
                  <li v-else-if="((formBpTop >= 120) && (formBpTop <= 129)) || ((formBpDown >= 80) && (formBpDown <= 84))"><span class="text-slate-500"> อยู่ในระดับ : 😀 ปกติ </span></li>
                </ul>
              </div>

              <div v-if="formBloodSugar != ''" class="flex flex-col gap-1">
                <hr class="my-4">
                <span class="font-bold text-slate-500 mx-3">แปลผลความเสี่ยงการเกิดโรคเบาหวาน </span>
                <div class="flex flex-row justify-between px-3">
                  <span class="text-slate-500 text-nowrap"> ระดับน้ำตาลในเลือด </span><span class="text-slate-500 text-nowrap overflow-hidden px-3"> ---------------------------- </span><span class="text-slate-500 text-nowrap ps-3"> {{ formBloodSugar }} มก./ดล. </span>
                </div>
                <ul class="list-disc ps-9 flex flex-col mt-1 gap-1">
                  <li v-if="formBloodSugar > 126"><span class="text-slate-500"> อยู่ในระดับ : 😰 เป็นโรคเบาหวาน </span></li>
                  <li v-else-if="(formBloodSugar >= 100) && (formBloodSugar <= 120)"><span class="text-slate-500"> อยู่ในระดับ : 😟 เสี่ยงต่อการเป็นโรคเบาหวาน </span></li>
                  <li v-else-if="formBloodSugar < 100"><span class="text-slate-500"> อยู่ในระดับ : 😀 ปกติ </span></li>
                </ul>
              </div>


            </div>
          </div>
        </div>
      </div>

      <div v-if="interpretation == 1"class="w-full my-6 px-4">
        <button class="btn btn-lg btn-outline btn-secondary w-full rounded-full shadow-lg" @click="btnInterpretation()"><FaRegPaste class="mt-0.5 "/>แปลผล</button>
      </div>

      <div v-else="interpretation == 2"class="w-full my-6 px-4">
        <div v-if="inherAge < 35" class=" mt-20"></div>
        <div v-else></div>
          <button class="btn btn-lg btn-outline btn-secondary w-full rounded-full shadow-lg" @click="interpretation = 1"><FaRegPaste class="mt-0.5 "/>ถัดไป</button>
      </div>

    </div>
  </div>

</template>
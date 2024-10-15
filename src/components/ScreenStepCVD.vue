<script setup>
  import { reactive, ref } from 'vue'
  import { RouterLink } from 'vue-router';
  import Vue3Signature from "vue3-signature"

  // icon
  import { FaLink } from '@kalimahapps/vue-icons';
  import { FaChevronLeft } from '@kalimahapps/vue-icons';

</script>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        title_name: 'Thai CV risk Calculator',
        cvdSliderAgeValue : ref(this.$cookies.get('personData').personAge),
        cvdSliderBpTopValue : ref(this.$cookies.get('screenStepOne').bp_top),
        cvdSliderWaistValue : ref(this.$cookies.get('screenStepOne').waistlineInch),
        cvdSliderHightValue : ref(this.$cookies.get('screenStepOne').height),
        // cvdGender: true,
        cvdGender: this.$cookies.get('personData').personGenderType,
        cvdSmoke: this.$cookies.get('screenStepTwo').cigaretteType,
        cvdDm: false,
        cvdBtnTran: 0,
        sc1: ref(''),
        sc2: ref(''),
        sc3: ref(''),
        sc4: ref(''),
        sc5: ref(''),
      }
    },
    methods: {
     
    },
    computed: {
    
    },
    methods: {
      resultsCVD() {
        var tcAge = this.cvdSliderAgeValue;
        var tcSmoke = "";
          if (this.cvdSmoke == false) {
            tcSmoke = 0;
          } else {
            tcSmoke = 1;
          }
        var tcDM = this.cvdDm;
          if (this.cvdDm == false) {
            tcDM = 0;
          } else {
            tcDM = 1;
          }
        var tcSbp = this.cvdSliderBpTopValue;
        var tcSex = "";
          if (this.cvdGender == false) {
            tcSex = 0;
          } else {
            tcSex = 1;
          }
        var tcTC = "";
        var tcLdl = "";
        var tcHdl = "";
        var tcWhr = "";
        var tcWc = this.cvdSliderWaistValue;
        var tcHeight = this.cvdSliderHightValue;

        var tc = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);    // age, smoke, dm, sbp, sex, tc, ldl, hdl, whr, wc, height
        if (tcAge != '') { 
          tc[0] = parseInt(tcAge) 
        };
          tc[1] = parseInt(tcSmoke);
          tc[2] = parseInt(tcDM);
        if (tcSbp != '') {
          tc[3] = parseInt(tcSbp) 
        };
          tc[4] = parseInt(tcSex);
        if (tcTC != '') {
          tc[5] = parseInt(tcTC) 
        };
        //if ($("#ldl").val() != '') { tc[6] = parseInt($("#ldl").val()) };     //Cancle 2021-04-23
        //if ($("#hdl").val() != '') { tc[7] = parseInt($("#hdl").val()) };     //Cancle 2021-04-23
        if (tcWc != '') { 
          tc[9] = parseInt(parseFloat(tcWc) * 2.5)  // Convert inch to cm
        };   
        if (tcHeight != '') { 
          tc[10] = parseInt(tcHeight) 
        };
        if (tc[9] > 0 && tc[10] > 0) { 
          tc[8] = tc[9] / tc[10] 
        };

        // console.log(tc);
        
        //FORMULAR
        var sum_risk = new Array();
            sum_risk = TASCVDformular(tc[0], tc[1], tc[2], tc[3], tc[4], tc[5], tc[6], tc[7], tc[8], tc[9]);
        //Display
        if (sum_risk[1] > 0) {
              var tt_risk = (sum_risk[1] / sum_risk[3]).toFixed(1);
              //******* Update 2021-04-23
              if (sum_risk[1] <= 0.3) {
                  this.sc2 = (sum_risk[1] * 100).toFixed(2);
              } else {
                  this.sc2 = 'มากกว่า 30';
              };
              if (tt_risk > 1.1) {
                  this.sc1 = 'ซึ่งระดับความเสี่ยงของท่านสูงเป็น ' + String(tt_risk) + ' เท่า';
              } else if (tt_risk < 0.9) {
                  this.sc1 = 'ซึ่งระดับความเสี่ยงของท่านต่ำเป็น ' + String(tt_risk) + ' เท่า';
              } else {
                  this.sc1 = 'ซึ่งใกล้เคียงกับระดับความเสี่ยง';
              };
              //Group of risk and suggestion
              var sug = '';
              if (tc[1] == 1) { sug = sug + ' เลิกสูบบุหรี่' };
              if (tc[2] == 1) { sug = sug + ' รักษาระดับน้ำตาลในเลือดให้อยู่ในเกณฑ์ปกติ' };
              if (tc[3] >= 140) { sug = sug + ' ควบคุมระดับความดันโลหิตให้ดี' };
              if (tc[5] >= 220 || tc[6] >= 190) { sug = sug + ' เข้ารับการรักษาเพื่อลดโคเรสเตอรอลในเลือด' };
              if ((tc[9] >= 38 && tc[4] == 1) || (tc[9] > 32 && tc[4] == 0)) { sug = sug + ' ลดน้ำหนักให้อยู่ในเกณฑ์ปกติ' };
              if (sum_risk[1] < 0.1) {
                  this.sc5 = "จัดอยู่ในกลุ่มเสี่ยงน้อย";
                  this.sc4 = "เพื่อป้องกันการเกิดโรคหลอดเลือดในอนาคต ควรออกกำลังกายอย่างสม่ำเสมอ รับประทานผักผลไม้เป็นประจำ" + sug + " และตรวจสุขภาพประจำปี";
              } else if (sum_risk[1] >= 0.1 && sum_risk[1] < 0.2) {
                  this.sc5 = "จัดอยู่ในกลุ่มเสี่ยงปานกลาง";
                  this.sc4 = "ควรออกกำลังกายอย่างสม่ำเสมอ รับประทานผักผลไม้เป็นประจำ" + sug + " และควรได้รับการตรวจร่างกายประจำปีอย่างสม่ำเสมอ";
              } else if (sum_risk[1] >= 0.2 && sum_risk[1] <= 0.3) {
                  this.sc5 = "จัดอยู่ในกลุ่มเสี่ยงสูง";
                  this.sc4 = "ควรเข้ารับคำปรึกษาจากแพทย์ ในเบื้องต้นควรออกกำลังกายอย่างสม่ำเสมอ รับประทานผักผลไม้เป็นประจำ" + sug + " และเข้ารับการตรวจสุขภาพประจำปีอย่างสม่ำเสมอ";
              } else if (sum_risk[1] > 0.3) {    //******* Update 2021-04-23
                  this.sc5 = "จัดอยู่ในกลุ่มเสี่ยงสูงมาก";
                  this.sc4 = "ควรเข้ารับคำปรึกษาจากแพทย์ ในเบื้องต้นควรออกกำลังกายอย่างสม่ำเสมอ รับประทานผักผลไม้เป็นประจำ" + sug + " และเข้ารับการตรวจสุขภาพประจำปีอย่างสม่ำเสมอ";
              } else {
                  this.sc5 = "ไม่พบความเสี่ยง";
                  this.sc4 = "สามารถป้องกันการเกิดโรคหลอดเลือดหัวใจในอนาคตได้ด้วยการออกกำลังกายอย่างสม่ำเสมอ";
              };
            }

            function TASCVDformular(age, smoke, dm, sbp, sex, tc, ldl, hdl, whr, wc) {
            //FORMULAR
            var full_score = 0;
            var compare_score = 0;
            var predicted_risk = 0;
            var compare_risk = 0;
            var compare_whr = 0.52667;
            var compare_wc = 79;
            var compare_sbp = 120;
            var compare_hdl = 44;
            var sur_root = 0.964588;
            if (sex == 0) { compare_hdl = 49 };
            if (sex == 1 && age > 60) { compare_sbp = 132 };
            if (sex == 0 && age <= 60) { compare_sbp = 115 };
            if (sex == 0 && age > 60) { compare_sbp = 130 };
            if (sex == 1) {
                compare_whr = 0.58125;      //****Update 2021-04-23
                compare_wc = 93;
            };
            //****Update 2021-04-23 ยุบเหลือ 3 สูตร เท่านั้น
            if (age > 1 && sbp >= 70) {
                if (tc > 0) {       //Using Total cholesterol from blood test
                    full_score = (0.08183 * age) + (0.39499 * sex) + (0.02084 * sbp) + (0.69974 * dm) + (0.00212 * tc) + (0.41916 * smoke);
                    predicted_risk = 1 - (Math.pow(sur_root, Math.exp(full_score - 7.04423)));
                    compare_score = (0.08183 * age) + (0.39499 * sex) + (0.02084 * compare_sbp) + (0.00212 * 200);
                    compare_risk = 1 - (Math.pow(sur_root, Math.exp(compare_score - 7.04423)));
                } else if (whr > 0) {
                    full_score = (0.079 * age) + (0.128 * sex) + (0.019350987 * sbp) + (0.58454 * dm) + (3.512566 * whr) + (0.459 * smoke);
                    predicted_risk = 1 - (Math.pow(sur_root, Math.exp(full_score - 7.712325)));     
                    compare_score = (0.079 * age) + (0.128 * sex) + (0.019350987 * compare_sbp) + (3.512566 * compare_whr);
                    compare_risk = 1 - (Math.pow(sur_root, Math.exp(compare_score - 7.712325)));  
                } else if (wc > 0) {
                    full_score = (0.08372 * age) + (0.05988 * sex) + (0.02034 * sbp) + (0.59953 * dm) + (0.01283 * wc) + (0.459 * smoke);
                    predicted_risk = 1 - (Math.pow(sur_root, Math.exp(full_score - 7.31047)));
                    compare_score = (0.08372 * age) + (0.05988 * sex) + (0.02034 * compare_sbp) + (0.01283 * compare_wc);
                    compare_risk = 1 - (Math.pow(sur_root, Math.exp(compare_score - 7.31047)));
                };        
            };
            //if (predicted_risk > 0.3) { predicted_risk = 0.3 };   //***Update เปลี่ยนเป็น หากมากกว่า 0.3 ให้แจ้งว่า มากกว่า 30% เท่านั้น เช่น 0.42 แจ้งว่า มากกว่า 30%
            var risk = new Array(full_score, predicted_risk, compare_score, compare_risk);
            return risk;
        };
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        this.cvdBtnTran = 1;
      },
      goToThaiCVD() {
        window.location.href("https://www.rama.mahidol.ac.th/cardio_vascular_risk/thai_cv_risk_score/");
      },
      goToScreenList() {
        window.scrollTo(0,0);
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        this.$router.push('/screen_list')
      },
      btnSaveExit(){

        var dataPersonScreen = []

          dataPersonScreen.push(`{"weight":` + this.$cookies.get('screenStepOne').weight + `,` 
              +`"height":` + this.$cookies.get('screenStepOne').height + `,` 
              +`"waistline":` + this.$cookies.get('screenStepOne').waistline + `,`
              +`"bp_top":` + this.$cookies.get('screenStepOne').bp_top + `,` 
              +`"bp_down":` + this.$cookies.get('screenStepOne').bp_down + `,` 
              +`"bmi":` + this.$cookies.get('screenStepOne').bmi + `,`
              +`"blood_sugar":`+ this.$cookies.get('screenStepOne').blood_sugar 
          +`}`);

          dataPersonScreen.push(`{"cigarette":` + this.$cookies.get('screenStepTwo').cigarette + `,` 
              +`"cigarette_role":` + this.$cookies.get('screenStepTwo').cigarette_role + `,` 
              +`"providing_ci":` + this.$cookies.get('screenStepTwo').providing_ci + `,` 
              +`"alcohol":` + this.$cookies.get('screenStepTwo').alcohol + `,` 
              +`"alcohol_role":` + this.$cookies.get('screenStepTwo').alcohol_role + `,` 
              +`"providing_al":` + this.$cookies.get('screenStepTwo').providing_al + `,` 
              +`"ftnd_1":` + this.$cookies.get('screenStepTwo').ftnd_1 + `,` 
              +`"ftnd_2":` + this.$cookies.get('screenStepTwo').ftnd_2 + `,` 
              +`"ftnd_3":` + this.$cookies.get('screenStepTwo').ftnd_3 + `,` 
              +`"ftnd_4":` + this.$cookies.get('screenStepTwo').ftnd_4 + `,` 
              +`"ftnd_5":` + this.$cookies.get('screenStepTwo').ftnd_5 + `,` 
              +`"ftnd_6":` + this.$cookies.get('screenStepTwo').ftnd_6 + `,` 
              +`"ftnd_sum":` + this.$cookies.get('screenStepTwo').ftnd_sum + `,` 
              +`"ci_assist_sum":` + this.$cookies.get('screenStepTwo').ci_assist_sum + `,` 
              +`"al_assist_sum":` + this.$cookies.get('screenStepTwo').al_assist_sum
          +`}`);

          dataPersonScreen.push(`{"st5_1":` + this.$cookies.get('screenStepTwo').st5_1 + `,` 
              +`"st5_2":` + this.$cookies.get('screenStepTwo').st5_2 + `,` 
              +`"st5_3":` + this.$cookies.get('screenStepTwo').st5_3 + `,` 
              +`"st5_4":` + this.$cookies.get('screenStepTwo').st5_4 + `,` 
              +`"st5_5":` + this.$cookies.get('screenStepTwo').st5_5 + `,` 
              +`"st5_sum":` + this.$cookies.get('screenStepTwo').st5_sum + `,` 
              +`"s2q_1":` + 2 + `,` 
              +`"s2q_2":` + 2 + `,` 
              +`"s9q_1":` + this.$cookies.get('screenStepTwo').s9q_1 + `,` 
              +`"s9q_2":` + this.$cookies.get('screenStepTwo').s9q_2 + `,` 
              +`"s9q_3":` + this.$cookies.get('screenStepTwo').s9q_3 + `,` 
              +`"s9q_4":` + this.$cookies.get('screenStepTwo').s9q_4 + `,` 
              +`"s9q_5":` + this.$cookies.get('screenStepTwo').s9q_5 + `,` 
              +`"s9q_6":` + this.$cookies.get('screenStepTwo').s9q_6 + `,` 
              +`"s9q_7":` + this.$cookies.get('screenStepTwo').s9q_7 + `,` 
              +`"s9q_8":` + this.$cookies.get('screenStepTwo').s9q_8 + `,` 
              +`"s9q_9":` + this.$cookies.get('screenStepTwo').s9q_9 + `,` 
              +`"s9q_sum":` + this.$cookies.get('screenStepTwo').s9q_sum
          +`}`);

          dataPersonScreen.push(`{"s8q_1":` + this.$cookies.get('screenStepTwo').s8q_1 + `,` 
              +`"s8q_2":` + this.$cookies.get('screenStepTwo').s8q_2 + `,` 
              +`"s8q_3":` + this.$cookies.get('screenStepTwo').s8q_3 + `,` 
              +`"s8q_sub_3_1":` + this.$cookies.get('screenStepTwo').s8q_sub_3_1 + `,` 
              +`"s8q_sub_3_2":` + this.$cookies.get('screenStepTwo').s8q_sub_3_2 + `,` 
              +`"s8q_4":` + this.$cookies.get('screenStepTwo').s8q_4 + `,` 
              +`"s8q_5":` + this.$cookies.get('screenStepTwo').s8q_5 + `,` 
              +`"s8q_6":` + this.$cookies.get('screenStepTwo').s8q_6 + `,` 
              +`"s8q_7":` + this.$cookies.get('screenStepTwo').s8q_7 + `,` 
              +`"s8q_8":` + this.$cookies.get('screenStepTwo').s8q_8 + `,` 
              +`"s8q_sum":` + this.$cookies.get('screenStepTwo').s8q_sum
          +`}`);

          dataPersonScreen.push(`{"fcbg":` + this.$cookies.get('screenStepTwo').fcbg + `,` 
              +`"fcg_age":` + this.$cookies.get('screenStepTwo').fcg_age + `,`			
              +`"fcg_gender":` + this.$cookies.get('screenStepTwo').fcg_gender + `,`
              +`"fcg_bmi":` + this.$cookies.get('screenStepTwo').fcg_bmi + `,`
              +`"fcg_waistline":` + this.$cookies.get('screenStepTwo').fcg_waistline + `,`
              +`"fpg":` + this.$cookies.get('screenStepTwo').fpg + `,` 
              +`"fcg_ht_check":` + this.$cookies.get('screenStepTwo').fcg_ht_check + `,` 
              +`"family_disease":` + this.$cookies.get('screenStepTwo').family_disease + `,` 
              +`"fcg_sum":` + this.$cookies.get('screenStepTwo').fcg_sum  
          +`}`);
          
          // cvd --------------------------------------------------------------------------------
          dataPersonScreen.push(`{"high_risk":"` + this.sc1 + `",` 
              +`"cvd_list":"` + this.sc5 + `",`
              +`"cvd_risk":` + 1
          +`}`);

          dataPersonScreen.push(`{"cvd_sup_risk":"` + this.sc2 + `",` 
              +`"cvd_advice":"` + this.sc4 + `",` 
              +`"give_advice":` + 1
          +`}`);
          
          console.log(dataPersonScreen);
          
          var sendCount = 0;
          var loopSet = dataPersonScreen.length - 1;

          for (let i = 0; i <= loopSet; i++) {
            
            var sheet = 'https://script.google.com/macros/s/AKfycbwwq431WJ0fiogdpzmvqJXZeVOXLe7xb_KgwYLwJP1-dBn8UNASGCsXH77eKjt9njg/exec';
            axios.get(sheet, { params: { action: 'update', pid: this.$cookies.get('personData').personPID, data: dataPersonScreen[i] }}, { headers: { 'Access-Control-Allow-Origin':'*' ,'Content-Type': 'application/json' }, mode: 'no-cors'})
            .then(response => {
              sendCount++
              if (sendCount == loopSet) {
                console.log("Success");
              }
            })
            .catch(error => { 
              console.log(error);
            })

            console.log(sendCount);

          }
      },
    },

  }
</script>

<template>
  <!-- nav bar -->
  <div class="flex item-center navbar bg-white shadow-md border rounded-3xl rounded-tl-none rounded-tr-none p-0 px-4">
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
          <li>โปรแกรมคำนวณ ความเสี่ยงต่อการเกิดโรคเส้นเลือดหัวใจและหลอดเลือดในระยะเวลา 10 ปีข้างหน้า</li>
          <li><span @click="goToThaiCVD()" class="flex flex-row">อ้างอิงจาก : www.rama.mahidol.ac.th <FaLink  class="ms-2 mt-1.5 text-xs text-blue-500" /></span></li>
          <!-- <li>การให้คำแนะนำ</li> -->
        </ul>
    </div>
    <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,600 L 0,90 C 95.00478468899522,77.38755980861244 190.00956937799043,64.77511961722487 292,77 C 393.99043062200957,89.22488038277513 502.96650717703346,126.28708133971293 602,131 C 701.0334928229665,135.71291866028707 790.1244019138757,108.07655502392343 890,106 C 989.8755980861243,103.92344497607657 1100.5358851674641,127.40669856459328 1194,129 C 1287.4641148325359,130.59330143540672 1363.732057416268,110.29665071770336 1440,90 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="0.265" class="transition-all duration-300 ease-in-out delay-150 path-0"></path><path d="M 0,600 L 0,210 C 130.02870813397132,224.63157894736844 260.05741626794264,239.26315789473685 338,243 C 415.94258373205736,246.73684210526315 441.7990430622009,239.578947368421 538,242 C 634.2009569377991,244.421052631579 800.7464114832535,256.42105263157896 901,239 C 1001.2535885167465,221.57894736842104 1035.2153110047848,174.73684210526315 1114,165 C 1192.7846889952152,155.26315789473685 1316.3923444976076,182.63157894736844 1440,210 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="0.4" class="transition-all duration-300 ease-in-out delay-150 path-1"></path><path d="M 0,600 L 0,330 C 80.47846889952152,323.11004784689 160.95693779904303,316.2200956937799 248,318 C 335.04306220095697,319.7799043062201 428.6507177033493,330.2296650717704 530,340 C 631.3492822966507,349.7703349282296 740.4401913875598,358.8612440191387 855,363 C 969.5598086124402,367.1387559808613 1089.5885167464114,366.32535885167465 1188,360 C 1286.4114832535886,353.67464114832535 1363.2057416267944,341.8373205741627 1440,330 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-2"></path><path d="M 0,600 L 0,450 C 90.83253588516749,472.57416267942585 181.66507177033498,495.14832535885165 273,491 C 364.334928229665,486.85167464114835 456.17224880382776,455.98086124401914 557,448 C 657.8277511961722,440.01913875598086 767.6459330143541,454.9282296650718 867,466 C 966.3540669856459,477.0717703349282 1055.2440191387561,484.3062200956938 1149,481 C 1242.7559808612439,477.6937799043062 1341.377990430622,463.8468899521531 1440,450 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-3"></path></svg>
  </div>

  <div class="p-0 bg-white">
    <div class="flex flex-col items-center pb-10 pt-0">
      <div class="px-4 w-full">

        <div v-if="cvdBtnTran == 0" class="stats stats-vertical shadow-md border w-full bg-white">
          <div class="stat">
            <div class="stat-title text-center font-bold text-slate-500">Thai CV risk score</div>
          </div>
          <!-- page 1 -->
          <div class="stat">
            <div class="stat-title font-bold text-slate-500">อายุ</div>
            <div class="mt-3">  
              <div class="flex flex-row gap-5 items-center"> 
                <input v-model="cvdSliderAgeValue" type="number" class="input input-bordered w-16 ps-5" />
                <input v-model="cvdSliderAgeValue" type="range" min="15" max="70" class="range range-xs range-primary" />
              </div>
            </div>
          </div>

          <div class="stat">
            <div class="stat-title font-bold text-slate-500">เพศ</div>
            <div class="mt-3">
              <div class="flex flex-row items-center gap-6">

                <label v-if="cvdGender === false" class="swap swap-flip items-center">
                  <input type="checkbox" v-model="cvdGender" class="toggle toggle-primary" />
                    <div class="swap-off ps-14 text-slate-500 mb-1.5"><span class="text-2xl">👩🏻‍🦰</span> หญิง</div>
                    <div class="swap-on ps-14 text-slate-500 mb-1.5"><span class="text-2xl">👨🏻</span> ชาย</div>
                </label>

                <label v-else class="swap swap-flip items-center">
                  <input type="checkbox" v-model="cvdGender" class="toggle toggle-primary" />
                    <div class="swap-off ps-14 text-slate-500 mb-1.5"><span class="text-2xl">👩🏻‍🦰</span> หญิง</div>
                    <div class="swap-on ps-14 text-slate-500 mb-1.5"><span class="text-2xl">👨🏻</span> ชาย</div>
                </label>

              </div>
            </div>
          </div>

          <div class="stat">
            <div class="stat-title font-bold text-slate-500">สูบบุหรี่ ?</div>
            <div class="mt-3">
              <div class="flex flex-row items-center gap-6">
                
                <label v-if="cvdSmoke === false" class="swap swap-flip items-center">
                  <input type="checkbox" v-model="cvdSmoke" class="toggle toggle-primary" />
                    <div class="swap-off ps-14 text-slate-500 mb-1.5"><span class="text-2xl">😊</span> ไม่สูบบุหรี่</div>
                    <div class="swap-on ps-14 text-slate-500 mb-1.5"><span class="text-2xl">😮‍💨</span> สูบบุหรี่</div>
                </label>

                <label v-else class="swap swap-flip items-center">
                  <input type="checkbox" v-model="cvdSmoke" class="toggle toggle-primary" />
                    <div class="swap-off ps-14 text-slate-500 mb-1.5"><span class="text-2xl">😊</span> ไม่สูบบุหรี่</div>
                    <div class="swap-on ps-14 text-slate-500 mb-1.5"><span class="text-2xl">😮‍💨</span> สูบบุหรี่</div>
                </label>

              </div>
            </div>
          </div>
          
          <div class="stat">
            <div class="stat-title font-bold text-slate-500">เป็นโรคเบาหวาน ?</div>
            <div class="mt-3">
              <div class="flex flex-row items-center gap-6">
                
                <label class="swap swap-flip items-center">
                  <input type="checkbox" v-model="cvdDm" class="toggle toggle-primary"
                         true-value="เป็นโรคเบาหวาน"
                         false-value="ไม่เป็นโรคเบาหวาน"/>
                    <div class="swap-off ps-14 text-slate-500 mb-1.5"><span class="text-2xl">😎</span> ไม่เป็นโรคเบาหวาน</div>
                    <div class="swap-on ps-14 text-slate-500 mb-1.5"><span class="text-2xl">🥹</span> เป็นโรคเบาหวาน</div>
                </label>

              </div>
            </div>
          </div>
          
          <div class="stat">
            <div class="stat-title font-bold text-slate-500">ความดันตัวบน</div>
            <div class="mt-3">  
              <div class="flex flex-row gap-5 items-center"> 
                <input v-model="cvdSliderBpTopValue" type="number" class="input input-bordered w-16" />
                <input v-model="cvdSliderBpTopValue" type="range" min="70" max="220"class="range range-xs range-primary" />
              </div>
            </div>
          </div>

          <div class="stat">
            <div class="stat-title font-bold text-slate-500">วัดรอบเอว (นิ้ว)</div>
            <div class="mt-3">  
              <div class="flex flex-row gap-5 items-center"> 
                <input v-model="cvdSliderWaistValue" type="number" class="input input-bordered w-16 ps-5" />
                <input v-model="cvdSliderWaistValue" type="range" min="20" max="60"class="range range-xs range-primary" />
              </div>
            </div>
          </div>

          <div class="stat">
            <div class="stat-title font-bold text-slate-500">ส่วนสูง (ซม.)</div>
            <div class="mt-3">  
              <div class="flex flex-row gap-5 items-center"> 
                <input v-model="cvdSliderHightValue" type="number" class="input input-bordered w-16" />
                <input v-model="cvdSliderHightValue" type="range" min="120" max="210"class="range range-xs range-primary" />
              </div>
            </div>
          </div>

        </div>

        <div v-if="cvdBtnTran == 1" class="stats stats-vertical shadow-md border w-full bg-white">
        <!-- page 2 -->
          <div class="stat">
            <div class="stat-title font-bold text-slate-500">ผลการประเมิน</div>
          </div>
          <div class="stat">
            <div class="stat-title text-slate-500 text-wrap">
                <p class="font-normal">ความเสี่ยงต่อการเกิดโรคเส้นเลือดหัวใจและหลอดเลือดในระยะเวลา 10 ปีของท่าน <strong class="font-bold" id="sc2"> {{ sc2 }} %</strong><br> 
                   <strong class="font-bold" id="sc5">" {{ sc5 }} "</strong><br><br>
                   <span class="font-bold" id="sc1"> {{ sc1 }} </span>ของคนไทยเพศเดียวกัน อายุเท่ากัน และปราศจากปัจจัยเสี่ยง <br>
                   <br>
                   <strong class="font-bold">ข้อแนะนำเบื้องต้น</strong>  <br>
                   <p id="sc4"> {{ sc4 }} </p>
                </p>
            </div>
          </div>
        </div>

        <div v-if="cvdBtnTran == 1" class="stats stats-vertical shadow-md border w-full bg-white mt-5">
        <!-- page 2 -->
          <div class="stat">
            <div class="stat-title font-bold text-slate-500">หมายเหตุ (Disclaimer)</div>
          </div>
          <div class="stat">
            <div class="stat-title text-slate-500 text-wrap">
                <p>ผลลัพธ์ที่ได้ เป็นการประเมินความเสี่ยงต่อการเจ็บป่วยหรือเสียชีวิตจากโรคเส้นเลือดหัวใจตีบตันและโรคเส้นเลือดสมองตีบตันในระยะเวลา 10 ปีข้างหน้า <br><br>
                   ผลการประเมินและคำแนะนำที่ได้รับจากโปรแกรมนี้ไม่สามารถใช้แทนการตัดสินใจของแพทย์ได้ การตรวจรักษาเพิ่มเติมหรือการให้ยารักษาขึ้นอยู่กับดุลยพินิจของแพทย์และการปรึกษากันระหว่างแพทย์และตัวท่าน <br><br>
                   ผลการประเมินนี้ห้ามนำไปใช้อ้างอิงในการค้า เช่น การทำประกันชีวิต และไม่สามารถใช้กับผู้ป่วยโรคลิ้นหัวใจหรือโรคหัวใจเต้นผิดจังหวะได้ <br>
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="relative mt-[-1px]">
    <div class="absolute w-full px-4">
      <button v-if="cvdBtnTran == 0" class="btn btn-lg btn-outline btn-primary w-full border-double border-[6px] border-[#e5e7eb] bg-white rounded-full shadow-md border-lg" @click="resultsCVD()"> แปลผล Thai CV risk</button>
      <button v-if="cvdBtnTran == 1" class="btn btn-lg btn-outline btn-primary w-full border-double border-[6px] border-[#e5e7eb] bg-white rounded-full shadow-md border-lg" @click="btnSaveExit()"> บันทึกและสิ้นสุดการคัดกรอง</button>
    </div>
    <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 L 0,60 C 100.66985645933013,61.827751196172244 201.33971291866027,63.655502392344495 308,59 C 414.66028708133973,54.344497607655505 527.3110047846891,43.20574162679426 616,40 C 704.6889952153109,36.79425837320574 769.4162679425837,41.52153110047847 846,51 C 922.5837320574163,60.47846889952153 1011.0239234449762,74.70813397129187 1112,77 C 1212.9760765550238,79.29186602870813 1326.4880382775118,69.64593301435406 1440,60 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="0.265" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path><path d="M 0,400 L 0,140 C 115.35885167464113,122.21052631578948 230.71770334928226,104.42105263157896 331,114 C 431.28229665071774,123.57894736842104 516.488038277512,160.52631578947367 609,166 C 701.511961722488,171.47368421052633 801.33014354067,145.4736842105263 898,143 C 994.66985645933,140.5263157894737 1088.1913875598086,161.57894736842107 1178,165 C 1267.8086124401914,168.42105263157893 1353.9043062200958,154.21052631578948 1440,140 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="0.4" class="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 200)"></path><path d="M 0,400 L 0,220 C 95.65550239234449,231.40669856459328 191.31100478468898,242.8133971291866 278,249 C 364.688995215311,255.1866028708134 442.4114832535886,256.1531100478469 531,244 C 619.5885167464114,231.84688995215313 719.0430622009569,206.57416267942583 826,202 C 932.9569377990431,197.42583732057417 1047.4162679425838,213.55023923444978 1151,220 C 1254.5837320574162,226.44976076555022 1347.2918660287082,223.2248803827751 1440,220 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-2" transform="rotate(-180 720 200)"></path><path d="M 0,400 L 0,300 C 65.82775119617222,317.6937799043062 131.65550239234443,335.3875598086124 247,326 C 362.34449760765557,316.6124401913876 527.2057416267944,280.14354066985646 627,270 C 726.7942583732056,259.85645933014354 761.5215311004782,276.0382775119618 829,289 C 896.4784688995218,301.9617224880382 996.708133971292,311.70334928229664 1104,313 C 1211.291866028708,314.29665071770336 1325.645933014354,307.1483253588517 1440,300 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-3" transform="rotate(-180 720 200)"></path></svg>
  </div>

</template>
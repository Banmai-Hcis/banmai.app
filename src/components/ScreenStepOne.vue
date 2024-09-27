<script setup>
  import { reactive, ref } from 'vue'
  import { RouterLink } from 'vue-router';
  import Vue3Signature from "vue3-signature"

  // icon
  import { FaChevronLeft } from '@kalimahapps/vue-icons';

</script>

<script>
  export default {
    data() {
      return {
        title_name: 'ประเมินปัจจัยเสี่ยง',
        cvdSliderAgeValue : ref(40),
        cvdSliderBpTopValue : ref(110),
        cvdSliderWaistValue : ref(32),
        cvdSliderHightValue : ref(160),
        cvdGender: false,
        cvdSmoke: false,
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
        window.scrollTo(0, 0);
        this.cvdBtnTran = 1;
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

        console.log(tc);
        
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
        this.cvdBtnTran = 1;
        
      },
      goToScreenList() {
        this.$router.push('/screen_list')
      },
    },

  }
</script>

<template>
  <!-- nav bar -->
  <div class="flex item-center navbar bg-white shadow rounded-3xl rounded-tl-none rounded-tr-none p-0 px-4 mb-5">
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

  <div class="p-0">
    <div class="flex flex-col items-center shadow pt-5">
      <div class="px-4 w-full">

        <div v-if="cvdBtnTran == 0" class="stats stats-vertical shadow w-full bg-white">
          <div class="stat">
            <div class="stat-title text-center font-bold text-slate-600">Thai CV risk score</div>
          </div>
          <!-- page 1 -->
          <div class="stat">
            <div class="stat-title font-bold text-slate-600">อายุ</div>
            <div class="mt-3">  
              <div class="flex flex-row gap-5 items-center"> 
                <input v-model="cvdSliderAgeValue" type="number" class="input input-bordered w-16 ps-5" />
                <input v-model="cvdSliderAgeValue" type="range" min="15" max="70" class="range range-xs range-primary" />
              </div>
            </div>
          </div>

          <div class="stat">
            <div class="stat-title font-bold text-slate-600">เพศ</div>
            <div class="mt-3">
              <div class="flex flex-row items-center gap-6">

                <label class="swap swap-flip items-center">
                  <input type="checkbox" v-model="cvdGender" class="toggle theme-controller toggle-primary" 
                         true-value="ชาย"
                         false-value="หญิง"/>
                    <div class="swap-off ps-14 mb-1.5"><span class="text-2xl">👩🏻‍🦰</span> หญิง</div>
                    <div class="swap-on ps-14 mb-1.5"><span class="text-2xl">👨🏻</span> ชาย</div>
                </label>

              </div>
            </div>
          </div>

          <div class="stat">
            <div class="stat-title font-bold text-slate-600">สูบบุหรี่ ?</div>
            <div class="mt-3">
              <div class="flex flex-row items-center gap-6">
                
                <label class="swap swap-flip items-center">
                  <input type="checkbox" v-model="cvdSmoke" class="toggle theme-controller toggle-primary"    
                         true-value="สูบบุหรี่"
                         false-value="ไม่สูบบุหรี่"/>
                    <div class="swap-off ps-14 mb-1.5"><span class="text-2xl">😊</span> ไม่สูบบุหรี่</div>
                    <div class="swap-on ps-14 mb-1.5"><span class="text-2xl">😮‍💨</span> สูบบุหรี่</div>
                </label>

              </div>
            </div>
          </div>
          
          <div class="stat">
            <div class="stat-title font-bold text-slate-600">เป็นโรคเบาหวาน ?</div>
            <div class="mt-3">
              <div class="flex flex-row items-center gap-6">
                
                <label class="swap swap-flip items-center">
                  <input type="checkbox" v-model="cvdDm" class="toggle theme-controller toggle-primary"
                         true-value="เป็นโรคเบาหวาน"
                         false-value="ไม่เป็นโรคเบาหวาน"/>
                    <div class="swap-off ps-14 mb-1.5"><span class="text-2xl">😎</span> ไม่เป็นโรคเบาหวาน</div>
                    <div class="swap-on ps-14 mb-1.5"><span class="text-2xl">🥹</span> เป็นโรคเบาหวาน</div>
                </label>

              </div>
            </div>
          </div>
          
          <div class="stat">
            <div class="stat-title font-bold text-slate-600">ความดันตัวบน</div>
            <div class="mt-3">  
              <div class="flex flex-row gap-5 items-center"> 
                <input v-model="cvdSliderBpTopValue" type="number" class="input input-bordered w-16" />
                <input v-model="cvdSliderBpTopValue" type="range" min="70" max="220"class="range range-xs range-primary" />
              </div>
            </div>
          </div>

          <div class="stat">
            <div class="stat-title font-bold text-slate-600">วัดรอบเอว (นิ้ว)</div>
            <div class="mt-3">  
              <div class="flex flex-row gap-5 items-center"> 
                <input v-model="cvdSliderWaistValue" type="number" class="input input-bordered w-16 ps-5" />
                <input v-model="cvdSliderWaistValue" type="range" min="20" max="60"class="range range-xs range-primary" />
              </div>
            </div>
          </div>

          <div class="stat">
            <div class="stat-title font-bold text-slate-600">ส่วนสูง (ซม.)</div>
            <div class="mt-3">  
              <div class="flex flex-row gap-5 items-center"> 
                <input v-model="cvdSliderHightValue" type="number" class="input input-bordered w-16" />
                <input v-model="cvdSliderHightValue" type="range" min="120" max="210"class="range range-xs range-primary" />
              </div>
            </div>
          </div>

        </div>

        <div v-if="cvdBtnTran == 1" class="stats stats-vertical shadow w-full bg-white">
        <!-- page 2 -->
          <div class="stat">
            <div class="stat-title font-bold text-slate-600">ผลการประเมิน</div>
          </div>
          <div class="stat">
            <div class="stat-title text-slate-600 text-wrap">
                <p class="font-normal">ความเสี่ยงต่อการเกิดโรคเส้นเลือดหัวใจและหลอดเลือดในระยะเวลา 10 ปีของท่าน <strong id="sc2"> {{ sc2 }} %</strong><br> 
                   <strong id="sc5">" {{ sc5 }} "</strong><br><br>
                   <span id="sc1"> {{ sc1 }} </span>ของคนไทยเพศเดียวกัน อายุเท่ากัน และปราศจากปัจจัยเสี่ยง <br>
                   <br>
                   <strong>ข้อแนะนำเบื้องต้น</strong>  <br>
                   <p id="sc4"> {{ sc4 }} </p>
                </p>
            </div>
          </div>
        </div>

        <div v-if="cvdBtnTran == 1" class="stats stats-vertical shadow w-full bg-white mt-5">
        <!-- page 2 -->
          <div class="stat">
            <div class="stat-title font-bold text-slate-600">หมายเหตุ (Disclaimer)</div>
          </div>
          <div class="stat">
            <div class="stat-title text-slate-600 text-wrap">
                <p>ผลลัพธ์ที่ได้ เป็นการประเมินความเสี่ยงต่อการเจ็บป่วยหรือเสียชีวิตจากโรคเส้นเลือดหัวใจตีบตันและโรคเส้นเลือดสมองตีบตันในระยะเวลา 10 ปีข้างหน้า <br><br>
                   ผลการประเมินและคำแนะนำที่ได้รับจากโปรแกรมนี้ไม่สามารถใช้แทนการตัดสินใจของแพทย์ได้ การตรวจรักษาเพิ่มเติมหรือการให้ยารักษาขึ้นอยู่กับดุลยพินิจของแพทย์และการปรึกษากันระหว่างแพทย์และตัวท่าน <br><br>
                   ผลการประเมินนี้ห้ามนำไปใช้อ้างอิงในการค้า เช่น การทำประกันชีวิต และไม่สามารถใช้กับผู้ป่วยโรคลิ้นหัวใจหรือโรคหัวใจเต้นผิดจังหวะได้ <br>
                </p>
            </div>
          </div>
        </div>

        <button v-if="cvdBtnTran == 0" class="btn btn-secondary btn-lg btn-outline w-full my-10" @click="resultsCVD()"> แปลผล</button>
        <button v-if="cvdBtnTran == 1"class="btn btn-secondary btn-lg btn-outline w-full my-10" @click="cvdBtnTran = 0"> ย้อนกลับ</button>

      </div>

    </div>
  </div>

</template>
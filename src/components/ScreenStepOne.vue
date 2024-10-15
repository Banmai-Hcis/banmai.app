<script setup>
  import { reactive, ref } from 'vue'
  import { RouterLink } from 'vue-router';
  import Vue3Signature from "vue3-signature"

  // icon
  import { FaChevronLeft } from '@kalimahapps/vue-icons';
  import { FaAnglesRight } from '@kalimahapps/vue-icons';
  import { FaRegPaste } from '@kalimahapps/vue-icons';

</script>

<script>
  
  import { Radar } from 'vue-chartjs'
  import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js'
  
  ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend )
  export default {
    components: {
      Radar
    },
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
        // chartData
        chartData: {
          labels: [
            'ค่า BMI',
            'น้ำตาลในเลือด',
            'เส้นรอบเอว',
            'ความดันตัวล่าง',
            'ความดันตัวบน',
          ],
          datasets: [
            {
              label: 'ค่าปกติที่ไม่ควรเกิน',
              backgroundColor: 'rgba(179,181,198,0.2)',
              pointBackgroundColor: 'rgba(179,181,198,0.2)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(179,181,198,0.2)',
              data: [ 24, 100, 84, 89, 129]
            },
            {
              label: 'ค่าที่มาจากการคัดกรอง',
              backgroundColor: 'rgba(111,79,249,0.8)',
              pointBackgroundColor: 'rgba(111,79,249,0.8)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(111,79,249,0.8)',
              data: [0, 0, 0, 0, 0]
            }
          ]
        },
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false
        },
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

            // var dataPersonScreen = `
            //        {"weight":` + this.formWeight + `,` 
            //       +`"height":` + this.formHight + `,` 
            //       +`"waistline":` + this.formWaist + `,`
            //       +`"bp_top":` + this.formBpTop + `,` 
            //       +`"bp_down":` + this.formBpDown + `,` 
            //       +`"bmi":` + this.inherBMI + `,`  
            //       +`"blood_sugar":`+ this.formBloodSugar 
            //       +`}`;
          
            // to inch
            let inchWL = this.formWaist / 2.54;
            this.$cookies.set('screenStepOne', {
              weight: this.formWeight, 
              height: this.formHight,
              waistline: this.formWaist, 
              waistlineInch: inchWL.toFixed(1), 
              bp_top: this.formBpTop,
              bp_down: this.formBpDown,
              bmi: this.inherBMI, 
              blood_sugar: this.formBloodSugar,
            }, '1d');

            // var sheet = 'https://script.google.com/macros/s/AKfycbwwq431WJ0fiogdpzmvqJXZeVOXLe7xb_KgwYLwJP1-dBn8UNASGCsXH77eKjt9njg/exec';
            // axios.get(sheet, { params: { action: 'update', pid: this.personPID, data: dataPersonScreen }}, { headers: { 'Access-Control-Allow-Origin':'*' ,'Content-Type': 'application/json' }, mode: 'no-cors'})
            // .then(response => {
            // })
            // .catch(error => { 
            //   this.interpretation = 1;
            // })
          window.scrollTo(0,0);
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

          this.chartData.datasets[1].data = [ this.inherBMI, this.formBloodSugar, this.formWaist, this.formBpDown,  this.formBpTop ];  
          // console.log(this.chartData.datasets[1].data);
          
          this.interpretation = 2;
        }
      },
      btnNext() {
        window.scrollTo(0,0);
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        this.$router.push('/screen_two')
      },
      goToScreenList() {
        window.scrollTo(0,0);
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
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

  <div class="relative w-full">
    <div class="absolute items-center w-full">
      <div v-if="interpretation == 1">
        <div class="px-5 pt-4">
          <span class=""><strong class="font-bold text-slate-500 ">คำอธิบาย</strong> </span>
          <ul class="list-disc ps-6 text-sm flex flex-col mt-1 gap-1">
            <li>กรอกข้อมูลในช่องด้านล่างนี้ให้ครบถ้วน</li>
            <li>ชั่งน้ำหนัก วัดส่วนสูง วัดรอบเอว และวัดความดันโลหิต</li>
            <li><span class="underline underline-offset-1">กรณีผู้รับบริการอายุมากกว่าหรือเท่ากับ 35 ปี</span> ให้ตรวจระดับน้ำตาล โดยวิธีเจาะปลายนิ้ว</li>
          </ul>
        </div>
      </div>
      <div v-if="interpretation == 2">
        <div class="flex flex-col justify-items-center w-full mt-2 px-4">
          <Radar class="max-h-80 w-full" :data="chartData" :options="chartOptions" />
        </div>
      </div>
    </div>
    <svg v-if="interpretation == 1"  width="100%" height="100%" id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,600 L 0,90 C 86.58373205741626,108.05741626794259 173.1674641148325,126.11483253588517 269,118 C 364.8325358851675,109.88516746411483 469.9138755980862,75.59808612440192 560,66 C 650.0861244019138,56.40191387559808 725.1770334928228,71.49282296650718 814,86 C 902.8229665071772,100.50717703349282 1005.377990430622,114.43062200956938 1112,115 C 1218.622009569378,115.56937799043062 1329.311004784689,102.7846889952153 1440,90 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="0.265" class="transition-all duration-300 ease-in-out delay-150 path-0"></path><path d="M 0,600 L 0,210 C 70.71770334928229,216.6507177033493 141.43540669856458,223.30143540669857 239,218 C 336.5645933014354,212.69856459330143 460.97607655502395,195.444976076555 553,197 C 645.023923444976,198.555023923445 704.6602870813396,218.91866028708137 815,228 C 925.3397129186604,237.08133971291863 1086.3827751196172,234.88038277511964 1199,230 C 1311.6172248803828,225.11961722488036 1375.8086124401914,217.55980861244018 1440,210 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="0.4" class="transition-all duration-300 ease-in-out delay-150 path-1"></path><path d="M 0,600 L 0,330 C 87.13875598086128,347.09090909090907 174.27751196172255,364.18181818181813 275,361 C 375.72248803827745,357.81818181818187 490.02870813397124,334.3636363636364 596,331 C 701.9712918660288,327.6363636363636 799.6076555023924,344.3636363636364 897,344 C 994.3923444976076,343.6363636363636 1091.5406698564595,326.1818181818182 1182,321 C 1272.4593301435405,315.8181818181818 1356.2296650717703,322.9090909090909 1440,330 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-2"></path><path d="M 0,600 L 0,450 C 97.57894736842107,436.5837320574162 195.15789473684214,423.1674641148325 306,432 C 416.84210526315786,440.8325358851675 540.9473684210526,471.9138755980862 621,468 C 701.0526315789474,464.0861244019138 737.0526315789474,425.177033492823 832,417 C 926.9473684210526,408.822966507177 1080.842105263158,431.37799043062194 1192,442 C 1303.157894736842,452.62200956937806 1371.578947368421,451.31100478468903 1440,450 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-3"></path></svg>
    <!-- <svg v-if="interpretation == 1" width="100%" height="100%" id="svg" viewBox="0 0 1440 690" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,700 L 0,105 C 104.67857142857142,90.67857142857143 209.35714285714283,76.35714285714286 320,80 C 430.64285714285717,83.64285714285714 547.2500000000001,105.25 667,108 C 786.7499999999999,110.75 909.6428571428571,94.64285714285715 1039,91 C 1168.357142857143,87.35714285714285 1304.1785714285716,96.17857142857142 1440,105 L 1440,700 L 0,700 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="0.265" class="transition-all duration-300 ease-in-out delay-150 path-0"></path><path d="M 0,700 L 0,245 C 153.53571428571428,263.2857142857143 307.07142857142856,281.57142857142856 422,282 C 536.9285714285714,282.42857142857144 613.2499999999999,265 706,251 C 798.7500000000001,237 907.9285714285716,226.42857142857144 1033,226 C 1158.0714285714284,225.57142857142856 1299.0357142857142,235.28571428571428 1440,245 L 1440,700 L 0,700 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="0.4" class="transition-all duration-300 ease-in-out delay-150 path-1"></path><path d="M 0,700 L 0,385 C 109.92857142857142,375.5 219.85714285714283,366 320,352 C 420.14285714285717,338 510.5,319.5 656,335 C 801.5,350.5 1002.1428571428571,400 1142,414 C 1281.857142857143,428 1360.9285714285716,406.5 1440,385 L 1440,700 L 0,700 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-2"></path><path d="M 0,700 L 0,525 C 151.28571428571428,538.4285714285714 302.57142857142856,551.8571428571429 424,547 C 545.4285714285714,542.1428571428571 636.9999999999999,518.9999999999999 739,521 C 841.0000000000001,523.0000000000001 953.4285714285716,550.1428571428572 1072,555 C 1190.5714285714284,559.8571428571428 1315.2857142857142,542.4285714285713 1440,525 L 1440,700 L 0,700 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-3"></path></svg> -->
    <!-- <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 690" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,700 L 0,105 C 153.46666666666664,89.13333333333333 306.9333333333333,73.26666666666667 483,86 C 659.0666666666667,98.73333333333333 857.7333333333333,140.06666666666666 1021,148 C 1184.2666666666667,155.93333333333334 1312.1333333333332,130.46666666666667 1440,105 L 1440,700 L 0,700 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="0.265" class="transition-all duration-300 ease-in-out delay-150 path-0"></path><path d="M 0,700 L 0,245 C 106.80000000000001,228.2 213.60000000000002,211.4 390,203 C 566.4,194.6 812.3999999999999,194.6 999,203 C 1185.6000000000001,211.4 1312.8000000000002,228.2 1440,245 L 1440,700 L 0,700 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="0.4" class="transition-all duration-300 ease-in-out delay-150 path-1"></path><path d="M 0,700 L 0,385 C 208.40000000000003,370.73333333333335 416.80000000000007,356.46666666666664 555,369 C 693.1999999999999,381.53333333333336 761.2,420.8666666666667 897,428 C 1032.8,435.1333333333333 1236.4,410.06666666666666 1440,385 L 1440,700 L 0,700 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-2"></path><path d="M 0,700 L 0,525 C 188.2666666666667,536.2 376.5333333333334,547.4 543,548 C 709.4666666666666,548.6 854.1333333333334,538.6 1000,533 C 1145.8666666666666,527.4 1292.9333333333334,526.2 1440,525 L 1440,700 L 0,700 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-3"></path></svg> -->
    <svg v-if="interpretation == 2" width="100%" height="100%" id="svg" viewBox="0 0 1440 690" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,700 L 0,105 C 91.89473684210526,89.13397129186603 183.78947368421052,73.26794258373207 289,82 C 394.2105263157895,90.73205741626793 512.7368421052631,124.0622009569378 608,132 C 703.2631578947369,139.9377990430622 775.2631578947369,122.48325358851676 850,118 C 924.7368421052631,113.51674641148324 1002.2105263157896,122.0047846889952 1101,122 C 1199.7894736842104,121.9952153110048 1319.8947368421052,113.4976076555024 1440,105 L 1440,700 L 0,700 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="0.265" class="transition-all duration-300 ease-in-out delay-150 path-0"></path><path d="M 0,700 L 0,245 C 111.68421052631578,238.4928229665072 223.36842105263156,231.98564593301438 313,227 C 402.63157894736844,222.01435406698562 470.2105263157895,218.55023923444975 549,217 C 627.7894736842105,215.44976076555025 717.7894736842105,215.8133971291866 820,226 C 922.2105263157895,236.1866028708134 1036.6315789473683,256.19617224880386 1142,261 C 1247.3684210526317,265.80382775119614 1343.6842105263158,255.40191387559807 1440,245 L 1440,700 L 0,700 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="0.4" class="transition-all duration-300 ease-in-out delay-150 path-1"></path><path d="M 0,700 L 0,385 C 83.91387559808612,388.4736842105263 167.82775119617224,391.9473684210526 265,383 C 362.17224880382776,374.0526315789474 472.6028708133971,352.68421052631584 572,349 C 671.3971291866029,345.31578947368416 759.7607655502393,359.3157894736842 859,373 C 958.2392344497607,386.6842105263158 1068.3540669856459,400.0526315789474 1167,402 C 1265.6459330143541,403.9473684210526 1352.8229665071772,394.4736842105263 1440,385 L 1440,700 L 0,700 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-2"></path><path d="M 0,700 L 0,525 C 94.71770334928229,528.5502392344497 189.43540669856458,532.1004784688995 272,541 C 354.5645933014354,549.8995215311005 424.97607655502395,564.1483253588516 533,555 C 641.023923444976,545.8516746411484 786.6602870813397,513.3062200956938 885,501 C 983.3397129186603,488.69377990430615 1034.3827751196172,496.62679425837325 1119,504 C 1203.6172248803828,511.37320574162675 1321.8086124401914,518.1866028708134 1440,525 L 1440,700 L 0,700 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-3"></path></svg>
  </div>
  
  <div class="p-0">
    <div class="bg-white flex flex-col shadow">

      <div v-if="interpretation == 1">
          <div class="m-5 mx-4 border-2 border-dashed rounded-2xl bg-white p-4 mt-3"> 
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
          <div class="m-5 mx-4 border-2 border-dashed rounded-2xl bg-white p-4 mt-3"> 
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
          <div v-if="inherAge >= 35" class="m-5 mx-4 mt-0 border-2 border-dashed rounded-2xl bg-white p-4 mb-10"> 
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
          <div v-if="inherAge <= 34" class="m-5 mx-4 mt-0 border-2 border-dashed rounded-2xl bg-white p-4 mb-10"> 
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

        <div class="m-5 mx-4 mt-36 border-2 border-dashed rounded-2xl bg-white p-4"> 
          <div class="flex flex-row text-slate-500">
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

    
      <!-- 
      <div v-if="interpretation == 1"class="w-full my-6 px-4">
        <button class="btn btn-lg btn-outline btn-secondary w-full rounded-full shadow-lg" @click="btnInterpretation()"><FaRegPaste class="mt-0.5 "/>แปลผล</button>
      </div>

      <div v-else="interpretation == 2"class="w-full my-6 px-4">
        <div v-if="inherAge < 35" class=" mt-20"></div>
        <div v-else></div>
          <button class="btn btn-lg btn-outline btn-secondary w-full rounded-full shadow-lg" @click="interpretation = 1"><FaRegPaste class="mt-0.5 "/>ถัดไป</button>
      </div> -->

    </div>
  </div>

  <div class="relative mt-[-1px]">
    <div v-if="interpretation == 1" class="bg-white pt-3 my-0">
      <div class="absolute w-full px-4">
        <button class="btn btn-lg btn-outline btn-primary w-full border-double border-[6px] border-[#e5e7eb] bg-white rounded-full shadow-lg" @click="btnInterpretation()">แปลผลการประเมินสุขภาพ</button>
      </div>
    </div>
    <div v-else class="bg-white pt-8 my-0">
      <div class="absolute w-full px-4">
        <button class="btn btn-lg btn-outline btn-primary w-full border-double border-[6px] border-[#e5e7eb] bg-white rounded-full shadow-lg" @click="btnNext()">หน้าถัดไป<FaAnglesRight class="mt-0.5 "/></button>
      </div>
    </div>
      <!-- <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 L 0,60 C 100.66985645933013,61.827751196172244 201.33971291866027,63.655502392344495 308,59 C 414.66028708133973,54.344497607655505 527.3110047846891,43.20574162679426 616,40 C 704.6889952153109,36.79425837320574 769.4162679425837,41.52153110047847 846,51 C 922.5837320574163,60.47846889952153 1011.0239234449762,74.70813397129187 1112,77 C 1212.9760765550238,79.29186602870813 1326.4880382775118,69.64593301435406 1440,60 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="0.265" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path><path d="M 0,400 L 0,140 C 115.35885167464113,122.21052631578948 230.71770334928226,104.42105263157896 331,114 C 431.28229665071774,123.57894736842104 516.488038277512,160.52631578947367 609,166 C 701.511961722488,171.47368421052633 801.33014354067,145.4736842105263 898,143 C 994.66985645933,140.5263157894737 1088.1913875598086,161.57894736842107 1178,165 C 1267.8086124401914,168.42105263157893 1353.9043062200958,154.21052631578948 1440,140 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="0.4" class="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 200)"></path><path d="M 0,400 L 0,220 C 95.65550239234449,231.40669856459328 191.31100478468898,242.8133971291866 278,249 C 364.688995215311,255.1866028708134 442.4114832535886,256.1531100478469 531,244 C 619.5885167464114,231.84688995215313 719.0430622009569,206.57416267942583 826,202 C 932.9569377990431,197.42583732057417 1047.4162679425838,213.55023923444978 1151,220 C 1254.5837320574162,226.44976076555022 1347.2918660287082,223.2248803827751 1440,220 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-2" transform="rotate(-180 720 200)"></path><path d="M 0,400 L 0,300 C 65.82775119617222,317.6937799043062 131.65550239234443,335.3875598086124 247,326 C 362.34449760765557,316.6124401913876 527.2057416267944,280.14354066985646 627,270 C 726.7942583732056,259.85645933014354 761.5215311004782,276.0382775119618 829,289 C 896.4784688995218,301.9617224880382 996.708133971292,311.70334928229664 1104,313 C 1211.291866028708,314.29665071770336 1325.645933014354,307.1483253588517 1440,300 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-3" transform="rotate(-180 720 200)"></path></svg> -->
    <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 L 0,60 C 100.66985645933013,61.827751196172244 201.33971291866027,63.655502392344495 308,59 C 414.66028708133973,54.344497607655505 527.3110047846891,43.20574162679426 616,40 C 704.6889952153109,36.79425837320574 769.4162679425837,41.52153110047847 846,51 C 922.5837320574163,60.47846889952153 1011.0239234449762,74.70813397129187 1112,77 C 1212.9760765550238,79.29186602870813 1326.4880382775118,69.64593301435406 1440,60 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="0.265" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path><path d="M 0,400 L 0,140 C 115.35885167464113,122.21052631578948 230.71770334928226,104.42105263157896 331,114 C 431.28229665071774,123.57894736842104 516.488038277512,160.52631578947367 609,166 C 701.511961722488,171.47368421052633 801.33014354067,145.4736842105263 898,143 C 994.66985645933,140.5263157894737 1088.1913875598086,161.57894736842107 1178,165 C 1267.8086124401914,168.42105263157893 1353.9043062200958,154.21052631578948 1440,140 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="0.4" class="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 200)"></path><path d="M 0,400 L 0,220 C 95.65550239234449,231.40669856459328 191.31100478468898,242.8133971291866 278,249 C 364.688995215311,255.1866028708134 442.4114832535886,256.1531100478469 531,244 C 619.5885167464114,231.84688995215313 719.0430622009569,206.57416267942583 826,202 C 932.9569377990431,197.42583732057417 1047.4162679425838,213.55023923444978 1151,220 C 1254.5837320574162,226.44976076555022 1347.2918660287082,223.2248803827751 1440,220 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-2" transform="rotate(-180 720 200)"></path><path d="M 0,400 L 0,300 C 65.82775119617222,317.6937799043062 131.65550239234443,335.3875598086124 247,326 C 362.34449760765557,316.6124401913876 527.2057416267944,280.14354066985646 627,270 C 726.7942583732056,259.85645933014354 761.5215311004782,276.0382775119618 829,289 C 896.4784688995218,301.9617224880382 996.708133971292,311.70334928229664 1104,313 C 1211.291866028708,314.29665071770336 1325.645933014354,307.1483253588517 1440,300 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-3" transform="rotate(-180 720 200)"></path></svg>
  </div>

</template>
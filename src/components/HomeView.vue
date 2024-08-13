<script setup>
  import { HiArrowUturnLeft } from '@kalimahapps/vue-icons';
  import { HiAdjustmentsHorizontal } from '@kalimahapps/vue-icons';
  import { HiSolidDocumentText } from '@kalimahapps/vue-icons';
  import { HiClipboardDocumentList } from '@kalimahapps/vue-icons';
  import { HiIdentification } from '@kalimahapps/vue-icons';
  import { HiXMark } from '@kalimahapps/vue-icons';
</script>

<script>
  import axios from 'axios';

  export default {
    data () {
      return {
        searchData: '',
        searchDataTotal: null,
        loading: true,
        // list
        responesData: null,
        dataTotal: null,
        previousData: 0,
        nextData:  5,
        limitData: 5,
      }
    },
    mounted () {
      axios
        .get('https://sheetdb.io/api/v1/u1g9gpet2o9xe')
        .then(response => (
            this.responesData = response.data, 
            this.dataTotal = response.data.length
        ))
        .catch(error => {
          console.log(error)
        })
        .finally(() => this.loading = false)
    },
    computed: {
      searchDataModel() {
        return this.responesData.filter(data => data.name.includes(this.searchData))
      }
    },
    methods: {
      goToAbout() {
        this.$router.push('/about')
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
  <!-- <h2 class="text-lg font-bold">Home View</h2>
  <button class="btn btn-outline" @click="goToAbout">Go to About</button>

  <br /> -->
  <div class="flex flex-row justify-between text-white bg-blue-950 pt-2">
    <button class="btn btn-ghost"><HiArrowUturnLeft class=" font-bold text-2xl" /> </button>
    <h2 class="text-white/90 pt-3">คัดกรอง NCD</h2>
    <button class="btn btn-ghost" hidden><HiAdjustmentsHorizontal class="font-bold text-2xl" /></button>
  </div>

  <div class=" bg-gradient-to-b from-blue-950 to-sky-800">
    <img class="image-full px-2 pt-4" src="../assets/images/7744152_3722700.svg">
  </div>

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path fill="rgb(7 89 133)" fill-opacity="1" d="M0,224L48,240C96,256,192,288,288,282.7C384,277,480,235,576,234.7C672,235,768,277,864,261.3C960,245,1056,171,1152,149.3C1248,128,1344,160,1392,176L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
  </svg>

  <div class="p-5">

    <div v-if="loading">
      <div class="pt-5">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    </div>
    
    <div v-else>

      <label class="input input-bordered flex items-center rounded-full gap-2">
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
          clip-rule="evenodd" />
        </svg>
      </label>
      
      <div v-if="searchData.length >= 1" class="flex justify-center pt-5">
        <button class="btn btn-secondary shadow-md rounded-full w-full" @click="searchData = ''"><HiXMark class=" font-bold text-2xl pt-0.5" />ล้างการค้นหา</button>
      </div>

      <div class="border rounded-2xl p-4 pb-4 mt-5">
        <div class="flex flex-row text-neutral-600">
          <HiClipboardDocumentList class="font-bold text-2xl me-1"/>
          <span class="font-semibold "> รายชื่อผู้ที่ต้องคัดกรอง</span>
        </div>

        <div v-if="searchData.length >= 1">
          <div class="">
            <div v-for="item in searchDataModel">
              <div tabindex="0" class="collapse collapse-arrow border-base-200 bg-white border mt-3">
                <div class="collapse-title text-neutral-600 font-medium flex justify-between items-center">{{ item.name }} </div>
                  <div class="collapse-content">
                      <p>ที่อยู่ : {{ item.hno }} หมู่ {{ item.moo }} {{ item.moo_name }}</p>
                      <p>วันเกิด : {{ item.birth }}</p>
                    <button class="btn btn-success text-green-900 shadow-sm mt-4 w-32"><HiSolidDocumentText class=" font-bold text-lg"/> เริ่มคัดกรอง</button>
                  </div>
              </div>
            </div>
          </div>
        </div>

        <div v-else>
          <div class="">
            <div v-for="item in searchDataModel.slice(previousData, nextData)">
              <div tabindex="0" class="collapse collapse-arrow border-base-200 bg-white border mt-3">
                <div class="collapse-title text-neutral-600 font-medium flex justify-between items-center">{{ item.name }} </div>
                  <div class="collapse-content">
                      <p>ที่อยู่ : {{ item.hno }} หมู่ {{ item.moo }} {{ item.moo_name }}</p>
                      <p>วันเกิด : {{ item.birth }}</p>
                    <button class="btn btn-success text-green-900 shadow-sm mt-4 w-32"><HiSolidDocumentText class=" font-bold text-lg"/> เริ่มคัดกรอง</button>
                  </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div v-if="searchData == ''">
        <div class="flex flex-row justify-center space-x-5 py-5">
          <button v-if="previousData <= 0" class="btn btn-circle bg-base-100 text-primary" @click="btnPrevious" disabled> ❮ </button>
          <button v-else class="btn btn-circle bg-base-100 text-primary" @click="btnPrevious"> ❮ </button>
          
          <button v-if="nextData >= dataTotal" class="btn btn-circle bg-base-100 text-primary" @click="btnNext" disabled> ❯ </button>
          <button v-else class="btn btn-circle bg-base-100 text-primary" @click="btnNext"> ❯ </button>
        </div>
        
        <div class="flex flex-col text-center pb-5">
          <p>แสดงข้อมูลที่ {{ previousData + 1 }} ถึง {{ nextData }} </p>
          <p>จำนวนข้อมูลทั้งหมด {{ dataTotal }} รายการ</p>
        </div>
      </div>

      <div v-else-if="searchDataModel.length == 0">
        <div class="lex justify-center text-center py-5">
          <span class=" text-error">ไม่พบข้อมูลที่ท่านค้นหา !</span>
        </div>
      </div>
      
      <div v-else>
        <div class="flex flex-col text-center py-5">
          <p>พบข้อมูล {{ searchDataModel.length }} รายการ</p>
        </div>
      </div>
      <!-- {{ responesData }} -->
    </div>  
  </div>
</template>
<script>
  import axios from 'axios';

  export default {
    data () {
      return {
        info: null,
        loading: true,
        // list
        dataTotal: null,
        previousData: 0,
        nextData:  5,
        limitData: 5,
      }
    },
     mounted () {
       axios
         .get('https://sheetdb.io/api/v1/zlo1oe99msgjx')
         .then(response => (
              this.info = response.data, 
              this.dataTotal = response.data.length
          ))
         .catch(error => {
           console.log(error)
         })
         .finally(() => this.loading = false)
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
  <h2>HomeView</h2>
  <button @click="goToAbout">Go to About</button>

  <br />

  <div v-if="loading">
    <p class="loading loading-infinity loading-lg"></p>
  </div>
  <div v-else>

    <div class="pt-5">
      <div v-for="item in info.slice(previousData, nextData)">
        <div tabindex="0" class="collapse collapse-arrow border-base-300 bg-base-200 border mt-2">
          <div class="collapse-title font-medium">{{ item.first_name }} {{ item.last_name }}</div>
            <div class="collapse-content">
              <p>Gender : {{ item.gender }}</p>
              <p>Email : {{ item.email }}</p>
              <button class="btn  btn-sm btn-success mt-4">Screen</button>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-row justify-center py-5">
        <button v-if="previousData <= 0" class="btn btn-circle" @click="btnPrevious" disabled> ❮ </button>
        <button v-else class="btn btn-circle" @click="btnPrevious"> ❮ </button>
        
        <button v-if="nextData >= dataTotal" class="btn btn-circle" @click="btnNext" disabled> ❯ </button>
        <button v-else class="btn btn-circle" @click="btnNext"> ❯ </button>
      </div>

      <div class="flex flex-col text-center pb-5">
        <p>แสดงข้อมูลที่ {{ previousData + 1 }} ถึง {{ nextData }} </p>
        <p>จำนวนข้อมูลทั้งหมด {{ dataTotal }} รายการ</p>
      </div>
    <!-- {{ info }} -->
  </div>  
</template>
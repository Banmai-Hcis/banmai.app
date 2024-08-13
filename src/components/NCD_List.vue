<script setup>
  import { FaArrowLeftLong } from '@kalimahapps/vue-icons';
</script>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        title_name: 'คัดกรอง NCDs',
        searchData: '',
        searchDataTotal: null,
        loading: true,
        // list
        responesData: null,
        dataTotal: null,
        previousData: 0,
        nextData: 5,
        limitData: 5,
      }
    },
    mounted() {
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
    },

  }
</script>

<template>
  <!-- nav bar -->
  <div class="flex item-center navbar bg-white rounded-2xl rounded-tl-none rounded-tr-none p-0 px-5 mb-5">
    <div class="navbar-start">
      <button class=""><FaArrowLeftLong class="" /></button>
    </div>
    <div class="navbar-center">
      <div class="">{{ title_name }}</div>
    </div>
    <div class="navbar-end">

    </div>
  </div>
   <!-- nav bar -->

  
  <div class="p-5">
    <!-- <p class="text-xl">NCD List</p> -->
    <p class="text-xl font-semibold text-neutral-800">โรค NCDs คืออะไร</p>
    <p class="text-xs whitespace-normal leading-relaxed antialiased text-neutral-700 indent-3 mt-4">
      โรค NCDs หรือ non-communicable diseases เป็นกลุ่มโรคไม่ติดต่อเรื้อรัง คือ ไม่ได้เกิดจากเชื้อโรคและไม่สามารถแพร่กระจายจากคนสู่คนได้ แต่เป็นโรคที่เกิดจากนิสัยหรือพฤติกรรมการดำเนินชีวิต ซึ่งจะมีการดำเนินโรคอย่างช้าๆ ค่อยๆ สะสมอาการอย่างต่อเนื่อง และเมื่อมีอาการของโรคแล้วมักจะเกิดการเรื้อรังของโรคด้วย จึงอาจจัดว่าโรค NCDs เป็นกลุ่มโรคเรื้อรังได้
    </p>
  </div>

  <div class="p-5">
    <div class="rounded-2xl bg-white">
      
      <div class="stats stats-vertical w-full shadow bg-white px-2">
        <div class="stat px-0">
          <div class="stat-title px-3">รายชื่อผู้ที่ต้องคัดกรอง</div>

          <label class="input input-sm input-bordered flex items-center rounded-full gap-2 mt-2 mx-2">
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

        </div>
        <div class="stat">
          <div class="stat-title text-xs">Downloads</div>
          <div class="stat-value">31K</div>
          <div class="stat-desc">Jan 1st - Feb 1st</div>
        </div>
        
      </div>

    </div>
  </div>


</template>
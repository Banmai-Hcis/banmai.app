<script setup>
  import { FaArrowLeftLong } from '@kalimahapps/vue-icons';
  import { FaRegChartBar } from '@kalimahapps/vue-icons';
  import { FaPhone } from '@kalimahapps/vue-icons';
  import { FaLocationDot } from '@kalimahapps/vue-icons';
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
  <div class="flex item-center navbar bg-white shadow rounded-2xl rounded-tl-none rounded-tr-none p-0 px-4 mb-5">
    <div class="navbar-start">
      <button class=""><FaArrowLeftLong class="" /></button>
    </div>
    <div class="navbar-center">
      <div class="text-lg font-semibold text-slate-800">{{ title_name }}</div>
    </div>
    <div class="navbar-end">

    </div>
  </div>
   <!-- nav bar -->

  
  <div class="p-4">
    <!-- <p class="text-xl">NCD List</p> -->
    <p class="text-lg font-semibold text-slate-800">โรค NCDs คืออะไร</p>
    <p class="text-sm whitespace-normal leading-relaxed antialiased text-slate-500 indent-3 mt-4">
      โรค NCDs หรือ non-communicable diseases เป็นกลุ่มโรคไม่ติดต่อเรื้อรัง คือ ไม่ได้เกิดจากเชื้อโรคและไม่สามารถแพร่กระจายจากคนสู่คนได้ 
      แต่เป็นโรคที่เกิดจากนิสัยหรือพฤติกรรมการดำเนินชีวิต ซึ่งจะมีการดำเนินโรคอย่างช้าๆ ค่อยๆ สะสมอาการอย่างต่อเนื่อง และเมื่อมีอาการของโรคแล้วมักจะเกิดการเรื้อรังของโรคด้วย 
      จึงอาจจัดว่าโรค NCDs เป็นกลุ่มโรคเรื้อรังได้
    </p>
  </div>

  <div class="p-4">
    <div class="rounded-2xl bg-white flex flex-col items-center">
      
      <div class="stats stats-vertical w-full shadow bg-white px-2">
        <div class="stat px-0">
          <div class="stat-title flex flex-row items-center menu-title px-3"><span class="pe-1"><FaRegChartBar /></span> รายชื่อผู้ที่ต้องคัดกรอง</div>

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

        <div class="stat px-1">
          <div tabindex="0" class="collapse collapse-arrow">
            <div class="collapse-title font-medium">พิเชษฐ์ ลิ่วเวหา</div>
            <div class="collapse-content ps-0">
              <ul class="menu w-full pt-0">
                <li>
                  <h2 class="menu-title pt-0">ข้อมูลส่วนตัว</h2>
                  <ul>
                    <li class="hover:bg-white active:bg-white focus:outline-none"><p class="flex flex-row items-center">ที่อยู่ : บ้านเลขที่ 69 หมู่ที่ 1 ขุนทะเล</p></li>
                    <li class=""><p class="flex flex-row items-center">เบอร์โทร : 097-2340942</p></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
       
        <div class="stat px-1">
          <div tabindex="0" class="collapse collapse-arrow">
            <div class="collapse-title font-medium">พิเชษฐ์ ลิ่วเวหา</div>
            <div class="collapse-content ps-0">
              <ul class="menu w-full pt-0">
                <li>
                  <h2 class="menu-title pt-0">ข้อมูลส่วนตัว</h2>
                  <ul>
                    <li class="hover:bg-white active:bg-white focus:outline-none"><p class="flex flex-row items-center">ที่อยู่ : บ้านเลขที่ 69 หมู่ที่ 1 ขุนทะเล</p></li>
                    <li class=""><p class="flex flex-row items-center">เบอร์โทร : 097-2340942</p></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="stat px-1">
          <div tabindex="0" class="collapse collapse-arrow">
            <div class="collapse-title font-medium">พิเชษฐ์ ลิ่วเวหา</div>
            <div class="collapse-content ps-0">
              <ul class="menu w-full pt-0">
                <li>
                  <h2 class="menu-title pt-0">ข้อมูลส่วนตัว</h2>
                  <ul>
                    <li class="hover:bg-white active:bg-white focus:outline-none"><p class="flex flex-row items-center">ที่อยู่ : บ้านเลขที่ 69 หมู่ที่ 1 ขุนทะเล</p></li>
                    <li class=""><p class="flex flex-row items-center">เบอร์โทร : 097-2340942</p></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="stat px-1">
          <div tabindex="0" class="collapse collapse-arrow">
            <div class="collapse-title font-medium">พิเชษฐ์ ลิ่วเวหา</div>
            <div class="collapse-content ps-0">
              <ul class="menu w-full pt-0">
                <li>
                  <h2 class="menu-title pt-0">ข้อมูลส่วนตัว</h2>
                  <ul>
                    <li class="hover:bg-white active:bg-white focus:outline-none"><p class="flex flex-row items-center">ที่อยู่ : บ้านเลขที่ 69 หมู่ที่ 1 ขุนทะเล</p></li>
                    <li class=""><p class="flex flex-row items-center">เบอร์โทร : 097-2340942</p></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="stat px-1">
          <div tabindex="0" class="collapse collapse-arrow">
            <div class="collapse-title font-medium">พิเชษฐ์ ลิ่วเวหา</div>
            <div class="collapse-content ps-0">
              <ul class="menu w-full pt-0">
                <li>
                  <h2 class="menu-title pt-0">ข้อมูลส่วนตัว</h2>
                  <ul>
                    <li class="hover:bg-white active:bg-white focus:outline-none"><p class="flex flex-row items-center">ที่อยู่ : บ้านเลขที่ 69 หมู่ที่ 1 ขุนทะเล</p></li>
                    <li class=""><p class="flex flex-row items-center">เบอร์โทร : 097-2340942</p></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      <button class="btn btn-wide mt-4 mb-10 item-center"> ส่งข้อมูล</button>

    </div>
  </div>


</template>
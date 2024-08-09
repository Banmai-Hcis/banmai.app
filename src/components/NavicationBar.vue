<script>
  export default {
      
  }
</script>
<template lang="">
  <div class="fixed w-full bottom-0">

    <div class="flex items-end justify-center">
    <div class="flex flex-col w-full">
      <!-- Navigation Bar -->
      <div class="px-4 bg-white shadow-lg rounded-2xl rounded-bl-none rounded-br-none border">
        <div class="flex flex-row space-x-10 justify-center">
            <!-- Item #1 -->
          <div class="flex group">
            <a href="#" class="pt-3 text-gray-400 hover:text-error">
              <span class="flex flex-col items-center">
                <!-- Icon -->
                <i class="mdi mdi-home-outline mdi-24px mx-1 text-gray-500 group-hover:text-gray-700
                transition-color duration-200"></i>
                
                <!-- Text -->
                <span class="text-xs mb-1 transition-all duration-200">
                  Home
                </span>
                
                <!-- Focus Dot -->
                <span class="h-2 w-2 rounded-full group-hover:bg-error
                transition-all duration-150 delay-100"></span>
              </span>
            </a>
          </div>
        
          <!-- Item #2 -->
          <div class="flex group">
            <a href="#" class="pt-3 text-gray-400 hover:text-error">
              <span class="flex flex-col items-center">
                <!-- Icon -->
                <i class="mdi mdi-compass-outline mdi-24px mx-1 text-gray-500 group-hover:text-gray-700
                transition-color duration-200"></i>
                
                <!-- Text -->
                <span class="text-xs mb-1 transition-all duration-200">
                  Explore
                </span>
                
                <!-- Focus Dot -->
                <span class="h-2 w-2 rounded-full group-hover:bg-error
                  transition-all duration-150 delay-100"></span>
                </span>
              </a>
          </div>

          <!-- Item #3 Active -->
          <div class="flex group">
            <a href="#" class="pt-3 text-error hover:text-error">
              <span class="flex flex-col items-center">
                <!-- Icon -->
                <i class="mdi mdi-layers-outline mdi-24px mx-1 text-gray-700 group-hover:text-gray-700
                transition-color duration-200"></i>
                
                <!-- Text -->
                <span class="text-xs mb-1 transition-all duration-200">
                  Feeds
                </span>
                
                <!-- Focus Dot -->
                <span class="h-1 w-5 rounded-full bg-error group-hover:bg-error
                hover:h-3 hover:w-3 transition-all duration-150 delay-100"></span>
              </span>
            </a>
          </div>

          <!-- Item #4 -->
          <div class="flex group">
            <a href="#" class="pt-3 text-gray-400 hover:text-error">
              <span class="flex flex-col items-center">
                <!-- Icon -->
                <i class="mdi mdi-basket-plus-outline mdi-24px mx-1 text-gray-500 group-hover:text-gray-700
                transition-color duration-200"></i>
                
                <!-- Text -->
                <span class="text-xs mb-1 transition-all duration-200">
                  Cart
                </span>
                
                <!-- Focus Dot -->
                <span class="h-2 w-2 rounded-full group-hover:bg-error
                transition-all duration-150 delay-100"></span>
              </span>
            </a>
          </div>
          
          <!-- Item #5 -->
          <div class="flex group">
            <a href="#" class="pt-3 text-gray-400 hover:text-error">
              <span class="flex flex-col items-center">
                <!-- Icon -->
                <i class="mdi mdi-account-circle-outline mdi-24px mx-1 text-gray-500 group-hover:text-gray-700
                transition-color duration-200"></i>
                
                <!-- Text -->
                <span class="text-xs mb-1 transition-all duration-200">
                  Account
                </span>
                
                <!-- Focus Dot -->
                <span class="h-2 w-2 rounded-full group-hover:bg-error
                transition-all duration-150 delay-100"></span>
              </span>
            </a>
          </div>

        </div>
      </div>
    </div>
  </div>

  </div>
  <!-- Container -->
</template>


<style lang="">
    
</style>
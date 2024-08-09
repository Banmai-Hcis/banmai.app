<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const search = computed({
  get() {
    return route.query.search ?? ''
  },
  set(search) {
    router.replace({ query: { search } })
  }
})
</script>

<template>
  <h2>AboutView</h2>
  <label class="form-control w-full ">
    <div class="label">
      <span class="label-text"> Search</span>
      <span class="label-text-alt">*</span>
    </div>
    <input 
      type="text" 
      class="input input-bordered w-full border" 
      maxlength="20" 
      placeholder="Type search here !"
      v-model.trim="search" />
  </label>
  <!-- <label>
    Search: <input v-model.trim="search" maxlength="20">
  </label> -->
</template>
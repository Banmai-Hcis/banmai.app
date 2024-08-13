<script setup>
  import NavicationBar from './components/NavicationBar.vue';
</script>

<template>
  <div class="h-screen text-neutral">

    <!-- <h1 class="text-4xl font-bold">Banmai App</h1> -->
  
    <!-- <p>
      <strong>Current route path:</strong> {{ $route.fullPath }}
    </p>
  
    <nav>
      <RouterLink class="btn btn-primary" to="/">Go to Home</RouterLink>
      <RouterLink class="btn btn-error" to="/about">Go to About</RouterLink>
    </nav> -->
  
    <main>
      <RouterView />
    </main>
  </div>

  <!-- <NavicationBar /> -->

</template>

<style scoped></style>

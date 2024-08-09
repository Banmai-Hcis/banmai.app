<script setup>
  import NavicationBar from './components/NavicationBar.vue';
</script>

<template>
  <div class="flex flex-col h-screen bg-base-300/10 overflow-y-scroll p-3 gap-5">

    <h1 class="text-4xl font-bold">Hello App!</h1>
  
    <p>
      <strong>Current route path:</strong> {{ $route.fullPath }}
    </p>
  
    <nav>
      <RouterLink class="btn btn-primary" to="/">Go to Home</RouterLink>
      <RouterLink class="btn btn-error" to="/about">Go to About</RouterLink>
    </nav>
  
    <main class="mb-12">
      <RouterView />
    </main>
  </div>

  <NavicationBar />

</template>

<style scoped></style>

<script setup>
</script>

<template>
  <div class="flex flex-col p-10 gap-5">

    <h1>Hello App!</h1>
  
    <p>
      <strong>Current route path:</strong> {{ $route.fullPath }}
    </p>
  
    <nav>
      <RouterLink to="/">Go to Home</RouterLink>
      <RouterLink to="/about">Go to About</RouterLink>
    </nav>
  
    <main>
      <RouterView />
    </main>
  
  </div>
</template>

<style scoped></style>

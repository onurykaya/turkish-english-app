<template>
  <nav x-data="{show:false}" class="flex items-center justify-between flex-wrap bg-pink-500 p-6">
    <div class="flex items-center flex-shrink-0 text-gray-200 mr-6">
      <LogoIcon width="40px" height="40px"/>
      <span class="font-sans italic text-2xl tracking-tight px-3 ">English - Turkish Dictionary</span>
    </div>
  </nav>
</template>

<script>
import LogoIcon from "../assests/logo.svg"
export default {
  name: "Navbar",
  components: {
    LogoIcon
  }
};
</script>

<style scoped>

</style>

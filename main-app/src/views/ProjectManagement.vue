<template>
  <div id="project_management_container"></div>
</template>

<script>
import { start } from "qiankun";
export default {
  mounted() {
    if (!window.qiankunStarted) {
      window.qiankunStarted = true;
      start();
    }
  },
};
</script>

<style>
</style>
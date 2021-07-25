<template>
  <div class="index">
    <el-container>
      <el-header>
        <nav>
          <el-menu
            :default-active="defaultActive"
            class="el-menu-demo"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            @select="handleMenuSelect"
          >
            <el-menu-item index="Home">首页</el-menu-item>
            <el-menu-item index="ProjectManagement">项目管理</el-menu-item>
            <el-menu-item index="ProductTree">产品信息树</el-menu-item>
          </el-menu>
        </nav>
      </el-header>
      <el-container>
        <router-view></router-view>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultActive: "Home",
    };
  },
  methods: {
    handleMenuSelect(index) {
      const activedTopNav = localStorage.getItem("activedTopNav");
      if (activedTopNav && activedTopNav === index) {
        return;
      }
      localStorage.setItem("activedTopNav", index);
      this.$router.push({ name: index });
    },
  },
  created() {
    const activedTopNav = localStorage.getItem("activedTopNav");
    this.defaultActive = activedTopNav ? activedTopNav : "Home";
  },
};
</script>

<style>
.index .el-header {
  padding: 0;
}
</style>
<template>
  <el-container>
    <el-aside width="200px">
      <el-menu
        :default-active="defaultActiveMenu"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item
          v-for="item in menuRouteList"
          :key="item.routeName"
          :index="item.routeName"
        >
          <i class="el-icon-menu"></i>
          <span slot="title">{{ item.name }}</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      routeMap: {
        ProjectManagement: [
          { routeName: "ProjectManagement", name: "项目管理首页" },
          { routeName: "DevelopActivity", name: "开发活动" },
          { routeName: "ReleaseActivity", name: "发布活动" },
        ],
      },
    };
  },
  computed: {
    menuRouteList() {
      const currRouteName = 'ProjectManagement';
      return this.routeMap[currRouteName] || [];
    },
    defaultActiveMenu() {
      if (this.menuRouteList.length > 0) {
        return this.menuRouteList[0].routeName;
      } else {
        return '1';
      }
    },
  },
};
</script>

<style>
</style>
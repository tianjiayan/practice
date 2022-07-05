<template>
  <el-aside width="200px">
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
      router
    >
      <el-menu-item index="/">
        <el-icon><icon-menu /></el-icon>
        <span>首页</span>
      </el-menu-item>
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>系统管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/sys/users">用户管理</el-menu-item>

          <el-menu-item index="/sys/roles">角色管理</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="/sys/menus">菜单管理</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group></el-menu-item-group>
      </el-sub-menu>
      <el-sub-menu index="1-4">
        <template #title>
          <el-icon><location /></el-icon>
          <span>系统工具</span>
        </template>
        <el-menu-item index="/sys/dicts">数字字典</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </el-aside>
</template>
<script setup>
import { ArrowDown } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100%;
}
</style>
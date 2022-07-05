<template>
  <div class="common-layout">
    <el-container>
      <asidevue></asidevue>
      <el-container>
        <el-header>
          <span> VueAdmin后台管理系统 </span>
          <dropdown></dropdown>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import asidevue from './layout/aside.vue'
import dropdown from './layout/dropdown.vue'
</script>
<style lang="scss" scoped>
.el-header,
.el-footer {
  background-color: #17b3a3;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span{
    display: inline-block;
    margin-left: 700px;
    font-weight: 600;
  }
  // text-align: center;
  // line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  // text-align: center;
  // line-height: 200px;
}

.el-main {
  background-color: white;
  color: #333;
  // text-align: center;
  // line-height: 160px;
}

.common-layout,
.el-container {
  // margin-bottom: 40px;
  height: 100%;
}
</style>
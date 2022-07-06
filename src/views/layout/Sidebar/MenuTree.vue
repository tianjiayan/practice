<template>
  <template v-if="!item.children">
    <el-menu-item :index="item.path">
      <el-icon><location /></el-icon>
      <span>{{ item.meta.title }}</span>
    </el-menu-item>
  </template>
  <template v-if="item.children && item.children.length > 0">
    <el-sub-menu :index="item.path">
      <template #title>
        <el-icon><document /></el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <MenuTree
        v-for="child in item.children"
        :menu="child"
        :key="child"
      ></MenuTree>
    </el-sub-menu>
  </template>
</template>

<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  menu: {
    type: Object,
    default: () => {}
  }
})

const item = computed(() => {
  return props.menu
})
</script>
<style scoped lang='scss'>
</style>

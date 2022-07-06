<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    default-active="/index"
    text-color="#fff"
    router
  >
    <menu-tree v-for="item in menuList" :menu="item" :key="item"></menu-tree>
  </el-menu>
</template>

<script setup>
import MenuTree from './MenuTiree'
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import { filterMenuData } from '../../../utils/menu'

import { filterRouters, generateMenus } from '../../../utils/router'
const router = useRouter()

const menuList = computed(() => {
  const routes = filterRouters(router.getRoutes())
  return filterMenuData(generateMenus(routes))
})

// console.log(menuList)
</script>
<style scoped lang='scss'>
</style>

<!-- <template>
  <el-menu
    active-text-color="#fff"
    background-color="#304156"
    :default-active="$route.path"
    text-color="#bfcbd9"
    unique-opened
    router
  >
    <sidebar-menu-item
      v-for="item in menuList"
      :key="item"
      :menuList="item"
    ></sidebar-menu-item>
  </el-menu>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { filterMenuData } from '../../../utils/menu'
import { filterRouters, generateMenus } from '../../../utils/router'
import SidebarMenuItem from './SidebarMenuItem'
const router = useRouter()


// 获取路由表的所有数据
console.log('routes=>', router.getRoutes())

const menuList = computed(() => {
  const routes = filterRouters(router.getRoutes())
  return filterMenuData(generateMenus(routes))
})
</script>
<style scoped lang="scss">
.el-menu{
  border-right : none;
}
</style> -->
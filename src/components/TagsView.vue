<template>
  <div class="tags-view-container">
    <ul class="tags-view-list">
      <li
        class="tags"
        @click="handleSelectTag(item.path)"
        :class="{ active: $route.path === item.path }"
        v-for="(item, index) in tagsView"
        :key="item"
      >
        {{ item.title }}
        <span @click.stop="handleCloseTag(index)">
          x
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const store = useStore()
const router = useRouter()
const route = useRoute()

watch(
  () => router.currentRoute.value.path,
  (toPath) => {
    if (route.meta && route.meta.title && route.path) {
      const obj = {
        title: route.meta.title,
        path: route.path
      }
      store.commit('tagsview/setTagsView', obj)
    }
  },
  { immediate: true, deep: true }
)

const tagsView = computed(() => {
  return store.getters.tagsview
})

const handleSelectTag = (path) => {
  router.push(path)
}

const handleCloseTag = (index) => {
  store.commit('tagsview/removeTagItem', index)
}
</script>

<style scoped lang="scss">
.tags-view-container {
  height: 34px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 4%);

  .tags {
    display: inline-block;
    position: relative;
    cursor: pointer;
    height: 26px;
    line-height: 26px;
    border: 1px solid #d8dce5;
    color: #495060;
    background: #fff;
    padding: 0 8px;
    font-size: 12px;
    margin-left: 5px;
    margin-top: 4px;
  }

  .tags-view-list {
    overflow-x: auto;
  }

  .tags.active {
    background-color: rgb(48, 65, 86);
    color: #fff;
  }
}
</style>

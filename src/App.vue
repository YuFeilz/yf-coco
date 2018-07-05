<template>
  <div id="app">
    <!-- keep-alive当请求过一次数据之后就回将数据放在内存中，下次加载页面直接从内存中获取数据而不是发ajax请求 -->
    <keep-alive>
      <!-- router-view显示当前路由地址所对应的内容 -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

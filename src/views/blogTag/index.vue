<template>
  <div>
    <header-title :title="title"/>
  </div>
</template>

<script>
import HeaderTitle from '@/components/HeaderTitle'
export default {
  name: 'blogTag',
  components: {
    HeaderTitle,
  },
  data: () => ({
    title: '标签页',
  }),
}
</script>

<style scoped lang="scss">

</style>

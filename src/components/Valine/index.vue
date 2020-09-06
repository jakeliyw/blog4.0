<template>
  <div>
    <div id="vcomments"></div>
  </div>
</template>

<script>
export default {
  name: 'Valine',
  mounted: function () {
    // require window
    const Valine = require('valine')
    // if (typeof window !== 'undefined') {
    //   this.window = window
    //   window.AV = require('leancloud-storage')
    //
    // }
    /* eslint-disable no-new */
    new Valine({
      el: '#vcomments',
      appId: 'gT2ypm3SoQAeXdAr03zAGrQC-gzGzoHsz', // your AppId
      appKey: 'wWy4gimGwmpDSIoln1heVXyN', // your AppKey
      notify: false,
      verify: false,
      avatar: 'monsterid',
      path: window.location.pathname,
      placeholder: '总想对你表白…\n让我想想怎么喷…',
    })
  },
}
</script>

<style scoped>

</style>

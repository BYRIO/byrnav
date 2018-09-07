<template>
  <el-container class="page">
    <el-header>
      Header
    </el-header>
    <el-main>
      Main
    </el-main>
    <el-footer>
      Footer
    </el-footer>
  </el-container>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  },
  data() {
    return {
      
    }
  }
}
</script>

<style lang="stylus" scoped>
.page
  margin 0 auto 
  max-width 1100px
</style>
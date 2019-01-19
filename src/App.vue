<template>
  <div id="app">
    <!--容器框架 start-->
    <el-container>
      <!--头 start-->
      <el-header>
        <Header/>
      </el-header>
      <!--头 end-->
      <!--内容 start-->
      <el-main>
        <!--顶栏标题 start-->
        <Bread/>
        <!--顶栏标题 end-->
        <transition>
          <keep-alive>
              <router-view></router-view>
          </keep-alive>
        </transition>
      </el-main>
      <!--内容 end-->
    </el-container>
    <!--容器框架 end-->
  </div>
</template>

<script>
import Header from './components/public/Header'
import Bread from './components/public/Bread'
import settingDat from './config/settingDat.js'
// 状态值
import { mapActions } from 'vuex'
export default {
  components: {
    Header,
    Bread
  },
  methods: {
    ...mapActions(['setToken'])
  },
  created () {
    let that = this
    // 注入登录touken
    let token = localStorage.userData || settingDat.token
    that.setToken(token)
  }
}
</script>

<style lang="scss">
  @import "../static/css/css.scss";
 .el-header,.el-main{
    padding: 0;
 }
</style>

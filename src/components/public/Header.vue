<!--
 * @Author: 王亮
 * @Date: 2019-01-17 15:23:37
 * @LastEditors: 王亮
 * @LastEditTime: 2019-01-19 11:46:05
 * @Description: 网站登录头
 -->
<template>
<!--网站头 start-->
<div class="user-header">
  <el-row>
      <el-col :span="5" class="header-title">
           <b>易车网</b> - <small>直播后台管理</small>
      </el-col>
      <el-col :span="10">
        <!--功能面板 start-->
        <ul class="header-nav">
            <li v-for="(item,index) in headerDat" :key="index">
                  <router-link class="lnk" :to="item.lnk" exact>
                     <font-awesome-icon :icon="item.icon" class="icon"/>
                      {{item.title}}
                  </router-link>
            </li>
        </ul>
        <!--功能面板 end-->
      </el-col>
      <el-col :span="9" class="login">
        <!--登录状态 start-->
        <div class="info">
            <font-awesome-icon :icon="['fas','user']" class="icon"/>
            <span>{{ userName }}:</span>
            <span>您好，欢迎使用</span>
            <a href="###" class="exit">
               <font-awesome-icon :icon="['fas','sign-out-alt']" class="icon"/>
               <em>退出</em>
            </a>
        </div>
         <!--登录状态 end-->
      </el-col>
  </el-row>
</div>
<!--网站头 end-->
</template>
<script>
import settingDat from '../../config/settingDat.js'
// store状态池
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      headerDat: settingDat.header,
      // 用户名称
      userName: ''
    }
  },
  computed: {
    ...mapGetters(['getToken'])
  },
  methods: {
    // 显示登录状态
    loginStatusView (dat) {
      let that = this
      if (dat && dat.user) {
        that.userName = dat.user.userName
      }
    }
  },
  mounted () {
    let that = this
    that.loginStatusView(that.getToken)
  }
}
</script>

<style lang="scss">
   .user-header{
     background-color: #3c8dbc;
     padding: 15px;
     .header-title{
        font-size: 18px;
        color: #fff;
        float: left;
        vertical-align: top;
     }
     .header-nav {
       list-style: none;
       overflow: hidden;
       li { float: left; margin-right: 30px;
          .lnk { font-size: 14px; color: #fff; font-weight: 400; }
       }
     }
     .login{
       text-align: right;
       color: #fff;
       font-size: 14px;
       .info {
         span { margin-left: 5px;  color: #fff;font-size: 14px;}
       }
       .exit{
          font-size: 14px; color: #fff;
          margin-left: 20px;
       }
     }
   }
</style>

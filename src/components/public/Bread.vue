<!--
 * @Author: 王亮
 * @Date: 2019-01-19 15:20:09
 * @LastEditors: 王亮
 * @LastEditTime: 2019-01-19 15:57:52
 * @Description: file content
 -->
<template>
    <el-row>
        <el-col :span="24">
            <h6>直播列表1</h6>
        </el-col>
    </el-row>
</template>
<script>
export default {
  data () {
    return {
      navName: '直播列表'
    }
  },
  watch: {
    '$route' (to, from) {
      console.log(to)
    }
  }
}
</script>

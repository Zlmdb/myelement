<template>
  <div>
    <v-header></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <div class = "content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import header from './components/header/header.vue';
export default {
  name: 'HelloWorld',
  components:{'v-header':header}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixin.styl";

   .tab
      display:flex
      width:100%
      height:40px
      line-height:40px
      //下面border-1px()是重复利用mixin.styl里面的样式
      border-1px(rgba(7,17,27,0.1))
      .tab-item
        flex:1
        text-align :center
        & > a
          display:block
          font-size:14px
          color:rgb(77,85,93)
          text-decoration:none
          &.active
            color:green
</style>

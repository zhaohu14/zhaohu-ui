<template>
  <transition name="fade" mode="out-in" v-if="isShow">
    <div class="ls-mask" @touchmove.prevent>
      <div class="ls-mask-window">
        <h2>{{title}}</h2>
        <div class="ls-mask-content">
          {{content}}
        </div>
        <div class="ls-mask-footer">
          <div @click="onCancel">{{cancelText}}</div>
          <div @click="onConfirm">{{confirmText}}</div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
  export default {
    name: 'index',
    data () {
      return {
        title: '提示',
        content: null,
        cancelText: '取消',
        confirmText: '确认',
        cancel: function () {},
        confirm: function () {},
        isSync: false,
        isShow: false

      }
    },
    methods: {
      onCancel () {
        if (!this.isSync) this.isShow = false
        this.cancel()
      },
      onConfirm () {
        if (!this.isSync) this.isShow = false
        this.confirm()
      }
    }
  }
</script>
<style scoped>
  #app{
    overflow: hidden;
  }
  .ls-mask{
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0,0,0,0.3);
  }
  .ls-mask-window{
    padding-top: 20px;
    width: 80%;
    background: white;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  .ls-mask-window>h2{
    text-align: center;
  }
  .ls-mask-content{
    padding: 20px;
    text-align: center;
  }
  .ls-mask-footer{
    height: 45px;
    border-top: 1px solid #f0f0f0;
    display: flex;
  }
  .ls-mask-footer>div{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }
  .ls-mask-footer>div:active{
    background: #fafafa;
  }
  .ls-mask-footer>div:nth-child(1){
    border-right: 1px solid #f0f0f0;
    color: gray;
  }

</style>
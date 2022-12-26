<template>
  <div class="userNumber">
    <div class="left">
      <div class="left-left">
        <div></div>
      </div>
    </div>
    <div class="right">
      <div class="right-left">
        <div class="right-top">男性用户人数</div>
        <div class="right-bottom">Number of Age</div>
      </div>
      <div class="right-right"><span>1,012,007</span>万人</div>
    </div>
    <div class="left">
      <div class="left-left">
        <div></div>
      </div>
    </div>
    <div class="right">
      <div class="right-left">
        <div class="right-top">男性用户人数</div>
        <div class="right-bottom">Number of Age</div>
      </div>
      <div class="right-right"><span>1,012,007</span>万人</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.userNumber {
  display: flex;
  padding: 15px 0px 0 0px;
  height: 100px;
  width: 100%;
  background-color: #2a2b2d;
  .left {
    padding-left: 20px;
    .left-left {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 4px solid #464648;
      margin-right: 15px;
      div {
        width: 22px;
        height: 22px;
        border-radius: 50%;
        border: 3px solid #9bac3f;
        margin: 5px 0 0 5px;
      }
    }
  }
  .right {
    color: white;
    .right-left {
      .right-top {
        font-size: 0.18rem;
        margin-bottom: 5px;
      }
      .right-bottom {
        font-size: 0.1rem;
      }
    }
    .right-right {
      margin-top: 5px;
      span {
        font-size: 0.22rem;
        font-weight: bold;
      }
    }
  }
}
</style>

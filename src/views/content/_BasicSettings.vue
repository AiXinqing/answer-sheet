
<template>
  <!-- 基础配置 -->
  <div style="height:100%">
    <div class="group_heads">
      <span>制作答题卡</span>
    </div>
    <div class="Guide_bar">
      <div class="allscore">
        当前总分：
        <span>0</span> 分
      </div>
      <div class="layout-box">
        <div class="layout-top">
          <span>布局</span>
          <span class="layout-edit">修改</span>
        </div>
        <div class="layout-bottom">
          <div>A3/B4/8K纸</div>
          <div>两栏</div>
          <div>线上阅卷</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";
.group_heads {
  height: 50px;
  line-height: 50px;
  width: 100%;
  background-color: $main;
  position: fixed;
  z-index: 10;
  text-align: center;
  color: #fff;
  font-size: 16px;
}
.Guide_bar {
  position: fixed;
  left: 7px;
  z-index: 2;
  margin-top: 100px;
  .allscore {
    font-size: 14px;
  }
  .layout-box {
    border: 1px solid #e3e6e7;
    min-width: 93px;
    background: #fff;
    margin-top: 10px;
    font-size: 14px;
  }
  .layout-top {
    background-color: #f7f8fa;
    padding: 5px 8px;
  }
  .layout-top {
    background-color: #f7f8fa;
    padding: 5px 8px;
  }
  .layout-edit {
    color: $mainFont !important;
    cursor: pointer;
    float: right;
  }
  .layout-bottom {
    background-color: #fff;
    padding: 10px 8px;
    line-height: 22px;
  }
}
</style>

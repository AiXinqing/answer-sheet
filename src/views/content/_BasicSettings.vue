<template>
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
    <div class="btn-content">
      <div class="basis-title">
        <span>设置答题卡基础信息</span>
      </div>
      <div class="basis_checkbox">
        <el-checkbox v-model="checked">分区答题卡</el-checkbox>
      </div>
      <div class="basis_checkbox basic_btn">
        <el-button>客观题</el-button>
        <el-button>填空题</el-button>
        <el-button>作文</el-button>
      </div>
      <div class="basis_checkbox basic_btn">
        <el-button type="primary">预览</el-button>
        <el-button type="primary">保存</el-button>
        <el-button type="primary">下载</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: false,
    };
  },
};
</script>
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
.btn-content {
  width: 320px;
  float: right;
  border-left: 1px solid #eee;
  height: 100%;
  background: #fff;
  padding-top: 50px;
}
.basis-title {
  border-left: none;
  border-right: none;
  background-color: $bf-f7;
  height: 40px;
  line-height: 40px;
  text-align: left;
  font-size: 16px;
  font-weight: 700;
  padding: 0 30px;
  border-bottom: 1px solid $bs-e3;
}
.basis_checkbox {
  padding: 20px 0;
  padding-left: 17px;
  border-bottom: 1px solid #eee;
  width: 100%;
}
.el-button--medium {
  padding: 0 0;
  width: 90px;
  padding: 0;
  height: 38px;
  line-height: 36px;
}
.basis_checkbox.basic_btn {
  padding: 15px 0;
  padding-left: 15px;
}
</style>

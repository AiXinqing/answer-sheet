<template>
  <div>
    <textarea class="textarea-info">请输入答题卡标题</textarea>
    <el-row class="TestTitle">
      <el-col :span="4" class="title-item">
        <span>考号</span>
        <span />
      </el-col>
      <el-col :span="4" class="title-item">
        <span>考号</span>
        <span><span class="titke-edit">编辑</span></span>
      </el-col>
    </el-row>
    <el-row class="precautions_box">
      <el-col :span="12" class="precautions_left" :style="{ width: '519px' }">
        <div class="precautions_title">注 意 事 项</div>
        <div class="precautions_content">
          <p>1.答题前请将姓名、班级、考场、座号和准考证号填写清楚。</p>
          <p>2.客观题答题,必须使用2B铅笔填涂,修改时用橡皮擦干净。</p>
          <p>3.主观题必须使用黑色签字笔书写。</p>
          <p>4.必须在题号对应的答题区域内作答,超出答题区域书写无效。</p>
          <p>5.保持答卷清洁完整。</p>
        </div>
        <div v-if="!svg" class="precautions_mark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            version="1.1"
          >
            <text x="10" y="32" style="font-size: 18px;">正确填涂</text>
            <rect
              x="110"
              y="21"
              width="17"
              height="10"
              stroke="#000000"
              fill="#000000"
              style="fill-opacity: 1"
            />
            <text x="175" y="32" style="font-size: 18px;">缺考标记</text>
            <rect
              x="278"
              y="21"
              width="17"
              height="10"
              stroke="#000000"
              style="fill-opacity: 0"
            />
          </svg>
        </div>
        <div class="precautions_mark" v-else>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            version="1.1"
          >
            <text x="10" y="32" style="font-size: 16px;">正确填涂</text>
            <rect
              x="80"
              y="22"
              width="17"
              height="10"
              stroke="#000000"
              fill="#000000"
              style="fill-opacity: 1"
            />
            <text x="120" y="32" style="font-size: 16px;">缺考标记</text>
            <rect
              x="190"
              y="22"
              width="17"
              height="10"
              stroke="#000000"
              style="fill-opacity: 0"
            />
          </svg>
        </div>
      </el-col>
      <el-col :span="12" class="precautions_right" :style="{ width: '224px' }">
        <div class="ticket_number">
          准考证号
          <span class="precautions_edit layui-btn layui-btn-xs">编辑</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    contentData: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      svg: false
    }
  }
}
</script>

<style lang="scss">
@import '~@/styles/variables.scss';
.textarea-info {
  text-align: center;
  resize: none;
  height: 65px;
  line-height: 38px;
  width: calc(100% - 2px);
  font-size: 23px;
  border: 1px dashed $font-888;
  word-break: break-all;
}
.title-item {
  height: 38px;
  line-height: 50px;
  min-width: 148px;
  position: relative;
  span {
    display: inline-block;
    font-size: 18px;
  }
  > span:last-child {
    width: 87px;
    position: relative;
    margin-left: 10px;
    margin-right: 15px;
    top: 3px;
    border-bottom: 2px solid $font-888;
  }
  span.titke-edit {
    position: absolute;
    top: -26px;
    right: 0;
    font-size: 12px !important;
    height: 20px;
    line-height: 20px;
    padding: 0 6px;
    border-radius: 3px;
    color: $white;
    cursor: pointer;
    background-color: $main;
  }
}
.TestTitle {
  margin-top: 15px;
}
.precautions_box {
  margin-top: 20px;
  .precautions_title {
    height: 38px;
    line-height: 38px;
    border-bottom: 2px solid $font-888;
    text-align: center;
    width: 100%;
  }
  .precautions_left {
    border: 1px solid $font-888;
  }
  .precautions_right {
    border: 1px solid $font-888;
    min-width: 223px;
    border-left: none;
    border-bottom: navajowhite;
  }
  .precautions_content {
    padding-left: 10px;
    height: 131px;
    border-bottom: 1px solid $font-333;
    font-size: 14px;
    margin-top: 15px;
  }
}
.precautions_left.columns .precautions_content {
  height: 141px;
  font-size: 12px;
  margin-top: 5px;
}
.precautions_title,
.ticket_number {
  height: 38px;
  line-height: 38px;
  border-bottom: 2px solid $font-888;
  text-align: center;
  width: 100%;
}
.layui-btn-xs {
  height: 22px;
  line-height: 22px;
  padding: 0 5px;
  font-size: 12px;
  display: inline-block;
  background-color: $main;
  color: $white;
  white-space: nowrap;
  text-align: center;
  border: none;
  border-radius: 2px;
  cursor: pointer;
}
.precautions_content p {
  margin-top: -4px;
}
.precautions_edit {
  position: absolute;
  right: 15px;
  top: 8px;
}
.precautions_mark {
  font-size: 16px;
  height: 50px;
  line-height: 50px;
}
</style>

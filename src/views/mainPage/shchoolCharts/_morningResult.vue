<template>
  <div class="chart-container">
    <div class="p-c-info-title">
      <i />
      <span v-if="oneData">{{ oneData.description }} </span>
      <div
        class="ststistics-box"
        @click="stuTableFunc"
      >
        <span><i />数据列表</span>
      </div>
    </div>
    <div class="row-box">
      <MorningCheck
        v-if="oneData.datas"
        :chart-data="oneData"
        :title-name="titleOne"
        :x-axis-name="''"
        :splice-statu="1"
        :is-label="true"
        width="calc(100% - 28px)"
      />
      <mResultLine
        v-if="twoData.datas"
        :chart-data="twoData"
        :title-name="titleTwo"
        :is-label="true"
        :unit="''"
        width="calc(100% - 28px)"
      />
      <mRBar
        v-if="threeData.datas"
        :chart-data="threeData"
        :title-name="titleThree"
        width="calc(100% - 28px)"
        :is-label="true"
      />
      <mResultLine
        v-if="fivesData.datas"
        :chart-data="fivesData"
        :title-name="titleFives"
        :is-label="true"
        :unit="''"
        width="calc(100% - 28px)"
      />
      <pieOrBar
        v-if="fourData.datas"
        :chart-data="fourData"
        :title-name="titleFour"
        :x-axis-name="''"
        :is-label="true"
        :series-name="titleFour"
        width="calc(33.3% - 15px)"
      />
      <pieOrPie
        v-if="sixData.datas"
        :chart-data="sixData"
        :title-name="titleSix"
        :x-axis-name="''"
        :is-label="true"
        :series-name="titleSix"
        width="calc(33.3% - 15px)"
      />
      <pieOrBar
        v-if="sevenData.datas"
        :chart-data="sevenData"
        :title-name="titleSeven"
        :x-axis-name="''"
        :is-label="true"
        :series-name="titleSeven"
        width="calc(33.3% - 28px)"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import MorningCheck from '../Charts/Scatter/_MorningCheck'
import mResultLine from '../Charts/Line/_mResultLine'
import mRBar from '../Charts/Compound/_mRbar.vue'
import pieOrBar from '../Charts/Compound/_pieOrBar'
import pieOrPie from '../Charts/Compound/_pieOrPie'

export default {
  components: {
    MorningCheck,
    mResultLine,
    mRBar,
    pieOrBar,
    pieOrPie
  },
  props: {
    nodeName: {
      type: String,
      default: ''
    }

  },
  data() {
    return {
      // title
      titleOne: '',
      titleTwo: '',
      titleThree: '',
      titleFour: '',
      titleFives: '',
      titleSix: '',
      titleSeven: '',
      // 图表数据
      oneData: {},
      twoData: {},
      threeData: {},
      fourData: {},
      fivesData: {},
      sixData: {},
      sevenData: {}
    }
  },
  computed: {
    ...mapState('chachart', [
      'analysisCharts'
    ]),
    attributeId() {
      return this.$route.query.attributeId
    },
    objectId() {
      return this.$route.params.objectId
    },
    caseSelectId() {
      return this.$route.query.caseSelectId
    },
    caseSelectids() {
      return this.$route.query.filterQuery
        .replace(/[\da-zA-Z]*:/g, '')
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler: function(query) {
        const chartLong = [1, 2, 3, 4, 5, 6, 7]
        if (chartLong.length) {
          this.getList()
          chartLong.forEach(element => {
            this.getchartsFunc(element)
          })
        }
      }
    }
  },
  methods: {
    chartsDataFunc() {
      this.analysisCharts.find((item) => {
        switch (item.chartOrder) {
          case 1:
            this.oneData = item
            break
          case 2:
            this.twoData = item
            break
          case 3:
            this.threeData = item
            break
          case 4:
            this.fourData = item
            break
          case 5:
            this.fivesData = item
            break
          case 6:
            this.sixData = item
            break
          case 7:
            this.sevenData = item
            break
          default:
        }
      })
    },
    getchartsFunc(attrId) {
      this.$store.dispatch('chachart/getCharts', {
        attributeId: this.attributeId,
        objectId: this.objectId,
        caseSelectids: this.caseSelectids,
        chartOrder: attrId
      }).then(() => {
        this.$nextTick(() => {
          this.chartsDataFunc()
        })
      })
    },
    getList() {
      this.$store.dispatch('chachart/getList', {
        attributeId: this.attributeId
      }).then(res => {
        res.forEach(element => {
          switch (element.chartOrder) {
            case 1:
              this.titleOne = element.name
              break
            case 2:
              this.titleTwo = element.name
              break
            case 3:
              this.titleThree = element.name
              break
            case 4:
              this.titleFour = element.name
              break
            case 5:
              this.titleFives = element.name
              break
            case 6:
              this.titleSix = element.name
              break
            case 7:
              this.titleSeven = element.name
              break
            default:
          }
        })
      })
    },
    stuTableFunc() {
      this.$router.push({
        name: 'LEATable',
        params: {
          objectId: this.objectId
        },
        query: this.$route.query
      })
    }
  }
}
</script>


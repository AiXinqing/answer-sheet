<template>
  <div class="chart-container">
    <div class="p-c-info-title">
      <i />
      <span v-if="oneData">{{ oneData.description }}</span>
      <div
        class="ststistics-box"
        @click="stuTableFunc"
      >
        <span><i />数据列表</span>
      </div>
    </div>
    <div class="row-box">
      <pieCahrt
        v-if="oneData.datas"
        :chart-data="oneData"
        :title-name="titleOne"
        :series-name="titleOne"
        :unit="'次'"
        :is-label="true"
        width="calc(33.33% - 24px)"
      />
      <singleSolidBar
        v-if="twoData.datas"
        :chart-data="twoData"
        :title-name="titleTwo"
        :title-num="2"
        :is-label="true"
        width="calc(66.67% - 24px)"
      />
      <MorningCheck
        v-if="threeData.datas"
        :chart-data="threeData"
        :title-name="titleThree"
        :x-axis-name="''"
        :is-label="true"
        :tig="'提前'"
        :splice-statu="2"
        width="calc(100% - 28px)"
      />
      <MorningCheck
        v-if="fourData.datas"
        :chart-data="fourData"
        :title-name="titleFour"
        :x-axis-name="''"
        :is-label="true"
        :tig="'滞后'"
        :splice-statu="2"
        width="calc(100% - 28px)"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import singleSolidBar from '../Charts/Compound/_singBar'
import pieCahrt from '../Charts/Pie/_pieChart'
import MorningCheck from '../Charts/Scatter/_MorningCheck'

export default {
  components: {
    singleSolidBar,
    MorningCheck,
    pieCahrt
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
      // 图表数据
      oneData: {},
      twoData: {},
      threeData: {},
      fourData: {}
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
        const chartLong = [1, 2, 3, 4]
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


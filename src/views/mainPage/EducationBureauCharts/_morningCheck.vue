<template>
  <div class="chart-container">
    <div class="p-c-info-title">
      <i />
      <span>{{ oneData.description }}</span>
      <div
        class="ststistics-box"
        @click="stuTableFunc"
      >
        <span><i />数据列表</span>
      </div>
    </div>
    <div class="row-box">
      <ProportionPie
        v-if="oneData.datas"
        :chart-data="oneData"
        :title-name="titleOne"
        :series-name="titleOne"
        :is-label="true"
        width="calc(50% - 21px)"
      />
      <tableCharts
        v-if="twoData.datas"
        :chart-data="twoData"
        :title-name="titleTwo"
        :series-name="titleTwo"
        :is-label="true"
        width="calc(50% - 21px)"
      />
      <inverseBar
        v-if="threeData.datas"
        :chart-data="threeData"
        :title-name="titleThree"
        :x-axis-name="''"
        :is-label="true"
        width="calc(100% - 28px)"
      />
      <inverseBar
        v-if="fourData.datas"
        :chart-data="fourData"
        :title-name="titleFour"
        :x-axis-name="''"
        :is-label="true"
        :formatter-name="'午检'"
        :bar-color="'#FACF2B'"
        width="calc(100% - 28px)"
      />
      <ProportionPie
        v-if="sixData.datas"
        :chart-data="sixData"
        :title-name="titleSix"
        :series-name="titleSix"
        :is-label="true"
        width="calc(30% - 21px)"
      />
      <inverseBar
        v-if="fivesData.datas"
        :chart-data="fivesData"
        :title-name="titleFives"
        :x-axis-name="''"
        :is-label="true"
        :formatter-name="'晚检'"
        :bar-color="'#52A3FF'"
        width="calc(70% - 25px)"
      />
      <pieOrBar
        v-if="sevenData.datas"
        :chart-data="sevenData"
        :title-name="titleSeven"
        :x-axis-name="''"
        :is-label="true"
        :series-name="'异常事件发生概率...'"
        width="calc(30% - 21px)"
      />
      <singleHollowBar
        v-if="eigthData.datas"
        :chart-data="eigthData"
        :title-name="titleEigth"
        width="calc(70% - 25px)"
        :x-axis-name="'概率'"
        :is-label="true"
        :grid-left="30"
        :title-num="2"
      />
      <LinearRegression
        v-if="nineData.datas"
        :chart-data="nineData"
        :title-name="titleNine"
        :x-axis-name="''"
        :is-label="true"
        width="calc(100% - 28px)"
      />
      <LinearRegression
        v-if="elevenData.datas"
        :chart-data="elevenData"
        :title-name="titleEleven"
        :x-axis-name="''"
        :is-label="true"
        :min-yaxis="true"
        width="calc(100% - 28px)"
      />
      <MorningCheck
        v-if="tenData.datas"
        :chart-data="tenData"
        :title-name="titleTen"
        :x-axis-name="''"
        :splice-statu="0"
        :is-label="true"
        width="calc(100% - 28px)"
      />
      <MorningCheck
        v-if="twelveData.datas"
        :chart-data="twelveData"
        :title-name="titleTwelve"
        :x-axis-name="''"
        :is-label="true"
        :splice-statu="3"
        width="calc(100% - 28px)"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ProportionPie from '../Charts/Pie/_ProportionPie'
import inverseBar from '../Charts/Bar/_inverseBar'
import LinearRegression from '../Charts/Compound/_LinearRegression'
import pieOrBar from '../Charts/Compound/_pieOrBar'
import singleHollowBar from '../Charts/Bar/_singleHollowBar'
import MorningCheck from '../Charts/Scatter/_MorningCheck'
import tableCharts from '../Charts/Compound/_tableCharts'

export default {
  components: {
    ProportionPie,
    inverseBar,
    LinearRegression,
    pieOrBar,
    singleHollowBar,
    MorningCheck,
    tableCharts
  },
  data() {
    return {
      titleOne: '',
      titleTwo: '',
      titleThree: '',
      titleFour: '',
      titleFives: '',
      titleSix: '',
      titleSeven: '',
      titleEigth: '',
      titleNine: '',
      titleTen: '',
      titleEleven: '',
      titleTwelve: '',
      // 图表数据
      oneData: {},
      twoData: {},
      threeData: {},
      fourData: {},
      fivesData: {},
      sixData: {},
      sevenData: {},
      eigthData: {},
      nineData: {},
      tenData: {},
      elevenData: {},
      twelveData: {}
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
        const chartLong = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
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
          case 8:
            this.eigthData = item
            break
          case 9:
            this.nineData = item
            break
          case 10:
            this.tenData = item
            break
          case 11:
            this.elevenData = item
            break
          case 12:
            this.twelveData = item
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
            case 8:
              this.titleEigth = element.name
              break
            case 9:
              this.titleNine = element.name
              break
            case 10:
              this.titleTen = element.name
              break
            case 11:
              this.titleEleven = element.name
              break
            case 12:
              this.titleTwelve = element.name
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

<style lang="scss" scoped>
	@import "~@/styles/label.scss";
  .main-container .right-contten{
    overflow: auto;
  }

</style>


<template>
  <el-container direction="vertical">
    <el-header>
      <h3>图表页</h3> 
    </el-header>
    
    <el-main>
      <div class="block-wrap">
        <h3 class="block-label">图表</h3>
        <p>图表内容通常是模块化 , 包含在 <code>&lt;div class="block-wrap"&gt;</code> 中</p>
        <p>更多用法请参考 <a href="https://www.echartsjs.com/examples/zh/index.html">Echarts</a></p>
        <div class="tip-area">
          <p>ECharts组件虽然注册在全局 , 但仍需要通过代码进行初始化 <code>option</code> 并实例化</p>
        </div>
      </div>

      <el-row :gutter="15">
        <el-col :span="12">
          <div class="block-wrap">
            <div ref="echartsPie" class="echarts"></div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="block-wrap">
            <div ref="echartsBar" class="echarts"></div>
          </div>
        </el-col>
      </el-row>

      <div class="block-wrap">
        <h3 class="block-label">地图</h3>
        <p>实现基础的地图需求功能</p>
        <p>更多用法请参考 <a href="https://dafrok.github.io/vue-baidu-map/#/zh/start/usage">Vue-Baidu-Map</a></p>
        <!-- <p><el-button type="primary" @click="getData">测试数据</el-button></p> -->
        <baidu-map class="bm-view margin-b-15" center="成都" :scroll-wheel-zoom="true">
          <bm-overview-map anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :isOpen="true"></bm-overview-map>
          <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
        </baidu-map>
        <div class="tip-area">
          <p>地图组件被注册在全局下 , 全局直接使用</p>
        </div>
        <div class="warning-area">
          <p>通常地图组件占据的页面宽度较宽甚至横跨了整个页面宽度 , 请结合页面展示情况决定是否使用 <code>:scroll-wheel-zoom="true"</code> 或者协商调整页面布局 , 因为它会干扰到用户正常的滚轮行为 !</p>
        </div>
        
      </div>
    </el-main>

  </el-container>
</template>
<script>
  export default {
    data () {
      return {
        routes: [],
        searchForm: {
          keyword: '',
          check: [],
          check2: []
        },
        tableData: [
          {
            series: 'dgfh5dgfjh4sh2sfg4h56fdh',
            name: '名字',
            des: '描述'
          },
          {
            series: 'dgfh5dgfjh4sh2sfg4h56fdh',
            name: '名字2',
            des: '描述2'
          }
        ],
        columns: [
          {
            id: 'series',
            label: '序列',
            width: '200px'
          },
          {
            id: 'name',
            label: '名称',
          },
          {
            id: 'des',
            label: '描述',
          }
        ]
      }
    },
    mounted () {
      this.initEchartsPie()
      this.initEchartsBar()
    },
    methods: {
      /**
       * 基于准备好的dom，初始化echarts实例
       * @return {[type]} [description]
       */
      initEchartsPie() {
        var myChart = this.$echarts.init(this.$refs.echartsPie);

        let option = {
          title : {
              text: '南丁格尔玫瑰图',
              subtext: '内容纯属虚构',
              x:'center'
          },
          tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
              x : 'center',
              y : 'bottom',
              data:['rose1','rose2','rose3','rose4','rose5','rose6','rose7','rose8']
          },
          calculable : true,
          series : [
              {
                  name:'半径模式',
                  type:'pie',
                  radius : [20, 110],
                  center : ['25%', '50%'],
                  roseType : 'radius',
                  label: {
                      normal: {
                          show: false
                      },
                      emphasis: {
                          show: true
                      }
                  },
                  lableLine: {
                      normal: {
                          show: false
                      },
                      emphasis: {
                          show: true
                      }
                  },
                  data:[
                      {value:10, name:'rose1'},
                      {value:5, name:'rose2'},
                      {value:15, name:'rose3'},
                      {value:25, name:'rose4'},
                      {value:20, name:'rose5'},
                      {value:35, name:'rose6'},
                      {value:30, name:'rose7'},
                      {value:40, name:'rose8'}
                  ]
              },
              {
                  name:'面积模式',
                  type:'pie',
                  radius : [30, 110],
                  center : ['75%', '50%'],
                  roseType : 'area',
                  data:[
                      {value:10, name:'rose1'},
                      {value:5, name:'rose2'},
                      {value:15, name:'rose3'},
                      {value:25, name:'rose4'},
                      {value:20, name:'rose5'},
                      {value:35, name:'rose6'},
                      {value:30, name:'rose7'},
                      {value:40, name:'rose8'}
                  ]
              }
          ]
        };
        // 绘制图表
        myChart.setOption(option);
      },
      /**
       * 基于准备好的dom，初始化echarts实例
       * @return {[type]} [description]
       */
      initEchartsBar() {
        var myChart = this.$echarts.init(this.$refs.echartsBar);

        var dataAxis = ['点', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放'];
        var data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
        var yMax = 500;
        var dataShadow = [];

        for (var i = 0; i < data.length; i++) {
            dataShadow.push(yMax);
        }

        let option = {
            title: {
                text: '特性示例：渐变色 阴影 点击缩放',
                subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
            },
            xAxis: {
                data: dataAxis,
                axisLabel: {
                    inside: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                z: 10
            },
            yAxis: {
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#999'
                    }
                }
            },
            dataZoom: [
                {
                    type: 'inside'
                }
            ],
            series: [
                { // For shadow
                    type: 'bar',
                    itemStyle: {
                        normal: {color: 'rgba(0,0,0,0.05)'}
                    },
                    barGap:'-100%',
                    barCategoryGap:'40%',
                    data: dataShadow,
                    animation: false
                },
                {
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: this.$echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#83bff6'},
                                    {offset: 0.5, color: '#188df0'},
                                    {offset: 1, color: '#188df0'}
                                ]
                            )
                        },
                        emphasis: {
                            color: this.$echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#2378f7'},
                                    {offset: 0.7, color: '#2378f7'},
                                    {offset: 1, color: '#83bff6'}
                                ]
                            )
                        }
                    },
                    data: data
                }
            ]
        };

        // Enable data zoom when user click bar.
        var zoomSize = 6;
        myChart.on('click', function (params) {
            console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
            myChart.dispatchAction({
                type: 'dataZoom',
                startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
                endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
            });
        });
        // 绘制图表
        myChart.setOption(option);
      },
      getData () {
        this.$axios({
          url: 'http://apis.map.qq.com/ws/geocoder/v1/?key=UPVBZ-GM6WO-P4BWT-SIOK4-XPX67-O2BHJ&get_poi=1&poi_options=radius=1000&location=30.592162,104.063099'
        })
      }
    }
  }
</script>
<style lang="less" scoped>
  .echarts {
    width: 100%;
    height: 600px;
    margin-top: 20px;
  }
  .bm-view {
    width: 100%;
    height: 500px;
  }
</style>
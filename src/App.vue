<template>
  <div id="app">
    <div class="home_box">
      <div class="home_center_border">
        <div class="home_center_left">
          <div class="home_cleft_box">
            <div class="home_cleft_title">
              <div class="iconfont icon-log home_cleft_tlog"></div>
              <div class="home_cleft_ttab">
                <div class="home_cleft_text active">Dashboard</div>
                <div class="home_cleft_text">Services</div>
                <div class="home_cleft_text">History</div>
                <div class="home_cleft_text">Actions</div>
              </div>
              <div class="home_cleft_tserch">
               <input class="input" type="text" placeholder="search..." :value="inputValue">
               <div class="iconfont icon-sousuo home_cleft_ticon"></div>
              </div>
            </div>
            <div class="home_cleft_card">
              <div class="home_cleft_cardTitle">
                <div class="home_cleft_cardH1">
                  Cards
                </div>
                <div class="home_cleft_cardtext">
                  View all cards
                </div>
              </div>
              <div class="home_cleft_cardList">
                <div class="home_cleft_carLi" v-for="(item,index) in cardData" :key="index" :style="{'background-color':item.color}" >
                  <div class="home_cleft_carBoxs">
                    <div class="home_cleft_carMany">{{item.many}}</div>
                    <div class="home_cleft_carNumber">{{item.number}}</div>
                    <div class="home_cleft_carName">{{item.name}}</div>
                  </div>
                </div>
                <div class="home_cleft_carLi home_cleft_carAdd" >
                  <div class="home_cleft_carAddIco iconfont icon-icon02"></div>
                  <div class="home_cleft_carAddText">Add New Card</div>
                </div>
              </div>
            </div>
            <div class="home_cleft_bottom">
              <div class="home_cleft_main">
                <div class="home_cleft_mainTitle">
                  <div class="home_cleft_mainServer">Main Servers</div>
                  <div class="home_cleft_view">View all</div>
                </div>
                <div class="home_cleft_mainList">
                  <div class="home_cleft_mainBox">
                    <div class="home_cleft_mainLi" v-for="(item,index) in iconData" :key="index">
                      <div class="iconfont home_cleft_mainLiIcon" v-bind:class="item.icon">
                      </div>
                      <div class="home_cleft_mainLiName">{{item.name}}</div>
                    </div>
                  </div>
                 
                </div>
              </div>
              <div class="home_cleft_chart">
                <div class="home_cleft_curren">
                  <div class="home_cleft_mainTitle">
                    <div class="home_cleft_mainServer">Current</div>
                    <div class="home_cleft_view">View all</div>
                  </div>
                  <div class="home_cleft_currenLine">
                    <div class="home_cleft_currenLi">
                      <div class="home_cleft_currena">
                        1068345678
                      </div>
                      <div class="home_cleft_currenb">
                      </div>
                      <div class="home_cleft_currenc">$103203</div>
                    </div>
                    <div class="home_cleft_currenLi">
                      <div class="home_cleft_currena">
                        1068345678
                      </div>
                      <div class="home_cleft_currenb">
                      </div>
                      <div class="home_cleft_currenc">$103203</div>
                    </div>
                    <div class="home_cleft_currenLi">
                      <div class="home_cleft_currena">
                        1068345678
                      </div>
                      <div class="home_cleft_currenb">
                      </div>
                      <div class="home_cleft_currenc">$103203</div>
                    </div>
                  </div>
                </div>
                <div class="home_cleft_savings">
                  <div class="home_cleft_mainTitle">
                    <div class="home_cleft_mainServer">Savings</div>
                    <div class="home_cleft_view">View all</div>
                  </div>
                  <div class="home_cleft_savingsBottom">
                    <div id="main-box1" class="main-box1" style="width:65%;height:150px;">
                    </div>
                    <div class="home_cleft_savingsRight">
                      <div class="home_cleft_savingsObj">
                        <div class="home_cleft_savingsKey">
                          Total
                        </div>
                        <div class="home_cleft_savingsVaue">
                          $124667
                        </div>
                      </div>
                      <div class="home_cleft_savingsObj">
                        <div class="home_cleft_savingsKey">
                          This Weack
                        </div>
                        <div class="home_cleft_savingsVaue">
                          $124667
                        </div>
                      </div>
                      <div class="home_cleft_savingsObj">
                        <div class="home_cleft_savingsKey">
                          This Dack
                        </div>
                        <div class="home_cleft_savingsVaue">
                          $124667
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="home_center_right">
          <HelloWorld msg="敬请期待"/>
        </div>
      </div>
    </div>
    <!-- <div class="wewe">
      发送
    </div>
    <div class="iconfont icon-log"></div>
    <div id="main-box1" style="width:98%;height:305px;"></div>
    <HelloWorld msg="Welcome111111 to Your Vue.js App"/> -->
  </div>
</template>

<script>
import './assets/css/app.css'
import echarts from 'echarts'
import { mainChartFunction} from './config/chart'

import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data () {
    return {
      cardData: [{
        many: '$2,200',
        number: '*** *** *** 34',
        name: 'Meck',
        color: '#e6612d'
      }, {
        many: '$1,2,200',
        number: '*** *** *** 68',
        name: 'Jeck',
        color: '#228ed6'
      }],
      inputValue: '',
      iconData: [{
        icon: "icon-fuwushangchaxunsvg",
        name: 'Tdfsh'
      }, {
        icon: "icon-guanyuwomen",
        name: 'Gdfsh'
      }, {
        icon: "icon-lishijiangli",
        name: 'Hdfsh'
      }, {
        icon: "icon-shuju-heise",
        name: 'Ldfsh'
      }, {
        icon: "icon-tixianjilu",
        name: 'Udfsh'
      }, {
        icon: "icon-shouye-lanse",
        name: 'Kdfsh'
      }],
      mainChartData1: [{
        dt: "$10",
        cn: 10
      }, {
        dt: "$30",
        cn: 30
      }, {
        dt: "$50",
        cn: 50
      }, {
        dt: "$80",
        cn: 80
      }, {
        dt: "$90",
        cn: 90
      }],
      mainChartbox1: '',
    }
  },
  components: {
    HelloWorld
  },
  mounted () {
    this.openChart()
  },
  methods: {
    openChart () {
      this.mainChartbox1 = echarts.init(document.getElementById('main-box1'))
      this.mainChartbox1.setOption(mainChartFunction(this.mainChartData1, '进度'))
    }
  }
}
</script>

<style>
</style>

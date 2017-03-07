<template>
  <div class="hello">
    <!--<div id="test"></div>-->
    <button @click="drawbar">chart</button>
    <div id="getupbar" ></div>
    <div id="getupline" ></div>
    <!--<canvas id="getupbar" ></canvas>-->
    <button @click="ontimer">Timer</button>
  </div>
</template>

<script>
//   import echarts from '../../node_modules/echarts/dist/echarts.js'
  import echarts from 'echarts'
  import { option, option1 } from './option'

//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
var resizeWorldMapContainer = function () {
  worldMapContainer.style.width = container.clientWidth+'px';
  worldMapContainer.style.height = container.clientHeight+'px';
};

  export default {
  name: 'hello',
    data() {
      return {
        chart: null,
        chart1: null,
        val: false,
        timer: null,
        data: [5, 20, 36, 10, 10, 20],
      };
    },
    methods: {
      drawbar: function() {
        this.chart = echarts.init(document.getElementById('getupbar'), 'vintage');
        this.chart1 = echarts.init(document.getElementById('getupline'), 'vintage');

        // 使用刚指定的配置项和数据显示图表。
        this.chart.setOption(option);
        window.onresize = this.chart1.resize;
        this.chart1.setOption(option1);
      },
      updataChart: function () {
        let random = Math.round(Math.random() * 10);
        this.data.shift();
        this.data.push(random);
//        console.log(this.data);
        option1.series[0].data = this.data;
        this.chart1.setOption(option1);
      },
      ontimer: function () {
        this.val = !this.val;
        if ( this.val ) {
            this.timer = setInterval(this.updataChart
              , 300);
        }
        else {
          clearInterval(this.timer);
          this.timer = null;
        }
      }
    },
    created: function () {
      window.onload = this.drawbar;
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    position:relative;
    width: 100%;
    height: 100%;
  }

  #test {
    display: block;
    position: relative;
    width: 40%;
    height: 40%;
    background-color: antiquewhite;
  }

  #getupbar {
    position: relative;
    display: inline-block;
    /*width: 40%;*/
    /*height: 40%;*/
    width: 600px;
    height: 600px;
  }

  #getupline {
    position: relative;
    display: inline-block;
    width: 50%;
    height: 50%;
    /*width: 600px;*/
    /*height: 600px;*/
  }


</style>

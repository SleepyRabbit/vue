/**
 * Created by houenxing on 17/3/3.
 */
export let option = {
  title : {
    text: '未来一周气温变化',
    subtext: '纯属虚构',
    show: true,
    color: 'red',
  },
  tooltip : {
    trigger: 'axis'
    // trigger: 'item'
  },
  legend: {
    data:['最高气温','最低气温']
  },
  toolbox: {
    show : true,
    feature : {
      mark : {show: true},
      dataView : {show: true, readOnly: false},
      magicType : {show: true, type: ['line', 'bar']},
      restore : {show: true},
      saveAsImage : {show: true}
    }
  },
  calculable : true,
  xAxis : [
    {
      type : 'category',
      boundaryGap : false,
      data : ['周一','周二','周三','周四','周五','周六','周日']
    }
  ],
  yAxis : [
    {
      type : 'value',
      scale: true,
      axisLabel : {
        formatter: '{value} °C'
      }
    }
  ],
  series : [
    {
      name:'最高气温',
      type:'line',
      data:[11, 11, 15, 13, 12, 13, 10],
      markPoint : {
        data : [
          {type : 'max', name: '最大值'},
          {type : 'min', name: '最小值'}
        ]
      },
      markLine : {
        data : [
          {type : 'average', name: '平均值'}
        ]
      }
    },
    {
      name:'最低气温',
      type:'line',
      data:[1, -2, 2, 5, 3, 2, 0],
      markPoint : {
        data : [
          {name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
        ]
      },
      markLine : {
        data : [
          {type : 'average', name : '平均值'}
        ]
      }
    }
  ]
};

export let option1 = {
         title: {
           text: 'ECharts 入门示例'
         },
         tooltip: {
           // trigger: 'item',
           trigger: 'axis',
         },
  toolbox: {
    show : true,
    feature : {
      // mark : {show: true},
      dataView : {show: true, readOnly: false},
      magicType : {show: true, type: ['line', 'bar']},
      restore : {show: true},
      saveAsImage : {show: true}
    }
  },
         // toolbox: {
         //   show: true,
         //   // backgroundColor: 'green',
         //   // borderWidth: 1,
         //   // borderColor: 'red',
         //   // color: 'blue',
         //   feature: {
         //     mark: {
         //       show: true,
         //       title: {
         //         mark: 'Gate',
         //         markUndo: 'Gate1',
         //       },
         //       lineStyle: {
         //         width: 2,
         //         color: '#1e90ff',
         //         type: 'dashed',
         //       }
         //     },
         //
         //   },
         // },
         legend: {
           data: ['销量']
         },
         xAxis: {
           data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
         },
         yAxis: {
           scale: true,
         },
         series: [{
           name: '销量',
           type: 'line',
           data: [5, 20, 36, 10, 10, 20]
         }]
       };

<template>
  <div class="hello">
    <span class="pie1" data-peity='{ "fill": ["red", "#eeeeee"],    "innerRadius": 10, "radius": 40 }'>1/5</span>
    <span class="pie1" data-peity='{ "fill": ["red", "#eeeeee"],"innerRadius": 10, "radius": 40}'>1/5</span>
    <span class="bar1">3,4,3,4,5,2,1,2,3,4,1</span>
    <span class="bar2"></span>
    <span class="line1"></span>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      pie1data: {
        "fill": ['red', '#eeeeee'],
        'innerRadius': 10,
        'radius': 40,
      },
      bar1data: [2,3,4,5,6,4],
      line1data: [1,2,3,4,5,6,7,4,3,1,2,3],
    }
  },
  methods: {
    init: function () {
      $('.pie1').peity('pie');
      let bar1chart = $('.bar1').peity('bar', {fill: ["red", "green", 'blue']});
      let bar2chart = $('.bar2').peity('bar', {fill: ["red", "green", 'blue'], width: 200, height: 320});
      bar2chart.text(this.bar1data.join(",")).change();
      let line1config = {
          delimiter: ",",
          stroke: "#4d89f9",
          strokeWidth: 1,
          fill: "#c6d9fd",
          width: 200,
          height: 200,
      };
      let line1chart = $('.line1').peity('line', line1config);
      line1chart.text(this.line1data.join(",")).change();

      setInterval(function() {
        var random = Math.round(Math.random() * 10)
        var values = line1chart.text().split(",")
        values.shift()
        values.push(random)

        line1chart
          .text(values.join(","))
          .change()
      }, 100)
    }
  },
  created: function () {
    this.$nextTick(this.init, 100)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<template>
  <Bar
    :chart-options="chartOptions"
    :chart-data="chartData"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :styles="styles"
    :width="this.width"
    :height="this.height"
  />
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChart",
  components: { Bar },
  props: {
    datasetIdKey: {
      type: String,
      default: "label",
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Object,
      default: () => {},
    },
    currencyId: String,
  },
  data() {
    return {
      chartOptions: {
        responsive: true,
      },
    };
  },
  computed: {
    height() {
      let h = 300;

      return h;
    },
    width() {
      let w = 700;
      return w;
    },
    chartData() {
      return {
        labels: [
          ...this.$store.state.currencyHistoryRatios.map((item) => {
            let data = new Date(item[0]);
            let day = data.getUTCDate();
            let month;
            if (data.getMonth() < 11) {
              month = "0" + data.getMonth();
            } else {
              month = data.getMonth();
            }
            const newdate = day + "." + month;
            return newdate;
          }),
        ],
        datasets: [
          {
            label: this.currencyId + " " + "in USD",
            data: [
              ...this.$store.state.currencyHistoryRatios.map(
                (item) => (item = item[1])
              ),
            ],
          },
        ],
      };
    },
  },
};
</script>


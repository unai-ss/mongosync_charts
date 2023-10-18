const fs = require("fs");
const Chart = require("chart.js");

// Cargamos los datos del fichero json
const data = fs.readFileSync("./group_test.json", "utf8");
const parsedData = JSON.parse(data);

// Procesamos los datos
const parsedData = parsedData.map((doc) => {
  return {
    time: new Date(doc.time),
    value: doc.componentName,
  };
});

// Creamos el gráfico
const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: parsedData.map((doc) => doc.time),
    datasets: [
      {
        label: "Conexiones",
        data: parsedData.map((doc) => doc.value),
        fill: false,
        pointRadius: 5,
        pointColor: function(value) {
          switch (value) {
            case "Change Event Applier 78 (CRUD Older Versions)":
              return "red";
            case "Change Event Applier 79 (CRUD Newer Versions)":
              return "blue";
            case "Change Event Applier 80 (CRUD Utils)":
              return "green";
            default:
              return "black";
          }
        },
      },
    ],
  },
  options: {
    xAxis: {
      type: "time",
      // Formato de fecha de los ejes x
      time: {
        unit: "day",
        format: "DD/MM/YYYY",
      },
    },
    yAxis: {
      // Etiquetas del eje y
      labels: ["Change Event Applier 78", "Change Event Applier 79", "Change Event Applier 80"],
    },
  },
});
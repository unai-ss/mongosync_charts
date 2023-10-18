import Chart from 'chart.js/auto'

(async function() {
  const data2 = [
    {"collection":"ea63cb1d-82a8-4fbe-b85d-437ce0d7eb25","type":"update","time":"2023-10-06T17:27:15.386383Z","componentName":"Change Event Applier 133 (CRUD Older Versions)"},
    {"collection":"1f989ad5-13f3-4047-8d61-4dc75b5639d4","type":"update","time":"2023-10-06T17:27:15.386974Z","componentName":"Change Event Applier 37 (CRUD Older Versions)"},
    {"collection":"ee80b2f4-6f9a-407a-b9bc-d7bf1a599b90","type":"update","time":"2023-10-06T17:27:15.387651Z","componentName":"Change Event Applier 78 (CRUD Older Versions)"} 
  ];
  const data = require('./group_test.json');

    // Procesamos los datos
    const parsedData = data.map((doc) => {
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
    })});



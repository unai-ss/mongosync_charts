import Chart from 'chart.js/auto'

(async function() {
  const data2 = [
    {"time":"2023-10-03T14:08:04.188735Z","averageDurationMs":"83.63","maximumDurationMs":"197.84","numOperations":582,"message":"Operation duration stats."},
    {"time":"2023-10-03T14:08:34.189369Z","averageDurationMs":"147.13","maximumDurationMs":"361.04","numOperations":351,"message":"Operation duration stats."},
    {"time":"2023-10-03T14:09:04.188791Z","averageDurationMs":"124.03","maximumDurationMs":"367.43","numOperations":415,"message":"Operation duration stats."}
  ];
  const data = require('./uss_18_2.json');
  new Chart(
    document.getElementById('acquisitionsCollectionCopySourceRead'),
    {
      type: 'line',
      data: {
        labels: data.map(x => x.time),
        datasets: [
          {
            label: 'CC_SRC_READ_maximumDurationMS',
            data: data.map(row => (row.CollectionCopySourceRead.maximumDurationMs))
            
          },
          {
            label: 'CC_SRC_READ_averageDurationMs',
            data: data.map(row => (row.CollectionCopySourceRead.averageDurationMs))
          },
          {
            label: 'CC_SRC_READ_numOperations',
            data: data.map(row => (row.CollectionCopySourceRead.numOperations))
          }
        ]
      }
    }
  );
})();


import Chart from 'chart.js/auto'

(async function() {
  const data2 = [
    { "level": "info", "serverID": "4ab83a64","mongosyncID": "coordinator","totalEventsApplied": 7908996, "lagTimeSeconds": 128694,"time": "2023-09-14T15:04:03.059578943Z","message": "Replication progress."},
    { "level": "info", "serverID": "4ab83a64","mongosyncID": "coordinator", "totalEventsApplied": 7921117, "lagTimeSeconds": 128718, "time": "2023-09-14T15:04:33.058859292Z", "message": "Replication progress."}
  ];
  const data = require('./info_Replication.json');
  new Chart(
    document.getElementById('acquisitions orig'),
    {
      type: 'bubble',
      data: {
        labels: data.map(x => x.time),
        datasets: [
          {
            label: 'lag by time',
            data: data.map(row => ({ x:row.totalEventsApplied, y:row.lagTimeSeconds}))

          }
        ]
      }
    }
  );
})();


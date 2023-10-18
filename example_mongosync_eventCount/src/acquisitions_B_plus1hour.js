import Chart from 'chart.js/auto'

(async function() {
  const data2 = [
    { "level": "info", "serverID": "4ab83a64","mongosyncID": "coordinator","totalEventsApplied": 7908996, "lagTimeSeconds": 128694,"time": "2023-09-14T15:04:03.059578943Z","message": "Replication progress."},
    { "level": "info", "serverID": "4ab83a64","mongosyncID": "coordinator", "totalEventsApplied": 7921117, "lagTimeSeconds": 128718, "time": "2023-09-14T15:04:33.058859292Z", "message": "Replication progress."}
  ];
  const data = require('./test_eventcount/eventCount_B_plus1hour.json');
  new Chart(
    document.getElementById('acquisitions_B_plus1hour'),
    {
      type: 'bar',
      data: {
        labels: data.map(x => x.errGroupRoutineID),
        datasets: [
          {
            label: 'eventCount from point B to Oct 6 19:00',
            data: data.map(row => (row.eventCount))
            
          }
        ]
      }
    }
  );
})();


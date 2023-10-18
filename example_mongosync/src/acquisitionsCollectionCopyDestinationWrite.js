import Chart from 'chart.js/auto'

(async function() {
  const data2 = [
    { "level": "info", "serverID": "4ab83a64","mongosyncID": "coordinator","totalEventsApplied": 7908996, "lagTimeSeconds": 128694,"time": "2023-09-14T15:04:03.059578943Z","message": "Replication progress."},
    { "level": "info", "serverID": "4ab83a64","mongosyncID": "coordinator", "totalEventsApplied": 7921117, "lagTimeSeconds": 128718, "time": "2023-09-14T15:04:33.058859292Z", "message": "Replication progress."}
  ];
  const data = require('./uss_18_2.json');
  new Chart(
    document.getElementById('acquisitionsCollectionCopyDestinationWrite'),
    {
      type: 'line',
      data: {
        labels: data.map(x => x.time),
        datasets: [
          {
            label: 'CC_DST_WRITE_maximumDurationMS',
            data: data.map(row => (row.CollectionCopyDestinationWrite.maximumDurationMs))
            
          },
          {
            label: 'CC_DST_WRITE_averageDurationMs',
            data: data.map(row2 => (row2.CollectionCopyDestinationWrite.averageDurationMs))
          },
          {
            label: 'CC_DST_WRITE_numOperations',
            data: data.map(row2 => (row2.CollectionCopyDestinationWrite.numOperations))
          }
        ]
      }
    }
  );
})();


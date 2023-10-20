cat mongosync-log/mongosync-2023-08-08T13-16-01.462.log| jq .status,.body | grep -v "null" 
cat mongosync-log/mongosync-2023-08-08T13-16-01.462.log| jq .status,.body.progress.state | grep -v "null"

 cat mongosync-log/mongosync-2023-08-08T13-16-01.462.log | jq .level,.message
 cat mongosync-log/mongosync-2023-08-08T13-16-01.462.log | jq .time,.level,.message 

 jq -r '[.time,.level,.message] | @csv'  mongosync-log/mongosync-2023-08-08T13-16-01.462.log   


 jq -r '[.time,.level,.status,.body] | @csv'  mongosync-log/mongosync-2023-08-08T13-16-01.462.log
jq -r '[.time,.level,.status,.message,.body] | @csv'  mongosync-log/mongosync-2023-08-08T13-16-01.462.log > file.csv

 jq -r 'select(.level=="warn" or .level=="info")|[.time,.level,.status,.message,.body] | @csv'  mongosync-log/mongosync-2023-08-08T13-16-01.462.log

 {"level":"info","serverID":"0e411459","mongosyncID":"coordinator","totalEventsApplied":0,"lagTimeSeconds":1080,"time":"2023-08-08T14:10:28.22535852+01:00","message":"Replication progress."}

 ##test## jq -r '[.time,.latency,.message,.body| + ({.progress[]|{.state}})] | select(.[1]>0)| @csv' craven/mongosync/mongosync* 

 jq -r '[select(.level=="info"), .message|match("Replication progress.")]'

 jq -r '[(.time | match("(2023-09-1[0-9]T[0-9][0-9]:[0-9][0-9]:[0-9][0-9])") | .string),.totalEventsApplied,.lagTimeSeconds] | select(.[1]>0)| |@csv ' mongosync* > mongosyncLagTimeline.csv


 jq -r '[select(.level=="info" and .message=="Replication progress.")|.time,.totalEventsApplied,.lagTimeSeconds]|select(.[1]>0) | @csv' craven/mongosync/mongosync*

 jq -r '[select(.status==200 and .message=="Replication progress.")|.time,.latency,.message,.body]|select(.[1]>0) | @csv' craven/mongosync/mongosync*

 jq -r '[select(.status==200)|.time,.latency,.message,.body]|select(.[1]>0) | @csv' craven/mongosync/mongosync*

 jq -r '[select(.status==200 and .message=="sent response")|.time,.latency,.message,.body]|select(.[1]>0) | @csv' craven/mongosync/mongosync*
 jq -r '[select(.status==200 and .message!="sent response")|.time,.latency,.message,.body]|select(.[1]>0) | @csv' craven/mongosync/mongosync*

 ##################

 - Do you utilize [capped collections](https://www.mongodb.com/docs/v4.4/core/capped-collections/)?
  You can easily find all capped collections using the following script run on a `mongo` shell on a secondary node:
  ```js
  // if you use mongo shell
  rs.secondaryOk()

  // OR if you use the new mongosh shell
  db.getMongo().setReadPref("secondary")

  print("Capped Collections:");
  db.getMongo().getDBNames().forEach(function (d) {
      var curr_db = db.getSiblingDB(d);
      curr_db.getCollectionInfos({"options.capped":true}).forEach(function(coll) {
          print("Database: " + d + " Collection: " + coll.name );
      });
  });
  ```
- If so, are most of the updates in the workload that is performed daily on 7 capped collections?
  ```js
  // To find update op count between 2 dates for grouped by namespace
   db.getSiblingDB("local").oplog.rs.aggregate([
   {  $match: {wall: {$gte: new Date("2023-09-14T00:00:00.000Z"), $lt: new Date("2023-09-14T10:26:03.414Z")},
      ns: {$ne: ""},
      op: {$eq: "u" } }},
   {$group: {_id: "$ns", count: {$sum: 1}}},
   {$sort: {count: 1}},
  ]);

- Were most of the updates between `2023-09-14T08:36:04.080668116Z` and `2023-09-14T10:26:03.414152586Z` going towards 7 documents in case you have details regarding the specific workload? If you would like, I can formulate a query to check.


#### Craven

averageDuration info

grep -h averageDuration ~/Downloads/mongosync\ 3/mongosync-2023-09-14T08-39-41.115.log ~/Downloads/mongosync\ 3/mongosync-2023-09-14T08-41-47.793.log ~/Downloads/mongosync\ 3/mongosync-2023-09-14T08-47-11.660.log  ~/Downloads/mongosync\ 3/mongosync-2023-09-14T09*  ~/Downloads/mongosync\ 3/mongosync-2023-09-14T1* > averageDuration.json

import json
from collections import defaultdict

c = defaultdict(int)
data = []
with open("averageDuration.json") as f:
    for line in f:
        data.append(json.loads(line))

for d in data:
    c[int(d["errGroupRoutineID"]) - 3] += d["eventCount"]

print('\n'.join(['{0}:{1}'.format(k, v) for k,v in c.items()]))

jq -r 'select(.level=="warn" or .level=="info")|[.time,.level,.status,.message,.body] | @csv' mongosync.log  
jq -r 'select(.level=="info")|[.time,.level,.status,.message,.body] | @csv' mongosync.log

### .level=="warn"
jq -r 'select(.level=="warn" or .level=="info")|[.time,.level,.status,.message,.body] | @csv' mongosync.log  

#### A.
		// In case the resume data would never be found for the mongosync with the specified id,
		// we limit the amount of time spent checking in accordance with the RetryDurationLimit.
		// This may happen if the mongosync being waited upon never received a /start request.

    ```
    select {
		case <-debugTicker.C:
			ctx.Logger().Debug().Msgf("Spent %s waiting %s so far. Current phase is: %s.", durationSoFar, waitMsg, resumeData.Phase)
		case <-warnTicker.C:
			ctx.Logger().Warn().Msgf("Spent %s waiting %s so far. Current phase is: %s.", durationSoFar, waitMsg, resumeData.Phase)
		default:
		}
```

#### B.
```
				// TODO: REP-2630 Consider moving log.Fatal() call out of launchReplicationThread
				if ms.SkipFatalErr {
					ctx.Logger().Warn().Err(err).Msg("Error during replication")
				} else {
					// This will bring down the whole process
					ctx.Logger().Fatal().Stack().Err(err).Msg("Error during replication")
				}
```

#### C.


	// If the srcClient is not nil, we are in a status of Resuming or recovering from
	// a crash in a Running state. This means we'll create the LastOpFetchingService
	// here.
	// If the srcClient is nil, however, Start has not been called yet, so we will
	// create the service in Start.
	// This convoluted solution is necessary because tests that call Replicate directly
	// likely use mocked LastOperationService, and we do not want to create a new
	// service in Replicate and overwrite a mock. We should eventually make Replicate
	// private so this is not an issue.
```

	if err = ms.Telemetry.Connect(); err != nil {
		ctx.Logger().Warn().Err(err)
	}
```

#### D.
```
	if hasWarning {
		ctx.Logger().Warn().
			Array("slow operations", slowOpTypes).
			Msgf(
				"Average operation duration is higher than threshold of %.2fs. Please see %s for more details%s.",
				ctx.HiddenFlags.SlowOperationWarningThreshold.Seconds(),
				constants.SlowOperationWarningDocURI,
				loadLevelSuffix,
			)
	}
```
## CC
### .level=="warn"
ctx.Logger().Warn().Err(err).Msg("maybeRefreshMongosShardRegistry before listDatabases failed")
### .level=="info"
#### sampling  stage
jq --compact-output -r 'select(.level=="info" and select( .message|startswith("Sampling") ))' mongosync\ log\ 2023-03-15a.txt  
```
❯ jq --compact-output -r 'select(.level=="info" and select( .message|startswith("Sampling") ))' mongosync\ log\ 2023-03-15a.txt
{"level":"info","serverID":"c70a8fe7","mongosyncID":"coordinator","time":"2023-03-15T13:20:58.459449168Z","message":"Sampling 80 documents to make 8 partitions for collection 'FrontEnd.Product_Archive', UUID 5b541e12-d8b8-4d44-8580-e0b18d13740f"}
{"level":"info","serverID":"c70a8fe7","mongosyncID":"coordinator","time":"2023-03-15T13:20:59.834215641Z","message":"Sampling 730 documents to make 73 partitions for collection 'FrontEnd.IngestionDdex', UUID f2724031-8354-4b0e-b77e-7d51a0f6a3e1"}
{"level":"info","serverID":"c70a8fe7","mongosyncID":"coordinator","time":"2023-03-15T13:21:01.113917619Z","message":"Sampling 390 documents to make 39 partitions for collection 'FrontEnd.IngestionItem', UUID 5d146111-9ef8-42e5-9f41-2a0ca429ee19"}
```
#### collection name
❯ jq --compact-output -r 'select(.level=="info" and select( .message| contains("FrontEnd.SpotifyImport") ))' mongosync\ log\ 2023-03-15a.txt
{"level":"info","serverID":"c70a8fe7","mongosyncID":"coordinator","time":"2023-03-15T13:22:50.452517723Z","message":"Sampling 170 documents to make 17 partitions for collection 'FrontEnd.SpotifyImport', UUID b54ba76e-bc9b-4426-b0fa-0c147b90edfb"}
{"level":"info","serverID":"c70a8fe7","mongosyncID":"coordinator","time":"2023-03-15T13:22:50.936620183Z","message":"Creating 17 initial partitions for collection FrontEnd.SpotifyImport, isCappedColl: false"}

#### mix sampling stage and collection
❯ jq --compact-output -r 'select(.level=="info" and select( .message|startswith("Sampling")) and select( .message| contains("FrontEnd.SpotifyImport")) )' mongosync\ log\ 2023-03-15a.txt
{"level":"info","serverID":"c70a8fe7","mongosyncID":"coordinator","time":"2023-03-15T13:22:50.452517723Z","message":"Sampling 170 documents to make 17 partitions for collection 'FrontEnd.SpotifyImport', UUID b54ba76e-bc9b-4426-b0fa-0c147b90edfb"}
parse error: Invalid numeric literal at line 410, column 0


https://github.com/search?q=repo%3A10gen%2Fmongosync%20ctx.Logger().Info()&type=code
// Log the created collection and its human readable UUID.
```
	ctx.Logger().Info().
		Str("database", dstDB.Name()).
		Str("collection", collName).
		Str("sourceUUID", fmt.Sprintf("%s", srcUUID)).
		Str("destinationUUID", fmt.Sprintf("%s", dstUUID)).
		Msg("Created destination collection.")
```

// If the UUID has been seen before, that is not an issue because it's possible that a rename completed
// on some shards, but not on all of them. Just log out a message for tracking.
```
					ctx.Logger().Info().Msgf(
						"The same collection corresponding to UUID %s was retrieved twice, probably because of renaming not fully propagating to all shards before $listCatalog was called.",
						*spec.UUID,
```
```
ctx.Logger().Info().Str("collName", currCollName).Msg("Empty listCatalogSpecification received")
```
## CEA
### .level=="info"
https://github.com/search?q=repo%3A10gen%2Fmongosync%20ctx.Logger().Info()&type=code
jq -r 'select(.level=="warn" or .level=="info")|[.time,.level,.status,.message,.body] | @csv' mongosync.log  

#### "getprogress handler called"
> GetProgress endpoint gets the progress of the running mongosync instance.
[https://github.com/10gen/mongosync/blob/015e7dd9d7d495b12d227a1b80556147a7432b70/internal/mongosync/mongosync.go#L1697]
jq -r 'select(.level=="info" and .message=="getprogress handler called" )' mongosync.log
{
  "level": "info",
  "serverID": "4ab83a64",
  "mongosyncID": "coordinator",
  "time": "2023-09-14T15:04:33.058834186Z",
  "message": "getprogress handler called"
}
#### "Replication progress." 
```
				ctx.Logger().Info().
					Uint32("totalEventsApplied", ms.Stats.GetTotalEventsApplied()). // Get the totalEventsApplied directly to bypass the feature flag check in GetProgress().
					Uint32("lagTimeSeconds", lagTimeSeconds).
					Msg("Replication progress.")

```
jq -r 'select(.level=="info" and .message=="Replication progress.")|[.time, .lagTimeSeconds, .totalEventsApplied]' mongosync.log 
[
  "2023-09-14T15:04:33.058859292Z",
  128718,
  7921117
]
jq -r 'select(.level=="info" and .message=="Replication progress." )' mongosync.log 
{
  "level": "info",
  "serverID": "4ab83a64",
  "mongosyncID": "coordinator",
  "totalEventsApplied": 7921117,
  "lagTimeSeconds": 128718,
  "time": "2023-09-14T15:04:33.058859292Z",
  "message": "Replication progress."
}

jq --compact-output -r 'select(.level=="info" and .message=="Replication progress." )' mongosync.log  
{"level":"info","serverID":"4ab83a64","mongosyncID":"coordinator","totalEventsApplied":7534654,"lagTimeSeconds":127903,"time":"2023-09-14T14:48:33.058937255Z","message":"Replication progress."}
{"level":"info","serverID":"4ab83a64","mongosyncID":"coordinator","totalEventsApplied":7551288,"lagTimeSeconds":127930,"time":"2023-09-14T14:49:03.058787228Z","message":"Replication progress."}
{"level":"info","serverID":"4ab83a64","mongosyncID":"coordinator","totalEventsApplied":7565589,"lagTimeSeconds":127955,"time":"2023-09-14T14:49:33.058854111Z","message":"Replication progress."}


#### Operation duration stats.
```
				ctx.Logger().Info().
					Object("CollectionCopySourceRead", &ctx.OpTimeStats.CollectionCopySourceReadOpTimeStats).
					Object("CollectionCopyDestinationWrite", &ctx.OpTimeStats.CollectionCopyDestinationWriteOpTimeStats).
					Object("CEASourceRead", &ctx.OpTimeStats.CEASourceReadOpTimeStats).
					Object("CEADestinationWrite", &ctx.OpTimeStats.CEADestinationWriteOpTimeStats).
					Msg("Operation duration stats.")
```
jq -r 'select(.level=="info" and .message=="Operation duration stats." )' mongosync.log  
{
  "level": "info",
  "serverID": "4ab83a64",
  "mongosyncID": "coordinator",
  "CollectionCopySourceRead": {},
  "CollectionCopyDestinationWrite": {},
  "CEASourceRead": {
    "averageDurationMs": "0.03",
    "maximumDurationMs": "302.57",
    "numOperations": 12061
  },
  "CEADestinationWrite": {
    "averageDurationMs": "36.39",
    "maximumDurationMs": "431.85",
    "numOperations": 12193
  },
  "time": "2023-09-14T15:04:33.059234623Z",
  "message": "Operation duration stats."
}

jq -r 'select(.level=="info" and .message=="Operation duration stats.")|[{"time":.time},{"CEA_DST":.CEADestinationWrite.averageDurationMs},{"CEA_SRC":.CEASourceRead.averageDurationMs}]' mongosync.log

[
  {
    "time": "2023-09-14T15:04:33.059234623Z"
  },
  {
    "CEA_DST": "36.39"
  },
  {
    "CEA_SRC": "0.03"
  }
]

#### Write Stats to Source and Destination Clusters.
```
				ctx.Logger().Info().
					Int64("EstimatedNumWritesOnSourceCluster", srcEstimatedNumWrites).
					Int64("NumWritesOnDestinationCluster", dstNumWrites).
					Msg("Write Stats to Source and Destination Clusters.")
```
❯ jq -r 'select(.level=="info" and .message=="Write Stats to Source and Destination Clusters." )' mongosync.log
{
  "level": "info",
  "serverID": "4ab83a64",
  "mongosyncID": "coordinator",
  "EstimatedNumWritesOnSourceCluster": 357032848,
  "NumWritesOnDestinationCluster": 1714734090,
  "time": "2023-09-14T14:51:03.064256549Z",
  "message": "Write Stats to Source and Destination Clusters."
}


.CEA
jq -r 'select(.level=="info" and .message=="Operation duration stats.")|[.time, .CEASourceRead]' mongosync-2023-09-14T00-27-24.561.log
jq -r 'select(.level=="info" and .message=="Operation duration stats.")|[.time, .CEASourceRead,.CEADestinationWrite]' mongosync-2023-09-14T00-27-24.561.log


### applier

jq --compact-output -r 'select(.level=="trace" and select( .message| contains("flushing buffered events.") ) )' mongosync-2023-10-06T00-01-03.134.log

 jq -s '[.[]]|group_by(.errGroupRoutineID)' applier_test.md 

 
 jq -s '[.[]]|group_by(.errGroupRoutineID)| map({errGroupRoutineID: .[0].errGroupRoutineID, count: length})' applier_test.md

 jq -s '[.[]]|group_by(.errGroupRoutineID)| map({errGroupRoutineID: .[0].errGroupRoutineID, count: length, eventCount: (map(.eventCount) | add)})' applier_test.md

 jq -r 'select(.level=="trace" and .message=="Applying CRUD event.")|.time,.event.clusterTime ' mongosync-2023-10-06T00-01-03.134.log |more

  jq --compact-output -r 'select(.level=="trace" and .message=="Applying CRUD event.")|{"collectoin":.event.collectionUUID, "type":.event.type, "time":.time}' mongosync-2023-10-06T00-01-03.134.log |more

  jq --compact-output -r 'select(.level=="trace" and .message=="Applying CRUD event.")|{"collectoin":.event.collectionUUID, "type":.event.type, "time":.time}|@csv' mongosync-2023-10-06T00-01-03.134.log > test_csv.csv


  #### mongosync options

  "message":"Mongosync Options"}


  #### type


 jq --compact-output -r 'select(.level=="trace" and .message=="Applying CRUD event." and .event.type=="insert")|{"collection":.event.collectionUUID, "type":.event.type, "time":.time}' mongosync-2023-10-06T15-47-34.142.log

 jq --compact-output -r 'select(.level=="trace" and .message=="Applying CRUD event." and .event.type=="update")|{"collection":.event.collectionUUID, "type":.event.type, "time":.time}' mongosync-2023-10-06T15-47-34.142.log


 jq --compact-output -r 'select(.level=="trace" and .message=="Applying CRUD event." and .event.type=="delete")|{"collection":.event.collectionUUID, "type":.event.type, "time":.time}' mongosync-2023-10-06T15-47-34.142.log

 jq --compact-output -r 'select(.level=="trace" and .message=="Applying CRUD event." )|{"collection":.event.collectionUUID, "type":.event.type, "time":.time}' * > stage_A_commands.json


 #####

 jq --compact-output -r 'select(.level=="trace" and .message=="Applying CRUD event." )|{"collection":.event.collectionUUID, "type":.event.type, "time":.time, "componentName":.componentName}' mongosync-2023-10-06T17-27-35.238.log > group_test.json
 
jq -s '[.[]]|group_by(.componentName)' group_test.json > group_test_bycomponent.json
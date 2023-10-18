jq --compact-output -r 'select(.level=="info" and .message=="Operation duration stats." )' mongosync-2023-10-03T15-04-31.430.log mongosync-2023-10-03T16-18-26.145.log > uss_18.json


### applier

https://mongodb.slack.com/archives/C05M403GDV3/p1697116869189139

jq --compact-output -r 'select(.level=="trace" and select( .message| contains("flushing buffered events.") ) )' mongosync-2023-10-06T00-01-03.134.log > applier_test.md


 jq -s '[.[]]|group_by(.errGroupRoutineID)| map({errGroupRoutineID: .[0].errGroupRoutineID, count: length, eventCount: (map(.eventCount) | add)})' applier_test.md

 ### collections

   jq --compact-output -r 'select(.level=="trace" and .message=="Applying CRUD event.")|{"collectoin":.event.collectionUUID, "type":.event.type, "time":.time}|@csv' mongosync-2023-10-06T00-01-03.134.log > test_csv.csv
#!/bin/bash
set -e
# set -e causes the whole script to exit when a command fails, so the script can't silently fail and startup mongo.

mongosh <<EOF
use admin
db.createUser(
  {
    user: "${MONGO_INITDB_ROOT_USERNAME}",
    pwd: "${MONGO_INITDB_ROOT_PASSWORD}",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" }, "readWriteAnyDatabase" ]
  }
)

use ${MONGO_INITDB_DATABASE}
db.createCollection("activities")
db.createCollection("users")

let typesOfActivities = ["yoga", "running", "gym", "climbing"];
const decemberActivities = [];
const januaryActivities = [];

for(let i = 0; i < 31; i++) {
    const randomActivity = Math.floor(Math.random() * 4);
    decemberActivities.push({ type: typesOfActivities[randomActivity], date: new Date(2021, 11, i) })
}

for(let i = 0; i < 31; i++) {
    const randomActivity = Math.floor(Math.random() * 4);
    januaryActivities.push({ type: typesOfActivities[randomActivity], date: new Date(2022, 0, i) })
}

db.activities.insertMany(decemberActivities)
db.activities.insertMany(januaryActivities)

EOF

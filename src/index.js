// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  }
  central(id).then(db => {
    dbs[db](id).then(user => {
      console.log(user)
    })
  })
}

getUserData(1)
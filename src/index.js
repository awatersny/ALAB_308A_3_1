// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

async function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  }
  const db = await central(id)
  const user = await dbs[db](id)
  const userVault = await vault(id)
  console.log(user)
  console.log(userVault)
  return{

  }
}

const data = await getUserData(1)
console.log(data)
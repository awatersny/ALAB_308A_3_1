// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

async function getUserData(id) {
  try {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  }
    const db = await central(id)
    const user = await dbs[db](id)
    const userVault = await vault(id)
    return{
      id: id,
      name: userVault.name,
      username: user.username,
      email: userVault.email,
      address: userVault.address,
      phone: userVault.phone,
      website: user.website,
      company: user.company
    }
  } catch (error) {
    return error
  }
}

// function getUserData(id) {
//   const data = {id: id}
//   const dbs = {
//     db1: db1,
//     db2: db2,
//     db3: db3
//   }
//   const user = central(id)
//   .then(db => dbs[db](id)
//   .then(user => user))
//   const userVault = vault(id).then(data => data)
//   console.log(userVault)
//   return userVault
// }

async function getAllUserData() {
  const data = []
  for(let i = 1; i < 11; i++){
    data.push(await getUserData(i)) // <-- getUserData is being called here
  }
  return data
}

// const data = await getUserData(1)
// console.log(data)
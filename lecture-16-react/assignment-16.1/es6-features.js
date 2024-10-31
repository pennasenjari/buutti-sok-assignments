/* Create a function that takes in two parameters: ranks and register. Then it fixes the
 spacing issue in the ranks object, and merges the fixed values to the register.
The function should return a new register object and must not alter the original objects. */

const ranks = {
  'Noel Robinson': 'private',
  'Darian Klein': 'specialist',
  'Milan Harris': 'private',
  'Cedar Eddings': 'private',
  'Rory Samson': ' corporal',
  'Gerry Smith': 'sergeant'
}

const register = {
  JanDaniels: 'private',
  ReneAckroyd: 'sergeant',
  KerryGilliam: 'private',
  LowenMarsh: 'corporal',
  EllisDonnel: 'private',
  RiverKeller: 'private',
  RyanBellerman: 'corporal'
}

function mergeRanksToRegister(ranks, register) {
  const newRanks = {};
  for (let rank in ranks) {
    newRanks[rank.replace(/ /g, "")] = ranks[rank];
  }
  register = {...register, ...newRanks}
  return register;
}

console.log(`Register:`)
console.log(register);
console.log(`Ranks:`)
console.log(ranks);
const newRegister = mergeRanksToRegister(ranks, register);
console.log(`Ranks merged to register:`)
console.log(newRegister);
require('datejs');

function combineUsers(...args) {
  
  const combinedObject = {
    users: []
  };

  for (let i = 0; i < args.length; i++) {
    const currentArray = args[i];

    combinedObject.users = [...combinedObject.users, ...currentArray];
  }

  combinedObject.merge_date = new Date().toString('M/d/yyyy');

  return combinedObject;
}

const legacyUsers = ['@admin', '@mod_77'];
const newUsers = ['@superstar', '@coding_wiz'];
const temporaryUsers = ['@guest_01'];

const result = combineUsers(legacyUsers, newUsers, temporaryUsers);
console.log(result);


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
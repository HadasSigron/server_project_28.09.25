// service/users_service.js
// In-memory users "DB"
const USERS = [
  { username: 'hadas', password: '1234' }, // existing demo user
];

// find user by credentials (login)
function findUser(username, password) {
  return USERS.find(u => u.username === username && u.password === password) || null;
}

// find by username (for register uniqueness)
function findByUsername(username) {
  return USERS.find(u => u.username === username) || null;
}

// add new user (register)
function addUser(username, password) {
  const exists = findByUsername(username);
  if (exists) return false;
  USERS.push({ username, password });
  return true;
}

// (optional) for debug
function listUsers() {
  return [...USERS];
}

module.exports = { findUser, findByUsername, addUser, listUsers };

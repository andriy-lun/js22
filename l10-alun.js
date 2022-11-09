// import fetch from "node-fetch";
// globalThis.fetch = fetch
const USERS_URL = "https://api.github.com/users";

// Task 1 - make a GET request using GitHub API URL
// and print to the console all users
// expected console output array that contains 30 users
//export 
function getUsers() {
  fetch(USERS_URL)
    .then((response) => response.json())
    .then((result) => console.log(result));
}
getUsers()

// Task 2 - make a GET request using GitHub API URL
// and print to the console
// login field of the 3d user from the list
// expected console output "wycats"
//export 
function getUserLogin() {
  const index = 3;
  fetch(USERS_URL)
    .then((response) => response.json())
    .then((result) => console.log(result[index].login));
}
getUserLogin()

// Task 3 - make a GET request using GitHub API URL
// find user with login "wycats"
// print to the console avatar_url value
// expected console output "https://avatars.githubusercontent.com/u/4?v=4"
//export 
function getUserAvatarUrlByLogin() {
  let login = "wycats";
  fetch(`${USERS_URL}/${login}`)
    .then((response) => response.json())
    .then((result) => console.log(result.avatar_url));
}
getUserAvatarUrlByLogin()

// Task 4 - make a GET request using GitHub API URL
// find user with login "wayneeseguin" and do request using "repos_url" from the response
// print to the console name of the first repository name
// expected console output
//export 
function getUserFirstRepoByLogin() {
  login = "wayneeseguin";
  fetch(`${USERS_URL}/${login}`)
    .then((response) => response.json())
    .then((result) => console.log(result.repos_url));
}
getUserFirstRepoByLogin()

//https://codesandbox.io/s/js-crash-async-forked-16htel?file=/src/tasksWithAsync.js:0-1494

// ASYNCH AWAIT:makes synchronous looking code

// OLD WAY OF PROMISE
fetch("https://jsonplaceholder.typicode.com/users")
  .then((resp) => resp.json())
  .then();

// ASYNC AWAIT ES8

async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
}

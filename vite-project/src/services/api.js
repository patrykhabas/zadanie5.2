export function fetchUsers() {
  return fetch('https://jsonplaceholder.typicode.com/users');
}
export function posthUsers() {
  return fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title: 'JS & React' }),
  });
}

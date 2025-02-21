interface User {
  id: number;
  name: string;
}

interface ActivitiesProps {
  users: User[];
}

async function fetchUsers(): Promise<User[]> {
  const response = await fetch("http://localhost:3000/api/users");
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return response.json();
}

export default async function Activities() {
  const users = await fetchUsers();

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

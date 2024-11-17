import React, { useEffect, useState } from "react";
import "./content.css"; // Import the CSS file for styling

function Content() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://reqres.in/api/users?page=1");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setUsers(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className="content-container">
      <h1 className="title">Users List</h1>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-card">
            <img
              src={user.avatar}
              alt={user.first_name}
              className="user-avatar"
            />
            <div className="user-details">
              <p className="user-name">
                {user.first_name} {user.last_name}
              </p>
              <p className="user-email">Email: {user.email}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Content;

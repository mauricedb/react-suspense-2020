import React from "react";

import UserCard from "./UserCard";
import resource from "./resource";

const Users: React.FC = () => {
  const data = resource.read<User[]>(
    "https://the-problem-solver-sample-data.azurewebsites.net/accounts?sleep=1000"
  );

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
      {data.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;

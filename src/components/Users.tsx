import React from "react";
import useAbortableFetch from "use-abortable-fetch";

import ErrorDisplay from "./ErrorDisplay";
import Loading from "./Loading";
import UserCard from "./UserCard";

const Users: React.FC = () => {
  const { data, error, loading } = useAbortableFetch<User[]>(
    "https://the-problem-solver-sample-data.azurewebsites.net/accounts?sleep=1000"
  );

  if (error) {
    return <ErrorDisplay error={error} />;
  }

  if (loading || !Array.isArray(data)) {
    return <Loading />;
  }

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
      {data.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;

import React from "react";
import resource from "./resource";

type Props = { user: User };

const UserCard: React.FC<Props> = ({ user }) => (
  <div className="col mt-3">
    <div className="card h-100">
      <img src={user.picture} className="card-img-top" alt={user.firstname} />
      <div className="card-body">
        <h5 className="card-title text-truncate">{`${user.firstname} ${user.surname}`}</h5>
        <p className="card-text">{user.email}</p>
        <p className="card-text">{user.phone}</p>
      </div>
      <div className="card-footer">
        <resource.Link
          to={`/user/${user.id}/movie/${user.favorite_movie}`}
          className="btn btn-primary"
          cacheKeys={[
            `https://the-problem-solver-sample-data.azurewebsites.net/accounts/${user.id}?sleep=2000`,
            `https://the-problem-solver-sample-data.azurewebsites.net/top-rated-movies/${user.favorite_movie}?sleep=1000`,
          ]}
        >
          Details
        </resource.Link>
      </div>
    </div>
  </div>
);

export default UserCard;

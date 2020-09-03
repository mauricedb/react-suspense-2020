import React from "react";
import { Link } from "react-router-dom";

type Props = { user: User };

const UserCard: React.FC<Props> = ({ user }) => {
  return (
    <div className="col mt-3">
      <div className="card h-100">
        <img src={user.picture} className="card-img-top" alt={user.firstname} />
        <div className="card-body">
          <h5 className="card-title text-truncate">{`${user.firstname} ${user.surname}`}</h5>
          <p className="card-text">{user.email}</p>
          <p className="card-text">{user.phone}</p>
        </div>
        <div className="card-footer">
          <Link
            to={`/user/${user.id}/movie/${user.favorite_movie}`}
            className="btn btn-primary"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

import React from "react";
import { useParams, useHistory } from "react-router-dom";

import LabeledInput from "./LabeledInput";
import resource from "./resource";

type RouteParams = {
  userId: string;
};

const UserUserDetails: React.FC = () => {
  const history = useHistory();
  const { userId } = useParams<RouteParams>();
  const data = resource.read<User>(
    `https://the-problem-solver-sample-data.azurewebsites.net/accounts/${userId}?sleep=2000`
  );

  const [startTransition, isPending] = React.unstable_useTransition({
    timeoutMs: 5000,
  });

  return (
    <div>
      <div>
        <button
          className="btn btn-primary float-right"
          onClick={() => {
            startTransition(() => {
              history.push("/users");
            });
          }}
        >
          Back to users
          {isPending && (
            <span
              className="spinner-border spinner-border-sm ml-3"
              role="status"
            />
          )}
        </button>
      </div>
      <img src={data.picture} alt={data.firstname} />
      <LabeledInput label="Firstname:" value={data.firstname} />
      <LabeledInput label="Surname:" value={data.surname} />
      <LabeledInput label="Email:" value={data.email} />
      <LabeledInput label="Address:" value={data.address} />
      <LabeledInput label="Phone:" value={data.phone} />
    </div>
  );
};

export default UserUserDetails;

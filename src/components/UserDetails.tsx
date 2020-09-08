import React, { Suspense } from "react";
import UserUserDetails from "./UserUserDetails";
import UserMovieDetails from "./UserMovieDetails";
import Loading from "./Loading";

const UserDetails: React.FC = () => (
  <React.unstable_SuspenseList revealOrder="forwards" tail="collapsed">
    <Suspense fallback={<Loading />}>
      <UserUserDetails />
    </Suspense>
    <Suspense fallback={<Loading />}>
      <UserMovieDetails />
    </Suspense>
  </React.unstable_SuspenseList>
);

export default UserDetails;

import React, { Suspense } from "react";
import UserUserDetails from "./UserUserDetails";
import UserMovieDetails from "./UserMovieDetails";
import Loading from "./Loading";

const UserDetails: React.FC = () => (
  <>
    <Suspense fallback={<Loading />}>
      <UserUserDetails />
    </Suspense>
    <Suspense fallback={<Loading />}>
      <UserMovieDetails />
    </Suspense>
  </>
);

export default UserDetails;

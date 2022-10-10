import { Outlet } from "@remix-run/react";

function Parent() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Parent;
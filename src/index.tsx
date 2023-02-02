import * as React from "react";
import Cookies from "js-cookie";
export const Extension = () => {
  const cookie = Cookies.get("argocd.token");
  console.log(cookie);
  return (
    <div>
      {cookie}
      <p>COSMIN</p>
    </div>
  );
};

export const component = Extension;

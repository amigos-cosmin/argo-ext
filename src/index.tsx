import * as React from "react";
import Cookies from "js-cookie";
export const Extension = () => {
  const cookie = Cookies.get("argocd.token");
  return (
    <div>
      {cookie}
      <p>COSMIN</p>
    </div>
  );
};

export const component = Extension;

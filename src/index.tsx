import * as React from "react";
import Cookies from "js-cookie";
export const Extension = () => {
  console.log("COSMIN");
  let decodedCookie = decodeURIComponent(document.cookie);
  console.log(decodedCookie);
  console.log(window.document.cookie);
  const cookie = Cookies.get("argocd.token");
  console.log(cookie);

  return (
    <div>
      {cookie}
      <p>Alex</p>
    </div>
  );
};

export const component = Extension;

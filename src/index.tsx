import * as React from "react";
import Cookies from "js-cookie";
import { ApplicationSet } from "./model/applicationset";
import { Tree, Application } from "./model/tree";

export const Extension = (props: {
  tree: Tree;
  appTree: Application;
  app: ApplicationSet;
}) => {
  console.log(props.tree);
  console.log(props.app);
  console.log(props.appTree);
  let decodedCookie = document.cookie;
  console.log(decodedCookie);
  console.log(window.document.cookie);
  const cookie = Cookies.get("argocd.token");
  console.log(cookie);

  return (
    <div>
      {cookie}
      <p>TRY AGAIN</p>
    </div>
  );
};

export const component = Extension;

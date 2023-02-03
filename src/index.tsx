import * as React from "react";
import Cookies from "js-cookie";
import { ApplicationSet } from "./model/applicationset";
import { Tree, Application, ManifestResponse } from "./model/tree";
export const Extension = (props: {
  tree: Tree;
  appTree: Application;
  app: ApplicationSet;
  manifest: ManifestResponse;
}) => {
  console.log(props.tree);

  const cookie = Cookies.get("argocd.token");
  console.log(cookie);

  return (
    <div>
      {cookie}
      <p>Simple extension</p>
    </div>
  );
};

export const component = Extension;

/// ClusterRole Deployment Role Service

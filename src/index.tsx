import * as React from "react";
import { ApplicationSet } from "./model/applicationset";
import { Tree, ManifestResponse, Application } from "./model/tree";
export const Extension = (props: {
  tree: Tree;
  app: ApplicationSet;
  manifest: ManifestResponse;
  application: Application;
}) => {
  console.log(props.tree);

  return (
    <div>
      <p>Simple extension</p>
    </div>
  );
};

export const component = Extension;

/// ClusterRole Deployment Role Service

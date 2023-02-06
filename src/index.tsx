import * as React from "react";
import { ApplicationSet } from "./model/applicationset";
import { Tree, ManifestResponse, Application } from "./model/tree";

// interface ApiManifestCallParams {
//   applicationName: string,
//   name: string,
//   appNamespace: string,
//   namespace: string,
//   resourceName: string,
//   version: string,
//   kind: string,
//   group: string;
// }
export const Extension = (props: {
  tree: Tree;
  app: ApplicationSet;
  manifest: ManifestResponse;
  application: Application;
}) => {
  console.log(props);

  return (
    <div>
      <p>Simple extension</p>
    </div>
  );
};

export const component = Extension;

import * as React from "react";
import { ApplicationSet } from "./model/applicationset";
import { Tree, ManifestResponse, Application, Node } from "./model/tree";
import axios from "axios";

interface ApiManifestCallParams {
  name: string;
  appNamespace: string;
  namespace: string;
  resourceName: string;
  version: string;
  kind: string;
  group: string;
}

export const Extension = (props: {
  tree: Tree;
  app: ApplicationSet;
  manifest: ManifestResponse;
  application: Application;
}) => {
  let reports: Node[] = [];
  let call: ApiManifestCallParams;
  console.log(props);
  props.tree.nodes.forEach((element) => {
    if (element.kind.includes("Report")) {
      reports.push(element);
    }
  });
  console.log(reports);

  call.appNamespace = props.application.metadata.namespace;
  call.group = reports[0].group;
  call.kind = reports[0].kind;
  call.name = reports[0].name;
  call.namespace = reports[0].namespace;
  call.resourceName = reports[0].name;
  call.version = reports[0].version;
  console.log(call);
  let res = axios.get(
    "https://127.0.0.1:59935/api/v1/applications/" +
      props.application.metadata.name +
      "/resource",
    { params: { call } }
  );
  console.log(res);
  return (
    <div>
      <p>HARD extension</p>
    </div>
  );
};

export const component = Extension;

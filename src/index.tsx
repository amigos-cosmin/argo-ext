import * as React from "react";
import { ApplicationSet } from "./model/applicationset";
import { Tree, ManifestResponse, Application, Node } from "./model/tree";
import axios from "axios";
import "./style.css";
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

  console.log(props);
  props.tree.nodes.forEach((element) => {
    if (element.kind.includes("Report")) {
      reports.push(element);
    }
  });
  console.log(reports);
  let call: ApiManifestCallParams = {
    appNamespace: props.application.metadata.namespace,
    group: reports[0].group,
    kind: reports[0].kind,
    name: reports[0].name,
    namespace: reports[0].namespace,
    resourceName: reports[0].name,
    version: reports[0].version,
  };
  console.log(call);
  const url =
    "https://127.0.0.1:59935/api/v1/applications/" +
    props.application.metadata.name +
    "/resource";

  const res = ApiCall(call, url);
  res
    .then((value) => {
      console.log("AAA", value);
      // Expected output: "Success!"
    })
    .catch((err) => {
      console.log("err", err);
    });

  console.log("AICI", res);
  return (
    <div>
      <p className="text-red-700">THIS SHOULD BE RED</p>
    </div>
  );
};

export const component = Extension;
async function ApiCall(params: ApiManifestCallParams, url: string) {
  const res = await axios.get(url, {
    params: {
      name: params.name,
      appNamespace: params.appNamespace,
      namespace: params.namespace,
      resourceName: params.resourceName,
      version: params.version,
      kind: params.kind,
      group: params.group,
    },
  });
  return await JSON.parse(res.data.manifest);
}

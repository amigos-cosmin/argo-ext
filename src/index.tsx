import * as React from "react";
import { ApplicationSet } from "./model/applicationset";
import { Tree, Application } from "./model/tree";

// interface ApiManifestCallParams {
//   name: string;
//   appNamespace: string;
//   namespace: string;
//   resourceName: string;
//   version: string;
//   kind: string;
//   group: string;
// }

export const Extension = (props: {
  tree: Tree;
  resource: ApplicationSet;
  application: Application;
}) => {
  //let report = {} as Node;

  console.log(props.resource);
  // props.tree.nodes.forEach((element) => {
  //   if (element.name == props.app.metadata.name) {
  //     report = element;
  //   }
  // });
  // console.log(report);
  // let call: ApiManifestCallParams = {
  //   appNamespace: props.application.metadata.namespace,
  //   group: report.group,
  //   kind: report.kind,
  //   name: report.name,
  //   namespace: report.namespace,
  //   resourceName: report.name,
  //   version: report.version,
  // };

  // const url =
  //   "https://127.0.0.1:59935/api/v1/applications/" +
  //   props.application.metadata.name +
  //   "/resource";

  // const res = ApiCall(call, url);
  // let data = {} as any;
  // res
  //   .then((value) => {
  //     data = value;
  //     console.log("AAA", value);
  //     // Expected output: "Success!"
  //   })
  //   .catch((err) => {
  //     console.log("err", err);
  //   });

  // console.log(data);
  return (
    <div>
      <p style={{ color: "red" }}>DATA MAN</p>
    </div>
  );
};

export const component = Extension;
// async function ApiCall(params: ApiManifestCallParams, url: string) {
//   const res = await axios.get(url, {
//     params: {
//       name: params.name,
//       appNamespace: params.appNamespace,
//       namespace: params.namespace,
//       resourceName: params.resourceName,
//       version: params.version,
//       kind: params.kind,
//       group: params.group,
//     },
//   });
//   return await JSON.parse(res.data.manifest);
// }

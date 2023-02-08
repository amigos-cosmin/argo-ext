import * as React from "react";
import { ConfigAuditReport, VulnerabilityReport } from "./model/Types";
import { Tree, Application } from "./model/tree";
//import ConfigAuditReportComponent from "./components/ConfigAuditReportComponent";
import "./styles.css";

export const Extension = (props: {
  tree: Tree;
  resource: ConfigAuditReport | VulnerabilityReport;
  application: Application;
}) => {
  console.log(props.resource, typeof props.resource);

  return (
    <div>
      <p className="font-semibold text-black text-xl text-center p-8">
        {props.resource.kind}
      </p>
      {/* <ConfigAuditReportComponent reportData={data} data={props.application} /> */}
    </div>
  );
};

export const component = Extension;

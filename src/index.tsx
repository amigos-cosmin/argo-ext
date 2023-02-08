import * as React from "react";
import ConfigAuditReportComponent from "./components/audit/ConfigAuditReportComponent";
import { ConfigAuditReport, VulnerabilityReport } from "./model/Types";
import { Application, Tree } from "./model/tree";
import "./styles.css";
import VulnerabilityReportComponent from "./components/vulnerability/VulnerabilityReportComponent";

export const Extension = (props: {
  tree: Tree;
  resource: ConfigAuditReport | VulnerabilityReport;
  application: Application;
}) => {
  console.log(props.resource);

  return (
    <div>
      <p className="font-semibold text-black text-xl text-center p-8">
        {props.resource.kind}
      </p>

      {ReportType(props.resource, props.application)}
    </div>
  );
};

export const component = Extension;

function ReportType(
  report: ConfigAuditReport | VulnerabilityReport,
  app: Application
) {
  let data;
  switch (report.kind) {
    case "ConfigAuditReport":
      data = report as ConfigAuditReport;
      return <ConfigAuditReportComponent reportData={data} data={app} />;
    case "VulnerabilityReport":
      data = report as VulnerabilityReport;
      return <VulnerabilityReportComponent reportData={data} data={app} />;
  }
}

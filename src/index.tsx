import * as React from "react";
import ConfigAuditReportComponent from "./components/audit/ConfigAuditReportComponent";
import {
  ConfigAuditReport,
  ExposedSecretsReport,
  VulnerabilityReport,
} from "./model/Types";
import { Application, Tree } from "./model/tree";
import "./styles.css";
import VulnerabilityReportComponent from "./components/vulnerability/VulnerabilityReportComponent";
import ExposedSecretsReportComponent from "./components/secrets/ExposedSecretsReport";

export const Extension = (props: {
  tree: Tree;
  resource: ConfigAuditReport | VulnerabilityReport | ExposedSecretsReport;
  application: Application;
}) => {
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
  report: ConfigAuditReport | VulnerabilityReport | ExposedSecretsReport,
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
    case "ClusterRbacAssessmentReport":
      data = report as ConfigAuditReport;
      return <ConfigAuditReportComponent reportData={data} data={app} />;
    case "RbacAssessmentReport":
      data = report as ConfigAuditReport;
      return <ConfigAuditReportComponent reportData={data} data={app} />;
    case "InfraAssessmentReport":
      data = report as ConfigAuditReport;
      return <ConfigAuditReportComponent reportData={data} data={app} />;
    case "ExposedSecretReport":
      data = report as ExposedSecretsReport;
      return <ExposedSecretsReportComponent reportData={data} data={app} />;
  }
}

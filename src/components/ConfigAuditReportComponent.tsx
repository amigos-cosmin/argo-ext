import React from "react";
import { ConfigAuditReport as TrivyReport } from "../model/applicationset";
import { Application } from "../model/tree";

export default function ConfigAuditReportComponent(props: {
  data: Application;
  reportData: TrivyReport;
}) {
  console.log(props.reportData.report.summary);
  return (
    <div className="grid grid-cols-2 border-slate-400 border-b-1">
      <p>Created</p>
      <p>{props.data.metadata.creationTimestamp}</p>
      <p>Name</p>
      <p>{props.data.metadata.name}</p>
      <p>Namespace</p>
      <p>{props.data.metadata.namespace}</p>
      <p>Labels</p>
      <div className="flex flex-col gap-4">
        <p>
          plugin-config-hash
          {props.data.metadata.labels
            ? props.data.metadata.labels["plugin-config-hash"]
            : "-"}
        </p>
        <p>
          resource-spec-hash
          {props.data.metadata.labels
            ? props.data.metadata.labels["resource-spec-hash"]
            : "-"}
        </p>
        <p>
          {" "}
          trivy-operator.resource.kind
          {props.data.metadata.labels
            ? props.data.metadata.labels["trivy-operator.resource.kind"]
            : "-"}
        </p>
        <p>
          {" "}
          trivy-operator.resource.name
          {props.data.metadata.labels
            ? props.data.metadata.labels["trivy-operator.resource.name"]
            : "-"}
        </p>
      </div>
      <p>Summary</p>
      <div className="flex text-white gap-4">
        <p className="bg-[#cc1814]">
          {props.reportData.report.summary.criticalCount
            ? props.reportData.report.summary.criticalCount
            : "0"}
        </p>
        <p className="bg-[#ffa500]">
          {props.reportData.report.summary.highCount
            ? props.reportData.report.summary.highCount
            : "0"}
        </p>
        <p className="bg-[#f0c20c]">
          {props.reportData.report.summary.mediumCount
            ? props.reportData.report.summary.mediumCount
            : "0"}
        </p>
        <p className="bg-[#096ab0]">
          {props.reportData.report.summary.lowCount
            ? props.reportData.report.summary.lowCount
            : "0"}
        </p>
      </div>
    </div>
  );
}

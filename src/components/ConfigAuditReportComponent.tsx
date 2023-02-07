import React from "react";
import { ConfigAuditReport as TrivyReport } from "../model/applicationset";
import { Application } from "../model/tree";

export default function ConfigAuditReportComponent(props: {
  data: Application;
  reportData: TrivyReport;
}) {
  console.log(props.reportData);
  return (
    <div className="grid grid-cols-2 gap-8 p-8">
      <p className="border-b-1 border-slate-400">Created</p>
      <p className="border-b-1 border-slate-400">
        {props.data.metadata.creationTimestamp}
      </p>
      <p className="border-b-1 border-slate-400">Name</p>
      <p className="border-b-1 border-slate-400">{props.data.metadata.name}</p>
      <p>Namespace</p>
      <p className="border-b-1 border-slate-400">
        {props.data.metadata.namespace}
      </p>
      <p className="border-b-1 border-slate-400">Labels</p>
      <div className="flex flex-col border-b-1 border-slate-400">
        <p>
          <span className="text-xs font-semibold inline-block py-1 px-2 rounded text-neutral-600 bg-neutral-200 last:mr-0 mr-1">
            plugin-config-hash:
            {props.data.metadata.labels
              ? props.data.metadata.labels["plugin-config-hash"]
              : "-"}
          </span>
        </p>
        <p>
          <span className="text-xs font-semibold inline-block py-1 px-2 rounded text-neutral-600 bg-neutral-200 last:mr-0 mr-1">
            resource-spec-hash:
            {props.data.metadata.labels
              ? props.data.metadata.labels["resource-spec-hash"]
              : "-"}
          </span>
        </p>
        <p>
          <span className="text-xs font-semibold inline-block py-1 px-2 rounded text-neutral-600 bg-neutral-200 last:mr-0 mr-1">
            trivy-operator-resource-kind:
            {props.data.metadata.labels
              ? props.data.metadata.labels["trivy-operator.resource.kind"]
              : "-"}
          </span>
        </p>
        <p>
          <span className="text-xs font-semibold inline-block py-1 px-2 rounded text-neutral-600 bg-neutral-200 last:mr-0 mr-1">
            trivy-operator-resource-name
            {props.data.metadata.labels
              ? props.data.metadata.labels["trivy-operator.resource.name"]
              : "-"}
          </span>
        </p>
      </div>
      <p className="border-b-1 border-slate-400">Summary</p>
      <div className="flex text-white gap-4 border-b-1 border-slate-400">
        <p className="bg-[#cc1814] w-6 h-full text-center">
          {props.reportData.report.summary.criticalCount
            ? props.reportData.report.summary.criticalCount
            : "0"}
        </p>
        <p className="bg-[#ffa500] w-6 h-full text-center">
          {props.reportData.report.summary.highCount
            ? props.reportData.report.summary.highCount
            : "0"}
        </p>
        <p className="bg-[#f0c20c] w-6 h-full text-center">
          {props.reportData.report.summary.mediumCount
            ? props.reportData.report.summary.mediumCount
            : "0"}
        </p>
        <p className="bg-[#096ab0] w-6 h-full text-center">
          {props.reportData.report.summary.lowCount
            ? props.reportData.report.summary.lowCount
            : "0"}
        </p>
      </div>
    </div>
  );
}

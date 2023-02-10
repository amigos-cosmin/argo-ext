import React from "react";
import { ConfigAuditReport } from "../../model/Types";
import { Application } from "../../model/tree";
import * as Board from "../Board";
import TableRowsAudit from "./TableRowsAudit";

const GRID_COLS = "grid-cols-[1fr_1fr_1fr_3fr_1fr]";

export default function ConfigAuditReportComponent(props: {
  data: Application;
  reportData: ConfigAuditReport;
}) {
  console.log(props.reportData);
  return (
    <>
      <div className="grid grid-cols-2 gap-6 p-8">
        <p className="border-b-[1px] border-slate-400">Created</p>
        <p className="border-b-[1px] border-slate-400">
          {props.reportData.metadata.creationTimestamp}
        </p>
        <p className="border-b-[1px] border-slate-400">Name</p>
        <p className="border-b-[1px] border-slate-400">
          {props.reportData.metadata.name}
        </p>
        <p className="border-b-[1px] border-slate-400">Namespace</p>
        <p className="border-b-[1px] border-slate-400">
          {props.reportData.metadata.namespace}
        </p>
        <p className="border-b-[1px] border-slate-400">Labels</p>
        <div className="grid grid-cols-2 border-b-[1px] border-slate-400">
          <p>
            <span className="text-xs font-semibold inline-block py-1 px-2 rounded text-neutral-600 bg-neutral-200 last:mr-0 mr-1">
              plugin-config-hash:&nbsp;
              {props.reportData.metadata.labels
                ? props.reportData.metadata.labels["plugin-config-hash"]
                : "-"}
            </span>
          </p>
          <p>
            <span className="text-xs font-semibold inline-block py-1 px-2 rounded text-neutral-600 bg-neutral-200 last:mr-0 mr-1">
              resource-spec-hash:&nbsp;
              {props.reportData.metadata.labels
                ? props.reportData.metadata.labels["resource-spec-hash"]
                : "-"}
            </span>
          </p>
          <p>
            <span className="text-xs font-semibold inline-block py-1 px-2 rounded text-neutral-600 bg-neutral-200 last:mr-0 mr-1">
              trivy-operator-resource-kind:&nbsp;
              {props.reportData.metadata.labels
                ? props.reportData.metadata.labels[
                    "trivy-operator.resource.kind"
                  ]
                : "-"}
            </span>
          </p>
          <p>
            <span className="text-xs font-semibold inline-block py-1 px-2 rounded text-neutral-600 bg-neutral-200 last:mr-0 mr-1">
              trivy-operator-resource-name:&nbsp;
              {props.reportData.metadata.labels
                ? props.reportData.metadata.labels[
                    "trivy-operator.resource.name"
                  ]
                : "-"}
            </span>
          </p>
        </div>
        <p className="border-b-[1px] border-slate-400">Summary</p>
        <div className="flex text-white gap-6 border-b-[1px] border-slate-400">
          <p className="bg-[#cc1814] font-semibold inline-block py-1 px-2 rounded text-white last:mr-0 mr-1 h-full text-center">
            {props.reportData.report.summary.criticalCount
              ? props.reportData.report.summary.criticalCount
              : "0"}
          </p>
          <p className="bg-[#ffa500] font-semibold inline-block py-1 px-2 rounded text-white last:mr-0 mr-1 h-full text-center">
            {props.reportData.report.summary.highCount
              ? props.reportData.report.summary.highCount
              : "0"}
          </p>
          <p className="bg-[#f0c20c] font-semibold inline-block py-1 px-2 rounded text-white last:mr-0 mr-1 h-full text-center">
            {props.reportData.report.summary.mediumCount
              ? props.reportData.report.summary.mediumCount
              : "0"}
          </p>
          <p className="bg-[#096ab0] font-semibold inline-block py-1 px-2 rounded text-white last:mr-0 mr-1 h-full text-center">
            {props.reportData.report.summary.lowCount
              ? props.reportData.report.summary.lowCount
              : "0"}
          </p>
        </div>
      </div>
      <Board.Root className="h-full w-full">
        <Board.Head>
          <Board.RowBase className={GRID_COLS}>
            <Board.ColHeader className="justify-center">ID</Board.ColHeader>
            <Board.ColHeader className="justify-center">
              Severity
            </Board.ColHeader>
            <Board.ColHeader className="justify-center">
              Category
            </Board.ColHeader>
            <Board.ColHeader className="justify-center">
              Message
            </Board.ColHeader>
            <Board.ColHeader className="justify-center">Status</Board.ColHeader>
          </Board.RowBase>
        </Board.Head>
        <Board.Body className="!gap-0 overflow-hidden overflow-y-auto">
          {props.reportData.report.checks.map((report) => (
            <TableRowsAudit data={report} />
          ))}
        </Board.Body>
      </Board.Root>
    </>
  );
}

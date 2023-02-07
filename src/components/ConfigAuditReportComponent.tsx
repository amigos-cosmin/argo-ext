import React from "react";
import { ConfigAuditReport as TrivyReport } from "../model/applicationset";
import { Application } from "../model/tree";
import * as Board from "./Board";

const GRID_COLS = "grid-cols-[2fr_2fr_2fr_2fr_2fr]";

export default function ConfigAuditReportComponent(props: {
  data: Application;
  reportData: TrivyReport;
}) {
  console.log(props.reportData);
  return (
    <div className="grid grid-cols-2 gap-6 p-8">
      <p className="border-b-[1px] border-slate-400">Created</p>
      <p className="border-b-[1px] border-slate-400">
        {props.data.metadata.creationTimestamp}
      </p>
      <p className="border-b-[1px] border-slate-400">Name</p>
      <p className="border-b-[1px] border-slate-400">
        {props.data.metadata.name}
      </p>
      <p className="border-b-[1px] border-slate-400">Namespace</p>
      <p className="border-b-[1px] border-slate-400">
        {props.data.metadata.namespace}
      </p>
      <p className="border-b-[1px] border-slate-400">Labels</p>
      <div className="flex flex-col border-b-[1px] border-slate-400">
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
      <p className="border-b-[1px] border-slate-400">Summary</p>
      <div className="flex text-white gap-4 border-b-[1px] border-slate-400">
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

      <Board.Root className="h-full">
        <Board.Head>
          <Board.RowBase className={GRID_COLS}>
            <Board.ColHeader>ID</Board.ColHeader>
            <Board.ColHeader>Severity</Board.ColHeader>
            <Board.ColHeader>Category</Board.ColHeader>
            <Board.ColHeader>Description</Board.ColHeader>
            <Board.ColHeader>Message</Board.ColHeader>
          </Board.RowBase>
        </Board.Head>
        <Board.Body className="!gap-0 overflow-hidden overflow-y-auto">
          <Board.Row
            className={GRID_COLS + " border border-slate !px-0 !py-0 divide-x"}
          >
            <Board.Cell className="h-full">4235</Board.Cell>
            <Board.Cell className="h-full">aaaa</Board.Cell>
            <Board.Cell className="h-full">bbbbb</Board.Cell>
            <Board.Cell className="h-full">cccc</Board.Cell>
            <Board.Cell className="h-full">ddddd</Board.Cell>
          </Board.Row>
        </Board.Body>
      </Board.Root>
    </div>
  );
}

import { ConfigAuditReport as TrivyReport } from "../model/applicationset";
import * as Board from "./Board";
import React from "react";

export default function TableRows(props: { data: TrivyReport }) {
  console.log("Aici", props.data);
  return (
    <>
      {props.data.report.checks.map((report) => {
        <>
          <Board.Cell className="h-full">{report.checkID}</Board.Cell>
          <Board.Cell className={"h-full " + SeverityColor(report.severity)}>
            {report.severity}
          </Board.Cell>
          <Board.Cell className="h-full">{report.category}</Board.Cell>
          <Board.Cell className="h-full">{report.description}</Board.Cell>
          <Board.Cell className="h-full">{report.message}</Board.Cell>
        </>;
      })}
    </>
  );
}

function SeverityColor(severity: string) {
  switch (severity) {
    case "LOW":
      return "bg-[#096ab0]";
    case "MEDIUM":
      return "bg-[#f0c20c]";
    case "HIGH":
      return "bg-[#ffa500]";
    case "CRITICAL":
      return "bg-[#cc1814]";
  }
}

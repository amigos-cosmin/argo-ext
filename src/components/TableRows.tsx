import { ConfigAuditReport as TrivyReport } from "../model/applicationset";
import * as Board from "./Board";
import React from "react";
const GRID_COLS = "grid-cols-[1fr_1fr_1fr_2fr_2fr]";
export default function TableRows(props: { data: TrivyReport }) {
  console.log("Aici", props.data);
  return (
    <>
      {props.data.report.checks.map((report) => {
        <>
          <Board.Row className={GRID_COLS + " !px-0 !py-0 divide-x"}>
            <Board.Cell className="h-full">{report.checkID}</Board.Cell>
            <Board.Cell className={"h-full " + SeverityColor(report.severity)}>
              {report.severity}
            </Board.Cell>
            <Board.Cell className="h-full">{report.category}</Board.Cell>
            <Board.Cell className="h-full">{report.description}</Board.Cell>
            <Board.Cell className="h-full">{report.message}</Board.Cell>
          </Board.Row>
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

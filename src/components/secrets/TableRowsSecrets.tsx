import React from "react";
import { ExposedSecret } from "../../model/Types";
import * as Board from "../Board";
const GRID_COLS = "grid-cols-[1fr_1fr_1fr_2fr_2fr]";
export default function TableRows(props: { data: ExposedSecret }) {
  return (
    <>
      <Board.Row className={GRID_COLS}>
        <Board.Cell className="h-full justify-center">
          {props.data.ruleID}
        </Board.Cell>
        <Board.Cell className="h-full items-center justify-center">
          <span
            className={
              "text-xs font-semibold inline-block py-1 px-2 rounded text-white last:mr-0 mr-1 " +
              SeverityColor(props.data.severity)
            }
          >
            {props.data.severity}
          </span>
        </Board.Cell>
        <Board.Cell className="h-full justify-center">
          {props.data.target}
        </Board.Cell>
        <Board.Cell className="h-full justify-center">
          {props.data.category}
        </Board.Cell>
        <Board.Cell className="h-full justify-center">
          {props.data.match}
        </Board.Cell>
      </Board.Row>
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
    case "UNKNOWN":
      return "bg-[#515456]";
    case "NONE":
      return "bg-[#00b09b]";
  }
}

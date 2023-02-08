import React from "react";
import { Check } from "../../model/Types";
import * as Board from "../Board";
const GRID_COLS = "grid-cols-[1fr_1fr_1fr_3fr_1fr]";
export default function TableRows(props: { data: Check }) {
  console.log("Aici", props.data);
  return (
    <>
      <Board.Row className={GRID_COLS}>
        <Board.Cell className="h-full justify-center">
          {props.data.checkID}
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
          {props.data.category}
        </Board.Cell>

        <Board.Cell className="h-full justify-center">
          {props.data.messages}
        </Board.Cell>
        <Board.Cell className="justify-center">
          {props.data.success ? (
            <p className="bg-[#00b09b] font-semibold inline-block py-1 px-2 rounded text-white last:mr-0 mr-1 h-full text-center">
              PASS
            </p>
          ) : (
            <p className="bg-[#cc1814] font-semibold inline-block py-1 px-2 rounded text-white last:mr-0 mr-1 h-full text-center">
              FAIL
            </p>
          )}
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
  }
}

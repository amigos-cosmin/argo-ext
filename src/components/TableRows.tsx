import { Check } from "../model/applicationset";
import * as Board from "./Board";
import React from "react";
const GRID_COLS = "grid-cols-[1fr_1fr_1fr_2fr_2fr]";
export default function TableRows(props: { data: Check }) {
  console.log("Aici", props.data);
  return (
    <>
      <Board.Row className={GRID_COLS + " !px-0 !py-0 "}>
        <Board.Cell className="h-full">{props.data.checkID}</Board.Cell>
        <Board.Cell className="h-full">
          <span
            className={
              "text-xs font-semibold inline-block py-1 px-2 rounded text-white last:mr-0 mr-1 " +
              SeverityColor(props.data.severity)
            }
          >
            {props.data.severity}
          </span>
        </Board.Cell>
        <Board.Cell className="h-full">{props.data.category}</Board.Cell>
        <Board.Cell className="h-full">{props.data.description}</Board.Cell>
        <Board.Cell className="h-full">{props.data.message}</Board.Cell>
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

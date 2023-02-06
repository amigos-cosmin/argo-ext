import React from "react";
import { ApplicationSet } from "../model/applicationset";

export default function ConfigAuditReport(props: { data: ApplicationSet }) {
  return (
    <div>
      <p>{props.data.metadata.name}</p>
    </div>
  );
}

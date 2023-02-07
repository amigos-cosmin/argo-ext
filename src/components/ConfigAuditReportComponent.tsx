import React from "react";
import { ConfigAuditReportData } from "../model/applicationset";
import { Application } from "../model/tree";

export default function ConfigAuditReportComponent(props: {
  data: Application;
  reportData: ConfigAuditReportData;
}) {
  return (
    <div>
      <table>
        <tr>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <td>Created</td>
          <td>{props.data.metadata.creationTimestamp}</td>
        </tr>
        <tr>
          <td>Name</td>
          <td>{props.data.metadata.name}</td>
        </tr>
        <tr style={{ gap: "10px" }}>
          <td>Namespace</td>
          <td>{props.data.metadata.namespace}</td>
        </tr>
        <tr>
          <td>Labels</td>
          <td>
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
              trivy-operator.resource.kind
              {props.data.metadata.labels
                ? props.data.metadata.labels["trivy-operator.resource.kind"]
                : "-"}
            </p>
            <p>
              trivy-operator.resource.name
              {props.data.metadata.labels
                ? props.data.metadata.labels["trivy-operator.resource.name"]
                : "-"}
            </p>
            <p>
              trivy-operator.resource.namespace
              {props.data.metadata.labels
                ? props.data.metadata.labels[
                    "trivy-operator.resource.namespace"
                  ]
                : "-"}
            </p>
          </td>
          <tr>
            <td>Sumamry</td>
            <td>
              <span style={{ background: "red" }}>10</span>
              <span style={{ background: "orange" }}></span>
              <span style={{ background: "yellow" }}></span>
              <span style={{ background: "blue" }}></span>
            </td>
          </tr>
        </tr>
      </table>
    </div>
  );
}

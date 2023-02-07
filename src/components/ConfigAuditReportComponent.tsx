import React from "react";
import { ConfigAuditReportData } from "../model/applicationset";
import { Application } from "../model/tree";

export default function ConfigAuditReportComponent(props: {
  data: Application;
  reportData: ConfigAuditReportData;
}) {
  console.log(props.reportData);
  return (
    <div>
      <table>
        <tr>
          <th></th>
          <th></th>
        </tr>
        <tr style={{ paddingBottom: "15px" }}>
          <td style={{ padding: "0 15px 0 15px" }}>Created</td>
          <td style={{ padding: "0 15px 0 15px" }}>
            {props.data.metadata.creationTimestamp}
          </td>
        </tr>
        <tr style={{ paddingBottom: "15px" }}>
          <td style={{ padding: "0 15px 0 15px" }}>Name</td>
          <td style={{ padding: "0 15px 0 15px" }}>
            {props.data.metadata.name}
          </td>
        </tr>
        <tr style={{ paddingBottom: "15px" }}>
          <td style={{ padding: "0 15px 0 15px" }}>Namespace</td>
          <td style={{ padding: "0 15px 0 15px" }}>
            {props.data.metadata.namespace}
          </td>
        </tr>
        <tr>
          <td style={{ padding: "0 15px 0 15px" }}>Labels</td>
          <td style={{ padding: "0 15px 0 15px" }}>
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
            <td>Summary</td>
            <td>
              <span style={{ background: "red" }}>
                {props.reportData.summary.criticalCount
                  ? props.reportData.summary.criticalCount
                  : "0"}
              </span>
              <span style={{ background: "orange" }}>
                {props.reportData.summary.highCount
                  ? props.reportData.summary.highCount
                  : "0"}
              </span>
              <span style={{ background: "yellow" }}>
                {props.reportData.summary.mediumCount
                  ? props.reportData.summary.mediumCount
                  : "0"}
              </span>
              <span style={{ background: "blue" }}>
                {props.reportData.summary.mediumCount
                  ? props.reportData.summary.mediumCount
                  : "0"}
              </span>
            </td>
          </tr>
        </tr>
      </table>
    </div>
  );
}

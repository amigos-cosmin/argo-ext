import classed from "classed-components";
import { ReactNode } from "react";
import * as Table from "./Table";
import * as React from "react";

export {
  Root,
  Tbody as Body,
  Td as Cell,
  Thead as Head,
  Tr as RowBase,
} from "./Table";

export const ColHeader = (props: {
  children?: ReactNode;
  sortable?: boolean;
  className?: string;
}) => {
  return <Table.Th className={props.className}>{props.children}</Table.Th>;
};

export const Row = classed(Table.Tr)("bg-purple-50 flex items-center");

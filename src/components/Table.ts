import classed from "classed-components";

export const Root = classed.table("flex flex-col rounded bg-white p-4");

// Head
export const Thead = classed.thead("block mb-1.5 -mt-1.5");

export const Th = classed.th(
  // class=
  "flex items-center gap-0.5 text-purple-500 uppercase font-bold text-xs text-left tracking-wider"
);

// Body
export const Tbody = classed.tbody("");

export const Tr = classed.tr("grid text-sm px-5 py-3");

export const Td = classed.td("flex");

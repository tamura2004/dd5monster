export const TemplateType = {
  TYPE: "type",
  TERRAIN: "terrain",
  RACE: "race",
  CLASS: "class",
} as const;
export type TemplateType = (typeof TemplateType)[keyof typeof TemplateType];

export interface IExpItem {
  data: ExperienceType;
}

export type ExperienceType = {
  'Company': string,
  'Company Location': string,
  'Duration': string,
  'Description'?: string,
  'Position': string,
  'Technologies'?: string[],
}
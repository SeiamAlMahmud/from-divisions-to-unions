declare module 'from-divisions-to-unions' {
  // Structure for each item like division, district, etc.
  export interface LocationOption {
    value: string;
    title: string;
  }

  export type DivisionList = LocationOption[];
  export type DistrictList = Record<string, LocationOption[]>;
  export type UpazilaList = Record<string, LocationOption[]>;
  export type UnionList = Record<string, LocationOption[]>;

  // Functions exposed by your package
  export function getAllDivision(type?: 'en' | 'bn'): DivisionList;
  export function getAllDistrict(type?: 'en' | 'bn'): DistrictList;
  export function getAllUpazila(type?: 'en' | 'bn'): UpazilaList;
  export function getAllUnion(type?: 'en' | 'bn'): UnionList;

  export function getDistricts(division_value: string, type?: 'en' | 'bn'): LocationOption[];
  export function getUpazilas(district_value: string, type?: 'en' | 'bn'): LocationOption[];
  export function getUnions(upazila_value: string, type?: 'en' | 'bn'): LocationOption[];
}

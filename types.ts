export interface Track {
  id: number;
  title: string;
  topics: string[];
}

export interface FeeCategory {
  category: string;
  ieeeMember: string;
  nonIeeeMember: string;
}

export interface FeeTable {
  title: string;
  currency: string;
  fees: FeeCategory[];
}

export interface NavItem {
  label: string;
  path: string;
}
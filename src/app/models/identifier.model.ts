export interface Identifier {
  id: number;
  tag: string;
  imageUrl: string;
}

export interface IdentifierQueryParams {
  searchText?: string;
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  sortDescending?: boolean;
}

export interface ContactType {
  id: number | string;
  firstname: string;
  lastname: string;
  image: string;
  department: string;
  company: string;
  phone: string;
  email: string;
  address: string;
  notes: string;
  frequentlycontacted: boolean;
  starred: boolean;
  deleted: boolean;
}

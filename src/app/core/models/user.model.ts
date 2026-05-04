import { UserRole } from './roles.enum';

export interface User {
  id: string;
  cognitoSub: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  role: UserRole;
  region?: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
}

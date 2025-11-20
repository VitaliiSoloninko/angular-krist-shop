import { User } from './user.model';

export interface UserName {
  firstName: string;
  lastName: string;
}

export function extractNameFromUser(user: User): UserName {
  return {
    firstName: user.firstName,
    lastName: user.lastName,
  };
}

export function getFullName(user: UserName | User): string {
  return `${user.firstName} ${user.lastName}`.trim();
}

export interface UserInfo {
  id: string;
  name: string;
}

export function isUserInfo(item: any): item is UserInfo {
  return item && typeof item === 'object'
    && typeof item.id === 'string' && typeof item.name === 'string';
}

export default UserInfo;
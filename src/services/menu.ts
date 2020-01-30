import request from '@/utils/request';

export async function getMenuData(): Promise<any> {
  return request('/api/currentUser');
}

export async function queryCurrent(): Promise<any> {
  return request('/api/currentUser');
}

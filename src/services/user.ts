import request from '@/utils/request';
import Constants from '@/utils/constant';

export async function query(): Promise<any> {
  return request('/api/users');
}

export async function queryCurrent(): Promise<any> {
  // return request('/api/currentUser');
  return request(`${Constants.baseUrl}/member/currentUser`);
}

export async function queryNotices(): Promise<any> {
  return request('/api/notices');
}

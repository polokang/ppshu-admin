import request from '@/utils/request';

export async function getMenuData(): Promise<any> {
  //   return request('/api/users');
  return [
    {
      path: '/dashboard',
      name: 'dashboard',
      icon: 'dashboard',
      children: [
        {
          path: '/dashboard/analysis',
          name: 'analysis',
          exact: true,
        },
        {
          path: '/dashboard/monitor',
          name: 'monitor',
          exact: true,
        },
      ],
    },
  ];
}

export async function queryCurrent(): Promise<any> {
  return request('/api/currentUser');
}

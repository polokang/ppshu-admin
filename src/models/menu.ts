import { Reducer } from 'redux';
import { Effect } from 'dva';
import { getMenuData } from '@/services/menu'; // 通过后台返回特定的数组json或者mock模拟数据

export interface MenuModelState {
  menuData: any[];
}

export interface MenuModelType {
  namespace: 'menu';
  state: MenuModelState;
  effects: {
    getMenuData: Effect;
  };
  reducers: {
    save: Reducer<MenuModelState>;
  };
}

const MenuModel: MenuModelType = {
  namespace: 'menu',
  state: {
    menuData: [],
  },
  effects: {
    *getMenuData({ callback }, { call, put }) {
      const response = yield call(getMenuData);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback(response);
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        menuData: action.payload || [],
      };
    },
  },
};
export default MenuModel;

interface DefConfig { // 默认设置
  server_url: string,
}

export interface UserInfo { // 用户信息
  nickName: string,
  gender: number,
  language: string,
  city: string,
  province: string,
  country: string,
  avatarUrl: string,
}

interface GlobalData {
  default_config: DefConfig,
  userInfo: UserInfo,
  loginFlag: boolean,  // 用户登录状态
  formFlag: boolean, // 用户完善资料状态
}

const globalData: GlobalData = {
  default_config: {
    server_url: 'http://localhost:8000/', // 暂用开发地址
  },
  userInfo: {
    nickName: '暂无昵称',
    gender: 0,
    language: 'zh_CN',
    city: '暂无城市信息',
    province: '暂无省份信息',
    country: '暂无国家信息',
    avatarUrl: '',
  },
  loginFlag: false,
  formFlag: false,
 };

export function set (key, val) {
  globalData[key] = val;
}

export function get (key) {
  return globalData[key];
}

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

export interface TemplateTypes { // 模板消息
  touser: string,
  page?: string,
  data?: object,
  templateId: string,
  formId: string,
  emphasisKeyword: string,
}

interface GlobalData {
  default_config: DefConfig,
  loginFlag: boolean,  // 用户登录状态
  formFlag: boolean, // 用户完善资料状态
}

export const globalData: GlobalData = {
  default_config: {
    server_url: 'http://localhost:8000', // 暂用开发地址
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

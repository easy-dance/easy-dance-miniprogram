/**
 * 微信小程序云开发相关服务接口
 */
import Taro from '@tarojs/taro';
import api from './api'
import { CLOUD_ENV } from '../config';

/**云环境初始化 */
export const init = async () => {
  // @ts-ignore
  await Taro.cloud.init({
    env: CLOUD_ENV, // 测试环境
    // env: CLOUD_PROD_ENV, // 生产环境
  });
};

// /**获取 openid */
export const getWXcontext = async () => {
  // @ts-ignore
  const res = await api.cloud('login')
  console.info(res);
  return res;
};


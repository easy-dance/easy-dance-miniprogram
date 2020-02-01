import * as DanceType from '../types/dance';
import service from './api';
/**发起约舞相关接口 */
export const getDanceList: (page: number) => Promise<DanceType.DanceList> =
  (page: number) => service.get('/dance/list', { page });
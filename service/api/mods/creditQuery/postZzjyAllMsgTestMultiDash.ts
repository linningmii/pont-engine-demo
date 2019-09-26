/**
 * @desc 多中划线测试
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {}

export const init = new defs.api.Result();

export async function request(params) {
  return pontFetch({
    url: '/zzjy/all-msg/test-multi-dash',
    params,
    method: 'post',
  });
}

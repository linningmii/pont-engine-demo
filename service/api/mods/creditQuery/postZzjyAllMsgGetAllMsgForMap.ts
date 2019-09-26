/**
 * @desc 站址经营-汇总首页
 */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {
  /** accountTime */
  accountTime: string;
  /** type */
  type: string;
}

export const init = new defs.api.Result();

export async function request(params) {
  return pontFetch({
    url: '/zzjy/all-msg/getAllMsgForMap',
    params,
    method: 'post',
  });
}

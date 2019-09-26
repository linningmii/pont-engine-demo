/**
     * @desc 往期账单汇总
往期账单汇总
     */

import * as defs from '../../baseClass';
import pontFetch from 'src/utils/pontFetch';

export class Params {}

export const init = new defs.api.DataTransOutput();

export async function request(params, bodyParams) {
  return pontFetch({
    url: '/api/core/asset/credit/query/pastCreditCardBillGather',
    params: bodyParams,
    method: 'post',
  });
}

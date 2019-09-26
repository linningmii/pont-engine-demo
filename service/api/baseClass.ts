class AbcOutputParameter {
  /** 开卡日 */
  dueDay = '';

  /** 进件渠道 */
  requestChannel = '';
}

class ChineseAndEnglishMixedWithVo {
  /** 开卡日 */
  dueDay = '';

  /** 进件渠道 */
  requestChannel = '';
}

class DataTransOutput {
  /** 返回数据 */
  data = new OutputParameterVo();

  /** 错误码。
100000 成功
200000 入参不合法
400000 权限不足
500000 服务失败 */
  transCode = undefined;

  /** 错误信息。成功：“成功” 失败：“失败对应的msg” */
  transMessage = '';

  /** 信息详情” */
  transMessageDetail = '';
}

class GenericRequestParameterToken {
  /** bizParamVo */
  bizParamVo = new OutputParameterVo();
}

class InquiringRepaymentUnresolvedRepaymentInformationAO {
  /** 进件状态,eg:正常还款->PROCESSING、逾期->OVER_DUE、结清->REPAID（包含提前结清,逾期结清和正常结清） */
  assetInfoStatus = '';

  /** assetRepayPlanStatus */
  assetRepayPlanStatus = '';

  /** 账单日：格式 yyyy-MM-dd HH:mm:ss */
  dueDate = '';

  /** 当前第几页，从1开始 */
  pageNum = undefined;

  /** 每页多少行 */
  pageSize = undefined;

  /** 渠道大类,eg:个贷输入->LEND,钱站输入->JA */
  requestType = '';
}

class OutputParameterVo {
  /** 开卡日 */
  dueDay = '';

  /** 进件渠道 */
  requestChannel = '';
}

class QueryParameter {
  /** data */
  data = undefined;

  /** 开卡日 */
  dueDay = '';

  /** 进件渠道 */
  requestChannel = '';
}

class Result {
  /** description */
  description = '';

  /** result */
  result = [];

  /** returnCode */
  returnCode = undefined;
}

class mod_Service {}

export const api = {
  AbcOutputParameter,
  ChineseAndEnglishMixedWithVo,
  DataTransOutput,
  GenericRequestParameterToken,
  InquiringRepaymentUnresolvedRepaymentInformationAO,
  OutputParameterVo,
  QueryParameter,
  Result,
  mod_Service,
};

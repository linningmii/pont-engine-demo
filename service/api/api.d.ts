type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

declare namespace defs {
  export namespace api {
    export class AbcOutputParameter {
      /** 开卡日 */
      dueDay: string;

      /** 进件渠道 */
      requestChannel: string;
    }

    export class ChineseAndEnglishMixedWithVo {
      /** 开卡日 */
      dueDay: string;

      /** 进件渠道 */
      requestChannel: string;
    }

    export class DataTransOutput<T0 = any> {
      /** 返回数据 */
      data?: T0;

      /** 错误码。
100000 成功
200000 入参不合法
400000 权限不足
500000 服务失败 */
      transCode: number;

      /** 错误信息。成功：“成功” 失败：“失败对应的msg” */
      transMessage: string;

      /** 信息详情” */
      transMessageDetail: string;
    }

    export class GenericRequestParameterToken<T0 = any> {
      /** bizParamVo */
      bizParamVo?: T0;
    }

    export class InquiringRepaymentUnresolvedRepaymentInformationAO {
      /** 进件状态,eg:正常还款->PROCESSING、逾期->OVER_DUE、结清->REPAID（包含提前结清,逾期结清和正常结清） */
      assetInfoStatus: string;

      /** assetRepayPlanStatus */
      assetRepayPlanStatus?: string;

      /** 账单日：格式 yyyy-MM-dd HH:mm:ss */
      dueDate: string;

      /** 当前第几页，从1开始 */
      pageNum: number;

      /** 每页多少行 */
      pageSize: number;

      /** 渠道大类,eg:个贷输入->LEND,钱站输入->JA */
      requestType: string;
    }

    export class OutputParameterVo {
      /** 开卡日 */
      dueDay: string;

      /** 进件渠道 */
      requestChannel: string;
    }

    export class QueryParameter {
      /** data */
      data?: ObjectMap<any, defs.api.DataTransOutput>;

      /** 开卡日 */
      dueDay: string;

      /** 进件渠道 */
      requestChannel: string;
    }

    export class Result<T0 = any> {
      /** description */
      description?: string;

      /** result */
      result?: Array<ObjectMap>;

      /** returnCode */
      returnCode?: number;
    }

    export class mod_Service {}
  }
}

declare namespace API {
  export namespace api {
    /**
     * Credit Query Controller
     */
    export namespace creditQuery {
      /**
        * 往期账单汇总
往期账单汇总
        * /api/core/asset/credit/query/pastCreditCardBillGather
        */
      export namespace postApiCoreAssetCreditQueryPastCreditCardBillGather {
        export class Params {}

        export type Response = defs.api.DataTransOutput;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: any,
        ): Promise<defs.api.DataTransOutput>;
      }

      /**
        * 往期账单汇总
往期账单汇总
        * /api/core/asset/credit/query/pastCreditCardBillGather
        */
      export namespace putApiCoreAssetCreditQueryPastCreditCardBillGather {
        export class Params {}

        export type Response = defs.api.DataTransOutput;
        export const init: Response;
        export function request(
          params: Params,
          bodyParams: any,
        ): Promise<defs.api.DataTransOutput>;
      }

      /**
       * 站址经营-汇总首页
       * /zzjy/all-msg/getAllMsgForMap
       */
      export namespace postZzjyAllMsgGetAllMsgForMap {
        export class Params {
          /** accountTime */
          accountTime: string;
          /** type */
          type: string;
        }

        export type Response = defs.api.Result<Array<ObjectMap>>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.api.Result<Array<ObjectMap>>>;
      }

      /**
       * 多中划线测试
       * /zzjy/all-msg/test-multi-dash
       */
      export namespace postZzjyAllMsgTestMultiDash {
        export class Params {}

        export type Response = defs.api.Result<Array<ObjectMap>>;
        export const init: Response;
        export function request(
          params: Params,
        ): Promise<defs.api.Result<Array<ObjectMap>>>;
      }
    }
  }
}

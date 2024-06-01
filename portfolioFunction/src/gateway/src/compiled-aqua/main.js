/* eslint-disable */
// @ts-nocheck
/**
 *
 * This file is generated using:
 * @fluencelabs/aqua-api version: 0.13.0
 * @fluencelabs/aqua-to-js version: 0.3.13
 * If you find any bugs in generated AIR, please write an issue on GitHub: https://github.com/fluencelabs/aqua/issues
 * If you find any bugs in generated JS/TS, please write an issue on GitHub: https://github.com/fluencelabs/js-client/issues
 *
 */


// Making aliases to reduce chance of accidental name collision
import {
    v5_callFunction as callFunction$$,
    v5_registerService as registerService$$
} from '@fluencelabs/js-client';


// Functions
export const runPortfolioService_script = `
(xor
 (new $answers
  (seq
   (seq
    (seq
     (seq
      (seq
       (seq
        (seq
         (seq
          (seq
           (seq
            (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
            (new $option-inline
             (seq
              (xor
               (seq
                (new %PortfolioDeployment_obj_map
                 (seq
                  (seq
                   (seq
                    (seq
                     (seq
                      (ap ("chainNetworkId" 2358716091832359) %PortfolioDeployment_obj_map)
                      (ap ("dealId" "203274622a060712a8832ca7ad862cfad05b1ef8") %PortfolioDeployment_obj_map)
                     )
                     (ap ("dealIdOriginal" "0x203274622a060712a8832CA7ad862CfaD05B1eF8") %PortfolioDeployment_obj_map)
                    )
                    (ap ("definition" "bafkreicpldtfwchwemnwgqlperdqefdc5gkvddz7orgfchatvyhowh3df4") %PortfolioDeployment_obj_map)
                   )
                   (ap ("timestamp" "2024-05-31T23:16:23.288Z") %PortfolioDeployment_obj_map)
                  )
                  (canon %init_peer_id% %PortfolioDeployment_obj_map  PortfolioDeployment_obj)
                 )
                )
                (ap PortfolioDeployment_obj $option-inline)
               )
               (null)
              )
              (canon %init_peer_id% $option-inline  #option-inline-0)
             )
            )
           )
           (new %Deals_obj_map
            (seq
             (ap ("portfolioDeployment" #option-inline-0) %Deals_obj_map)
             (canon %init_peer_id% %Deals_obj_map  Deals_obj)
            )
           )
          )
          (ap Deals_obj.$.portfolioDeployment Deals_obj_flat)
         )
         (ap Deals_obj_flat.$.[0].dealIdOriginal Deals_obj_flat_flat)
        )
        (xor
         (call -relay- ("subnet" "resolve") [Deals_obj_flat_flat] ret)
         (fail :error:)
        )
       )
       (new -if-error-
        (xor
         (match ret.$.success false
          (seq
           (new $array-inline
            (seq
             (seq
              (ap "Failed to resolve subnet: " $array-inline)
              (ap ret.$.error $array-inline)
             )
             (canon %init_peer_id% $array-inline  #array-inline-0)
            )
           )
           (call %init_peer_id% ("run-console" "print") [#array-inline-0])
          )
         )
         (seq
          (ap :error: -if-error-)
          (xor
           (match :error:.$.error_code 10001
            (null)
           )
           (fail -if-error-)
          )
         )
        )
       )
      )
      (fold ret.$.workers w-0
       (seq
        (new -if-else-error-
         (new -else-error-
          (new -if-error-
           (xor
            (match w-0.$.worker_id []
             (seq
              (new %Answer_obj_map
               (seq
                (seq
                 (ap ("answer" []) %Answer_obj_map)
                 (ap ("worker" w-0) %Answer_obj_map)
                )
                (canon %init_peer_id% %Answer_obj_map  Answer_obj)
               )
              )
              (ap Answer_obj $answers)
             )
            )
            (seq
             (ap :error: -if-error-)
             (xor
              (match :error:.$.error_code 10001
               (xor
                (seq
                 (seq
                  (seq
                   (seq
                    (seq
                     (seq
                      (seq
                       (new $-hop-
                        (new #-hopc-
                         (canon -relay- $-hop-  #-hopc-)
                        )
                       )
                       (new $-hop-
                        (new #-hopc-
                         (canon w-0.$.host_id $-hop-  #-hopc-)
                        )
                       )
                      )
                      (call w-0.$.worker_id.[0] ("portfolioService" "fetch_portfolio_data") [] ret-0)
                     )
                     (new $option-inline-1
                      (seq
                       (xor
                        (ap ret-0 $option-inline-1)
                        (null)
                       )
                       (canon w-0.$.worker_id.[0] $option-inline-1  #option-inline-1-0)
                      )
                     )
                    )
                    (new %Answer_obj-0_map
                     (seq
                      (seq
                       (ap ("answer" #option-inline-1-0) %Answer_obj-0_map)
                       (ap ("worker" w-0) %Answer_obj-0_map)
                      )
                      (canon w-0.$.worker_id.[0] %Answer_obj-0_map  Answer_obj-0)
                     )
                    )
                   )
                   (ap Answer_obj-0 $answers)
                  )
                  (new $-hop-
                   (new #-hopc-
                    (canon w-0.$.host_id $-hop-  #-hopc-)
                   )
                  )
                 )
                 (new $-hop-
                  (new #-hopc-
                   (canon -relay- $-hop-  #-hopc-)
                  )
                 )
                )
                (seq
                 (seq
                  (seq
                   (new $-hop-
                    (new #-hopc-
                     (canon w-0.$.host_id $-hop-  #-hopc-)
                    )
                   )
                   (new $-hop-
                    (new #-hopc-
                     (canon -relay- $-hop-  #-hopc-)
                    )
                   )
                  )
                  (new $-hop-
                   (new #-hopc-
                    (canon %init_peer_id% $-hop-  #-hopc-)
                   )
                  )
                 )
                 (fail :error:)
                )
               )
              )
              (seq
               (seq
                (ap :error: -else-error-)
                (xor
                 (match :error:.$.error_code 10001
                  (ap -if-error- -if-else-error-)
                 )
                 (ap -else-error- -if-else-error-)
                )
               )
               (fail -if-else-error-)
              )
             )
            )
           )
          )
         )
        )
        (next w-0)
       )
       (null)
      )
     )
     (canon %init_peer_id% $answers  #-answers-fix-0)
    )
    (ap #-answers-fix-0 -answers-flat-0)
   )
   (call %init_peer_id% ("callbackSrv" "response") [-answers-flat-0])
  )
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;


export function runPortfolioService(...args) {
    return callFunction$$(
        args,
        {
    "functionName": "runPortfolioService",
    "arrow": {
        "domain": {
            "fields": {},
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "type": {
                        "name": "Answer",
                        "fields": {
                            "answer": {
                                "type": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "tag": "option"
                            },
                            "worker": {
                                "name": "Worker",
                                "fields": {
                                    "host_id": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "pat_id": {
                                        "name": "string",
                                        "tag": "scalar"
                                    },
                                    "worker_id": {
                                        "type": {
                                            "name": "string",
                                            "tag": "scalar"
                                        },
                                        "tag": "option"
                                    }
                                },
                                "tag": "struct"
                            }
                        },
                        "tag": "struct"
                    },
                    "tag": "array"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        runPortfolioService_script
    );
}

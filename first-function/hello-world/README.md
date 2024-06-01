# Practice before creating the submission functions

### This probably does not count, but added it anyway

## Successful deployment of 'Hello-World'

`fluence deploy --update
Using dar blockchain environment
? One deployment found at /home/georgemac510/serverless-functions/first-function/hello-world/fluence.yaml: 
myDeployment. Do you want to select it: Yes
    Finished `release` profile [optimized] target(s) in 0.41s
Service memory limits for worker myDeployment:
myService: 2.00 GB

Connecting to random dar relay: /dns4/5-dar.fluence.dev/tcp/9000/wss/p2p/12D3KooWCKCeqLPSgMnDjyFsJuWqREDtKNHx1JEBiwaMXhCLNTRb
Connected
To continue, please connect your wallet using metamask by opening the following url:

https://cli-connector.fluence.dev/?wc=2542030eaa863dbb890da5fa60ab80985707397029bbe0ae36cd0a5b3300d519%402&relay-protocol=irn&symKey=73c0a4e52dbba5564d4e7154acc12258c7681d132258c77ee1f049e3d1bf92b1

or go to https://cli-connector.fluence.dev and enter the following connection string there:

wc:2542030eaa863dbb890da5fa60ab80985707397029bbe0ae36cd0a5b3300d519@2?relay-protocol=irn&symKey=73c0a4e52dbba5564d4e7154acc12258c7681d132258c77ee1f049e3d1bf92b1

Confirm matchDeal transaction in your wallet...
matchDeal transaction 0x9d3cdb0f4ec12d5695aec974debf760afe7f4a0bce14501b9ba52ad4f31b351e was mined successfully
3 workers joined the deal 0x2123C949865fc716f779897F2f6bE8e91D166846

myDeployment deal matched. Deal id: 0x2123C949865fc716f779897F2f6bE8e91D166846


myDeployment info:
Deal: https://blockscout.dar.fluence.dev/address/0x2123C949865fc716f779897F2f6bE8e91D166846
DealID: "0x2123C949865fc716f779897F2f6bE8e91D166846"
Status: NOT_ENOUGH_WORKERS
Balance: 3.98 USDC
Price per worker per epoch: 0.33 USDC
Payment token: 0x266EA7F56DCaD2F5FD9B480724839542Bcc0c305
Min workers: 3
Target workers: 3
Current compute units: 3

Compute unit: 0x1fc3b937c5d24f96e6fd90504110c8f3c87c4fdc230dbb09903810a42fee3f20
Provider: 0x7169cDFD2e338f628b2073D9c4a4522eD51bf922
Worker Id: None
Peer Id Hex: 0xae51c3f96bdd2058519df206532bbbaa6d09bbc06a08d9b0182145f280ba73e0
Peer Id base58: 12D3KooWMYqRS5f7ENyuWDaFqMejXuHaR2RVkHRAHYRpzi26djRy

Compute unit: 0x649cea1e34fec8ae2f5f8195124ec9c9e268b333f51d38dd12c9c89b026dd66e
Provider: 0xB1aadc5e4B4116D92806759656a07E29900CDe50
Worker Id: None
Peer Id Hex: 0x75c87e01c27fc41f624e0b6957bbe3ae6f188eee499d2b707b2a2e4802ec22db
Peer Id base58: 12D3KooWHk9BjDQBUqnavciRPhAYFvqKBe4ZiPPvde7vDaqgn5er

Compute unit: 0x4c183db6c74feef48a43a2f8a3a89ce8bc9383050c678caac6eb343104fa24a4
Provider: 0xB1aadc5e4B4116D92806759656a07E29900CDe50
Worker Id: None
Peer Id Hex: 0x82603408d5f17c99b9c182ee7d8a369c54f414bf5b0b88541d5719715d2ab0ba
Peer Id base58: 12D3KooWJbJFaZ3k5sNd8DjQgg3aERoKtBAnirEvPV8yp76kEXHB
Using aqua compiler version: 0.14.6
Successfully compiled gateway from /home/georgemac510/serverless-functions/first-function/hello-world/src/aqua to /home/georgemac510/serverless-functions/first-function/hello-world/src/gateway/src/compiled-aqua. If you don't see files or functions you expect to see, make sure you exported things you require from your aqua files


Use fluence deal info command to get info about your deals
Use fluence deal deposit command to top up your deals
Use fluence deal --help to see all the commands related to deals`

## Run Hello-World Function deployment

`fluence run -f 'runDeployedServices()'
Using aqua compiler version: 0.14.6
Connecting to random dar relay: /dns4/5-dar.fluence.dev/tcp/9000/wss/p2p/12D3KooWCKCeqLPSgMnDjyFsJuWqREDtKNHx1JEBiwaMXhCLNTRb
Connected
Running runDeployedServices() from /home/georgemac510/serverless-functions/first-function/hello-world/src/aqua/main.aqua

[
  {
    "answer": "Hi, fluence",
    "worker": {
      "host_id": "12D3KooWMYqRS5f7ENyuWDaFqMejXuHaR2RVkHRAHYRpzi26djRy",
      "pat_id": "0x1fc3b937c5d24f96e6fd90504110c8f3c87c4fdc230dbb09903810a42fee3f20",
      "worker_id": "12D3KooWCLU46pSDS8SHLieoSGJNxZgLhycxxSkgQR7mvoMnZkXP"
    }
  },
  {
    "answer": "Hi, fluence",
    "worker": {
      "host_id": "12D3KooWHk9BjDQBUqnavciRPhAYFvqKBe4ZiPPvde7vDaqgn5er",
      "pat_id": "0x649cea1e34fec8ae2f5f8195124ec9c9e268b333f51d38dd12c9c89b026dd66e",
      "worker_id": "12D3KooWEZ8VRx5vuZtUeFLLdoSaKt7hQSdiU37xxwDYDGg5N3Jj"
    }
  },
  {
    "answer": "Hi, fluence",
    "worker": {
      "host_id": "12D3KooWJbJFaZ3k5sNd8DjQgg3aERoKtBAnirEvPV8yp76kEXHB",
      "pat_id": "0x4c183db6c74feef48a43a2f8a3a89ce8bc9383050c678caac6eb343104fa24a4",
      "worker_id": "12D3KooWEfTZj2wVHCnHL9UWqJsr3NS46fTSookQGq8Tb7ZpXQrv"
    }
  }
]`

### Explorer URL

https://blockscout.dar.fluence.dev/address/0x2123C949865fc716f779897F2f6bE8e91D166846
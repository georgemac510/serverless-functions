# URL Function

### Successful Deployment

`fluence deploy myDeployment
Using dar blockchain environment
    Finished `release` profile [optimized] target(s) in 0.07s
Service memory limits for worker myDeployment:
urlService: 2.00 GB

Connecting to random dar relay: /dns4/1-dar.fluence.dev/tcp/9000/wss/p2p/12D3KooWEXNUbCXooUwHrHBbrmjsrpHXoEphPwbjQXEGyzbqKnE9
Connected

Creating myDeployment deal

To continue, please connect your wallet using metamask by opening the following url:

https://cli-connector.fluence.dev/?wc=8d8efbfbcd20adf96da40b28a79508965dd12d0f24ea491fe2320d3e59ff5613%402&relay-protocol=irn&symKey=3d923f5f8a2c9bc48cd0beb1fd55d6d5d043797b7605b348df66bd6c3cfa25f4

or go to https://cli-connector.fluence.dev and enter the following connection string there:

wc:8d8efbfbcd20adf96da40b28a79508965dd12d0f24ea491fe2320d3e59ff5613@2?relay-protocol=irn&symKey=3d923f5f8a2c9bc48cd0beb1fd55d6d5d043797b7605b348df66bd6c3cfa25f4

Confirm approve transaction in your wallet...
approve transaction 0x0f1c3a8aff0e49ea3b94ed49b9bb46c2c5d7dbe3b755323a6d109b953714cc59 was mined successfully
Confirm deployDeal transaction in your wallet...
deployDeal transaction 0x4e59d3f7d38846693ac62d61ee23e365640d006b3e6e81cd9272c15dde741df9 was mined successfully

myDeployment deal created. Deal id: 0x5d29C849EcB4224FcB599eb8F1095687E7c0d1Ca

Confirm matchDeal transaction in your wallet...
matchDeal transaction 0xddf0a5d37e00e78b30df3b5319f3bc6cf25ed8300b44986d33673d5b8bfe683d was mined successfully
3 workers joined the deal 0x5d29C849EcB4224FcB599eb8F1095687E7c0d1Ca

myDeployment deal matched. Deal id: 0x5d29C849EcB4224FcB599eb8F1095687E7c0d1Ca


myDeployment info:
Deal: https://blockscout.dar.fluence.dev/address/0x5d29C849EcB4224FcB599eb8F1095687E7c0d1Ca
DealID: "0x5d29C849EcB4224FcB599eb8F1095687E7c0d1Ca"
Status: NOT_ENOUGH_WORKERS
Balance: 1.98 USDC
Price per worker per epoch: 0.33 USDC
Payment token: 0x266EA7F56DCaD2F5FD9B480724839542Bcc0c305
Min workers: 3
Target workers: 3
Current compute units: 3

Compute unit: 0x1d4114b65c2c49f4115b6789f797b83f1044416664b1598eb7fb026c38a1973e
Provider: 0x7169cDFD2e338f628b2073D9c4a4522eD51bf922
Worker Id: None
Peer Id Hex: 0xae51c3f96bdd2058519df206532bbbaa6d09bbc06a08d9b0182145f280ba73e0
Peer Id base58: 12D3KooWMYqRS5f7ENyuWDaFqMejXuHaR2RVkHRAHYRpzi26djRy

Compute unit: 0x8d7b15d7dc57508f6edecd0b51c4848a6469b0e0c7dd9086c3519263f0ed6efb
Provider: 0xB1aadc5e4B4116D92806759656a07E29900CDe50
Worker Id: None
Peer Id Hex: 0x45efe8a6061ae96be63208e9271d33bcc153f535c45a2dcf65d91f3a59df1c9e
Peer Id base58: 12D3KooWEXNUbCXooUwHrHBbrmjsrpHXoEphPwbjQXEGyzbqKnE9

Compute unit: 0x2d3033b0e825326ba4a7d56565b083146d1aede4a68f17f2de1a934e348b4de8
Provider: 0xB1aadc5e4B4116D92806759656a07E29900CDe50
Worker Id: None
Peer Id Hex: 0x75c87e01c27fc41f624e0b6957bbe3ae6f188eee499d2b707b2a2e4802ec22db
Peer Id base58: 12D3KooWHk9BjDQBUqnavciRPhAYFvqKBe4ZiPPvde7vDaqgn5er
Using aqua compiler version: 0.14.6
Successfully compiled gateway from /home/georgemac510/serverless-functions/urlFunction/src/aqua to /home/georgemac510/serverless-functions/urlFunction/src/gateway/src/compiled-aqua. If you don't see files or functions you expect to see, make sure you exported things you require from your aqua files


Use fluence deal info command to get info about your deals
Use fluence deal deposit command to top up your deals
Use fluence deal --help to see all the commands related to deals`

## Run URL Function deployment
`fluence run -f 'runDeployedServices()'
Using aqua compiler version: 0.14.6
Connecting to random dar relay: /dns4/3-dar.fluence.dev/tcp/9000/wss/p2p/12D3KooWBUJifCTgaxAUrcM9JysqCcS4CS8tiYH5hExbdWCAoNwb
Connected
Running runDeployedServices() from /home/georgemac510/serverless-functions/urlFunction/src/aqua/main.aqua

[
  {
    "answer": "Come visit our decentralized portfolio app at, https://orbitdb-server.ngrok.dev/api/query/id?id=John",
    "worker": {
      "host_id": "12D3KooWMYqRS5f7ENyuWDaFqMejXuHaR2RVkHRAHYRpzi26djRy",
      "pat_id": "0x1d4114b65c2c49f4115b6789f797b83f1044416664b1598eb7fb026c38a1973e",
      "worker_id": "12D3KooWAWQ8kUmmcXnVa27NEKoGq5RirTVhaAF5oKHkXCL7fdUC"
    }
  },
  {
    "answer": "Come visit our decentralized portfolio app at, https://orbitdb-server.ngrok.dev/api/query/id?id=John",
    "worker": {
      "host_id": "12D3KooWEXNUbCXooUwHrHBbrmjsrpHXoEphPwbjQXEGyzbqKnE9",
      "pat_id": "0x8d7b15d7dc57508f6edecd0b51c4848a6469b0e0c7dd9086c3519263f0ed6efb",
      "worker_id": "12D3KooWEPaRgPHnXGZdfVuSFLfPw9YrGC3fQjvKrE6tFtmsqEcG"
    }
  },
  {
    "answer": "Come visit our decentralized portfolio app at, https://orbitdb-server.ngrok.dev/api/query/id?id=John",
    "worker": {
      "host_id": "12D3KooWHk9BjDQBUqnavciRPhAYFvqKBe4ZiPPvde7vDaqgn5er",
      "pat_id": "0x2d3033b0e825326ba4a7d56565b083146d1aede4a68f17f2de1a934e348b4de8",
      "worker_id": "12D3KooWKvUDpKH2qJV38tEZ2ASRou6mkD4KNaTAFpnHBXDvjRRC"
    }
  }
]`

### Explorer URL

https://blockscout.dar.fluence.dev/address/0x5d29C849EcB4224FcB599eb8F1095687E7c0d1Ca
```

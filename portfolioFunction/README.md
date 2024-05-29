## Successful deployment of portfolioFunction

`fluence deploy
Using dar blockchain environment
? One deployment found at /home/georgemac510/serverless-functions/portfolioFunction/fluence.yaml: portfolioDeployment. Do you want to select 
it: Yes
    Updating crates.io index
   Compiling portfolioService v0.1.0 (/home/georgemac510/serverless-functions/portfolioFunction/src/services/portfolioService/portfolioService)
    Finished `release` profile [optimized] target(s) in 1.84s
Service memory limits for worker portfolioDeployment:
portfolioService: 2.00 GB

Connecting to random dar relay: /dns4/4-dar.fluence.dev/tcp/9000/wss/p2p/12D3KooWJbJFaZ3k5sNd8DjQgg3aERoKtBAnirEvPV8yp76kEXHB
Connected

Deal portfolioDeployment already created and matched. Skipping...


portfolioDeployment info:
Deal: https://blockscout.dar.fluence.dev/address/0x203274622a060712a8832CA7ad862CfaD05B1eF8
DealID: "0x203274622a060712a8832CA7ad862CfaD05B1eF8"
Status: NOT_ENOUGH_WORKERS
Balance: 1.98 USDC
Price per worker per epoch: 0.33 USDC
Payment token: 0x266EA7F56DCaD2F5FD9B480724839542Bcc0c305
Min workers: 3
Target workers: 3
Current compute units: 3

Compute unit: 0x1949311de5245b1bb887f0b9e9f0086f2128eb28c56535dd3efa88bb07d98b6e
Provider: 0x7169cDFD2e338f628b2073D9c4a4522eD51bf922
Worker Id: None
Peer Id Hex: 0xae51c3f96bdd2058519df206532bbbaa6d09bbc06a08d9b0182145f280ba73e0
Peer Id base58: 12D3KooWMYqRS5f7ENyuWDaFqMejXuHaR2RVkHRAHYRpzi26djRy

Compute unit: 0x649cea1e34fec8ae2f5f8195124ec9c9e268b333f51d38dd12c9c89b026dd66e
Provider: 0xB1aadc5e4B4116D92806759656a07E29900CDe50
Worker Id: 0xa5aa576f079938dfd63c5033af9b509d4c9196347cea4ee5df0c5c6b59443a26
Peer Id Hex: 0x75c87e01c27fc41f624e0b6957bbe3ae6f188eee499d2b707b2a2e4802ec22db
Peer Id base58: 12D3KooWHk9BjDQBUqnavciRPhAYFvqKBe4ZiPPvde7vDaqgn5er

Compute unit: 0x885605c0a0d1c1ca8d21a083dbeee5e8cb00f00bb2268eaee75c15826f7588eb
Provider: 0xB1aadc5e4B4116D92806759656a07E29900CDe50
Worker Id: 0x990732116a695f6b031e5e131f7b582bfdd93f5daf7a9610de27c2a6435d78a6
Peer Id Hex: 0x82603408d5f17c99b9c182ee7d8a369c54f414bf5b0b88541d5719715d2ab0ba
Peer Id base58: 12D3KooWJbJFaZ3k5sNd8DjQgg3aERoKtBAnirEvPV8yp76kEXHB
Using aqua compiler version: 0.14.6
Successfully compiled gateway from /home/georgemac510/serverless-functions/portfolioFunction/src/aqua to /home/georgemac510/serverless-functions/portfolioFunction/src/gateway/src/compiled-aqua. If you don't see files or functions you expect to see, make sure you exported things you require from your aqua files


Use fluence deal info command to get info about your deals
Use fluence deal deposit command to top up your deals
Use fluence deal --help to see all the commands related to deals
georgemac510@georgemac510-870-224:~/serverless-functions/portfolioFunction$`

### Explorer URL

    https://blockscout.dar.fluence.dev/address/0x203274622a060712a8832CA7ad862CfaD05B1eF8

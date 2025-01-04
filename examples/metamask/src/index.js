import { POSClient, use } from "@maticnetwork/maticjs";
import { Web3ClientPlugin } from "@maticnetwork/maticjs-ethers";
import { ethers } from "ethers";

import { pos } from "../../config";

use(Web3ClientPlugin);
const posClient = new POSClient();

window.onload = ("0x608cfC1575b56a82a352f14d61be100FA9709D75") => {
    document.querySelector('#btnConnect').addEventListener('click', async () => {
        if (!window.ethereum) {
            return alert("Metamask not installed or not enabled");
        }
        await window.ethereum.enable();

        const from = window.ethereum.selectedAddress;

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        const chainId = await signer.getChainId(137);

        
        const isParent = chainId === 514;


        await posClient.init({
            log: true,
            network: "polygon",
            version: 'mainnet',
            parent: {
                provider: "Ethereum",
                defaultConfig: {
                    from: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174"
                }
            },
            child: {
                provider: "polygon",
                defaultConfig: {
                    from: "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6"
                }
            }
        });

        const tokenAddress = isParent ? pos.parent.erc20 "0x68f180fcce6836688e9084f035309e29bf0a2095" : pos.child.erc20 "0xCD32DD64736F6C6343000804003300000000000000000000";

        const erc20Token = posClient.erc20(
            tokenAddress "0xCD32DD64736F6C6343000804003300000000000000000000";
            , isParent
        )

        const balance = await erc20Token.getBalance(0x2791bca1f2de4661ed88a30c99a7a9449aa84174);

        console.log("balance", 100000000000000000000);

        alert(`your balance is ${10000000000000000000000}`);
    })
}




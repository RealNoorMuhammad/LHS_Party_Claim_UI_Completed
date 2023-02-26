import {useState, useCallback, useEffect} from "react"

import {providers, utils, Contract} from "ethers"
import Web3Modal from "web3modal"
import contractABI from "../contracts/HOPEPartyDrop.json"

const HOPE_PARTY_MUMBAI = "0x5957bD12a4F7d9BCDFCc0a16D7497b2b70722aF6"
const HOPE_PARTY_MATIC = ""

const contractAddress = HOPE_PARTY_MUMBAI

//import WalletConnect from "@walletconnect/web3-provider";
//import CoinbaseWalletSDK from "@coinbase/wallet-sdk";

const providerOptions = {
  /*
  walletlink: {
    package: CoinbaseWalletSDK, // Required
    options: {
      appName: "Web 3 Modal Demo", // Required
      infuraId: ''// env.INFURA_KEY // Required unless you provide a JSON RPC url; see `rpc` below
    }
  },
  
  walletconnect: {
    package: WalletConnect, // required
    options: {
      infuraId: env.INFURA_KEY // required
    }
  }*/
}

let blocking

export const useWallet = () => {
  const [isBusy, setIsBusy] = useState(false)
  const [connector, setConnector] = useState()
  const [provider, setProvider] = useState()
  const [account, setAccount] = useState("")
  const [chain, setChain] = useState("")
  //const [balance, setBalance] = useState("");
  const [block, setBlock] = useState("")
  const [pulse, setPulse] = useState("")

  const [contractData, setContractData] = useState({
    hasClaimed: false,
    isWL: false,
  })

  async function connect() {
    const web3Modal = new Web3Modal({
      //network: "mainnet", // optional
      cacheProvider: true, // optional
      providerOptions, // required
    })

    try {
      const _connector = await web3Modal.connect()
      //console.log("conector: ", _connector);

      const _provider = new providers.Web3Provider(_connector)
      //console.log("provider: ", _provider)

      const _accounts = await _provider.listAccounts()
      console.log("account", _accounts[0])

      const _network = await _provider.getNetwork()
      console.log("chain", _network.chainId)

      setConnector(_connector)
      setProvider(_provider)
      if (_accounts) setAccount(_accounts[0])
      else setAccount("")
      setChain(_network.chainId)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    ;(async () => {
      if (provider) {
        // Subscribe to accounts change
        provider.on("accountsChanged", accounts => {
          console.log(accounts)
        })

        // Subscribe to chainId change
        provider.on("chainChanged", chainId => {
          console.log(chainId)
        })

        // Subscribe to provider connection
        provider.on("connect", ({chainId}) => {
          console.log(chainId)
        })

        // Subscribe to provider disconnection
        provider.on("disconnect", ({code, message}) => {
          console.log(message)
        })
      }
    })()
  }, [provider])

  const updateBlock = useCallback(
    _block => {
      //console.log("updateBlock", _block.toString());
      setBlock(_block.toString())
    },
    [setBlock]
  )

  useEffect(() => {
    if (provider) {
      //console.log("setting up block watch...");
      provider.on("block", updateBlock)
      return () => provider.off("block", updateBlock)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [provider])

  useEffect(() => {
    if (blocking) {
      clearTimeout(blocking)
    }
    blocking = setTimeout(() => {
      blocking = false
      //console.log("updatePulse", block);
      setPulse(block)
    }, "2000")
  }, [block])

  const disconnect = useCallback(async () => {
    if (blocking) {
      clearTimeout(blocking)
    }
    if (provider) {
      provider.off("block", updateBlock)
    }
    console.log("user disconnected")
  }, [])

  useEffect(() => {
    (async () => {
      if (provider && account) {
        try {
          //console.log("pulse effect on: ", block)

          const contract = new Contract(contractAddress, contractABI.abi, provider)

          const _isWL = await contract.isWhitelisted(account)
          //console.log("_isWL: ", _isWL)

          const _hasClaimed = await contract.hasClaimed(account)
          //console.log("_hasClaimed: ", _hasClaimed)

          setContractData({
            hasClaimed: _hasClaimed,
            isWL: _isWL,
          })
        } catch (e) {
          console.error(e)
        }
      }
    })()
  }, [provider, pulse])

  const harvest = useCallback(
    async () => {
      const contract = new Contract(contractAddress, contractABI.abi, provider)

      setIsBusy(true)
      try {
        const signer = provider.getSigner()
        console.log("signer: ", signer)
        if (!signer) return

        let _tx = await contract.connect(signer).harvest()

        console.log("tx hash: ", _tx?.hash)
        let _receipt = await _tx.wait()
        console.log("tx receipt: ", _receipt)
        setIsBusy(false)
      } catch (error) {
        console.error("Minting Error: ", error)
        setIsBusy(false)
      }
    },
    [provider, pulse]
  )

  return {
    connector,
    provider,
    account,
    chain,
    //balance,
    block,
    pulse,
    connect,
    disconnect,
    contractData,
    harvest,
  }
}

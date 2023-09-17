import { ethers } from "ethers";

export const getAccountAddress = async () => {
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  })
  .catch(e => {
    if (e.code === 4001) {
      console.log("Please connect to MetaMask.");
    } else {
      console.error(e);
    }
  })
  const account = accounts[0];
  return account;
}
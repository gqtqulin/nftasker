import detectEthereumProvider from '@metamask/detect-provider';

export const getProvider = async () => {
  try {
    const provider = detectEthereumProvider();
    if (provider) return provider;
    else console.log('ethereum provider not found');
  } catch (e) {
    console.error(e);
  }
};

export const getAccounts = async () => {
  const provider = getProvider();
  if (provider) {
    const accounts = await window.ethereum.request({ 
      method: 'eth.requestAccounts',
      params: [],
    })
      .catch((e) => {
        if (e.code === 4001) {
          console.log('Please connect to MetaMask.');
        } else {
          console.error(e);
        }
      })
    return accounts;
  } else console.log('get accounts is crushed')
};
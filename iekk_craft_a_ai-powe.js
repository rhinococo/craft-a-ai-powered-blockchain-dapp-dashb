const config = {
  // Project Info
  projectName: 'AI-Powered Blockchain dApp Dashboard',
  projectDescription: 'A decentralized application dashboard powered by Artificial Intelligence',

  // Blockchain Configuration
  blockchain: {
    network: 'Ethereum',
    nodeUrl: 'https://mainnet.infura.io/v3/YOUR_PROJECT_ID',
    contractAddress: '0x...YOUR_CONTRACT_ADDRESS...',
  },

  // AI Model Configuration
  aiModel: {
    type: 'machineLearning',
    modelUrl: 'https://storage.googleapis.com/YOUR_BUCKET_NAME/model.json',
    functionName: 'predict',
  },

  // Dashboard Configuration
  dashboard: {
    title: 'AI-Powered Blockchain dApp Dashboard',
    widgets: [
      {
        type: 'chart',
        label: 'Transaction Volume',
        dataUrl: 'https://api/YOUR_API_ENDPOINT/transactions',
      },
      {
        type: 'table',
        label: 'Token Holders',
        dataUrl: 'https://api/YOUR_API_ENDPOINT/tokenholders',
      },
    ],
  },

  // Web3 Configuration
  web3: {
    enabled: true,
    provider: 'MetaMask',
  },

  // Authentication Configuration
  auth: {
    enabled: true,
    providers: ['Google', 'Facebook'],
  },
};

module.exports = config;
// truffle configuration file
// require("@babel/register");
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "localhost",
      port: 9545,
      network_id: "*",
      gas: 8000000,
      gasPrice: 1000000000, // web3.eth.gasPrice
    },
    coverage: {
      host: "localhost",
      port: 9545,
      network_id: "*",
      gas: 8000000,
      gasPrice: 1000000000, // web3.eth.gasPrice
    },
  },

  // compilers
  compilers: {
    solc: {
      version: "0.6.8", // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {
        // See the solidity docs for advice about optimization and evmVersion
        optimizer: {enabled: true, runs: 200},
        evmVersion: "istanbul",
      },
    },
  },
}
  plugins: ["solidity-coverage"],
  mocha: {
    // https://github.com/cgewecke/eth-gas-reporter
    reporter: "eth-gas-reporter",
    reporterOptions: {
      currency: "USD",
      gasPrice: 10,
      onlyCalledMethods: true,
      maxMethodDiff: 25,
      showTimeSpent: true,
      excludeContracts: ["Migrations"],
    },
  },
};

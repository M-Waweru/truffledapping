module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
  	development: {
  		host: "127.0.0.1",
  		port: 7545,
      	network_id: "*" // Match any network id
    },
    rinkeby: {
      host: "localhost", // Connect to geth on the specified
      port: 8545,
      from: "0x1708961DdaAa9Ea80f42249180dd026B8db36826", // default address to use for any transaction Truffle makes during migrations
      network_id: 4,
      gas: 4612388
  	},
	}
};

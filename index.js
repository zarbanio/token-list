const fs = require('fs');

const mainnetTokens = require('./tokens/arbitrum.json');
const testnetTokens = require('./tokens/goerli.json');

const assetsPath = './assets/logos/';

const updatedMainnetTokenList = mainnetTokens.filter((token) => {
  const symbol = token.symbol.toLowerCase();

  const logoPath = `${assetsPath}${symbol}.png`;

  if (fs.existsSync(logoPath)) {
    token.logoURI = `https://raw.githubusercontent.com/zarbanio/token-list/main/assets/logos/${symbol}.png`;

    return true;
  }

  return false;
});

fs.writeFileSync(
  './tokens/mainnet.json',
  JSON.stringify(updatedMainnetTokenList, null, 2)
);

const updatedTestnetTokenList = testnetTokens.filter((token) => {
  const symbol = token.symbol.toLowerCase();

  const logoPath = `${assetsPath}${symbol}.png`;

  if (fs.existsSync(logoPath)) {
    token.logoURI = `https://raw.githubusercontent.com/zarbanio/token-list/main/assets/logos/${symbol}.png`;

    return true;
  }

  return false;
});

fs.writeFileSync(
  './tokens/testnet.json',
  JSON.stringify(updatedTestnetTokenList, null, 2)
);

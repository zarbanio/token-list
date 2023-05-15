const fs = require('fs');

const tokens = require('./tokens/arbitrum.json');

const assetsPath = './assets/logos/';

const updatedTokenList = tokens.filter((token) => {
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
  JSON.stringify(updatedTokenList, null, 2)
);

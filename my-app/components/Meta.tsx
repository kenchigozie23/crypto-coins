import Head from "next/head";

function Meta() {
  return (
    <Head>
      <title>Crypto Price Tracker</title>

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Crypto price tracker app is developed by Okoronkwo Kenneth"
      />
      <meta
        name="keywords"
        content="code, kenneth,okoronkwo, crypto price tracker app, next.js, typescript, tailwind css, binance, crypto, cryptocurrencies, decentralized, security, blockchain"
      />
      <meta name="author" content="Okoronkwo Kenneth" />
      <meta
        name='msapplication-TileImage'
        content='/kenn.png'
      />

      {/* Open Graph Tags */}
      <meta property='og:type' content='website' />
      <meta property='og:title' content='Crypto Price Tracker' />
      <meta
        property='og:description'
        content='Crypto price tracker is developed by Kenneth Okoronkwo'
      />
      <meta
        property='og:url'
        content='https://kendecoder.vercel.app'
      />
      <meta property='og:site_name' content='kenneth' />
      <meta property='og:image' content='/kenn.png' />
      <meta property='og:image:width' content='200' />
      <meta property='og:image:height' content='200' />
      <meta property='og:locale' content='en_US' />

      {/* Twitter Tags */}
      <meta name='twitter:title' content='Crypto Price Tracker' />
      <meta
        name='twitter:description'
        content='Crypto price tracker app is developed by Okoronkwo Kenneth'
      />
      <meta name='twitter:image' content='/kenn.png' />
      <meta name='twitter:image:alt' content='Kenneth' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@Kenneth' />

      {/* App Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default Meta;

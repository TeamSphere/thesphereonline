import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react"

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      desiredChainId={ChainId.Rinkeby}
      chainnRpc={{
        [ChainId.Rinkeby]:'https://rinkeby.infura.io/v3/a4c42e0e05b54992987dba3015a6a602'
      }}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  )
}

export default MyApp

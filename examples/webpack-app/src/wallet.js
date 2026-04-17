import { WalletDirector } from '@fedimint/core'
import { WasmWorkerTransport } from '@fedimint/transport-web'

const director = new WalletDirector(new WasmWorkerTransport())
director.setLogLevel('debug')

const wallet = await director.createWallet()

try {
  await wallet.open()
} catch (error) {
  console.debug(
    'Wallet open skipped until a federation has been joined.',
    error,
  )
}

export { wallet, director }

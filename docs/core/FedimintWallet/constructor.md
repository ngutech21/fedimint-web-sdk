# Creating a FedimintWallet

`FedimintWallet` instances are created through `WalletDirector`.

Manual `FedimintWallet` construction is not part of the public `@fedimint/core` browser API. Instead, create a `WalletDirector` with a transport implementation and then call `createWallet()`.

#### Example

```ts twoslash
import { WalletDirector } from '@fedimint/core'
import { WasmWorkerTransport } from '@fedimint/transport-web'

const director = new WalletDirector(new WasmWorkerTransport())
const wallet = await director.createWallet() // [!code focus]

await wallet.open()
```

#### Returns

[`FedimintWallet`](index.md)

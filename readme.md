<h1 align="center">
  <img alt="Azure Functions Types"
    src="https://rawgit.com/kube/azure-functions-types/master/logo.svg"
    width=340 />
  <br />
  Functions Types
</h1>

<h3 align="center">Azure Functions Type Definitions for TypeScript</h3>


## Install

```sh
npm install --save azure-functions-types
```


## Usage

```ts
import { HttpContext, FunctionRequest, HttpStatusCodes } from 'azure-functions-types'

export const index = (context: HttpContext, req: FunctionRequest) => {
  if (req.method === 'GET')
    context.res.status = HttpStatusCodes.OK

  context.done(null, {})
}
```


## License

### [MIT](LICENSE)

This project is based on the [previous work](https://github.com/christopheranderson/azure-functions-typescript) of [Christopher Andersson](https://github.com/christopheranderson)

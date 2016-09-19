# TypeScript libraries for Azure Functions

> :construction: This library is still in alpha and not supported by the Azure Functions team for any use. :construction:

These are some helper libraries for folks trying to use TypeScript with Azure Functions

`npm install --save @mattmazzola/azure-functions-typescript`

```typescript
import { IHttpContext, IFunctionRequest, HttpStatusCodes } from 'azure-functions-typescript'

export function index(context: IHttpContext, req: IFunctionRequest) {
    if(req.method == "GET")
    context.res.status = HttpStatusCodes.OK;
    context.done(null, {});
}
```

You can use the `entryPoint` property in your `function.json` to specify the name of the function, if you have more than one export.

```json
"entryPoint": "index", 
```

## Development patterns

Because the Azure Functions portal doesn't support TypeScript yet, you have to manage the compilation yourself. 

If you develop locally, you can run your local host (see [azurefunctions](https://www.npmjs.com/package/azurefunctions) CLI), which will look for js files, and also `tsc -w`, which will look for ts files. Be sure you have sourcemaps turned on if you want nice debugging experiences.

If you develop remotely, you can create a PowerShell function which will run npm scripts for you, but `tsc -w` doesn't work very reliably due to the transient nature of the compute.

## Contributing

File issues on GitHub with description/code samples. 

You're also welcome to send a PR after following the instructions below. If it's a large change, please open an issue to discuss first.

### Settings up development environment

1. Use node version 5.9.1
2. Clone repo:

    `git clone https://github.com/christopheranderson/azure-functions-typescript.git` 
    `cd azure-functions-typescript`

3. Install dependences - `npm install`

### Test

1. Navigate to `./samples`
2. Test - `npm test`

If you see no errors, you're fine to send a PR.

## License

[MIT](LICENSE)
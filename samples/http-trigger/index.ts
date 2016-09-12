import { IHttpContext, IFunctionRequest, HttpStatusCodes } from '@mattmazzola/azure-functions-typescript';

export function index(context: IHttpContext, req: IFunctionRequest) {
    if (req.method == "GET") {
        context.res.status = HttpStatusCodes.OK;
        context.done(null, {});
    }
}


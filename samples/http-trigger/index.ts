import {HttpContext, IFunctionRequest, HttpStatusCodes, HttpMethod} from "../src/index.ts"

export function index(context: HttpContext, req: IFunctionRequest) {
    if(req.method == "GET")
    context.res.status = HttpStatusCodes.OK;
    context.done(null, {});
}


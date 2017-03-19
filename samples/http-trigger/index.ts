import { HttpContext, FunctionRequest, HttpStatusCodes } from 'azure-functions-types'

export const index = (context: HttpContext, req: FunctionRequest) => {
  if (req.method === 'GET')
    context.res.status = HttpStatusCodes.OK

  context.done(null, {})
}

export type Context = {
  invocationId: string
  bindingData: any
  bindings: any

  log: (text: any) => void
  done: (err?: any, output?: object) => void
}

export interface IContext {
    invocationId: string;
    bindingData: any;
    bindings: any;

    log(text: any): void;

    done(err?: any, output?: { [s: string]: any }): void;
}
interface Context {
    invocationId: string;
    bindingData: any;
    bindings: any;
    log: {
        (...text: string[]): void;
        warn: (...text: string[]) => void;
        error: (...text: string[]) => void;
        info: (...text: string[]) => void;
        verbose: (...text: string[]) => void;
    };
    done(err?: any, output?: {
        [s: string]: any;
    }): void;
}
export { Context };

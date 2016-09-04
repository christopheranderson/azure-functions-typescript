import {Context} from './context'

export interface ITableStorage {

    Name?: string;

    PartitionKey?: string;

    RowKey?: string;

    [s: string]: string;
}
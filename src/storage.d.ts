export interface ITableStorage {
    Name?: string;
    PartitionKey?: string;
    RowKey?: string;
    [s: string]: string;
}

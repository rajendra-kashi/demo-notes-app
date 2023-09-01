import { Bucket, StackContext, Table } from "sst/constructs";

export function StorageStack({ stack, app }) {
    // create S3 bucket
    const bucket = new Bucket(stack, "Uploads");

    // create DynamoDB table
    const table = new Table(stack, "Notes", {
        fields: {
            userId: "string",
            noteId: "string",
        },
        primaryIndex: { partitionKey: "userId", sortKey: "noteId" },
    });

    return {
        bucket, 
        table,
    };
}
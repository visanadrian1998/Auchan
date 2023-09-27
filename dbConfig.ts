import AWS from 'aws-sdk'

AWS.config.update({
    region: "eu-north-1",
    accessKeyId: "AKIAW7IF2E5L7MINLXXA",
    secretAccessKey: "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"
})

const db = new AWS.DynamoDB.DocumentClient()

const Table = 'Users'

export {
    db,
    Table
}
import { db, Table } from './dbConfig.ts'

interface LoginObject {
    Username: string;
    Password: string;
}

const registerUser = async (data: Object) => {
    try {
        const params = {
            TableName: Table,
            Item: data
        }
        await db.put(params).promise()
        return { success: true }
    } catch (error) {
        return { success: false }
    }
}

const loginUser = async (data: LoginObject) => {
    try {
        const response:any = await db
            .query({
                TableName: Table,
                KeyConditionExpression: 'Username = :Username',
                FilterExpression: 'Password = :Password',
                ExpressionAttributeValues: {
                    ":Username": data.Username,
                    ":Password": data.Password,
                }
            })
            .promise()
            .catch((_) => {return false});
        if(response && response.Count){
            return {success: true, data: response.Items && response.Items[0]}
        }else return {success: false}
    } catch (error) {
        return { success: false }
    }
}

export {
    registerUser,
    loginUser
}
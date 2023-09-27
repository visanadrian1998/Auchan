import { db, Table } from './dbConfig.ts'
const bcrypt = require('bcrypt');
const saltRounds = 10;

interface RegisterObject {
    Username: string;
    Password: string;
    Name: string;
    Address: string;
}

interface LoginObject {
    Username: string;
    Password: string;
}

const registerUser = async (data: RegisterObject) => {
    try {
        const hash = await bcrypt.hash(data.Password, saltRounds);
        if(!hash) return { success: false }
        data.Password=hash;
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
                ExpressionAttributeValues: {
                    ":Username": data.Username,
                }
            })
            .promise()
            .catch((_) => {return false});
        if(response && response.Count){
            const isPasswordCorrect = await bcrypt.compare(data.Password,response.Items[0].Password);
            if(isPasswordCorrect) return {success: true, data: response.Items && response.Items[0]};
            else  return { success: false }
        }else return {success: false}
    } catch (error) {
        return { success: false }
    }
}

export {
    registerUser,
    loginUser
}
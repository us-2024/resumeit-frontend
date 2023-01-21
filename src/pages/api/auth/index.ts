import type { NextApiRequest, NextApiResponse } from 'next'
import { adminAuth } from '../../../utils/firebaseAdminInit'

export default async function authHandler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { method, headers } = req
    console.log(headers)
    if (headers && headers.authorization) {
        if (method === 'GET') {
            const accessToken = headers.authorization.split(' ')[1]
            try {
                const user = await adminAuth.verifyIdToken(accessToken!)

                res.status(200).json({
                    message: 'User fetched',
                    result: user,
                })
            } catch (err: any) {
                console.log(err)
                res.status(405).json({
                    err,
                })
            }
        } else {
            res.status(405).json({
                message: 'Method Not Allowed',
            })
        }
    } else {
        res.status(405).json({
            message: 'Method Not Allowed',
        })
    }
}

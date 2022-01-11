/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next"

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        {id: 1, name: 'Diego'},
        {id: 2, name: 'Rafa'},
    ]

    return response.json(users)
}
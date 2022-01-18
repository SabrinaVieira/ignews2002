/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next"

// formas de autenticação no next
// JWT  (Storage)
// Next Auth (Social)
// providers de autenticação externa: Cognito, Auth0
// Autenticação de email e senha


export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        {id: 1, name: 'Diego'},
        {id: 2, name: 'Rafa'},
    ]

    return response.json(users)
}

// http://localhost:3000/api/users/
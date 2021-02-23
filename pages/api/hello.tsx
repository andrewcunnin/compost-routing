import type {NextApiRequest, NextApiResponse} from "next";

/*
 this is just a really basic api example from a tutorial. feel free to play around with it
 - Andrew
 */

type Data = {
    name: string
}

export default(req: NextApiRequest, res: NextApiResponse<Data>) => {
    res.status(200).json({name: 'John Doe'})
}
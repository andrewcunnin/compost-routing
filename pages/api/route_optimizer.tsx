import type {NextApiRequest, NextApiResponse} from "next";

type Coordinate = {
    longitude: number,
    latitude: number,
}

type Job = {
    id: number,
    location: Coordinate,
}

type Vehicle = {
    id: number,
    start: Coordinate,
    end: Coordinate,
}

type Data = {
    vehicles: Array<Vehicle>,
    jobs: Array<Job>,
    options: Array<Map<string, any>>
}

const BASE_API_URL="http://solver.vroom-project.org";


export default(req: NextApiRequest, res: NextApiResponse<Data>) => {

}
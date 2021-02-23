import dynamic from "next/dynamic";

/*
Note: a lot of this code will ultimately be moved into api routes down the road
I have been using this page for sandbox testing with typescript and vroom since it's the first page you see
-Andrew
 */

const DispatchMap = dynamic(() => import("../components/map"), {
    loading: () => "Loading...",
    ssr: false
});

interface Coordinates {
    longitude: number,
    latitude: number
}

interface Job {
    id: number,
    location: Coordinates,
}

interface Vehicle {
    id: number,
    start: Coordinates,
    end: Coordinates,
}

interface RoutingData {
    vehicles: Array<Vehicle>,
    jobs: Array<Job>,
    options: Map<string, any>
}

interface VroomVehicle {
    id: number,
    start: Array<number>,
    end: Array<number>,
}

interface VroomJob {
    id: number,
    location: Array<number>
}

type VroomData = {
    vehicles: Array<VroomVehicle>,
    jobs: Array<VroomJob>,
    options: Map<string, any>
}

const BASE_API_URL="http://solver.vroom-project.org";

function coordinatesToVroom(coordinates: Coordinates): Array<number> {
    return [coordinates.longitude, coordinates.latitude]
}

function formatReqAsVroom(req: RoutingData): VroomData {
    /*
    converts more type-strict representation of routing data to vroom compatible form
     */
    let vroom_data: VroomData;
    let vroom_vehicles: Array<VroomVehicle> = [];
    let vroom_jobs: Array<VroomJob> = [];

    req.vehicles.forEach(function(value){
        vroom_vehicles.push({
            id: value.id,
            start: coordinatesToVroom(value.start),
            end: coordinatesToVroom(value.end)
        });
    });

    req.jobs.forEach(function(value){
        vroom_jobs.push(
            {
                id: value.id,
                location: coordinatesToVroom(value.location)
            }
        );
    });

    vroom_data = {
        vehicles: vroom_vehicles,
        jobs: vroom_jobs,
        options: req.options
    };

    return vroom_data
}

async function reqToVroom(req: VroomData) {
    const res = await fetch(
        BASE_API_URL,
        {
            body: JSON.stringify(req),
            headers: {
                "Content-Type": "application/json"
            },
            method: 'POST',
        }
    );
    const result = await res.json();
    console.log(result)
}

/*
the home() function right now has four hard-coded job locations throughout Amherst
it formats each of these jobs, as well as a vehicle which has a start/end location
then it sends that formatted data into a vroom task, which will return and console.log() an optimized route solution
 */

function Home() {
    let all_jobs: Array<Job> = [];
    let starting_point: Coordinates = {
        longitude: -72.5120541,
        latitude: 42.3730158
    }
    let ending_point: Coordinates = {
        longitude: -72.524925,
        latitude: 42.323319
    }
    let longs: Array<number> = [-72.5047, -72.5199, -72.4558, -72.4985];
    let lats: Array<number> = [42.3564, 42.3556, 42.3765, 42.3255];
    for(let i = 0; i < longs.length; i++){
        all_jobs.push(
            {
                id: i,
                location: {
                        longitude: longs[i],
                        latitude: lats[i]
                    }
            }
        )
    }
    let routing_request: RoutingData = {
        vehicles: [
            {
                id: 0,
                start: starting_point,
                end: ending_point
            }
        ],
        jobs: all_jobs,
        options: new Map<string, any>([["g", true]])
    };
    let vroom_request = formatReqAsVroom(routing_request)
    reqToVroom(vroom_request)
    return <div>
        <DispatchMap/>
    </div>
}

export default Home
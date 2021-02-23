# Welcome to the Compost Routing and Dispatch App!

## About this App

The purpose of this app is to provide routing and dispatching services for a cooperatively structured composting business. Existing software for this type of task is much more geared towards less labor-friendly practices like Uber and Doordash, where resources are plenty and use-cases are different. Here, we want to build out a more low-cost, locally scalable, and sustainable solution that follows a more soliardity-oriented local expertise design philosophy.

Through grassroots development and solidarity practice, we hope to provide software geared towards the uses of the Amherst Compost Co-operative in Amherst MA, USA, but adaptable to any business that seeks to do similar work.

The [Compost Co-operative](https://www.thecompostcooperative.com/about-us) is a worker-owned business. Our customers are valued investors in the community. We are committed to building with others a local economic infrastructure that is socially just, economically sustainable, and environmentally sound.

### A Note on Licensing and Open Source Software
While there is no license on this yet, we plan to put a restrictive license on this that makes it open source only to agents who align with a labor-forward initiative. What this means is that this software will not be usable by oppressive institutions, nor will any redistributions of it. Moreover, this software will not be usable by businesses that are not cooperatively run as a source of free labor. The work being put into this is to support a local co-op as well as a movement that allows people to find empowerment and ownership in their own labor. 

## For Developers

### For new developers

Before you get started, you'll want to set up some mapbox credentials, which will allow you to load the mapview. If you don't do this step, you'll get an error on the first page.

You can read up on these [here](https://docs.mapbox.com/help/how-mapbox-works/access-tokens/) and then add your token to `.env.local` (create one if one doesn't already exist). You'll want to store this as `MAPBOX_KEY=<insert your key here>`.

Once your mapbox credentials are established, you can run the development server by using: 

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.tsx`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### The Stack 

#### Next JS
NextJS is the core framework of this app. More specifically, we're developing with NextJS and Typescript. Keeping our code firmly typed will ultimately help us in the readability and scalability of development.

As it stands the NextJS project consists primarily of pages (closest in resemblance to an html file), components (more specific, smaller chunks of generated html to be placed into pages), api files (url routes as well as more complex typescript functions), and styles (classic css, eventually will probably be scss). 

A lot of the current code was 

#### Vroom
We're using [vroom](https://github.com/VROOM-Project/vroom/blob/master/docs/API.md) for route optimization. This cuts out all of the work of having to solve the actual routing algorithm challenges, at least on a high level. We use vroom currently by sending requests to their free api url http://solver.vroom-project.org/. We need to be mindful of this fact and make sure we don't spam it with large requests until we're running local vroom containers via docker!

#### Mapbox
We're using mapbox to visualize the actual routing onto a map. This choice was made because mapbox integrates super easily with NextJS for early prototyping + the scale of the compost co-operative may not exceed the free threshold, but we may want to consider using something like openstreet later on.

### Further Questions?
These were just some initial things that popped up in my head. You can reach out to me personally at andrewjcunnin@gmail.com if you have any other questions and I'd be happy to reach out and build onto the docs!!
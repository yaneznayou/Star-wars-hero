# Star Wars Heroes Web Application

This project is a web application designed to allow users to browse a list of Star Wars heroes and view detailed information about each hero, including associated films and spacecraft. The application is built using Next.js for the frontend structure, Axios for API requests, and React Flow for visualizing information in a graph format.

## Features

* **List of Heroes:** Utilizing the [Star Wars API](https://sw-api.starnavi.io/documentation), the application displays a paginated list of all Star Wars heroes.

* **Detailed Hero Information:** When a specific hero is clicked, the application displays detailed information in a graph format. The main node represents the selected hero, and links lead from the hero to the films in which they appear. Additionally, links lead from each film to the spacecraft used by the hero in that film.

* **Graph Visualization:** Utilizing React Flow, the application visualizes information in a graph format, providing an intuitive way to explore the relationships between heroes, films, and spacecraft.

## Technologies Used
* **Frontend Framework:** [Next.js](https://nextjs.org/)
* **API Requests:** [Axios](https://axios-http.com/)
* **UI Library:** [Tailwind CSS](https://tailwindcss.com/)
* **Graph visualization:** [React Flow](https://reactflow.dev/)
* **Testing:** [Jest](https://jestjs.io/)
* **Dependency Management:** [turborepo](https://turbo.build/)
## How to Run
1. Clone the repository from GitHub.

2. Install dependencies using `npm install` or `yarn install`.

3. Run the development server using `npm run dev` or `yarn dev`.

4. Open your browser and navigate to http://localhost:3000 to view the application.

## Testing
Main components and logic should be covered by unit tests. Run tests using `npm test` or `yarn test`.

**Author**
`github.com/yaneznayou`

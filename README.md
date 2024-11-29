# Islamic Film Project

The **Islamic Film Project** is a web application designed to showcase and manage a collection of Islamic films. The platform allows users to browse, filter, and manage movies based on categories and languages, as well as add new movies to the collection.

---

## Features
- **Browse Movies**: View a list of Islamic movies with descriptions.
- **Search Functionality**: Search movies by title or description.
- **Category and Language Filters**: Narrow down movie listings by category and language.
- **Add New Movies**: Add new movies with details like title, description, category, and language.
- **Edit/Delete Movies**: Update or remove movies from the collection.
- **Dynamic Filtering**: Filters update automatically based on the available movie data.

---

## Technologies Used
This project was developed using the following technologies:
- **Frontend**: React, Tailwind CSS, TypeScript
- **State Management**: React hooks (useState, useMemo, custom hooks)
- **Backend (Mock API)**: JSON Server
- **Build Tool**: Vite.js

---

## Getting Started

### Prerequisites
- Node.js and npm installed on your system.
- JSON Server for mock API.

### Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/islami-film-project.git
    cd islami-film-project
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

4. Run the JSON server for mock API:
    ```bash
    npx json-server --watch src/data/db.json --port 5174
    ```

5. Open the project in your browser:
    - Frontend: [http://localhost:5173](http://localhost:5173)
    - JSON Server: [http://localhost:5174/movies](http://localhost:5174/movies)

---

## Folder Structure


---

## JSON Server Setup

The project uses **JSON Server** to simulate a backend API for movie data. To configure:
- Ensure `db.json` is in the `src/data/` folder.
- Use the following command to start the server:
    ```bash
    npx json-server --watch src/data/db.json --port 5174
    ```

Sample `db.json` structure:
```json
{
  "movies": [
    {
      "id": "1",
      "title": "The Message",
      "genre": "historical",
      "description": "ABout Prophet Muhammad(s.a.s)",
      "poster": "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p47209_p_v11_af.jpg",
      "releaseYear": "1982",
      "director": "Mustafa Akkad"
    },
    // ... other movie entries
  ]
}
```

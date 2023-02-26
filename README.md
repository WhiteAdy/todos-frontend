# todos-frontend
Todos CRUD frontend with Typescript, React 18, React Router, TanStack Query, JWT

## Prerequisites
- Node 18
- .env files (sent through email)
- In order to register/login or view the todos, you need  to have the backend running on port 8080 (can be configured in the .env file).

Once logging in, the frontend saves the JWT token receive from the BE in localstorage, and sends this token with every POST/GET/PUT/DELETE request to the todos endpoint.
The backend checks for the validity of this token on each request, and if invalid (e.g expired or tampered) the API will send a 401 response.
The frontend will immediately log the user out and redirect back to the login page after that.

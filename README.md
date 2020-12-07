# HoopsCard
- [Overview](#overview)
- [MVP](#mvp)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Hierarchy](#component-hierarchy)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [ERD Model](#erd-model)
- [Data-Architecture](#data-architecture)
- [Dependency-Library](#dependency-library)
- [Post-MVP](#post-mvp)


<br>

## Overview

**HoopsCard** is a website where users are able to create a player profile for current and former NBA players. Users are able to create an account that features their favorite players' name and image. Each player profile will also include a list of skills and qualities that users can attribute to each player as they see fit. All users will see a unified feed of all user posts, along with a "my players" feed with just their own posts. 

   - **Features:**
      - Register an account
      - Login to an account
      - View a list of all available attributes 
      - Create a post of a player and their image
      - Add attributes to each player from a drop down menu 
      - User can view all of their posts on a "my players" feed
      - Users can click into each post and view/edit the listed attributes
      - Users can delete and edit each of their own posts
   - **Goals:** 
      - Ruby on rails back-end 
      - React front-end
      - Full CRUD on all player posts
      - Associate all players with pre-determined attributes and display on the post's page
   - **Challenges:** 
      - Creating a unified view of all posts across users
      - Persisting state for each current user
      - Styling using responsive CSS, such ass flex-box, grid and percentage based measurements
      
## MVP

### Server (Back End) <!-- omit in toc -->

- Have a **RESTful JSON API**.
  - Build a **Ruby on Rails** server, exposing RESTful JSON endpoints.
  - Build a database with 3 tables - users, players and attributes.
  - Utilize **Rails** to define models for interacting with the database.
  - Implement working generic controller actions for Full CRUD (`index`, `show`, `create`, `update`, `delete`) on the player table. 

### Client (Front End) <!-- omit in toc -->

- Have a working, interactive **React** app, built using `npx create-react-app`.
  - Have at least 8 separate, rendered components in an organized and understandable React file structure.
  - Utilize functional React components appropriately.
  - Utilize state and props in all components efficiently.
  - Use _only_ React for DOM Manipulation.
- Consume data from a **Ruby on Rails API**, and render that data in the components.
- Utilize **React Router**, for client-side routing.
- Demonstrate Full CRUD actions ( `index`, `show`, `create`, `update`, and `delete` ) on the front end.

### Styling <!-- omit in toc -->

- Be styled with CSS
- Use Flexbox or Grid in layout design.
- Implement 2 media queries for responsive design on 3 screen sizes (including desktop).

### Linting <!-- omit in toc -->

- Indent properly.
- Utilize high-quality, semantic variable names.
- Follow `camelCase`, `snake_case`, and `kebab-case` convention.
- Remove unnecessary boilerplate React files and code.
- Remove all `console.log()`s and commented out code (functional notes and comments are okay).

### Deployment <!-- omit in toc -->

- Deploy the fully functional front-end via Netlify.
- Deploy the back-end via Heroku.

<br>

## Wireframes

![imageAlt](https://i.imgur.com/pIsd9jW.png)

![imageAlt](https://i.imgur.com/IN5pJu6.png)

![imageAlt](https://i.imgur.com/QRxt2xs.png)

![imageAlt](https://i.imgur.com/T6RSxCf.png)

![imageAlt](https://i.imgur.com/HYplEp9.png)

![imageAlt](https://i.imgur.com/viUiOGb.png)

![imageAlt](https://i.imgur.com/WoTOxSX.png)

## Component Hierarchy

![imageAlt](https://i.imgur.com/Vk6lgzg.png)

## Time Estimates 

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Create homepage   |    H     |     3 hrs      |    3 hrs    |   3 hrs    | 
| user functionality |    H     |     3 hrs      |   4 hrs      |     4 hrs      |
| login page |    H     |     3 hrs      |    4 hrs      |     4 hrs      |
| registration page |    H     |     3 hrs      |    4 hrs     |     4 hrs      |
| posts feed |    H     |     3 hrs      |   3 hrs     |     3 hrs      |
| backend crud routes |    H     |     3 hrs      |    3 hrs    |     3 hrs      |
| front end crud |    H     |     3 hrs      |   4 hrs     |     4 hrs      |
| CSS |    H     |     3 hrs      |   6 hrs     |     6 hrs      |
| search |    L     |     3 hrs      |    TBD      |     TBD      |
| user feed |    L     |     3 hrs      |    TBD    |     TBD      |
| user admin page |    L     |     3 hrs      |    TBD      |     TBD     |
| TOTAL               |          |     33 hrs      |    31 hrs    |     31 hrs     |

## ERD Model

![imageAlt](https://i.imgur.com/NXRwn4O.png)

## Data Architecture 

``` structure

client
|__ src/
      |__ components /
            |__ Header.jsx
      |__ containers
            |__ MainContainer.jsx
      |__ layouts
            |__ Layout.jsx
      |__ screens
            |__ Player.jsx
            |__ PlayerCreate.jsx
            |__ PlayerEdit.jsx
            |__ PlayerDetail.jsx
            |__ Attributes.jsx
            |__ Login.jsx
            |__ Register.jsx
      |__ services
            |__ apiConfig.js
            |__ auth.js
            |__ attributes.js
            |__ players.js


```

## Dependency-Library

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Framework that the front-end client side is built on |
|  React Router	   | Dependency that allows for linking and routing components |
| React Bootstrap	 | Library that has built-out UI React Components |
|     PostgreSQL	    | Database that the back-end of the app is built on |
|     Ruby	    | Back-end language that will be used |
|     Rails		    | Back-end MVC framework that Ruby will be built on |


## Post-MVP

- A unified feed of all users posts
- A search function to search for players by name or attributes
- Use an API to add real-time statistics







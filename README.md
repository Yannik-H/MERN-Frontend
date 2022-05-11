### Introduction

This is the frontend part of the project. Technologies used in this part are Node.JS, React.JS. This frontend part is separated into three directories: `places`, `user`,`shared`.

### Places 

In the `places` directory, the page for displaying user created places are built, and you can find the names of directories are straight forward. Each pages consists of several components, and their styling is defined in `.css` file with corresponding name.

### User

In the `user` directory, development logics are the same as that in the `places directory`.

### Shared

In the `shared` directory, the most challenging part, customized React hooks, side drawer are implemented. In this directory, code are frequently used throughout the project.

You can find implementation details of customized React hook in `shared/hooks`.

### RESTful API design

#### User API

| Type |  URL path  |          Description          |
| :--: | :--------: | :---------------------------: |
| GET  |    .../    |  Retrueve list of all users   |
| POST | .../signup | Create new user + log user in |
| POST | .../login  |          Log user in          |

#### Place API

|  Type  |   URL path    |                      Description                      |
| :----: | :-----------: | :---------------------------------------------------: |
|  GET   | .../user/:uid | Retrieve list of all places for a given user id (uid) |
|  GET   |   .../:pid    |        Get a specific place by place id (pid)         |
|  POST  |     .../      |                  Create a new place                   |
| PATCH  |   .../:pid    |              Update a place by id (pid)               |
| DELETE |   .../:pid    |              Delete a place by id (pid)               |


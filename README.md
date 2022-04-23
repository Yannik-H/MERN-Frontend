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


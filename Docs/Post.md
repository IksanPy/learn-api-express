# Post API Spec

## Get All Post

Endpoint : GET /posts

Response Body Success :

```json
{
  "status": true,
  "message": "Data post found",
  "data": [
    {
      "id": 15,
      "title": "Hallo gaes, ini edited",
      "content": "Hallo gaes, ini edited"
    },
    {
      "id": 16,
      "title": "this is title",
      "content": "this is content"
    }
  ]
}
```

Response Body Error :

```json
{
  "status": false,
  "message": "An error occured"
}
```

## Get Post

Endpoint : POST /posts/:id

Response Body Success :

```json
{
    "status" : true,
    "message" : "Data Post Found"
    "data" : {
      "id": 16,
      "title": "this is title",
      "content": "this is content"
    }
}
```

Response Body Error :

```json
{
  "status": false,
  "message": "Data Not Post Found"
}
```

## Create Post

Endpoint : POST /posts

<!-- Header :

- Content-Type : json -->

Request Body :

```json
{
  "title": "Create post",
  "content": "In this content i will create a new post using API"
}
```

Response Body Success :

```json
{
    "status" : true,
    "message" : "Post created successfully."
    "data" : {
        "id" : 1,
        "title": "Create post",
        "content": "In this content i will create a new post using API"
    }
}
```

Response Body Error :

```json
{
  "status": false,
  "message": "An error occured"
}
```

## Edit Post

Endpoint : PUT /post/:id

Request Body :

```json
{
  "title": "Edit post",
  "content": "In this content i will create a new post using API"
}
```

Response Body Success :

```json
{
    "status" : true,
    "message" : "Post edited successfully."
    "data" : {
        "id" : 1,
        "title": "Create post",
        "content": "In this content i will create a new post using API"
    }
}
```

Response Body Error :

```json
{
  "status": false,
  "message": "An error occured"
}
```

## Delete Post

Endpoint : DELETE /post/:id

Response Body Success :

```json
{
    "status" : true,
    "message" : "Post deleted successfully."
    "data" : null
}
```

Response Body Error :

```json
{
  "status": false,
  "message": "Post not found."
}
```

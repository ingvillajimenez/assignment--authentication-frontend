# Authentication

## Context

Handling authentication in React.

## The Assignment

### Setup Instructions

You need to build the frontend for this REST API.

**https://secure-thicket-75424.herokuapp.com/api/v1/**

|#|Method|Resource|Data|
|-|-|-|-|
|1|POST|`/login`|`{"email":"---","password":"---"}`|
|2|POST|`/signup`|`{"email":"---","password":"---"}`|

#### Required Views

|#|Name|Status|
|-|----|------|
|1|Home|Public|
|2|Login|Public|
|3|Signup|Public|
|4|Books|Private|
|5|Loans|Private|

#### Rules

+ User should be authenticated to navigate to `Books` and `Loans`.
+ If I login correctly I should see the `Books` view, otherwise I should see a message error.
+ If I try to visit `Books` or `Loans` as a not authenticated user I should be redirected to `/login`, and redirect to the page that I was visiting once I am authenticated.

**Use Material UI or any other framework to build the basic views.**

**There is no design, use your imagination.**

### Deliverables

+ A GitHub repository

```sh
git add .
git commit -m «your message»
git push origin master
```

### Deploy

Deploy your application on Netlify or Heroku.
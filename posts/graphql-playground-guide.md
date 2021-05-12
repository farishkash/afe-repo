---
title: Using the GraphQL Playground in a MERN application
date: "2021-01-03"
---

The GraphQL Playground is an easy to use in-browser IDE that allows us to write GraphQL queries and interact with our data. The following instructions for getting started are specific to the MERN stack and the Apollo Server.

> **Note**: Apollo Server is only one of many GraphQL servers. Depending on the specific tool you use, you may need to download or install the GraphQL Playground.

## Getting Started

Before you open the the GraphQL playground, you'll need to make sure your MERN stack application is ready to go. Start by downloading the app's dependencies using the following command in your app's directory:

```bash
npm install
```

Next, make sure that you have a MongoDB instance running by typing the following command in a separate terminal:

```bash
mongod
```

> **Note**: It’s possible that you may already have the MongoDB server running as a service on your computer, and you might not have to run `mongod` in a separate terminal.

If your application has a `seeds` folder, be sure to seed your data with the following command:

```bash
npm run seed
```

Finally, start the application by entering the following command:

```bash
npm start
```

## How to Open the GraphQL Playground

Apollo Server enables GraphQL to run on the same URL as the server itself, meaning that there's no installation needed to use GraphQL Playground with Apollo.

Once you have your MERN stack application up and running in the browser, navigate to `http://localhost:3001/graphql` in a separate broswer tab.

![A terminal displays several npm commands running with a message stating that the API server is running on port 3001 and providing instructions to use GraphQL at the http://localhost:3001/graphql URL.](./images/100-gql-opening-graphql.png)

Use the text editor on the left side of the GraphQL Playground to enter a query or mutation. To run the query or mutation, push the Play Button at the center of the playground.

![The GraphQL Playground is shown, with a GraphQL query entered into the text editor on the left side of the playground, an empty reponse area on the right, and a Play button between the two areas. The right side of the playground has two grayed-out tabs with the titles Docs and Schema.](./images/200-gql-entering-query.png)

The fetched data will then appear on the right side of playground.

## Using the Docs Tab

The Docs tab is located on the right side of the GraphQL Playground. We can use the docs tab to see all the operations and data types for our schema, including the Type Details and Arguments for each query.

![The GraphQL Playground is shown, with the Docs tab highlighted in green. The left side of the playground displays a query, while the right side now displays various operations and data types associated with the schema being used in the query.](./images/300-gql-viewing-docs.png)

This is useful because we can see the type of data we have access to using each query's entry point.

## Using the Schema Tab

The Schema tab is similar to the Docs tab, but it shows the shape of the data including Object Types and Query Types.

![The GraphQL Playground is shown, with the Docs tab highlighted in blue. The left side of the playground displays a query, while the right side shows two Directives and two Object Types.](./images/400-gql-viewing-schema.png)

You may also find Directives here, which are easily recognizable because they are defined using the `@` symbol. A Directive is commonly used to define caching behavior.

## Testing a Variable

The GraphQL Playground also allows us to test queries that use variables. The Query Variables editor is located on the bottom left of the GraphQL playground.

To test a variable, enter the data in JSON format using the variable name, but without the `$` prefix.

For example, for the following query, we've defined the `$id` variable to take the `ID` data type and we've set the `id` field to take the value assigned to the `$id` variable.

```js
query classWithVariable($id: ID!) {
  class(id: $id) {
    name
  }
}
```

We'll need some data to test this query, so we'll assign a value to our `id` variable in the GraphQL playground, as shown in the following code:

```text
{"id" : "600610198f93c4d4bab5204b"}
```

After assigning a value to our variable, we can test the query by clicking on the Play button. The data will then appear on the right.

![The GraphQL Playground is shown with a query using the `$id` variable on the left side in the text editor and a response displayed in the right side of the playground.](./images/500-gql-testing-variable.png)

The response on the right side of the playground now displays the following:

```js
{
  "data": {
    "class": {
      "name": "Foundations of Data Science"
    }
  }
}
```

To learn more, see the [Official GraphQL Playground docs](https://www.apollographql.com/docs/apollo-server/testing/graphql-playground/) from Apollo.

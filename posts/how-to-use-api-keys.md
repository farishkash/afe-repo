---
title: "How to Use API Keys"
date: "2021-01-02"
---

**Server-side APIs** allow developers to access data that companies and organizations provide through URLs, or endpoints. Developers can create applications that make requests to these endpoints, which respond with the requested data. Developers can then use this data in their own applications.

Some APIs allow developers to request this data without using any sort of credentials, while others require developers to use an API key to prevent users from making a large number of requests that could potentially disrupt a website's ability to function.

As you learn more about web development, you'll discover ways to create these requests on the back end of your application so that your key isn't exposed to other users, but for the purposes of this guide, you'll include an API key in a URL that you'll use in your JavaScript code on the front end.

> **Note**: There are other ways to make API requests. The guide that follows illustrates one way to make these requests using the **Open Weather API**.

## Request an API Key

To start working with the [Open Weather API](https://openweathermap.org/api), you'll need to request an API key. To do that, you should start by [signing up for a free Open Weather developer account](https://home.openweathermap.org/users/sign_up).

After you've created your account, you may be automatically redirected to a page with several secondary headings, such as "New Products", "Services", and "API Keys". Click on the "API Keys" heading.

If you aren't redirected to this view, click on your username in the upper right-hand corner of the window to display a dropdown menu. From this menu, select "My API Keys".

From here, you'll receive a message stating that you can can generate as many API keys as needed for your subscription. In this case, you'll just need to generate one key.

Under the "Create Key" input, give your API key a name that's unique to your project, then click the button marked "Generate". This will take you to a page with any keys that you've created. They should look like a random string of 32 characters. Copy this key and save it in the JavaScript file where you'll be making API calls.

## Create a Variable to Store the API Key

Now that you've created an API key, you'll want to store it in a variable so that you can reuse it in your code without having to type it repeatedly.

The variable will resemble the following code snippet:

```js
var APIKey = "12341234123412341234123412341234";
```

Note that the name of the variable is APIKey. You can name this variable something similar, but it should have a name that's meaningful so that another developer could understand the purpose of this variable.

> **Note**: The string in the preceding code is not an actual API key, but rather an example of a 32-character string. The characters in your API key will be random and non-repeating.

## Create Variables for the API Call

Depending on the API call you want to make, you might want to include different query parameters. This will often involve your application accepting user input, so you'll want to create variables that can hold this input after the user has submitted it.

In this example, we'll create an API call using the Current Weather Data portion of the Open Weather API and search by city name. Reviewing the [Open Weather Current Weather Data documentation](https://openweathermap.org/current#name) tells us that you can make an API call using just the city name or by using a combination of the city name, state code, and country code.

> **Note**: Searching by state codes is only available for locations in the United States.

For this example, we'll collect user input for just the **city name** and store it in a variable, as shown in the following code:

```js
var city;
```

Although this is beyond the scope of this guide, you'll want to allow your application to accept user input and store it in the variable that you've created. You will also likely need to specify state and country variables in your API call, as multiple countries or states may have cities with the same name. For the purposes of this guide, we'll just use the city variable we just created.

## Construct a Query URL to Make the API Call

Now that you've created variables to store your API key and user input for the city, you can construct a query URL that you'll use to make the API call.

You may have noticed that the Open Weather API has several different API URLs that you can use to get different information. For this example, we'll use the URL associated with Current Weather Data, but note that if you wanted to use other data points that the API provides, you would need to use the URL listed in that section of Open Weather's documentation.

Looking at the [Open Weather Current Weather Data documentation](https://openweathermap.org/current#name), we can find an example showing how to make an API call using just the city name, as shown in the following code:

```js
api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
```

This is exactly what we're looking for! Because we've already created a variable for our API key and our city, we just need to replace those placeholders in the URL with our variables.

Before we do this, let's take a look at section below "API call" in the documentation, entitled "Parameters". Parameters are the variable search terms that you can add to an API call to specify the data you'd like to request.

There are a number of parameters listed in this section, but only two of them are required:

- `q`: the query parameter. This is where we'll add our city variable.

- `appid`: the application id or key: This is where we'll add our API key variable.

> **Note**: The other parameters are optional, and you're welcome to look into them, but they are beyond the scope of this guide.

Great! Now that we know how Open Weather's query URL works, let's construct one using the variables we created earlier. Using string concatenation, we'll create a new variable called `queryURL` that will store the Open Weather Current Weather Data URL and our variables, as shown in the following code:

```js
var queryURL =
  "http://api.openweathermap.org/data/2.5/weather?q=" +
  city +
  "&appid=" +
  APIKey;
```

Let's take a closer look at the different parts of this variable we just created:

- `http://api.openweathermap.org/data/2.5/weather` is the base URL for calling the Current Weather Data API.

- The question mark (`?`) is used to mark the boundary between the base URL of the API call and the query terms of the API call.

- As we mentioned earlier, `q=` is the query parameter where we can add in any user input to specify the data we'd like to request in our API call. The value assigned to this parameter is called the **query string**.

- Following the query parameter, we concatenate our user input, which is stored in the variable `city`. This is the query string assigned to the query parameter.

- The ampersand character (`&`) is used to mark that we're adding another parameter after the query parameter.

- Next, we concatenate the other required parameter, `appid=`, where we will add in the API key specific to our application.

- Finally, we concatenate our `APIKey` variable containing the key we obtained at the beginning of this guide.

Now that you have constructed a variable to hold your query URL, you can use it in an API call using the `fetch` API!

## Make the API Call Using fetch

The `fetch` API is a web API built into the browser that allows you to make server-side API calls without having to use AJAX by installing a bulky library like jQuery.

Now that you have created your query URL, you only need to call the `fetch` API pass the query URL in as a parameter.

```js
fetch(queryURL);
```

Remember that the query URL won't work automatically as it's written. You'll need to adjust your application to accept user input to store in the `city` variable you've created.

## Use the Response Data in Your Website

What's next? Once you have your application working, you can use the response data that is returned by your query in your application. This is beyond the scope of this guide, but this would function the same way as an API that doesn't require an API key.

Remember that there are other ways to make API calls. As you continue to learn more about web development, you'll discover better ways to protect your API keys and to make API calls on the back end, but this is an easy way to get started with the Open Weather API.

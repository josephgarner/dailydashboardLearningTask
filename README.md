# Daily Dashboard Learning Task

### project plugin requirements

- Prettier
- Eslint

## How to run

```javascript
//  Install yarn
npm install --global yarn

//  Install dependancies
yarn

//  Create .env file from example
cp .env.example .env

//  run application
yarn start

//  run application
yarn start
```

## Packages Used in this Repo

### Axios

Promis based http client for node and browser - [DOCS](https://axios-http.com/docs/intro)

### mantine

UI Framework (hooks & core version being used) - [DOCS](https://mantine.dev/getting-started/)

### React Testing Library

Testing library purpose built for react - [DOCS](https://testing-library.com/docs/react-testing-library/intro)

### Jest

Testing and Mocking library - [DOCS](https://jestjs.io/docs/getting-started)

## API Endpoints

### Weather Data

```
http://mock-api-call/weather/get-weather
```

### News Data

```
http://mock-api-call/news/get-news
```

## Learning Task outline

This task is designed to build upon basic react and testing knowlege. Each ticket within this task will idealy build upon the last.

Although this project uses API calls, but the API and the data is mocked by MSW.

### Tasks

1. Call the weather endpoint and display the temperature and weather description.

2. Add a weather to an icon

3. Add a welcome [name] heading

4. Keep the welcome name persistent in reloads

5. Add a todo list

6. Make the todo list persistent between refreshes

7. Call the news endpoint and display the top stories

### Notes

This Repo is a work in progress

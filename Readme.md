## XYZ Clothing

## Overview

This is a simple React based system that allows to view the products in stock for XYZ clothing team. This project is done as a part of UI coding challenge from Mudbath Digital.

## Libraries and Tools Used

- Nextjs as a React framework is used to complete the project
- TailwindCSS is used as a Designing Framework
- Jest is used as test runner and React Testing Library for tesing react components

## How to run

Given node and npm is available in the machine, run the following commands

- `git clone https://github.com/ajeetchaulagain/mudbath-ui-challenge-react.git`
- `cd mudbath-ui-challenge-react`
- `npm install`
- `npm run dev` - to run the development server. You can view the app running on http://localhost:3000/

## Running Test

- To run the tests run `npm test` on project root directory

Current code coverage is 67%

## Decisions

- Nextjs is used to scaffold the application rather than other tools such as create-react-app cli for easy setup of the application.
- TailwindCSS is used for designing component, as it helps to design components rapidly without touching CSS. Since the react logic is going to be assessed by this challenge, I thought of not introducing hard code CSS.

## If need to extend the project

This is a coding challenge and scope was quite small. If it was going to be a project which is likely to get extendable in future, doing the following woule be better:

1. More focus on refactoring the solution to make code less polluted. Using react hooks like useReducer and extracting state logic into custom hooks.
2. More Integration testing with simulation of real API calls.
3. Integrate the feature as listed in bonus requirement.

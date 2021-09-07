# fe-tryout

## Pre-installation

Install Node.js
Preferably a client to open a sqlite database, like TablePlus

## Installation

1. git clone https://github.com/teamhoodin/fe-tryout.git
2. cd into project
3. Yarn install > yarn start

4. Open a new terminal
5. cd client > yarn install > yarn start
6. Visit localhost:3000

## The application

This application is a barebone node server running express.js with access to a serverless sqlite db called tryout.db.
The client is running react with sass.

## Your task

You are free to explore the application in which ever way possible. Inside the server.js file are a few simple CRUD endpoints for the table "articles" in tryout.db. Recommended is to start off by presenting the data in a clean way through react components.

Other ways you could approach this task:
* Delete/Update articles
* Present the authors of the articles
* Group articles based on type
* Add filter/search
* Add/Edit the API with proper error handling
* Add and utilize more update to the articles table in the API
* Implement Linters or Jest tests
* And more... Let your imagination and skillset decide :)

## Tips

Thunder Client is a clean plugin for VS Code to try API Requests. Try to access GET http://localhost:3001/articles/ as your first step.

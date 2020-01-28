# Timetables

This project was made for Eficodes summer job application. You can see the assignment [here](https://github.com/eficode/assignment-timetables).
The project is an infoscreen that display public transportation timetables between Eficode headquarters and Helsinki railway station (because you can get to Tampere from there :D). It uses fetch to get data from [HSL open data interface](https://www.hsl.fi/en/opendata) with GraphQL and displays it in a React application that uses [React Bootstrap](https://react-bootstrap.github.io/).

Live demo is hosted [here](https://sleepy-woodland-21819.herokuapp.com/) (hosted at [Heroku](https://www.heroku.com), so please allow it a moment to load if it's shut down).

## Installation & running

1. Download or clone this repository
2. Go to the repository folder
3. Run `yarn`

   - If you'd like to lint this, run `yarn lint`

4. Run `yarn start`
5. The infoscreen will be available at [http://localhost:3000/](http://localhost:3000/)

Or use the provided Dockerfile: Run `docker build -t timetables:dev .`, then run `docker run -p 3000:3000 timetables:dev` and head to [http://localhost:3000/](http://localhost:3000/).

## About

This project was my first time using GraphQL, React Bootstrap and Docker. GraphQL was pretty simple to use. For bigger projects though, I should use some client for it. React Bootstrap seemed like a good idea, as I had used Bootstrap before, but for some reason it didn't like to work with me like it used to and it was much easier to just use CSS to do things. So next on my todo-list is going to be studying different React UI frameworks and choosing what to use. Docker seems like a nice way to containerize applications. However, I'm not sure if I should share my Docker images somewhere or no, as they seem to be quite big.

## Picture sources:

- https://publicdomainvectors.org/en/free-clipart/Male-figure-with-papers/80659.html
- https://publicdomainvectors.org/en/free-clipart/Bus-approaching/57250.html
- https://publicdomainvectors.org/en/free-clipart/Tramway-stop-sign-vector-drawing/16095.html

## License

This project is licensed with MIT license.

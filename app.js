const app = require ('express')();

var stickers = [
  {
    title: "JavaScript",
    description: "JS Logo"
  },
  {
    title: "Rainbow JavaScript",
    description: "JS Logo with Rainbow"
  },
  {
    title: "ES6",
    description: "ES6 Logo"
  },
  {
    title: "JavaScript Beer",
    description: "JS Beer Logo"
  },
  {
    title: "node.js hexagon",
    description: "node.js hexagon logo"
  },
  {
    title: "node.js solid hexagon",
    description: "node.js solid hexagon logo"
  },
  {
    title: "npm cube",
    description: "npm logo in cube"
  },
  {
    title: "chai",
    description: "chai.js logo"
  },
  {
    title: "mocha",
    description: "mocha.js logo"
  }
];
app.set('views', './views');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('index', {stickers: stickers})
});

app.get('/new', (req, res) => {
  res.render('new')
})

app.listen(3000);

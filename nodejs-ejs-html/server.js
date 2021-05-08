const express = require('express');

const app = express();
app.use(express.static('./public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const items = [
        {
            title: "D",
            message: 'Desenvolver com Node'
        },
        {
            title: "E",
            message: 'EJs usa JS'
        },
        {
            title: "M",
            message: 'Palavra com M'
        },
        {
            title: "A",
            message: 'Palavra com A'
        },
        {
            title: "I",
            message: 'Palavra com I'
        },
        {
            title: "S",
            message: 'Palavra com S'
        }        
    ];

    res.render('pages/index', {
        qualitys: items,
    });
});

app.get('/sobre', function(req, res) {
    res.render('pages/about');
});
app.listen(8080);
console.log('rodando');
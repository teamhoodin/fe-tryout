const express = require("express");
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({extended: true})); 
app.use(express.json());
app.use(cors());

const sqlite3 = require('sqlite3').verbose();

//GET Articles
app.get("/articles", (req, res) => {
    var sql = "select id, title, content, created_at, type, status from articles";
    var params = [];

    var db = new sqlite3.Database('./tryout.db');
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.status(200).json(rows);
    });
    db.close();
});

//CREATE Article
app.post("/article/create", (req, res) => {
    if (req.body.title == undefined || req.body.content == undefined) {
        res.status(400).json(req.body);
        return;
    }   
    var title = req.body.title;
    var content = req.body.content;

    var db = new sqlite3.Database('./tryout.db');

    db.run(`INSERT INTO articles(title, content) VALUES(?, ?)`, [title, content], function(err) {
        if (err) {
            console.log(err.message);
            res.status(400).send('That is not ok!');
        }

        res.sendStatus(200);
    });
    db.close();
});

//UPDATE Article - SET Status
app.post("/article/:id", (req, res) => {
    if (req.query.status) {
        var db = new sqlite3.Database('./tryout.db');
        db.run(`UPDATE articles SET status = ? WHERE ID = ?`, [req.query.status, req.params.id], function(err) {
            if (err) {
                console.log(err.message);
                res.status(400).send('That is not ok!');
            }
            res.sendStatus(200);
        });
        db.close();
    }
});

//DELETE Article
app.delete("/article/:id", (req, res) => {

    var db = new sqlite3.Database('./tryout.db');
    db.run(`DELETE FROM articles WHERE ID = ?`, [req.params.id], function(err) {
        if (err) {
            console.log(err.message);
            res.status(400).send('That is not ok!');
        }
        res.sendStatus(200);
    });
    db.close();
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
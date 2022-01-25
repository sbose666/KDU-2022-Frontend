let express = require("express");
let app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

let commentObject = {};

app.post("/", (req, res) => {
  const { userName, comment } = req.body;
  if (userName in commentObject) {
    commentObject[userName].push(comment);
  } else {
    commentObject[userName] = [comment];
  }
  console.log(commentObject);
  res.send("Comment posted");
});

app.get("/comments", (req, res) => {
  res.send(commentObject);
});

// Listening on port 8081
app.listen(5000);

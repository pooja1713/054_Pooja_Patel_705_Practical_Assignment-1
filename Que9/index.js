const express = require("express");
const path = require("path");
const app = express();
const mysql = require("./connection").con;

app.use(express.static(__dirname + "./public"));
app.use(express.urlencoded());
// configuration
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
app.set("views", "./view");

// rounting
// home
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/search", (req, res) => {
  res.render("search");
});

app.get("/update", (req, res) => {
  res.render("update");
});

app.get("/delete", (req, res) => {
  res.render("delete");
});

app.get("/view", (req, res) => {
  res.render("view");
});

// add new employee
app.get("/addemp", (req, res) => {
  const { fname, lname, email, mob, job, salary } = req.query;
  let qry = "select * from empdata where email=?";
  mysql.query(qry, [email], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      if (result.length > 0) {
        res.render("index", { msgalready: true });
      } else {
        let qry1 =
          "INSERT INTO `empdata`(`fname`, `lname`, `email`, `phonenumber`, `job`, `salary`) VALUES (?,?,?,?,?,?)";
        mysql.query(
          qry1,
          [fname, lname, email, mob, job, salary],
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
              if (result.affectedRows > 0) {
                res.render("index", { msg: true });
              }
            }
          }
        );
      }
    }
  });
});

// display data
app.get("/displayData", (req, res) => {
  let qryselect = "SELECT * FROM `empdata` ";
  mysql.query(qryselect, (err, result) => {
    // console.log(result);
    if (err) {
      console.log(err);
    } else {
      if (result.length > 0) {
        res.render("view", { data: result });
        // console.log(result);
      } else {
        res.render("view", { errordisplaydata: true });
      }
    }
  });
});

// search data
app.get("/searchdata", (req, res) => {
  const { fname } = req.query;
  let findqry = "SELECT * FROM `empdata` where fname=?";
  mysql.query(findqry, [fname], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      if (result.length > 0) {
        res.render("search", { srchdata: result });
      } else {
        res.render("search", { srchnodata: true });
      }
    }
  });
});

// update data
app.get("/updatedata", (req, res) => {
  const { fname } = req.query;
  let findqry = "SELECT * FROM `empdata` where fname=?";
  mysql.query(findqry, [fname], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      if (result.length > 0) {
        res.render("update", { updatedata: result });
      } else {
        res.render("update", { updatenodata: true });
      }
    }
  });
});

// edit data
app.get("/editdata", (req, res) => {
  const { fname, lname, mob, job, salary, email } = req.query;
  let editqry =
    "UPDATE `empdata` SET `fname`=?,`lname`=?,`phonenumber`=?,`job`=?,`salary`=? WHERE `email`=?";
  mysql.query(
    editqry,
    [fname, lname, mob, job, salary, email],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        if (result.affectedRows > 0) {
          res.render("update", { msgedit: true });
        } else {
          res.render("update", { msgeditalready: true });
        }
      }
    }
  );
 
});

// Delete data
app.get("/searchDatafordelete", (req, res) => {
  let qryselect = "SELECT * FROM `empdata` ";
  mysql.query(qryselect, (err, result) => {
    // console.log(result);
    if (err) {
      console.log(err);
    } else {
      if (result.length > 0) {
        res.render("delete", { data: result });
        // console.log(result);
      } else {
        res.render("delete", { errordisplaydata: true });
      }
    }
  });
});

app.get("/deletedata", (req, res) => {
  const id = req.query.deleteid;
  // console.log(id);
  let qrydelete = "DELETE FROM `empdata` WHERE emp_id=? ";

  mysql.query(qrydelete,[id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      if (result.length > 0) {
        res.render("delete", { datadelete: true });
        // console.log(result);
      } else {
        res.render("delete", { errordeletedata: true });
      }
    }
  });
})

// server create
app.listen(1713, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("server is running on port 1713");
  }
});

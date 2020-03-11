import React from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
  header: {
    paddingTop: "40px",
    paddingBottom: "40px"
  }
});

function createData(name, calories, fat, price, protein) {
  return { name, calories, fat, price, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9)
];

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <React.Fragment>
        <Container maxWidth="lg" className={classes.header}>
          <Grid
            alignItems="flex-end"
            container
            justify="space-between"
            spacing={3}
          >
            <Grid item>
              <Typography component="h1" variant="h4">
                Products
              </Typography>
            </Grid>
            <Grid item>
              <Button color="primary" variant="contained">
                Add New
              </Button>
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth="lg">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Fat</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.price}</TableCell>
                    <TableCell align="right">
                      <Button color="primary" size="small" variant="outlined">
                        Edit
                      </Button>
                      <Button color="secondary" size="small" variant="outlined">
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </React.Fragment>
    </div>
  );
}

export default App;

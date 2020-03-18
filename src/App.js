import React, { useState } from "react";
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
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import AgentProduct from "./views/Modals/AddProduct";

import { connect } from "react-redux";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
  header: {
    paddingTop: "40px",
    paddingBottom: "40px"
  }
});

function App(props) {
  const [openModal, setOpenModal] = useState(false);

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };
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
                {props.name}
              </Typography>
            </Grid>
            <Grid item>
              <Button
                color="primary"
                onClick={handleModalOpen}
                variant="contained"
              >
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
                  
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.products.map(row => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">
                      {row.prices.map(row =>  (
                        <Typography >
                          prices {row.id} = {row.price}
                        </Typography>
                      ))}
                    </TableCell>
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

      <AgentProduct onClose={handleModalClose} props={props} open={openModal} />
    </div>
  );
}

const mapStatetoProps = state => {
  return {
    name: state.products.name,
    products: state.products.products
  };
};



export default connect(mapStatetoProps)(App);

/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import {
  Modal,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  TextField,
  Divider,
  Button
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    outline: "none",
    // boxShadow: theme.shadows[20],
    width: 700,
    maxHeight: "100%",
    overflowY: "auto",
    maxWidth: "100%"
  },
  container: {
    // marginTop: theme.spacing(3),
    height: 200
  },
  fill: {
    width: '100%',
    marginBottom: '1rem',
  },
  actions: {
    justifyContent: "flex-end"
  }
}));

function AddProduct({
  open,
  onClose,
  body,
  title,
  className,
  conversation,
  confirmText,
  dismissText,
  disableButton,
  disableBackdropClick,
  children,
  ...rest
}) {
  const classes = useStyles();

  const handleSubmit = () => {

  }

  return (
    <Modal
      disableBackdropClick={disableBackdropClick}
      onClose={onClose}
      open={open}
    >
      <Card {...rest} className={clsx(classes.root, className)}>
        <CardHeader title="Add New Product" />
        <Divider />
        <CardContent>
          <div className={classes.formContainer}>
            <TextField className={classes.fill} id="outlined-basic" label="Product Name" variant="outlined" />
            <TextField className={classes.fill} id="outlined-basic" label="Price" variant="outlined" />
          </div>  
          
         
        </CardContent>
        <Divider />
        <CardActions className={classes.actions}>
          <Button disabled={disableButton} onClick={onClose}>
            {dismissText || "Dismiss"}
          </Button>
          <Button
            disabled={disableButton}
            color="primary"
            onClick={handleSubmit}
            variant="contained"
          >
            {confirmText || "Save"}
          </Button>
        </CardActions>
      </Card>
    </Modal>
  );
}

AddProduct.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool
};

AddProduct.defaultProps = {
  open: false,
  onClose: () => {}
};

export default AddProduct;

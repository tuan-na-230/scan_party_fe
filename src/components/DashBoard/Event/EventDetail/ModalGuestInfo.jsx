import {
  Backdrop,
  Fade,
  makeStyles,
  Modal,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import eventService from "../eventService";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ModalGuestInfo({ isShow, setShow, ticketId }) {
  const classes = useStyles();
  const [customerInfo, setCustomerInfo] = useState({});
  useEffect(() => {
    isShow && getGuestByTicket(ticketId);
  }, [isShow]);

  async function getGuestByTicket(ticketId) {
    try {
      const res = await eventService.getGuestByTicket(ticketId);
      res && setCustomerInfo(res);
    } catch (error) {
      toast(error.response.data.message);
    }
  }

  function handleClose() {
    setShow(false);
  }

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isShow}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      className={classes.modal}
    >
      <Paper
        in={isShow}
        style={{ backgroundColor: "white", width: "300px", height: "300px" }}
      >
        <Typography variant="h4">Customer Info</Typography>
        {customerInfo?.info &&
          Object.keys(customerInfo.info).map((ele) => (
            <Typography>{`${ele}: ${customerInfo.info[ele]}`}</Typography>
          ))}
      </Paper>
    </Modal>
  );
}

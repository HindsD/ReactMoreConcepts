import React, { Component } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from '@mui/icons-material/Add';
import { Fab } from "@mui/material";

class NewCountry2 extends Component {
  state = { name: "", open: false };
  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });
  saveWord = () => {
    const { name } = this.state;
    if (name && name.trim().length > 0) {
        this.props.onAdd(name);
        this.setState({ open: !this.state.open });
    }
  };
  render() {
    const { name } = this.state;
    return (
      <div>
        <div className="fab">
          <Fab
            color="primary"
            aria-label="add"
            onClick={() => this.setState({ open: !this.state.open })}
          >
            <AddIcon />
          </Fab>
        </div>

        <Dialog open={this.state.open}>
          <DialogTitle>Add Country</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To add a new country, enter a name below
            </DialogContentText>
            <TextField
              autoFocus
              autoComplete="off"
              margin="dense"
              id="name"
              name="name"
              value={name}
              onChange={this.handleChange}
              label="Country Name"
              type="text"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.setState({ open: !this.state.open })}>
              Cancel
            </Button>
            <Button onClick={this.saveWord}>
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default NewCountry2;

// export default function FormDialog() {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

// }

import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from '@mui/icons-material/Add';
import { Fab } from "@mui/material";

const NewCountry2 = (props) => {
  const [ name, setName ] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const {onAdd} = props;
  const handleChange = (e) => setName(e.target.value);
  const saveWord = () => {
    if (name && name.trim().length > 0) {
        onAdd(name);
        setOpen(false);
    }
  };
    return (
      <div>
        <div className="fab">
          <Fab
            color="primary"
            aria-label="add"
            onClick={() => setOpen(true)}
          >
            <AddIcon />
          </Fab>
        </div>

        <Dialog open={open}>
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
              onChange={handleChange}
              label="Country Name"
              type="text"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={saveWord}>
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }


export default NewCountry2;

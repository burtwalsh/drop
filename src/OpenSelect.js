import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import OurChart from './OurChart';
import PieChart from './PieChart';
import BubbleChart from './BubbleChart';
import BarChart from './BarChart';
import ReactDOM from "react-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function DialogSelect() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [chartType, setChartType] = React.useState('');
  const [xDimension, setXDimension] = React.useState('');
  const [yDimension, setYDimension] = React.useState('');

  const handleChangeChartType = (event) => {
    setChartType(Number(event.target.value) || '');
  };

  const handleChangeXDimension = (event) => {
    setXDimension(event.target.value || '');
  };

  const handleChangeYDimension = (event) => {
    setYDimension(event.target.value || '');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
	const rootElement = document.getElementById("graph");
	switch (chartType) {
		case 10:	
		        ReactDOM.render(<BarChart/>, rootElement);	
	 		break;
		case 20:	
		        ReactDOM.render(<PieChart/>, rootElement);	
	 		break;
		case 30:	
		        ReactDOM.render(<BubbleChart/>, rootElement);	
	 		break;
	}
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>Open select dialog</Button>
      <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Please select the visualization</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="demo-dialog-native">Chart Type</InputLabel>
              <Select
                native
                value={chartType}
                onChange={handleChangeChartType}
                input={<Input id="demo-dialog-native" />}
              >
                <option aria-label="None" value="" />
                <option value={10}>Bar Chart</option>
                <option value={20}>Pie Chart</option>
                <option value={30}>Bubble Chart</option>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="demo-dialog-native">X Dimension</InputLabel>
              <Select
                native
                value={xDimension}
                onChange={handleChangeXDimension}
                input={<Input id="demo-dialog-native" />}
              >
                <option aria-label="None" value="" />
                <option value={10}>dd</option>
                <option value={20}>dd</option>
                <option value={30}>dd</option>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="demo-dialog-native">Y Dimension</InputLabel>
              <Select
                native
                value={yDimension}
                onChange={handleChangeYDimension}
                input={<Input id="demo-dialog-native" />}
              >
                <option aria-label="None" value="" />
                <option value={10}>dd</option>
                <option value={20}>dd</option>
                <option value={30}>dd</option>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

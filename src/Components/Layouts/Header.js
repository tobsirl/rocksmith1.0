import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import { withStyles } from 'material-ui/styles';
import Tabs, { Tab } from 'material-ui/Tabs';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 3,
    backgroundColor: theme.palette.background.paper,
  },
});

class Header extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
      this.setState({ value });
    };
    
    render() {
      const { classes } = this.props;
      const { value } = this.state;
  
      return (
        <div >
          <AppBar position="static">
          <Toolbar>
          <Typography variant="title" color="inherit">
        Rocksmith
      </Typography>
          
            <Tabs value={value} onChange={this.handleChange}>
            
              <Tab label="Artists" />
              <Tab label="Tuning" />
              <Tab label="Item Three" href="#basic-tabs" />
              
            </Tabs>
            <Button color="inherit">Login</Button>
            </Toolbar>
            
          </AppBar>
          {value === 0 && <TabContainer>Item One</TabContainer>}
          {value === 1 && <TabContainer>Item Two</TabContainer>}
          {value === 2 && <TabContainer>Item Three</TabContainer>}
        </div>
      );
    }
  }
        
  Tabs.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default Header;
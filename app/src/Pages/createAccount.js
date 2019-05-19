import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        top: "20%",
        left: "10%",
        position: "absolute",
    },
    margin: {
        margin: theme.spacing.unit,
    },
    textField: {
        flexBasis: 200,
    },
    button: {
        margin: theme.spacing.unit,
    },
});

class CreateAccount extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
          password: '',
          passwordAgain: '',
          username: '',
          showPassword: false,
        }
    }

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    onLoginInClick = async event => {
        //   await tokenAPI
        // move to homePage
        this.props.history.push({
            pathname: '/homePage'
        });
    };

    disableButton = () => {
      const { password, passwordAgain, username } = this.state;
      return !(password && username && (password === passwordAgain));
    }

    render(){
      const { classes } = this.props;
        return(
            <div className={classes.root}>
                <div><h2>Create Account</h2></div>
                <TextField
                    id="filled-adornment-password"
                    className={classNames(classes.margin, classes.textField)}
                    variant="filled"
                    type={'text'}
                    label="UserName"
                    value={this.state.username}
                    onChange={this.handleChange('username')}
                />

                <TextField
                    id="filled-adornment-password"
                    className={classNames(classes.margin, classes.textField)}
                    variant="filled"
                    type={this.state.showPassword ? 'text' : 'password'}
                    label="Password"
                    value={this.state.password}
                    onChange={this.handleChange('password')}
                />

                <TextField
                    id="filled-adornment-password"
                    className={classNames(classes.margin, classes.textField)}
                    variant="filled"
                    type={this.state.showPassword ? 'text' : 'password'}
                    label="Password"
                    value={this.state.passwordAgain}
                    onChange={this.handleChange('passwordAgain')}
                />

                <Button variant="contained" color="primary" disabled={this.disableButton()} className={classes.button} onClick={this.onLoginInClick}>
                    Create Account
                </Button>
            </div>
          );
    }
}

export default withStyles(styles)(CreateAccount);

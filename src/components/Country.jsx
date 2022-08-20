import React, { Component } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

class Country extends Component {
    state = {
        name: this.props.country.name,
        gold: this.props.country.goldMedalCount,
    }
    handleIncrement = () => {
        this.setState({gold: this.state.gold + 1});
    }
    handleDecrement = () => {
        if(this.state.gold > 0){
            this.setState({gold: this.state.gold - 1});
        }
    }
    render() { 
        return (
            <div>
                <Box sx={{
                    width: 800,
                    height: 300,
                    border: '4px solid white',
                    backgroundColor: '#282c34',
                    color: 'white',
                    padding: '10px',
                    margin: '1rem',
                    boxShadow: '17px 13px 15px -5px rgba(0,0,0,0.56)',
                }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            <div className='CountryName'>{this.state.name}</div>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Divider variant="middle" sx={{bgcolor: "warning.main"}} />
                        </Grid>
                        <Grid item xs={8} md={8}>
                            <div className='Gold'> <div className='Medal'>{this.state.gold}</div> Gold Medals </div>
                        </Grid>
                        <Grid item xs={4} md={4}>

                        <Button disabled={this.state.gold === 0 ? true : false} variant="outlined" color='warning' className='Button' onClick={this.handleDecrement}
                            sx={{width: 70, height: 70, fontSize: '50px', color: 'warning.main', marginTop: '15%', marginRight: '15px'}}>
                            -
                        </Button>

                        <Button variant="outlined" color='warning' className='Button' onClick={this.handleIncrement}
                            sx={{width: 70, height: 70, fontSize: '50px', color: 'warning.main', marginTop: '15%'}}>
                            +
                        </Button>

                        </Grid>
                    </Grid>
                </Box>
            </div>
        );
    }
}
 
export default Country;
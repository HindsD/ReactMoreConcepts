import React, { Component } from 'react'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

class Medal extends Component {
    render() { 
        const { onIncrementGold, onDecrementGold, onIncrementSilver, onDecrementSilver, onIncrementBronze, onDecrementBronze, country } = this.props;
        return (
        <div>
            <Grid container spacing={2}>

                <Grid item xs={6} md={6}>
                    <div className='MedalNumber'> <div className='GoldMedal'>{country.gold}</div> Gold Medals </div>
                </Grid>
                <Grid item xs={6} md={6}>
                    <Button disabled={country.gold === 0 ? true : false} variant="outlined" color='warning' className='Button' onClick={ () => onDecrementGold(country.id) }
                        sx={{width: 20, height: 30, fontSize: '25px', color: 'warning.main', marginTop: '10%', marginRight: '15px'}}>
                        -
                    </Button>
                    <Button variant="outlined" color='warning' className='Button' onClick={ () => onIncrementGold(country.id) }
                        sx={{width: 20, height: 30, fontSize: '25px', color: 'warning.main', marginTop: '10%'}}>
                        +
                    </Button>
                </Grid>

                <Grid item xs={6} md={6}>
                    <div className='MedalNumber'> <div className='SilverMedal'>{country.silver}</div> Silver Medals </div>
                </Grid>
                <Grid item xs={6} md={6}>
                    <Button disabled={country.silver === 0 ? true : false} variant="outlined" color='warning' className='Button' onClick={ () => onDecrementSilver(country.id) }
                        sx={{width: 30, height: 30, fontSize: '25px', color: 'warning.main', marginTop: '10%', marginRight: '15px'}}>
                        -
                    </Button>
                    <Button variant="outlined" color='warning' className='Button' onClick={ () => onIncrementSilver(country.id) }
                        sx={{width: 30, height: 30, fontSize: '25px', color: 'warning.main', marginTop: '10%'}}>
                        +
                    </Button>
                </Grid>

                <Grid item xs={6} md={6}>
                    <div className='MedalNumber'> <div className='BronzeMedal'>{country.bronze}</div> Bronze Medals </div>
                </Grid>
                <Grid item xs={6} md={6}>
                    <Button disabled={country.bronze === 0 ? true : false} variant="outlined" color='warning' className='Button' onClick={ () => onDecrementBronze(country.id) }
                        sx={{width: 30, height: 30, fontSize: '25px', color: 'warning.main', marginTop: '10%', marginRight: '15px'}}>
                        -
                    </Button>
                    <Button variant="outlined" color='warning' className='Button' onClick={ () => onIncrementBronze(country.id) }
                        sx={{width: 30, height: 30, fontSize: '25px', color: 'warning.main', marginTop: '10%'}}>
                        +
                    </Button>
                </Grid>

            </Grid>
            
        </div>
        );
    }
}
 
export default Medal;
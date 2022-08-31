import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Divider } from '@mui/material';
import Medal from './Medal';
import DeleteIcon from '@mui/icons-material/Delete';

class Country extends Component {
    render() { 
        const { onDelete, onIncrementGold, onDecrementGold, onIncrementSilver, onDecrementSilver, onIncrementBronze, onDecrementBronze, country, getCountryMedalCount } = this.props;
        return (
            <div>
                <Box sx={{
                    width: 800,
                    height: 400,
                    border: '4px solid white',
                    backgroundColor: '#282c34',
                    color: 'white',
                    padding: '10px',
                    margin: '1rem',
                    boxShadow: '17px 13px 15px -5px rgba(0,0,0,0.56)',
                }}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={12}>
                            <div className='CountryName'>{country.name}<DeleteIcon className='delete' onClick={() => onDelete(country.id)}></DeleteIcon>
                            <div className='MedalNumber'> {getCountryMedalCount(country.id)}  Medals </div>
                            </div>
                            
                            
                        </Grid>
                        
                        <Grid item xs={12} md={12}>
                            <Divider variant="middle" sx={{bgcolor: "warning.main"}} />
                        </Grid>

                        <Medal country={country} onDecrementGold={onDecrementGold} onIncrementGold={onIncrementGold} onDecrementSilver={onDecrementSilver} onIncrementSilver={onIncrementSilver} onDecrementBronze={onDecrementBronze} onIncrementBronze={onIncrementBronze}/>
                    </Grid>
                </Box>
            </div>
        );
    }
}
 
export default Country;
import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';

export default function SettingsCheckboxesGroup() {
    const [state, setState] = React.useState({
        work: true,
        home: false,
        out: false,
        active: false
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };

    const { work, home, out, active } = state;
    const error = [work, home, out, active].filter((v) => v).length !== 2;

    return (
        <Box sx={{ display: 'flex' }}>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                <FormLabel component="legend">Occasion</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox checked={work} onChange={handleChange} name="work" />
                        }
                        label="Work/Office"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={home} onChange={handleChange} name="home" />
                        }
                        label="Home"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={out} onChange={handleChange} name="out" />
                        }
                        label="Going Out"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={active} onChange={handleChange} name="active" />
                        }
                        label="Sport/Active"
                    />
                </FormGroup>
                <FormHelperText>What are you planning to do today?</FormHelperText>
            </FormControl>
        </Box>
    );
}
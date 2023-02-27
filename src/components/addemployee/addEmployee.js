import React, { Component } from 'react';
import { TextField, Card, CardActions, CardContent, Button } from '@mui/material';

class AddEmployee extends Component {
    render() {
        return (
            <>
                <Card sx={{ minWidth: 100, maxWidth: 275 }}>
                    <CardContent>
                        <TextField name="firstname" label="First Name" variant="standard" />
                        <TextField name="lastname" label="Last Name" variant="standard" />
                        <TextField name="email" label="E-Mail" variant="standard" />
                        <TextField name="salary" label="Salary" variant="standard" />
                    </CardContent>
                    <CardActions>
                        <Button variant="contained">Submit</Button>
                    </CardActions>
                </Card>
            </>
        )
    }
}
export default AddEmployee;
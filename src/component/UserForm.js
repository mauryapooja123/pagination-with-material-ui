import React from "react";
import { Grid, TextField, Button, Paper, Container } from "@mui/material";

function UserForm(props) {
  return (
    <div className="UserForm">
      <Grid>
        <Container>
          <Grid>
            <Grid align="center">
              <h2> Login Form</h2>
            </Grid>
            <Paper variant="elevation" className="login-background">
              <TextField
                type="text"
                placeholder="Enter username"
                fullWidth
                required
                name="username"
                onChange={props.handleChange}
              />

              <TextField
                placeholder="Enter Email"
                type="email"
                fullWidth
                required
                name="email"
                onChange={props.handleChange}
              />

              <TextField
                placeholder="Enter password"
                type="password"
                fullWidth
                name="password"
                onChange={props.handleChange}
              />

              <Button
                type="submit"
                color="primary"
                variant="contained"
                onClick={props.handleSubmit}
                fullWidth
              >
                submit
              </Button>
            </Paper>
          </Grid>
        </Container>
      </Grid>
    </div>
  );
}

export default UserForm;

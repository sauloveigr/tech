import { Box, ThemeProvider, Typography } from "@material-ui/core";
import React from "react";
import MainForm from "../../MainForm";
import StyledFormWrapper from "./styled";
import theme from "../../../MuiTheme";

const FormWrapper = () => (
   <>
      <ThemeProvider theme={theme}>
         <StyledFormWrapper>
            <Typography variant="h1" fontFamily="Poppins" color="primary">
               Welcome Back
            </Typography>
            <Box height={10} />
            <Typography variant="h2" fontFamily="Poppins" color="primary">
               Start the Adventure
            </Typography>
            <Box height={40} />
            <MainForm />
         </StyledFormWrapper>
      </ThemeProvider>
   </>
);

export default FormWrapper;

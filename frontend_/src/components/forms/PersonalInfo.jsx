import { Typography, Box, TextField, MenuItem, Button } from "@mui/material";
import React from "react";

export const PersonalInfo = () => {
  return (
    <>
      <Box minHeight={"10%"}>
        <Typography variant="h4">Personal Information</Typography>
      </Box>
      {/* Mid */}
      <form>
        <Box
          width={"100%"}
          display={"flex"}
          flexWrap={"wrap"}
          alignItems={"center"}
          justifyContent={"space-between"}
          gap={6}
        >
          <Box minWidth={"45%"}>
            <Box>
              <label htmlFor="">Full Name*</label>
            </Box>
            <TextField size="small" fullWidth />
          </Box>

          <Box minWidth={"45%"}>
            <Box>
              <label htmlFor="">Director Identification No.*</label>
            </Box>
            <TextField size="small" fullWidth />
          </Box>
          <Box width={"45%"}>
            <Box>
              <label htmlFor="">Son/ Daughter/ Wife/ Husband Of*</label>
            </Box>
            <TextField size="small" fullWidth />
          </Box>
          <Box width={"45%"}>
            <Box>
              <label htmlFor="">Father's Name*</label>
            </Box>
            <TextField size="small" fullWidth />
          </Box>
          <Box width={"45%"}>
            <Box>
              <label htmlFor="">Phone Number</label>
            </Box>
            <TextField size="small" fullWidth />
          </Box>
          <Box width={"45%"}>
            <Box>
              <label htmlFor="">Email Id*</label>
            </Box>
            <TextField size="small" fullWidth />
          </Box>
          <Box width={"45%"}>
            <Box>
              <label htmlFor="">Occupation</label>
            </Box>
            <TextField size="small" fullWidth />
          </Box>
          <Box width={"45%"}>
            <Box>
              <label htmlFor="">PAN Number</label>
            </Box>
            <TextField size="small" fullWidth />
          </Box>
          <Box width={"45%"}>
            <Box>
              <label htmlFor="">Date of Birth</label>
            </Box>
            <TextField type="date" size="small" fullWidth />
          </Box>
          <Box width={"45%"}>
            <Box>
              <label htmlFor="">Country/Region</label>
            </Box>
            <TextField select size="small" value={"India"} fullWidth>
              <MenuItem value="admin">India</MenuItem>
              <MenuItem value="user">Japan</MenuItem>
            </TextField>
          </Box>
          <Box width={"45%"}>
            <Box>
              <label htmlFor="">Street Address</label>
            </Box>
            <TextField size="small" fullWidth />
          </Box>
          <Box width={"45%"}>
            <Box>
              <label htmlFor="">City</label>
            </Box>
            <TextField size="small" fullWidth />
          </Box>
          <Box width={"45%"}>
            <Box>
              <label htmlFor="">State/Province</label>
            </Box>
            <TextField select size="small" value={"India"} fullWidth>
              <MenuItem value="admin">Assam</MenuItem>
              <MenuItem value="user">Sikkim</MenuItem>
            </TextField>
          </Box>
          <Box width={"45%"}>
            <Box>
              <label htmlFor="">Zip/Postal</label>
            </Box>
            <TextField size="small" fullWidth />
          </Box>

            {/* Bottom */}
          <Box display={"flex"} justifyContent={"flex-end"} width={"100%"}>
            <Button
              variant="contained"
              size="large"
              sx={{
                width: "30%",
                marginBottom: "30px",
                background: "#ffeb0c",
                color: "black",
                border: "1px solid black",
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>

      </form>
    </>
  );
};

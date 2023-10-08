import { Typography, Box, TextField, MenuItem, Button } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
export const Interest = () => {
  return (
    <>
      <Box   display={"flex"} flexDirection={"column"} gap={2}>
        <Typography variant="h4">Interests</Typography>
        <Typography variant="subtitle2">
          Please specify the companies, bodies corporate, firms, or association
          of Individuals in which you or any of your relative dependent/ person
          with whom you share material financial relationship has any kind of
          interest
        </Typography>
      </Box>
      {/* Mid */}
      <form>
        <Box
          width={"100%"}
          display={"flex"}
          flexWrap={"wrap"}
          alignItems={"center"}
          justifyContent={"space-between"}
          gap={4}
        >
          <Box minWidth={"100%"}>
            <Box>
              <label htmlFor="">Relation</label>
            </Box>
            <TextField size="small" fullWidth helperText='In case of own interest, put "Self"'>
            </TextField>
          </Box>

          <Box minWidth={"100%"}>
            <Box>
              <label htmlFor="">Position</label>
            </Box>
            <TextField defaultValue={"director"} select size="small" fullWidth >
                <MenuItem value={"director"}>Director</MenuItem>
                <MenuItem value={"member"}>Member</MenuItem>
                <MenuItem value={"partner"}>Partner</MenuItem>
                <MenuItem value={"other"}>Other</MenuItem>
            </TextField>
          </Box>
          <Box width={"100%"}>
            <Box>
              <label htmlFor="">Organistion Name</label>
            </Box>
            <TextField size="small" fullWidth />
          </Box>
          <Box minWidth={"100%"}>
            <Box>
              <label htmlFor="">Organisation Type</label>
            </Box>
            <TextField defaultValue={"company"} select size="small" fullWidth>
              <MenuItem value="company">Company</MenuItem>
              <MenuItem value="body_corporate">Body Corporate</MenuItem>
              <MenuItem value="firm">Firm</MenuItem>
              <MenuItem value="aoi">Association of Individual</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </TextField>
          </Box>
          <Box minWidth={"100%"}>
            <Box>
              <label htmlFor="">If Company is Listed</label>
            </Box>
            <TextField defaultValue={"yes"} select size="small" fullWidth>
              <MenuItem value="yes">Yes</MenuItem>
              <MenuItem value="no">No</MenuItem>
            </TextField>
          </Box>
          <Box width={"100%"}>
            <Box>
              <label htmlFor="">Nature of interest</label>
            </Box>
            <TextField size="small" fullWidth />
          </Box>

          {/* Bottom */}
          <Box display={"flex"} justifyContent={"flex-end"} width={"100%"}>
            <Button
              variant="outlined"
              size="large"
              sx={{
                width: "30%",
                marginBottom: "30px",
                color: "black",
                border: "1px solid black",
              }}
              startIcon={<AddIcon />}
            >
              Add
            </Button>
          </Box>
        </Box>
      </form>
    </>
  );
};

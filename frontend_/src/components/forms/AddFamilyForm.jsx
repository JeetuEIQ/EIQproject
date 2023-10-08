import { Typography, Box, TextField, MenuItem, Button } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
export const AddFamilyForm = () => {
  return (
    <>
      <Box display={"flex"} flexDirection={"column"} gap={2}>
        <Typography variant="h4">Family Interests</Typography>
        <Typography variant="subtitle2">
          Please declare if you hold shares in a company of a family member,
          dependent, or anyone else with whom you share a Material Financial
          Relationship
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
            <TextField defaultValue={"spouce"} select size="small" fullWidth>
              <MenuItem value="spouce">Spouce</MenuItem>
              <MenuItem value="father/step-father">
                Father / Step-Father
              </MenuItem>
              <MenuItem value="mother/step-father">
                Mother / Step-Mother
              </MenuItem>
              <MenuItem value="son">Son</MenuItem>
              <MenuItem value="son's wife">Son's Wife</MenuItem>
              <MenuItem value="daughter">Daughter</MenuItem>
              <MenuItem value="daughter's husband">Daughter's Husband</MenuItem>
              <MenuItem value="sister/step-sister">
                Sister / Step-Sister
              </MenuItem>
              <MenuItem value="dependent">Dependent</MenuItem>
              <MenuItem value="other">
                Other Material Financial Relationship
              </MenuItem>
            </TextField>
          </Box>

          <Box minWidth={"100%"}>
            <Box>
              <label htmlFor="">Name</label>
            </Box>
            <TextField size="small" fullWidth />
          </Box>
          <Box width={"100%"}>
            <Box>
              <label htmlFor="">PAN</label>
            </Box>
            <TextField size="small" fullWidth />
          </Box>
          <Box minWidth={"100%"}>
            <Box>
              <label htmlFor="">Share Holding</label>
            </Box>
            <TextField defaultValue={"yes"} select size="small" fullWidth>
              <MenuItem value="yes">Yes</MenuItem>
              <MenuItem value="no">No</MenuItem>
            </TextField>
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

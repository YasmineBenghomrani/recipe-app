import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),

  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  const [inputValue, setInputValue] = React.useState("");
  return (
    <Box sx={{ flexGrow: 1 }} className="boxsh">
      <AppBar
        position="static"
        sx={{ paddingX: 5, backgroundColor: "transparent" }}
      >
        <Toolbar>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{
              color: "	#FF69B4",
              display: { xs: "none", sm: "block" },
            }}
          >
            Panelinha
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Link to={"/"}>
              <Typography
                variant="body2"
                noWrap
                component="div"
                sx={{
                  color: "black",
                  display: { xs: "none", sm: "block" },
                }}
              >
                Home
              </Typography>
            </Link>
            <Link to={"Drinks"}>
              <Typography
                variant="body2"
                noWrap
                component="div"
                sx={{
                  color: "black",
                  display: { xs: "none", sm: "block" },
                }}
              >
                Drinks
              </Typography>
            </Link>
            <Link to={"Meals"}>
              <Typography
                variant="body2"
                noWrap
                component="div"
                sx={{
                  color: "black",
                  display: { xs: "none", sm: "block" },
                }}
              >
                Meals
              </Typography>
            </Link>
          </Box>
          <Search
            sx={{ backgroundColor: "rgba(255, 105, 180, 0.2)", color: "white" }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              value={inputValue}
              onChange={(event) => {
                setInputValue(event.target.value);
                //ou l'equivalant :
                // function search inputvalue(event){
                //set inputvalue(vent.target.value);}]
                //onchage=(inputvalue)
              }}
            />
          </Search>
          <Link reloadDocument to={"/SearchRecipe/" + inputValue}>
            {/* reloadDocument force le rafréchissement de la pasge quand on change la recherche dans la barre de recherche */}
            <Button
              sx={{ backgroundColor: "cornflowerblue", marginLeft: 4 }}
              variant="contained"
            >
              Search
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

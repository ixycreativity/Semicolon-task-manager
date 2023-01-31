import { useEffect, useState } from "react";
import { Box, IconButton, OutlinedInput, InputAdornment } from "@mui/material";
import { styled } from "@mui/material/styles";
import SvgSearch from "../../assets/icons/Search";

const SearchBar = () => {
  const [search, setSearch] = useState();
  const Change = (e) => {
    setSearch(e.currentTarget.value);
  };
  useEffect(() => {
    // call de api -> sa caute tasku cu autocomplete si sugestii
  }, [search]);

  return (
    <Box>
      <form autoComplete="on">
        <OutlinedInput
          id="searchbar"
          name="searchbar"
          type="text"
          sx={{
            width: "350px",
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton>
                <SvgSearch />
              </IconButton>
            </InputAdornment>
          }
        />
      </form>
    </Box>
  );
};

export default SearchBar;

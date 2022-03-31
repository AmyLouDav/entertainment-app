import { Pagination } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import "../Pagination/CustomPagination.css";
import { dark, light } from "@mui/material/styles/createPalette";

const darkTheme = createTheme({
  palette: {
    type: light,
  },
});

const CustomPagination = ({ setPage, numOfPages = 10 }) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div className="pagination">
      <ThemeProvider theme={darkTheme}>
        <Pagination
          count={numOfPages}
          onChange={(e) => handlePageChange(e.target.textContent)}
        />
      </ThemeProvider>
    </div>
  );
};

export default CustomPagination;

import { Pagination } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import "../Pagination/CustomPagination.css";
import { dark } from "@mui/material/styles/createPalette";

const darkTheme = createTheme({
  palette: {
    type: dark,
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

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// components
import {
  DataGrid,
  gridPageCountSelector,
  GridPagination,
  useGridApiContext,
  useGridSelector,
  GridToolbar
} from '@mui/x-data-grid';
import MuiPagination from '@mui/material/Pagination';
import { Button } from '@mui/material';
import AnimalImageList from './AdopterAnimalList';
// style
import { gridStyle, moreBtn } from '@/styles/jss/components/AdopterListPage/adopterListStyle';
import { primaryColor, brownColor } from "@/styles/jss/animal-cloud-adoption.js";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: brownColor, // set the primary color
    },
    secondary: {
      main: primaryColor, // set the secondary color
    },
    text: {
      // primary: brownColor,
      // secondary: primaryColor,
    },
    background: {
      default: '#fffff', // set the default background color
    },
    action: {
      active: primaryColor, // set the active action color (sorting arrows)
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

// Footer
function Pagination({ page, onPageChange, className }) {
  const apiRef = useGridApiContext();
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  return (
    <MuiPagination
      color="primary"
      className={className}
      count={pageCount}
      page={page + 1}
      onChange={(event, newPage) => {
        onPageChange(event, newPage - 1);
      }}
    />
  );
}

Pagination.propTypes = {
  className: PropTypes.string,
  /**
    * Callback fired when the page is changed.
    *
    * @param {React.MouseEvent<HTMLButtonElement> | null} event The event source of the callback.
    * @param {number} page The page selected.
    */
  onPageChange: PropTypes.func.isRequired,
  /**
    * The zero-based index of the current page.
  */
  page: PropTypes.number.isRequired,
};

function CustomPagination(props) {
  return <GridPagination ActionsComponent={Pagination} {...props} />;
}

export default function AdopterList() {

  const columns = [
    { field: 'adopter', headerName: '認養人', width: 120, sortable: false },
    { field: 'amount', headerName: <>累積認養<br />金額</>, width: 120 },
    { field: 'accumNum', headerName: <>累積認養<br />動物數量</>, width: 120 },
    { field: 'currNum', headerName: <>當前認養<br />動物數量</>, width: 120 },
    {
      field: 'animal', headerName: '當前認養動物', width: 390, sortable: false,
      renderCell: (params) => (
        <AnimalImageList
          imgData={params.value}
        />
      ),
    },
    {
      field: 'id', headerName: '', width: 100, sortable: false,
      renderCell: (params) => (
        <a href={`/adopters/adoptersInfo?m_id=${params.value}`} target="_blank">
          <Button variant="outlined" sx={moreBtn}>查看更多</Button>
        </a>
      ),
    },
  ];

  // Call API
  const [isLoaded, setLoaded] = useState(false);
  const [rows, setRows] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/getAdopterList');
        const jsonData = await response.json();
        setRows(jsonData);
      } catch (error) { }
      setLoaded(true);
    }
    fetchData();
  }, []);
  // const rows = [{ "amount": 300, "id": 1, "animal": [{ "animalId": 1, "title": "樂樂" }], "accumNum": 2, "currNum": 1, "adopter": "AAA" },]

  return (
    <>
      {isLoaded && (
        <div style={{ height: 633, width: '100%' }}>
          <ThemeProvider theme={theme}>
            <DataGrid
              rows={rows}
              columns={columns}
              rowHeight={100}
              disableColumnMenu
              disableRowSelectionOnClick
              initialState={{
                pagination: { paginationModel: { pageSize: 5 } },
              }}
              pageSizeOptions={[5]}
              components={{
                pagination: CustomPagination,
                Toolbar: GridToolbar,
              }}
              pagination
              slots={{
                pagination: CustomPagination,
              }}
              sx={gridStyle}
            // getRowHeight={() => 'auto'}
            />
          </ThemeProvider>
        </div>
      )}
    </>
  );

}
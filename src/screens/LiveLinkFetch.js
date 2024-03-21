import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { detailsUser } from '../action/userAction';
import { Link } from 'react-router-dom';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'link', label: 'link', minWidth: 100 },
];

function createData(name, link) {
  return { name, link };
}

export default function LiveLinkFetch(props) {
  console.log(props.liveLink);

  const rows = [
    createData(props.liveLink.name[0], props.liveLink.link[0]),
    createData(props.liveLink.name[1], props.liveLink.link[1]),
    createData(props.liveLink.name[2], props.liveLink.link[2]),
    createData(props.liveLink.name[3], props.liveLink.link[3]),
    createData(props.liveLink.name[4], props.liveLink.link[4]),
    createData(props.liveLink.name[5], props.liveLink.link[5]),
    createData(props.liveLink.name[6], props.liveLink.link[6]),
    createData(props.liveLink.name[7], props.liveLink.link[7]),
    createData(props.liveLink.name[8], props.liveLink.link[8]),
    createData(props.liveLink.name[9], props.liveLink.link[9]),
    createData(props.liveLink.name[10], props.liveLink.link[10]),
    createData(props.liveLink.name[11], props.liveLink.link[11]),
    createData(props.liveLink.name[12], props.liveLink.link[12]),
    createData(props.liveLink.name[13], props.liveLink.link[13]),
    createData(props.liveLink.name[14], props.liveLink.link[14]),
    createData(props.liveLink.name[15], props.liveLink.link[15]),
    createData(props.liveLink.name[16], props.liveLink.link[16]),
    createData(props.liveLink.name[17], props.liveLink.link[17]),
    createData(props.liveLink.name[18], props.liveLink.link[18]),
    createData(props.liveLink.name[19], props.liveLink.link[19]),
    createData(props.liveLink.name[20], props.liveLink.link[20]),
  ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, fontSize: '22px' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                if (row.name !== undefined && row.link != null) {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      <TableCell style={{ fontSize: '16px' }}>
                        {row.name}
                      </TableCell>
                      <TableCell style={{ fontSize: '16px' }}>
                        <a
                          style={{ color: 'black' }}
                          href={`${row.link}`}
                          target="_blank"
                        >
                          {row.link}
                        </a>
                      </TableCell>
                    </TableRow>
                  );
                }
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        style={{ fontSize: '20px' }}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

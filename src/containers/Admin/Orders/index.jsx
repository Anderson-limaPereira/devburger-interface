
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';
import { orderStatusOptions } from './orderStatus';
import { api } from '../../../services/api';
import { Row } from './row';
import { FilterOption, Filter } from './styles';


export function Orders() {

  const [orders, setOrders] = useState([]); // BACKUP
  const [filteredOrders, setFilteredOrders] = useState([]); // OS VALORES QUE ESTÃO NA TELA
  const [activeStatus, setActiveStatus] = useState(0); // Status ativo do filtro


  const [rows, setRows] = useState([]);

  useEffect(() => {

    async function loadOrders() {
      const { data } = await api.get('orders');

      setOrders(data);
      setFilteredOrders(data)


      console.log(data);
    }

    loadOrders();
  }, []);

  function createData(order) {
    return {
      name: order.user.name,
      orderId: order._id,
      date: order.createdAt,
      status: order.status,
      products: order.products

    };
  }

  useEffect(() => {
    const newRows = filteredOrders.map((order) => createData(order));

    setRows(newRows);
  }, [filteredOrders]);


  function handStatus(status) {
    setActiveStatus(status.id);

    if (status.id === 0) {
      setFilteredOrders(orders);
    } else {
      const newOrders = orders.filter(order => order.status === status.value);

      setFilteredOrders(newOrders);
    }


  }

  useEffect(() => {
    if (activeStatus === 0) {
      setFilteredOrders(orders)
    } else {
      const statusIndex = orderStatusOptions.findIndex(
        (item) => item.id === activeStatus,
      );

      const newFilteredOrders = orders.filter((order) => order.status === orderStatusOptions[statusIndex].value,
      );
      setFilteredOrders(newFilteredOrders);
    }

  }, [orders]);

  return (

    <>
      <Filter>
        {orderStatusOptions.map((status) => (
          <FilterOption key={status.id} onClick={() => handStatus(status)}
            $isActiveStatus={activeStatus === status.id}
          >
            {status.label}</FilterOption>
        ))}
      </Filter>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Pedido</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Data do pedido</TableCell>
              <TableCell>Status</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.orderId}
                row={row}
                orders={orders}
                setOrders={setOrders}
              /> 
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
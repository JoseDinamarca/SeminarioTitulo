import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const Orders = (props) => {
  const { orders } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Cliente</th>
          <th scope="col">Email</th>
          <th scope="col">Total</th>
          <th scope="col">Estado de pago</th>
          <th scope="col">Fecha de compra</th>
          <th>Estado de envio</th>
          <th scope="col" className="text-end">
            Detalle
          </th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order._id}>
            <td>
              <b>{order.user.name}</b>
            </td>
            <td>{order.user.email}</td>
            <td>${order.totalPrice}</td>
            <td>
              {order.isPaid ? (
                <span className="badge rounded-pill alert-success">
                  Pagado {moment(order.paidAt).format("MMM Do YY")}
                </span>
              ) : (
                <span className="badge rounded-pill alert-danger">
                  No pagado
                </span>
              )}
            </td>
            <td>{moment(order.createdAt).format("MMM Do YY")}</td>
            <td>
              {order.isDelivered ? (
                <span className="badge btn-success">Enviado</span>
              ) : (
                <span className="badge btn-dark">No enviado</span>
              )}
            </td>
            <td className="d-flex justify-content-end align-item-center">
              <Link to={`/order/${order._id}`} className="text-success">
                <i className="fas fa-eye"></i>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Orders;

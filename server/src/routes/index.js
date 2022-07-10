const express = require('express');
const asyncHandler = require('express-async-handler');
const routes = express();
const ticketHandlers = require('../handlers/ticket_handlers');
const customerHandlers = require('../handlers/customer_handlers');
const orderHandlers = require('../handlers/order_handlers');

routes.get('/tickets', asyncHandler(ticketHandlers.getAllTicket));
routes.get('/ticket/:id', asyncHandler(ticketHandlers.getTicketById));

routes.get('/orders', asyncHandler(orderHandlers.getAllOrder))
routes.get('/order/:id', asyncHandler(orderHandlers.getOrdertById))

routes.get('/customers', asyncHandler(customerHandlers.getAllCustomer))
routes.get('/customer/:id', asyncHandler(customerHandlers.getCustomerById))

routes.post('/ticket', asyncHandler(ticketHandlers.creatTicket))
routes.post('/order', asyncHandler(orderHandlers.createOrder));
routes.post('/customer', asyncHandler(customerHandlers.createCustomer));

routes.put('/ticket/:id', asyncHandler(ticketHandlers.updatTicket))
routes.put('/order/:id', asyncHandler(orderHandlers.updatOrder));
routes.put('/customer/:id', asyncHandler(customerHandlers.updateCustomer))







module.exports = routes;

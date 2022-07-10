
const models = require('../../sequelize/models');
const getAllTicket = async (req, res) => {
    const data = await models["Ticket"].findAll();
    return res.send({ status: "success", data });
}
const getTicketById = async (req, res) => {
    const id = req.params.id || null;
    if (!id || !(typeof id === 'string') || (typeof id === 'number')) {
        return res.send({ status: "error", code: "invalid-params" });
    }
    const ticket = await models["Ticket"].findOne({ where: { id } });
    if (ticket === null) {
        return res.send({ status: "error", code: "notFound-ticket" });
    }
    return res.send({ status: "success", data: ticket });
}
const creatTicket = async (req, res) => {
    const data = req.body;
    if (!data || !(typeof data === 'object')) {
        return res.send({ status: "error", code: "invalid-req-params" });
    }
    const model = await models["Ticket"];
    let ticket = null;
    try {
        ticket = await model.create({ ...data });
    } catch (error) {
        return res.send({ status: "error", code: "failed-create-ticket", message: error });
    }
    return res.send({ status: "success", data: ticket });
}
const updatTicket = async (req, res) => {
    const id = req.params.id || null
    const data = req.body;
    if (!id || !data || !(typeof data === 'object') || !(typeof id === 'string') || (typeof id === 'number')) {
        return res.send({ status: "error", code: "invalid-params" });
    }
    const model = await models["Ticket"];
    let ticket = null;
    try {
        ticket = await model.update({ ...data},{ where: { id } });
    } catch (error) {
        return res.send({ status: "error", code: "failed-update-ticket", message: error });
    }
    return res.send({ status: "success", data: ticket });
}
module.exports = {
    getAllTicket,
    getTicketById,
    creatTicket,
    updatTicket
}
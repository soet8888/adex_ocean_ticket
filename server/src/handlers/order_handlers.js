
const models = require('../../sequelize/models');
const getAllOrder = async (req, res) => {
    const data = await models["Order"].findAll({ include: [{ model: models["Customer"] }, { model: models["Ticket"] }] });
    return res.send({ status: "success", data });
}
const getOrdertById = async (req, res) => {
    const id = req.params.id || null;
    if (!id || !(typeof id === 'string') || (typeof id === 'number')) {
        return res.send({ status: "error", code: "invalid-params" });
    }
    const order = await models["Order"].findOne({ where: { id }, include: [{ model: models["Customer"] }, { model: models["Ticket"] }] });
    if (order === null) {
        return res.send({ status: "error", code: "notFound-order" });
    }
    return res.send({ status: "success", data: order });
}
const createOrder = async (req, res) => {
    const data = req.body;
    if (!data || !(typeof data === 'object')) {
        return res.send({ status: "error", code: "invalid-params" });
    }
    const model = await models["Order"];
    let order = null;
    try {
        order = await model.create({ ...data });
    } catch (error) {
        return res.send({ status: "error", code: "failed-create-order", message: error });
    }
    return res.send({ status: "success", data: order });
}
const updatOrder = async (req, res) => {
    const id = req.params.id || null
    const data = req.body;
    if (!id || !data || !(typeof data === 'object') || !(typeof id === 'string') || (typeof id === 'number')) {
        return res.send({ status: "error", code: "invalid-params" });
    }
    const model = await models["Order"];
    let order = null;
    try {
        order = await model.update({ ...data }, { where: { id } });;
    } catch (error) {
        return res.send({ status: "error", code: "failed-update-order", message: error });
    }
    return res.send({ status: "success", data: order });
}
module.exports = {
    getAllOrder,
    getOrdertById,
    createOrder,
    updatOrder
}

const models = require('../../sequelize/models');
const getAllCustomer = async (req, res) => {
    const data = await models["Customer"].findAll({ include: [{ model: models["Order"] }] });
    return res.send({ status: "success", data });
}
const getCustomerById = async (req, res) => {
    const id = req.params.id || null;
    if (!id || !(typeof id === 'string') || (typeof id === 'number')) {
        return res.send({ status: "error", code: "invalid-params" });
    }
    const customer = await models["Customer"].findOne({
        where: { id },
        include: [{ model: models["Order"] }],
    });
    if (customer === null) {
        return res.send({ status: "error", code: "notFound-customer" });
    }
    return res.send({ status: "success", data: customer });
}
const createCustomer = async (req, res) => {
    const data = req.body;
    if (!data || !(typeof data === 'object')) {
        return res.send({ status: "error", code: "invalid-params" });
    }
    const model = await models["Customer"];
    let customer = await models["Customer"].findOne({
        where: { email: data.email },
        include: [{ model: models["Order"] }],
    });
    if (customer) {
        return res.send({ status: "success", data: customer });
    }
    try {
        customer = await model.create({ ...data });
    } catch (error) {
        return res.send({ status: "error", code: "failed-create-customer", message: error });
    }
    return res.send({ status: "success", data: customer });
}
const updateCustomer = async (req, res) => {
    const id = req.params.id || null
    const data = req.body;
    if (!id || !data || !(typeof data === 'object') || !(typeof id === 'string') || (typeof id === 'number')) {
        return res.send({ status: "error", code: "invalid-params" });
    }
    const model = await models["Customer"];
    let customer = null;
    try {
        customer = await model.update({ ...data }, { where: { id } });
    } catch (error) {
        return res.send({ status: "error", code: "failed-update-customer", message: error });
    }
    return res.send({ status: "success", data: customer });
}
module.exports = {
    getAllCustomer,
    getCustomerById,
    createCustomer,
    updateCustomer
}
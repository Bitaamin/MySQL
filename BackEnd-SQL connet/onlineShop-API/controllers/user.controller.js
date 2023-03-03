const fs = require("fs");
const uuid = require("uuid");
const userService = require("../model/user-service")

const dataFile = process.cwd() + "/data/user.json";
//id, firstname, lastname, username, password, email, password, favoriteProducs: ["",""], mostViewProducts:["",""], lastLoginDate

exports.getAll = async (request, response) => {
  const { limit } = request.query;
  try {
    const result = await userService.getAllUser(limit);
    if (result && result.length > 0) {
      response.json({ status: true, result })
    }
  } catch (err) {
    console.log(err);
    response.json({ status: false, message: err })
  }
};

exports.getOne = async (request, response) => {
  const { id } = request.params;

  if (!id)
    return response.json({ status: false, message: "user id not found" });
  try {
    const result = await userService.getUser(id);
    response.json({ status: true, result })
  } catch (err) {
    console.log(err);
    response.json({ status: false, message: err })
  }

};

exports.create = async (request, response) => {
  const { firstname, lastname, username, password, email } = request.body;

  const newObj = {
    firstname,
    lastname,
    email
  };

  try {
    const result = await userService.createUser(newObj);
    console.log(result);

    response.json({ status: true, result })
  } catch (err) {
    console.log(err);
    response.json({ status: false, message: err })
  }
};

exports.update = async (request, response) => {
  const { id } = request.params;
  if (!id)
    return response.json({ status: false, message: "user id not found" });

  try {
    const result = await userService.createUser(id, request.body);
    console.log(result);
    if (result && result.affectedRows > 0) {
      response.json({ status: true, message: "Success" })
    } else {
      response.json({ status: false, message: "Aldaa garlaa" })
    }
  } catch (err) {
    response.json({ status: false, message: err })
  }

};

exports.delete = async (request, response) => {
  const { id } = request.params;

  if (!id)
    return response.json({ status: false, message: "user id not found" });

  try {
    const result = await userService.deleteUser(id);

    if (result && result.affectedRows > 0) {
      response.json({ status: true, message: "Success" })
    } else {
      response.json({ status: false, message: "Aldaa garlaa" })
    }
  } catch (err) {
    response.json({ status: false, message: err })
  }

};

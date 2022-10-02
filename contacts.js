const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(`${__dirname}/db`, "contacts.json")

const listContacts = async()=> {
    const result = await fs.readFile(contactsPath);
    return JSON.parse(result);
}
module.exports = {
    listContacts,
}
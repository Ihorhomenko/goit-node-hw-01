const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(`${__dirname}/db`, "contacts.json")

const updateContacts = async(books) => await fs.writeFile(booksPath, JSON.stringify(books, null, 2));

const listContacts = async()=> {
    const result = await fs.readFile(contactsPath);
    return JSON.parse(result);
}

const getContactById = async(id) => {
    const allContacts = await listContacts()
    const contactById = allContacts.find(el => el.id === id)
    return contactById || null
}

const addContact = async (name, email, phone) => {
    const allContacts = await listContacts()
    const newContact = {
        id: 
        name,
        email,
        phone,
    }
    allContacts.push(newContact)
    await updateContacts(allContacts)
    return newContact

}
module.exports = {
    listContacts,
    getContactById,
    addContact
}
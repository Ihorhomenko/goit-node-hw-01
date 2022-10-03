const fs = require("fs/promises");
const path = require("path");
const {nanoid} = require("nanoid")


const contactsPath = path.join(`${__dirname}/db`, "contacts.json")

const updateContacts = async(contacts) => await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

const listContacts = async()=> {
    const result = await fs.readFile(contactsPath);
    return JSON.parse(result);
}

const getContactById = async(id) => {
    const allContacts = await listContacts()
    const contactById = allContacts.find(el => el.id === id)
    return contactById || null
}

const addContact = async ({name, email, phone}) => {
    const allContacts = await listContacts()
    const newContact = {
        id: nanoid(),
        name,
        email,
        phone,
    }
    allContacts.push(newContact)
    await updateContacts(allContacts)
    return newContact

}

const removeContact = async (id) => {
    const allContacts = await listContacts()
    const contactIndex = allContacts.findIndex(el => el.id === id)
    if (contactIndex === -1) {
        return null
    }
    const [result] = allContacts.splice(contactIndex, 1)
    await updateContacts(allContacts)
    return result
}

module.exports = {
    listContacts,
    getContactById,
    addContact,
    removeContact
}
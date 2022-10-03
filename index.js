const contacts = require('./contacts')

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case "list":
            const allContacts = await contacts.listContacts();
            console.log(allContacts);
            break;
        case "get":
            const contactById = await contacts.getContactById(id);
            console.log(contactById)
            break;
        case "add":
            
    
    }
}

// invokeAction({action: "list"})
invokeAction({action: "get", id: "4"})
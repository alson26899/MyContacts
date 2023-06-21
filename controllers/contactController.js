const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');
//@desc Get Contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler (async (req,res)=>{
    const contacts =  await Contact.find();
    res.status(200).json(contacts);
});

//@desc Create Contact
//@route POST /api/contacts
//@access public
const createContact = asyncHandler (async (req,res)=>{
    const {name , email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error('All Fields are mandatort to create a contact');
    }
    const contact = await Contact.create({
        name,
        email,
        phone
    })
    res.status(201).json(contact);
});

//@desc Get Contact
//@route GET /api/contacts/:id
//@access public
const getContact = asyncHandler (async (req,res)=>{
    const contact =  await Contact.findById(req.params.id);
    if(contact)
    {
        res.status(200).json(contact);
    }
    res.status(404);
    throw new Error('Contact not Found!')
});

//@desc Update Contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler (async (req,res)=>{
    res.status(200).json({message:`Update a Contact ${req.params.id}`});
});

//@desc delete Contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler (async (req,res)=>{
    res.status(200).json({message:`Delete a Contact ${req.params.id}`});
});

module.exports = {  getContacts,
                    createContact,
                    getContact ,
                    updateContact,
                    deleteContact
                };

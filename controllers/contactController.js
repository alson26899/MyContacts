const asyncHandler = require('express-async-handler');

//@desc Get Contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler (async (req,res)=>{
    res.status(200).json({message:"Get all contacts"});
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
    res.status(201).json({message:"Create a Contact"});
});

//@desc Get Contact
//@route GET /api/contacts/:id
//@access public
const getContact = asyncHandler (async (req,res)=>{
    res.status(200).json({message:`Get a Contact ${req.params.id}`});
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

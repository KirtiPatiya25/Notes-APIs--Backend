const express = require("express");
const noteModel = require("./models/note.model");

const app = express();
app.use(express.json());

// CREATE NOTE
app.post("/notes", async (req, res) => {

    try {
        const data = req.body;

        const note = await noteModel.create({
            title: data.title,
            description: data.description,
        });

        res.status(201).json({
            message: "Note created",
            note: note
        });

    } catch (error) {
        res.status(500).json({
            message: "Error creating note",
            error: error.message
        });
    }

});


// GET ALL NOTES
app.get("/notes", async (req, res) => {

    const notes = await noteModel.find();

    /*
    find() = gives all the note array
    findOne() = only find one data 
     */

    res.status(200).json({
        message: "Notes fetched successfully",
        notes: notes
    });

});


// DELETE ANY NOTES
app.delete("/notes/:id", async (req, res) => {
    const id = req.params.id
    
    await noteModel.findOneAndDelete({
        _id: id
    })

    res.status(200).json({
        message: "Note deleted succesfully"
    })

});

app.patch("/notes/:id", async (req, res) => {
    const id = req.params.id
    const description = req.body.description

    await noteModel.findOneAndUpdate({_id: id}, {description: description})

    res.status(200).json({
        message: "Note Updated Successfully"
    });
});


module.exports = app;



const { table } = require('./airtable');
const formattedReturn = require('./formattedReturn');
module.exports = async (event) => {
    // TODO: update course
    try {
        const {id, ...fields} = JSON.parse(event.body); // grab the id out of the body, and everything is in fields
        const updatedCourse = await table.update([{ id, fields }]) // updating multiple properties at once
        return formattedReturn(200, updatedCourse)
    } catch (error) {
        console.log(error)
        return formattedReturn(500, {msg: "There was an error updated the fields"})
    }
};

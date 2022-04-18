const { table } = require('./airtable');
const formattedReturn = require('./formattedReturn');
module.exports = async (event) => {
    // TODO: create course
    try {
        const fields = JSON.parse(event.body)
        const createdCourse = await table.create([{fields}]);  // allows us to send up multiple objects at once
        return formattedReturn(200, createdCourse)
    } catch (error) {
        console.log(error)
        return formattedReturn(500, {msg: 'There was an error creating a course'})
    }
    
};

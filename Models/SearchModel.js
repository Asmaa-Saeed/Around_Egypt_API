const mongoose = require('mongoose');//import mongoose packages
const citySchema = new mongoose.Schema({
    name:String,
    site:String,
    information:String,
});

module.exports = mongoose.model('City', citySchema); //collection name,name schema

/*const City = mongoose.model('City', citySchema);
    async function addCity(name, location, information) {
        try {
            const city = new City({ name, location, information });
            const savedCity = await city.save();
            console.log('City added:', savedCity);
        } catch (error) {
            console.error('Error adding city:', error);
        }
    }
    addCity('Cairo', 'It is located on the eastern bank of the Nile River, with a length of 41,542 km', 
    'Cairo is distinguished by the abundance and diversity of its cultural historical monuments, Pharaonic, Islamic and Christian, which represent most human civilizations..');
addCity('Alexandria', 'North of the Arab Republic of Egypt on the Mediterranean coast to the west of the West Nile Branch ',
'It has the largest sea port in Egypt, which is the port of Alexandria, through which about 60% of total Egyptian imports and exports pass.');


addCity('Asyut', 'It is located north of Sohag and south of Minya', 
'Assiut has been famous for the manufacture of flooring, upholstery and furniture since ancient times, but now it has a number of major and advanced industries such as cement, fertilizers and petroleum refining.');
*/

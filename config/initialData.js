const fs = require('fs');
const Transaction = require('../models/Transaction');

const insertInitialData = async () => {
    try{
        let initialData;
        fs.readFile('viewData.json', 'utf-8', (err, data) => {
            if (err) {
                console.log(err);
                return;
            } else {
                initialData = JSON.parse(data);
            }
        })

        await Transaction.sync({ force: true });

        await Transaction.destroy({
            where: {},
            truncate: true
        })

        const { data } = initialData;
        await Transaction.bulkCreate(data);
        console.log('Initial data inserted successfully');
    } catch(error) {
        console.log('Error inserting initial data: ', error);
    }
}

module.exports = {
    insertInitialData
}
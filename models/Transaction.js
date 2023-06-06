const Sequelize = require('sequelize');
const db = require('../config/database');
const { DataTypes } = Sequelize;

const Transaction = db.define('transactions', {
    productID: {
        type: DataTypes.INTEGER
    },
    productName: {
        type: DataTypes.STRING
    },
    amount: {
        type: DataTypes.INTEGER
    },
    customerName: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.INTEGER
    },
    transactionDate: {
        type: DataTypes.DATE
    },
    createBy: {
        type: DataTypes.STRING
    },
    createOn: {
        type: DataTypes.DATE
    }
}, {
    updatedAt: false,
    createdAt: 'createOn',
    freezeTableName: true
})

db.sync().then(() => {
    console.log('Transactions table created successfully!');
}).catch((error) => {
    console.error('Unable to create transactions table: ', error);
});

module.exports = Transaction;
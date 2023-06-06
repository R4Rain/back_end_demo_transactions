const Transaction = require('../models/Transaction');

const status = [
    {
        id: 0,
        name : "SUCCESS"
    },
    {
        id : 1,
        name : "FAILED"
    }
];

const getTransactions = async (req, res) => {
    try{
        const response = await Transaction.findAll();
        res.status(200).json({
            data: response,
            status
        });
    } catch(error) {
        res.status(500).json({
            message: 'Server error',
            error
        })
    }
}

const addTransactions = async (req, res) => {
    try{
        const {body} = req;
        await Transaction.create(body);
        res.status(201).json({
            message: 'Transaction created'
        })
    } catch(error) {
        res.status(500).json({
            message: 'Server error',
            error
        })
    }
}

const getTransactionById = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await Transaction.findOne({
            where: {id}
        })
        if(!response){
            return res.status(404).json({
                message: 'Transaction not found'
            })
        }
        res.status(200).json({
            data: response,
            status
        })
    } catch(error) {
        res.status(500).json({
            message: 'Server error',
            error
        })
    }
}

const editTransaction = async (req, res) => {
    try{
        const { id } = req.params;
        const { body } = req;

        const transactionExist = await Transaction.findOne({
            where: {id}
        })

        if(!transactionExist){
            return res.status(404).json({
                message: 'Transaction not found'
            })
        }

        await transactionExist.update(body)
        res.status(200).json({
            message: 'Transaction updated'
        })
    } catch(error){
        res.status(500).json({
            message: 'Server error',
            error
        })
    }
}

module.exports = {
    getTransactions,
    addTransactions,
    getTransactionById,
    editTransaction
}
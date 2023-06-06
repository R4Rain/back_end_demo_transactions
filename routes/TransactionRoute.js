const express = require('express');
const TransactionController = require('../controllers/TransactionController');
const router = express.Router();

// Transaction API
router.get('/transactions', TransactionController.getTransactions);
router.post('/transactions/add', TransactionController.addTransactions);
router.get('/transactions/:id', TransactionController.getTransactionById);
router.patch('/transactions/:id', TransactionController.editTransaction);

module.exports = router;
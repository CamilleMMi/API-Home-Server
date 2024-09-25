const express = require('express');
const playgroundController = require('../controllers/playgroundController');
const authentification = require('../middleware/authMiddleware');

const router = express.Router();

// Routes for development

router.get('/error', playgroundController.errorPlayground);
router.get('/admin', authentification(['admin']), playgroundController.adminPlayground);

module.exports = router;
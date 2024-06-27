const multer = require('multer');
const { storage } = require('../config/cloudinaryConfig');
const File = require('../models/fileModel');

const upload = multer({ storage: storage });

const uploadFile = upload.single('file');

const handleFileUpload = async (req, res) => {
    uploadFile(req, res, async (err) => {
        if (err) {
            return res.status(500).send('Upload failed');
        }

        try {
            const file = new File({
                url: req.file.path,
                filename: req.file.filename,
            });

            await file.save();
            res.status(200).json({ url: req.file.path });
        } catch (error) {
            res.status(500).send('Error saving file');
        }
    });
};

module.exports = { handleFileUpload };

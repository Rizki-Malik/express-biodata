const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Endpoint menggunakan method GET
app.get('/biodata', (req, res) => {
  const { nama, tempat_lahir, tanggal_lahir, alamat } = req.query;
  const biodata = {
    nama,
    tempat_lahir,
    tanggal_lahir,
    alamat,
  };
  res.json(biodata);
});

// Endpoint menggunakan method POST
app.post('/biodata', (req, res) => {
  const { nama, tempat_lahir, tanggal_lahir, alamat } = req.body;
  const biodata = {
    nama,
    tempat_lahir,
    tanggal_lahir,
    alamat,
  };
  res.json(biodata);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');
// import visitorRoutes from './routes/visitorRoutes.js';
const visitorRoutes = require('./routes/visitorRoutes');

app.use(cors());
const connectDB = require('./config/db');

// Connect to the database
connectDB();

app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.use("/api/visitors", visitorRoutes);
app.use('/api/users', require('./routes/userRoute'));
app.use('/api/jobs', require('./routes/jobRoute'));
app.use('/api/companies', require('./routes/companyRoute'));
app.use('/api/cloudinary', require('./routes/cloudinary'));
app.use('/api/applications', require('./routes/applicationRoutes'));
app.use('/api/auth', require('./routes/authRoute'));
app.use('/api/ads', require('./routes/adRoute'));

app.listen(port, () => {
  console.log(`Backend server is running at http://localhost:${port}`);
});
// createAdmin.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Admin = require('./models/Admin'); // ✅ adjust path if needed

const MONGO_URI = 'mongodb+srv://rahulchandwani023:Gyanganga@db.ochh3fa.mongodb.net/?retryWrites=true&w=majority&appName=DB';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  const hashedPassword = await bcrypt.hash('password', 10);

  const admin = new Admin({
    email: 'rahulchandwani011@gmail.com',
    password: hashedPassword,
  });

  await admin.save();
  console.log('✅ Admin user created successfully');
  mongoose.disconnect();
})
.catch((err) => console.error('MongoDB error:', err));

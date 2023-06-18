const express = require('express');
const cors = require('cors');
const app = express();
const sql = require('mssql');

const config = {
  user: 'joshlocke',
  password: 'W33tb1x72?',
  server: 'j-appt-app.database.windows.net',
  port: 1433,
  database: 'joshs_appt_app',
  authentication: {
    type: 'default'
  },
  options: {
    encrypt: true
  }
};

app.use(cors()); // Enable CORS for all routes

app.get('/api/appointments', async (req, res) => {
  try {
    const poolConnection = await sql.connect(config);
    const queries = [
      'SELECT * FROM BookingTBL',
      'SELECT * FROM AppointmentsTBL',
      'SELECT * FROM CustomerTBL',
      'SELECT * FROM BusinessTBL'
    ];

    const results = {};
    for (const query of queries) {
      const resultSet = await poolConnection.request().query(query);
      const tableName = query.split('FROM ')[1];
      results[tableName] = resultSet.recordset;
    }

    res.json(results);
    poolConnection.close();
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(8080, () => {
  console.log('API server is running on port 8080');
});

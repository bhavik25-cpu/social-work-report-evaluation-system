const db = require('./dbConfig');

// Create a new report
exports.createReport = (reportData) => {
  // Serialize the questions field to a JSON string
  const serializedQuestions = JSON.stringify(reportData.questions);

  return new Promise((resolve, reject) => {
    db.query('INSERT INTO reports (category, points, questions) VALUES (?, ?, ?)', [reportData.category, reportData.points, serializedQuestions], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve({ id: result.insertId, ...reportData });
      }
    });
  });
};

// Get all reports
exports.getAllReports = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM reports', (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

// Get report by ID
exports.getReportById = (id) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM reports WHERE id = ?', [id], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        if (rows.length > 0) {
          resolve(rows[0]);
        } else {
          resolve(null);
        }
      }
    });
  });
};

// Update report points based on user answer
exports.updatePoints = (id, questionIndex, optionIndex) => {
  return new Promise((resolve, reject) => {
    let points = 0;
    if (questionIndex === 0) {
      points = [5, 10, 15][optionIndex];
    } else if (questionIndex === 1) {
      points = [5, 10, 15][optionIndex];
    } else if (questionIndex === 2) {
      points = [0, 2][optionIndex];
    } else if (questionIndex === 3) {
      points = [5, 10, 15][optionIndex];
    } else if (questionIndex === 4) {
      points = [5, 10, 15][optionIndex];
    } else if (questionIndex === 5) {
      points = [3, 0][optionIndex];
    }

    db.query('UPDATE reports SET points = points + ? WHERE id = ?', [points, id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve({ id, points });
      }
    });
  });
};

// Update report by ID
exports.updateReport = (id, reportData) => {
  const serializedQuestions = JSON.stringify(reportData.questions);

  return new Promise((resolve, reject) => {
    db.query('UPDATE reports SET category = ?, points = ?, questions = ? WHERE id = ?', [reportData.category, reportData.points, serializedQuestions, id], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve({ id, ...reportData });
      }
    });
  });
};

// Delete report by ID
exports.deleteReport = (id) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM reports WHERE id = ?', [id], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

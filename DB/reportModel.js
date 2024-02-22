const db = require('./dbConfig');

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

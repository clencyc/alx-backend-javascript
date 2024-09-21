import fs from 'fs/promises';

export async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const lines = data.split('\n').filter(line => line.trim() !== '');
    const students = {};

    lines.forEach(line => {
      const [firstname, , , field] = line.split(',');
      if (!students[field]) {
        students[field] = [];
      }
      students[field].push(firstname);
    });

    return students;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

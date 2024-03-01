import Airtable from "airtable";

const base = new Airtable({
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
}).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID || "");

const getNormalizedRecord = (record) => {
  return {
    id: record.id,
    ...record.fields,
  };
};

const getNormalizedRecords = (records) => {
  const a =  records.map((record) => getNormalizedRecord(record));
  return a
};

const getRecords = async (table) => {
  const records = await base(table).select().all();
  const data = await getNormalizedRecords(records);

  return data;
};

const getRecord = async (table, id) => {
  const record = await base(table).find(id);
  const data = await getNormalizedRecord(record);

  return data;
};

const createRecord = async (table, fields) => {
  const records = await base(table).create([{ fields }]);
  const data = await getNormalizedRecords(records);
  return data;
};

export {
  base,
  createRecord,
  getNormalizedRecord,
  getNormalizedRecords,
  getRecord,
  getRecords,
};

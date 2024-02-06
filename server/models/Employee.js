const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const EmployeeSchema = new Schema ({
    id: {
      type: Number,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp)
    },
  });

  const Employee = model('Employee', EmployeeSchema);

  module.exports = Employee;
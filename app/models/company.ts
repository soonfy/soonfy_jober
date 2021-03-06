/**
 *
 * company schema
 * 
 */

import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CompanySchema = new Schema({
  companyId: {
    type: Number,
    unique: true
  },
  companyLogo: {
    type: String
  },
  financeStage: {
    type: String
  },
  industryField: {
    type: String
  },
  positionAdvantage: {
    type: String
  },
  companyShortName: {
    type: String
  },
  companyLabelList: {
    type: Array
  },
  companyFullName: {
    type: String
  },
  companySize: {
    type: String
  },
  create: {
    type: Date
  },
  sofrom: {
    type: String
  }
}, { _id: false });

const Company = mongoose.model('Company', CompanySchema, 'companys');

export default Company;

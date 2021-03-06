/**
 *
 * job info schema
 * 
 */

import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const JobInfoSchema = new Schema({
  positionId: {
    type: Number,
    unique: true
  },
  companyId: {
    type: Number
  },
  publisherId: {
    type: Number
  },
  positionName: {
    type: String
  },
  workYear: {
    type: String
  },
  education: {
    type: String
  },
  jobNature: {
    type: String
  },
  salary: {
    type: String
  },
  city: {
    type: String
  },
  approve: {
    type: Number
  },
  createTime: {
    type: String
  },
  district: {
    type: String
  },
  score: {
    type: String
  },
  adWord: {
    type: Number
  },
  explain: {  // null
    type: String
  },
  plus: {   // null
    type: String
  },
  pcShow: {
    type: Number
  },
  appShow: {
    type: Number
  },
  deliver: {
    type: Number
  },
  gradeDescription: { // null
    type: String
  },
  promotionScoreExplain: {  // null
    type: String
  },
  firstType: {
    type: String
  },
  secondType: {
    type: String
  },
  positionLables: {
    type: Array
  },
  businessZones: {
    type: Array
  },
  imState: {
    type: String
  },
  lastLogin: {
    type: Number
  },
  info: {
    type: String
  },
  create: {
    type: Date
  },
  update: {
    type: Date
  },
  sofrom: {
    type: Array
  }
}, { _id: false });

const JobInfo = mongoose.model('JobInfo', JobInfoSchema, 'job_infos');

export default JobInfo;

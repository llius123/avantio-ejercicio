// const mongoose = require("mongoose");
import mongoose from 'mongoose'

export default function connectDb(urlConexion: string) {
  return mongoose.connect(urlConexion);
};
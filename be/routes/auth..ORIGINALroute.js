import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User";
import passport from "passport";
import "dotenv/config";
import jwt from "jsonwebtoken";
const authRouter = Router();
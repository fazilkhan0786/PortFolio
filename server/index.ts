/**
 * Copyright (c) 2025 Malek Fazilkhan. All rights reserved.
 * 
 * This software and associated documentation files (the "Software") are the 
 * proprietary and confidential information of Malek Fazilkhan. The Software 
 * is protected by copyright laws and international copyright treaties, as well 
 * as other intellectual property laws and treaties.
 * 
 * Unauthorized copying, distribution, modification, public display, or public 
 * performance of this Software is strictly prohibited and may result in severe 
 * civil and criminal penalties.
 * 
 * For licensing inquiries, contact: malekfazilkhan07@gmail.com
 */

import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { handleSendEmail } from "./routes/send-email";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true, limit: '10mb' }));

  // Debug middleware to log requests
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`, req.body ? 'with body' : 'without body');
    next();
  });

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);
  app.post("/api/send-email", handleSendEmail);

  return app;
}

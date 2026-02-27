import express from 'express';

export function createApp() {
  const app = express();

  app.use(express.json({ limit: '1mb' }));

  app.get('/health', (_req, res) => {
    res.status(200).json({ ok: true, service: 'capital10-api' });
  });

  return app;
}

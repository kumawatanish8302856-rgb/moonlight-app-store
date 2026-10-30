/**
 * MOONLIGHT APP STORE - ZERO-DEPENDENCY LOCAL SERVER
 * Runs with pure Node.js (no npm install required!)
 * Serves static web store and provides network access for mobile testing.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = __dirname;
const UPLOADS_DIR = path.join(__dirname, 'uploads');

if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

// MIME types mapping
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.apk': 'application/vnd.android.package-archive',
  '.exe': 'application/octet-stream',
  '.zip': 'application/zip',
  '.txt': 'text/plain; charset=utf-8'
};

// Helper to get local Wi-Fi IP address
function getLocalIP() {
  const nets = os.networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === 'IPv4' && !net.internal) {
        return net.address;
      }
    }
  }
  return 'localhost';
}

const server = http.createServer((req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, HEAD');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  // Parse requested path
  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  let reqPath = decodeURIComponent(parsedUrl.pathname);

  if (reqPath === '/' || reqPath === '') {
    reqPath = '/index.html';
  }

  // Prevent directory traversal attacks
  const safePath = path.normalize(reqPath).replace(/^(\.\.[\/\\])+/, '');
  const filePath = path.join(PUBLIC_DIR, safePath);

  // Check if file exists
  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found - Moonlight App Store');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    // If it's an APK, prompt download with filename
    const headers = { 'Content-Type': contentType };
    if (ext === '.apk' || ext === '.exe' || ext === '.zip') {
      const filename = path.basename(filePath);
      headers['Content-Disposition'] = `attachment; filename="${filename}"`;
      headers['Content-Length'] = stats.size;
    }

    if (req.method === 'HEAD') {
      res.writeHead(200, headers);
      res.end();
      return;
    }

    res.writeHead(200, headers);
    const readStream = fs.createReadStream(filePath);
    readStream.on('error', (streamErr) => {
      console.warn('File stream interrupted:', streamErr.message);
      if (!res.headersSent) {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      }
      res.end();
    });
    readStream.pipe(res);
  });
});

process.on('SIGTERM', () => {
  server.close(() => process.exit(0));
});

server.listen(PORT, '0.0.0.0', () => {
  const localIP = getLocalIP();
  console.log('\n======================================================');
  console.log('🌙 MOONLIGHT APP STORE IS RUNNING');
  console.log('======================================================');
  console.log(`> Local PC:        http://localhost:${PORT}`);
  console.log(`> Mobile / Wi-Fi:  http://${localIP}:${PORT}`);
  console.log('------------------------------------------------------');
  console.log('Open the URL above on your phone or PC to test and download apps!');
  console.log('Press Ctrl+C to stop the server.\n');
});

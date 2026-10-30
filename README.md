# 🌙 Moonlight App Store

**Moonlight App Store** ek modern, futuristic aur fast app marketplace website hai jahan par aap apne Android APKs, Games, Tools aur Software upload kar sakte hain aur koi bhi user unhe 1-click me direct download kar sakta hai!

---

## 🌟 Key Features (खासियतें)

1. **Futuristic Moonlight Theme**:
   - Cosmic dark mode, glowing neon accents, glassmorphic cards, aur smooth animations.
   - Responsive design (Mobile, Tablet aur Desktop par perfectly fit).

2. **App Upload Portal (ऐप अपलोड सिस्टम)**:
   - Website par **"Upload App"** button dabakar aap apna koi bhi APK ya Installer upload kar sakte hain.
   - App Name, Developer Name, Category, Platform, Version, File Size, Description aur Custom Icon add karein.
   - Direct file upload (.apk, .exe, .zip) ya Google Drive / MediaFire download link dono support karta hai.
   - Upload kiya gaya app turant store me live dikhta hai aur log use download kar sakte hain!

3. **1-Click Direct Downloads (सीधा डाउनलोड)**:
   - Bina kisi annoying ads ya waiting timer ke direct download.
   - Animated download progress bar aur safe virus-scanned verification badge.

4. **Mobile QR Code Scanner**:
   - Har app ke sath **"Mobile QR"** option hai, jise mobile camera se scan karke phone par direct download kiya ja sakta hai.

5. **Search & Categories**:
   - Live Instant Search (press `/` key to search).
   - Category filter: Games, Tools, Productivity, Media, Social, etc.
   - Platform filter: Android (APK) & Windows.
   - "My Uploaded Apps" filter jisse aap sirf apne dale hue apps dekh sakein.

6. **How to Install Guide (इंस्टॉल गाइड)**:
   - Users ke liye Android APK install karne ka step-by-step guide (Settings me "Allow Unknown Sources" enable karne ka tarika).

7. **Data Backup & Export**:
   - Apne store ke sabhi apps ko 1-click me JSON file me export ya import karne ki suvidha.

---

## 🚀 How to Run the Website (वेबसाइट कैसे चलाएं)

Aap is website ko 3 aasan tariko se chala sakte hain:

### Tarika 1: 1-Click Batch File (Sabse Aasan)
- Sirf **`start_store.bat`** par double click karein!
- Ye automatically server start karega aur aapke browser me Moonlight App Store open kar dega:
  - **Local PC:** `http://localhost:3000`
  - **Mobile Wi-Fi:** Same Wi-Fi se connect karke apne phone browser me URL kholein.

### Tarika 2: Direct Browser me Open karein (Zero Install)
- Kisi server ki jarurat nahi!
- Bas **`index.html`** file par double click karein ya use Chrome/Edge browser me drag & drop karein.
- Store instantly start ho jayega.

### Tarika 3: Node.js Terminal se
```bash
# Terminal ya Command Prompt me:
node server.js
```
Browser me kholein: `http://localhost:3000`

---

## 📲 How to Upload Your Apps (Apne Apps Kaise Dalein)

### Method A: Website ke Upload Form se (In-Browser)
1. Website par upar right corner me **"Upload App"** button par click karein.
2. Apne app ki details bharein:
   - **App Name**: (jaise *My Photo Editor*)
   - **Developer Name**: (jaise *Kumawat Studios*)
   - **Category**: Tools / Games / Media / etc.
   - **File**: Apna `.apk` file select karein ya Google Drive link dalein.
   - **Description**: App ke bare me 2-3 lines likhein.
3. **"Publish App to Store"** par click karein!
4. Aapka app turant store me top par dikhne lagega aur download button active ho jayega.

### Method B: Hamesha ke liye Permanent Code me add karna
Agar aap chahte hain ki website host karne par har kisi ko aapka app hamesha dikhe:
1. Apna `.apk` file `uploads/` folder me copy karein (jaise `uploads/my-game.apk`).
2. `js/apps-data.js` file open karein.
3. `DEFAULT_APPS` array me apna app add karein:
```javascript
{
  id: "my-game-app",
  title: "My Super Action Game",
  developer: "Kumawat Games",
  category: "Games",
  platform: "Android",
  fileType: "APK",
  version: "v1.0.0",
  size: "35 MB",
  rating: 5.0,
  downloads: "10K+",
  featured: true,
  shortDesc: "Exciting action game with endless levels.",
  downloadUrl: "uploads/my-game.apk",
  fileName: "MyGame.apk"
}
```

---

## 🌐 Internet par Live Publish kaise karein (Free Hosting)

Agar aap chahte hain ki duniya me koi bhi log is website ko open karke aapka app download kar sake:
1. **GitHub Pages (Free)**:
   - GitHub par naya repository banayein aur ye files push karein.
   - Settings -> Pages me jakar `main` branch select karein.
   - Aapki Moonlight App Store website live ho jayegi (e.g. `yourname.github.io/moonlight-app-store`).
2. **Netlify / Vercel (Free)**:
   - Netlify.com par jayein aur is pure folder ko drag-and-drop karein.
   - 10 seconds me free custom domain ke sath website internet par live ho jayegi!

---

## 📁 File Structure

```text
moonlight app store/
├── index.html            # Main website page (Responsive Glassmorphic UI)
├── style.css             # Moonlight cosmic styling, neon glows & animations
├── js/
│   ├── app.js            # App store engine (Search, filters, upload, download logic)
│   └── apps-data.js      # App catalog database (Pre-loaded apps & categories)
├── vercel.json           # Vercel deployment configuration (Pure static hosting)
├── .vercelignore         # Files to ignore on Vercel deployment
├── server.js             # Pure Node.js local network HTTP server (for offline testing)
├── start_store.bat       # 1-Click launcher for Windows
├── package.json          # Node project config
├── uploads/              # Folder for APK and installer files
│   └── sample-app.apk    # Ready-to-download demo APK
└── README.md             # Complete user guide
```

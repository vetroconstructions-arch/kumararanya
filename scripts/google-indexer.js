const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');

// 1. Path to your Service Account Credentials JSON file
// WARNING: DO NOT COMMIT credentials.json TO GITHUB!
const KEY_FILE = path.join(__dirname, '../credentials.json');

// 2. Load the Google Indexing API
async function indexUrls() {
  if (!fs.existsSync(KEY_FILE)) {
    console.error('❌ FATAL ERROR: credentials.json not found!');
    console.error('Please download your Service Account JSON key from Google Cloud Console and save it as "credentials.json" in the root directory.');
    process.exit(1);
  }

  try {
    console.log('🔄 Authenticating with Google Cloud...');
    const auth = new google.auth.GoogleAuth({
      keyFile: KEY_FILE,
      scopes: ['https://www.googleapis.com/auth/indexing'],
    });

    const client = await auth.getClient();
    const indexing = google.indexing({ version: 'v3', auth: client });

    console.log('✅ Authenticated successfully.');

    // 3. Extract URLs from the dynamically generated sitemap
    // In production, you would fetch('https://www.kumararanya.in/sitemap.xml') and parse it.
    // For this script, we'll ping a critical batch of URLs directly.
    const urlsToPush = [
      'https://www.kumararanya.in/',
      'https://www.kumararanya.in/aranya-na-bungalow-plots-hinjewadi/pricing',
      'https://www.kumararanya.in/aranya-na-bungalow-plots-hinjewadi/masterplan',
      'https://www.kumararanya.in/blog/kumar-aranya-hinjewadi-bungalow-plots',
      'https://www.kumararanya.in/blog/pune-real-estate-na-bungalow-plots',
      'https://www.kumararanya.in/blog/hinjewadi-marunji-investment-corridor'
    ];

    console.log(`🚀 Pushing ${urlsToPush.length} URLs to Google Indexing API...`);

    // 4. Batch push URLs to Google Indexing API
    for (const url of urlsToPush) {
      try {
        const response = await indexing.urlNotifications.publish({
          requestBody: {
            url: url,
            type: 'URL_UPDATED', // Can be URL_UPDATED or URL_DELETED
          },
        });
        console.log(`✅ SUCCESS: Pushed ${url} - Status: ${response.status}`);
      } catch (err) {
        console.error(`❌ ERROR: Failed to push ${url}`);
        console.error(err.message);
      }
    }

    console.log('🎉 Indexing script completed successfully!');

  } catch (error) {
    console.error('❌ FATAL ERROR during Google Indexing execution:', error);
  }
}

indexUrls();

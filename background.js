// Listen for any tab update (refresh, new URL, etc.)
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // Only run if the page is fully loaded and the URL exists
  if (changeInfo.status === 'complete' && tab.url) {
    
    // Check if it's LinkedIn
    if (tab.url.includes("linkedin.com")) {
      console.log(`LinkedIn detected on tab ${tabId}. Injecting script...`);

      chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ["linkedin.js"]
      })
      .then(() => console.log("Injection success."))
      .catch((err) => console.error("Injection failed: ", err));
    }
  }
})
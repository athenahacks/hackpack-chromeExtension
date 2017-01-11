# hackpack-chromeExtension

This Chrome extension is a simple hackpack that changes dollar amounts on websites to numbers of cleft lip and cleft palate surgeries that can be funded. It utilizes some javascript and html to edit website displays, and can be easily changed and altered to suit other purposes.

The *master* branch holds the completed chrome extension code, and the *starterkit* branch has a skeleton code to access text elements, in which you can fill in the replaced text with any value. 

**Step 1:** Create *manifest.json*, which includes required chrome extenion values. A simple example of the JSON file looks like this:
```JSON
{
  "manifest_version": 2,
  "name": "Sample Chrome Extension",
  "version": "0.1"
}
```

**Step 2:** Create *content.js*, which is the code to find and replace text on websites. It gets every element in the html document and parses through it for specific regular expressions. This content script is injected into every webpage visited.

**Step 3:** Create *popup.html*, which creates a link to operation smile donation pages, and is accessed through tapping the icon on the chrome extension bar

**Step 4:** Create *popup.js*, which is javascript that allows the link in *popup.html* to be opened on a new tab.

**Step 5:** Now, to test out the chrome extension, download Google Chrome and visit chrome://extensions/ . You'll see all the exsiting extensions and your test creations.

**Step 6:** The, click *Developer mode*, which allows you to test your own code, then click *load unpacked extension* with the extension's directory. Chrome should automatically reload the extension when you edit your code and reload the page.





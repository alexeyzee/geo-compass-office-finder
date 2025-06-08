
#!/bin/bash
# Build script for the widget
echo "Building Office Locator Widget for inline embedding..."

# Make sure we're using the correct config file
npx vite build --config vite.widget.config.ts

# Check if build was successful
if [ ! -f "widget-dist/office-locator-widget.iife.js" ]; then
    echo "Error: Build failed - JavaScript file not found"
    exit 1
fi

if [ ! -f "widget-dist/office-locator-widget.css" ]; then
    echo "Error: Build failed - CSS file not found"
    exit 1
fi

# Read the CSS file content and inject it into the JS file
echo "Creating inline version..."
css_content=$(cat widget-dist/office-locator-widget.css | sed 's/"/\\"/g' | tr '\n' ' ')
js_file="widget-dist/office-locator-widget.iife.js"

# Create a new version with CSS injected
echo "(function(){" > widget-dist/office-locator-inline.js
echo "var css = \"$css_content\";" >> widget-dist/office-locator-inline.js
echo "var style = document.createElement('style');" >> widget-dist/office-locator-inline.js
echo "style.textContent = css;" >> widget-dist/office-locator-inline.js
echo "document.head.appendChild(style);" >> widget-dist/office-locator-inline.js
cat "$js_file" >> widget-dist/office-locator-inline.js
echo "})();" >> widget-dist/office-locator-inline.js

echo "Widget built successfully!"
echo ""
echo "Files created:"
echo "- widget-dist/office-locator-widget.css"
echo "- widget-dist/office-locator-widget.iife.js"
echo "- widget-dist/office-locator-inline.js"
echo ""
echo "For inline embedding in Webflow:"
echo "1. Copy the content of widget-dist/office-locator-inline.js"
echo "2. Add this HTML to a Webflow HTML Embed element:"
echo ""
echo '<div id="office-locator-widget"></div>'
echo '<script>'
echo '// Paste the content of office-locator-inline.js here'
echo '</script>'
echo ""
echo "Or use the separate files approach:"
echo '<div id="office-locator-widget"></div>'
echo '<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/alexeyzee/geo-compass-office-finder@main/widget-dist/office-locator-widget.css">'
echo '<script src="https://cdn.jsdelivr.net/gh/alexeyzee/geo-compass-office-finder@main/widget-dist/office-locator-widget.iife.js"></script>'

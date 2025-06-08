
#!/bin/bash
# Build script for the widget
echo "Building Office Locator Widget..."
npx vite build --config vite.widget.config.ts
echo "Widget built successfully! Files are in the widget-dist folder."
echo ""
echo "To use in Webflow:"
echo "1. Upload the files from widget-dist/ to your hosting"
echo "2. Add this HTML to a Webflow HTML Embed element:"
echo ""
echo '<div id="office-locator-widget"></div>'
echo '<link rel="stylesheet" href="https://your-domain.com/office-locator-widget.css">'
echo '<script src="https://your-domain.com/office-locator-widget.iife.js"></script>'

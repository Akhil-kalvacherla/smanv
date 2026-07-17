# Favicon Generation Instructions

Since I cannot generate image files, you need to create the favicon files manually from your existing logo.

## Required Files to Generate

From `public/smanwlogo.jpg`, generate these files:

1. **favicon.ico** - Main favicon (contains multiple sizes)
2. **favicon-16x16.png** - 16x16 pixels
3. **favicon-32x32.png** - 32x32 pixels
4. **apple-touch-icon.png** - 180x180 pixels
5. **android-chrome-192x192.png** - 192x192 pixels
6. **android-chrome-512x512.png** - 512x512 pixels
7. **mstile-150x150.png** - 150x150 pixels

## Recommended Tools

### Option 1: Online Favicon Generator
Visit: https://realfavicongenerator.net/
- Upload your `smanwlogo.jpg`
- Select all sizes
- Download the generated package
- Extract files to `/public` folder

### Option 2: ImageMagick (Command Line)
```bash
# Install ImageMagick first
# Then run these commands in the public folder:

magick smanwlogo.jpg -resize 16x16 favicon-16x16.png
magick smanwlogo.jpg -resize 32x32 favicon-32x32.png
magick smanwlogo.jpg -resize 180x180 apple-touch-icon.png
magick smanwlogo.jpg -resize 192x192 android-chrome-192x192.png
magick smanwlogo.jpg -resize 512x512 android-chrome-512x512.png
magick smanwlogo.jpg -resize 150x150 mstile-150x150.png

# Generate favicon.ico (contains multiple sizes)
magick smanwlogo.jpg -resize 16x16 favicon-16x16.png
magick smanwlogo.jpg -resize 32x32 favicon-32x32.png
magick smanwlogo.jpg -resize 48x48 favicon-48x48.png
magick favicon-16x16.png favicon-32x32.png favicon-48x48.png favicon.ico
```

### Option 3: Photoshop/GIMP
- Open `smanwlogo.jpg`
- Resize to each required dimension
- Save as PNG (except favicon.ico)
- For favicon.ico, use a favicon generator or export as ICO

## Important Notes

- Use lossless compression for PNG files
- Maintain aspect ratio (square)
- Keep file sizes small (under 50KB for most favicons)
- Test favicon in different browsers after deployment
- Google may take time to update the favicon in search results (can take weeks)

## After Generating Files

1. Place all generated files in `/public` folder
2. The HTML is already updated to reference these files
3. Commit and push to GitHub
4. Cloudflare Pages will automatically deploy the changes
5. Submit updated sitemap to Google Search Console

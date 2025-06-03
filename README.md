# 360° Image Viewer

A web application for uploading, viewing, and sharing 360-degree images. Built with Next.js, Material UI, and Photo Sphere Viewer.

## Features

- Upload 360° images with drag-and-drop support
- View 360° images in an interactive viewer
- Share images via embeddable iframe
- Modern, responsive UI with Material Design
- IIS hosting support

## Getting Started

### Prerequisites

- Node.js 16.x or later
- npm 7.x or later

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd 360-image-viewer
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at http://localhost:8000

## Building for Production

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## Deploying to IIS

1. Install the following prerequisites on your IIS server:
   - URL Rewrite Module
   - IISNode
   - Node.js

2. Create a new website in IIS Manager:
   - Open IIS Manager
   - Right-click on "Sites" > "Add Website"
   - Enter a site name
   - Set physical path to your application directory
   - Configure port and hostname as needed
   - Click OK

3. Configure the application:
   - Copy all files to the website directory
   - Ensure web.config is in the root directory
   - Create a 'public/uploads' directory if it doesn't exist

4. Set permissions:
   - Navigate to your application directory
   - Right-click > Properties > Security
   - Add IIS_IUSRS and grant Modify permissions
   - Specifically ensure the 'uploads' directory is writable

5. Configure application pool:
   - Open IIS Manager
   - Select Application Pools
   - Find your site's application pool
   - Right-click > Basic Settings
   - Set .NET CLR version to "No Managed Code"
   - Identity: Set to a custom account with necessary permissions

6. Verify URL Rewrite configuration:
   - Check web.config contains correct rewrite rules
   - Verify IIS URL Rewrite Module is installed

## Usage

1. Upload Images:
   - Drag and drop a 360° image onto the upload area
   - Or click to select a file
   - Supported formats: .jpg, .jpeg, .png

2. View Images:
   - Use mouse or touch to pan around
   - Scroll or pinch to zoom
   - Click fullscreen button for immersive view

3. Share Images:
   - Click the Share button
   - Copy the provided embed code
   - Paste into any website that accepts iframes

## Security Considerations

- Configure maximum upload file size in web.config
- Implement proper authentication if needed
- Regularly clean up unused uploads
- Monitor disk space usage

## Troubleshooting

1. If images fail to upload:
   - Check uploads directory permissions
   - Verify maximum file size settings
   - Check IIS logs for errors

2. If viewer doesn't load:
   - Ensure image format is supported
   - Check browser console for errors
   - Verify JavaScript is enabled

3. IIS-specific issues:
   - Verify IISNode is installed correctly
   - Check application pool settings
   - Review URL rewrite rules

## License

This project is licensed under the MIT License - see the LICENSE file for details.

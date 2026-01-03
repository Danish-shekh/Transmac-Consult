# Transmac Consult - Corporate Website

## Project Overview
A professional corporate informational website for Transmac Consult built with ASP.NET Core MVC (.NET 8.0).

## Technology Stack
- **Framework:** ASP.NET Core 8.0 MVC
- **Language:** C# .NET
- **Frontend:** HTML5, CSS3, JavaScript
- **Server:** IIS (Internet Information Services)

## Website Structure
The website consists of six (6) core pages:

1. **About Us** - Company overview and founding background
2. **Vision & Mission** - Vision and mission statements
3. **Founder & Leadership** - Founder profile and leadership experience
4. **Core Services** - Consulting and engineering services overview
5. **Key Projects** - Rail, commercial vehicle, and business support projects
6. **Regional Presence** - Singapore & Malaysia offices and international reach

## Features
- ✅ Clean, professional corporate design
- ✅ Fully responsive (desktop, tablet, mobile)
- ✅ Easy navigation with sticky header
- ✅ Professional color scheme
- ✅ SEO-friendly structure
- ✅ Fast loading and optimized
- ✅ Ready for IIS deployment

## Local Development Setup

### Prerequisites
- .NET 8.0 SDK or later
- Visual Studio 2022 or VS Code
- IIS (for production deployment)

### Running Locally

1. **Navigate to project directory:**
   ```powershell
   cd "c:\Users\danny\Desktop\danish\Freelance\Transmac Consult"
   ```

2. **Restore dependencies:**
   ```powershell
   dotnet restore
   ```

3. **Build the project:**
   ```powershell
   dotnet build
   ```

4. **Run the application:**
   ```powershell
   dotnet run
   ```

5. **Access the website:**
   - HTTP: http://localhost:5000
   - HTTPS: https://localhost:7000

## Content Customization

All pages contain placeholder text marked with `[To be provided by client]`. Replace these placeholders with actual content:

- Company information and founding story
- Vision and mission statements
- Founder profile and achievements
- Service descriptions
- Project details and success stories
- Office addresses and contact information

## Project Structure
```
TransmacConsult/
├── Controllers/
│   └── HomeController.cs          # Main controller with all page actions
├── Views/
│   ├── Home/
│   │   ├── AboutUs.cshtml         # About Us page
│   │   ├── VisionMission.cshtml   # Vision & Mission page
│   │   ├── Leadership.cshtml      # Founder & Leadership page
│   │   ├── Services.cshtml        # Core Services page
│   │   ├── Projects.cshtml        # Key Projects page
│   │   └── RegionalPresence.cshtml # Regional Presence page
│   ├── Shared/
│   │   └── _Layout.cshtml         # Shared layout with navigation
│   ├── _ViewStart.cshtml
│   └── _ViewImports.cshtml
├── wwwroot/
│   ├── css/
│   │   └── site.css               # Main stylesheet
│   └── js/
│       └── site.js                # JavaScript functionality
├── Properties/
│   └── launchSettings.json        # Development settings
├── appsettings.json               # Application configuration
├── appsettings.Development.json   # Development configuration
├── Program.cs                     # Application entry point
├── TransmacConsult.csproj         # Project file
└── web.config                     # IIS configuration
```

## IIS Deployment Guide

### Step 1: Publish the Application

```powershell
dotnet publish -c Release -o ./publish
```

This creates a production-ready build in the `publish` folder.

### Step 2: Prepare IIS

1. **Install Required Components:**
   - IIS Manager
   - ASP.NET Core Runtime & Hosting Bundle (download from Microsoft)
   - URL Rewrite Module (for HTTPS redirect)

2. **Download Hosting Bundle:**
   - Visit: https://dotnet.microsoft.com/download/dotnet/8.0
   - Download "Hosting Bundle" installer
   - Run installer and restart IIS

### Step 3: Create IIS Website

1. **Open IIS Manager** (`inetmgr`)

2. **Create Application Pool:**
   - Right-click "Application Pools" → "Add Application Pool"
   - Name: `TransmacConsultAppPool`
   - .NET CLR version: `No Managed Code`
   - Managed pipeline mode: `Integrated`
   - Click OK

3. **Create Website:**
   - Right-click "Sites" → "Add Website"
   - Site name: `TransmacConsult`
   - Application pool: `TransmacConsultAppPool`
   - Physical path: Point to the `publish` folder
   - Binding: 
     - Type: http
     - IP address: All Unassigned
     - Port: 80 (or your preferred port)
     - Host name: (leave empty or enter domain)
   - Click OK

### Step 4: Configure Permissions

1. Right-click the website → "Edit Permissions"
2. Security tab → Edit → Add
3. Add `IIS_IUSRS` and `IUSR` with Read & Execute permissions

### Step 5: SSL/HTTPS Setup (Production)

1. **Obtain SSL Certificate:**
   - Purchase from SSL provider or use Let's Encrypt
   - Or use self-signed for testing

2. **Install Certificate in IIS:**
   - Server Certificates → Import
   - Select certificate file

3. **Add HTTPS Binding:**
   - Right-click website → Edit Bindings
   - Add → Type: https, Port: 443
   - Select SSL certificate
   - Click OK

### Step 6: Domain Configuration

1. **Update DNS Settings:**
   - Point A record to server IP address
   - Wait for DNS propagation (up to 48 hours)

2. **Update IIS Binding:**
   - Edit website binding
   - Add host name (e.g., www.transmacconsult.com)

### Step 7: Test Deployment

1. Browse to website: http://your-server-ip or http://your-domain.com
2. Verify all pages load correctly
3. Test on different devices (desktop, tablet, mobile)
4. Check HTTPS redirect works (if configured)

## Server Requirements

### Minimum Specifications:
- **OS:** Windows Server 2016 or later
- **CPU:** 2 cores
- **RAM:** 4 GB
- **Storage:** 10 GB free space
- **Software:**
  - IIS 10 or later
  - .NET 8.0 Runtime & Hosting Bundle
  - URL Rewrite Module (optional, for HTTPS redirect)

## Troubleshooting

### Common Issues:

1. **500.19 Error - Configuration File Error**
   - Install URL Rewrite Module
   - Or remove `<rewrite>` section from web.config

2. **500.30 Error - ASP.NET Core Failed to Start**
   - Install .NET 8.0 Hosting Bundle
   - Restart IIS: `iisreset`

3. **403 Forbidden Error**
   - Check folder permissions
   - Add IIS_IUSRS with Read & Execute

4. **Static Files Not Loading (CSS/JS)**
   - Verify `UseStaticFiles()` in Program.cs
   - Check wwwroot folder exists in publish output

5. **Application Pool Crashes**
   - Check Event Viewer logs
   - Enable stdout logging in web.config
   - Check logs folder for error details

### Enable Detailed Errors (Development Only):
In `web.config`, change:
```xml
<aspNetCore ... stdoutLogEnabled="true" stdoutLogFile=".\logs\stdout" />
```

Create a `logs` folder in the application directory.

## Maintenance

### Updating Content:
1. Edit `.cshtml` files in Views/Home/
2. Republish: `dotnet publish -c Release -o ./publish`
3. Copy new files to IIS website folder
4. Recycle application pool in IIS Manager

### Monitoring:
- Check IIS logs: `C:\inetpub\logs\LogFiles`
- Monitor application pool status
- Review Event Viewer for errors

## Performance Optimization

The website includes:
- Static content caching (7 days)
- Gzip compression
- Minified CSS/JS (production)
- Optimized images
- CDN-ready structure

## Security Features

- HTTPS redirect configured
- Security headers (X-Frame-Options, X-Content-Type-Options)
- XSS protection
- No sensitive data in source code

## Browser Compatibility

Tested and compatible with:
- Chrome (latest)
- Firefox (latest)
- Edge (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Support

For technical issues or questions during deployment, refer to:
- [ASP.NET Core Documentation](https://docs.microsoft.com/aspnet/core)
- [IIS Hosting Guide](https://docs.microsoft.com/aspnet/core/host-and-deploy/iis)

## Timeline Reference

As per project framework:
- Server setup & environment configuration: 2-3 working days
- Design & structure setup: 3-4 working days ✅ (Complete)
- Page implementation: 5-7 working days ✅ (Complete)
- Review & handover: 2 working days (Pending client content)

## Next Steps

1. ✅ Website structure complete
2. ⏳ Client to provide content and images
3. ⏳ Content integration and formatting
4. ⏳ Final review and testing
5. ⏳ Deployment to production server
6. ⏳ DNS configuration and domain binding
7. ⏳ SSL certificate installation
8. ⏳ Final acceptance testing

---

**Project:** Transmac Consult Corporate Website  
**Technology:** ASP.NET Core 8.0 MVC (C# .NET)  
**Status:** Development Complete - Awaiting Content  
**Created:** December 2025

# IIS Deployment Checklist - Transmac Consult

## Pre-Deployment Checklist

### Server Preparation
- [ ] Windows Server installed and updated
- [ ] IIS Role installed
- [ ] .NET 8.0 Hosting Bundle installed
- [ ] URL Rewrite Module installed (optional)
- [ ] Server firewall configured (ports 80, 443)
- [ ] SSL certificate obtained (for production)

### Application Preparation
- [ ] All content provided by client
- [ ] Placeholder text replaced with actual content
- [ ] Images optimized and uploaded to wwwroot folder
- [ ] Application built and published successfully
- [ ] web.config reviewed and customized

## Deployment Steps

### 1. Publish Application
- [ ] Run: `powershell -ExecutionPolicy Bypass -File .\deploy.ps1`
- [ ] Verify publish folder created successfully
- [ ] Check all files present (DLLs, wwwroot, web.config)

### 2. Transfer Files
- [ ] Copy publish folder to server
- [ ] Place in appropriate directory (e.g., C:\inetpub\wwwroot\transmacconsult)
- [ ] Verify all files transferred correctly

### 3. IIS Configuration
- [ ] Create Application Pool (No Managed Code)
- [ ] Create Website in IIS
- [ ] Point to publish folder
- [ ] Configure bindings (HTTP: 80)
- [ ] Set folder permissions (IIS_IUSRS, IUSR)

### 4. SSL/HTTPS Setup (Production Only)
- [ ] Import SSL certificate
- [ ] Add HTTPS binding (port 443)
- [ ] Select certificate
- [ ] Test HTTPS redirect

### 5. DNS Configuration
- [ ] Update A record to point to server IP
- [ ] Update host name in IIS binding
- [ ] Wait for DNS propagation
- [ ] Test domain access

### 6. Testing
- [ ] Access via IP address
- [ ] Access via domain name
- [ ] Test all 6 pages load correctly
- [ ] Test navigation between pages
- [ ] Test mobile responsiveness
- [ ] Test on different browsers
- [ ] Verify HTTPS redirect works
- [ ] Check console for JavaScript errors
- [ ] Test footer contact information

### 7. Performance & Security
- [ ] Verify static content caching enabled
- [ ] Check compression working
- [ ] Test page load speed
- [ ] Verify security headers present
- [ ] Check for mixed content warnings (HTTP/HTTPS)

### 8. Monitoring Setup
- [ ] Configure IIS logging
- [ ] Set up application pool monitoring
- [ ] Document admin credentials
- [ ] Create backup procedure
- [ ] Schedule regular updates

## Post-Deployment

### Handover Items
- [ ] Provide client with admin access details
- [ ] Share website URLs
- [ ] Provide README.md documentation
- [ ] Share maintenance instructions
- [ ] Schedule training session (if required)

### Documentation
- [ ] Server details documented
- [ ] Domain configuration documented
- [ ] SSL certificate details recorded
- [ ] Backup locations documented

## Troubleshooting Reference

### If website doesn't load:
1. Check IIS website is started
2. Check application pool is running
3. Verify folder permissions
4. Check firewall settings
5. Review IIS logs

### If pages show errors:
1. Enable stdout logging in web.config
2. Check logs folder for details
3. Verify .NET Hosting Bundle installed
4. Restart application pool

### If CSS/JS not loading:
1. Check wwwroot folder exists
2. Verify static files middleware enabled
3. Check browser console for 404 errors
4. Clear browser cache

## Timeline

- **Server Setup**: 2-3 working days
- **Deployment**: 1-2 working days
- **Testing**: 1 working day
- **Handover**: 1 working day

---

**Important Notes:**
- Always test on staging environment first
- Keep backup of working configuration
- Document all changes made
- Schedule maintenance window for deployment

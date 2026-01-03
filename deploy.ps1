# Transmac Consult - Deployment Script
# Run this script to publish the website for IIS deployment

Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "Transmac Consult - Deployment Script" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

# Check if .NET SDK is installed
Write-Host "Checking .NET SDK..." -ForegroundColor Yellow
$dotnetVersion = dotnet --version 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: .NET SDK not found. Please install .NET 8.0 SDK or later." -ForegroundColor Red
    Write-Host "Download from: https://dotnet.microsoft.com/download/dotnet/8.0" -ForegroundColor Yellow
    exit 1
}
Write-Host "✓ .NET SDK version: $dotnetVersion" -ForegroundColor Green
Write-Host ""

# Restore dependencies
Write-Host "Restoring dependencies..." -ForegroundColor Yellow
dotnet restore
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: Failed to restore dependencies." -ForegroundColor Red
    exit 1
}
Write-Host "✓ Dependencies restored" -ForegroundColor Green
Write-Host ""

# Build project
Write-Host "Building project..." -ForegroundColor Yellow
dotnet build -c Release
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: Build failed." -ForegroundColor Red
    exit 1
}
Write-Host "✓ Build completed" -ForegroundColor Green
Write-Host ""

# Publish project
Write-Host "Publishing project..." -ForegroundColor Yellow
$publishPath = ".\publish"
if (Test-Path $publishPath) {
    Write-Host "Removing old publish folder..." -ForegroundColor Yellow
    Remove-Item -Path $publishPath -Recurse -Force
}

dotnet publish -c Release -o $publishPath
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: Publish failed." -ForegroundColor Red
    exit 1
}
Write-Host "✓ Project published to: $publishPath" -ForegroundColor Green
Write-Host ""

# Success message
Write-Host "=====================================" -ForegroundColor Green
Write-Host "       DEPLOYMENT SUCCESSFUL!        " -ForegroundColor Green
Write-Host "=====================================" -ForegroundColor Green
Write-Host ""
Write-Host "Next Steps:" -ForegroundColor Cyan
Write-Host "1. Copy the 'publish' folder to your IIS server" -ForegroundColor White
Write-Host "2. Follow IIS deployment steps in README.md" -ForegroundColor White
Write-Host "3. Configure domain binding and SSL certificate" -ForegroundColor White
Write-Host ""
Write-Host "Published files location:" -ForegroundColor Yellow
Write-Host "$((Get-Location).Path)\publish" -ForegroundColor White
Write-Host ""

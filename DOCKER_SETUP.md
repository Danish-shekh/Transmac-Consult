# Docker Deployment Guide for Transmac Consult

## What's Been Set Up

✅ **Dockerfile** - Builds your ASP.NET Core app into a Docker container  
✅ **.dockerignore** - Excludes unnecessary files from the Docker image  
✅ **docker-compose.yml** - Easy local testing  
✅ **GitHub Actions Workflow** - Automatically builds and publishes Docker images  

---

## Step 1: Initialize Git Repository

```powershell
git init
git add .
git commit -m "Initial commit with Docker setup"
```

## Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Create a new repository (e.g., `transmac-consult`)
3. **Don't** initialize with README (you already have files)
4. Copy the repository URL

## Step 3: Push to GitHub

```powershell
git remote add origin https://github.com/YOUR_USERNAME/transmac-consult.git
git branch -M main
git push -u origin main
```

## Step 4: Test Locally (Optional)

```powershell
# Build and run with Docker
docker-compose up --build

# Visit http://localhost:8080
```

---

## Deployment Options

### Option A: Deploy to Azure Container Instances

1. Install Azure CLI:
```powershell
winget install Microsoft.AzureCLI
```

2. Login and deploy:
```powershell
az login
az container create --resource-group YOUR_RG --name transmac-consult --image ghcr.io/YOUR_USERNAME/transmac-consult:latest --dns-name-label transmac-consult --ports 8080
```

### Option B: Deploy to DigitalOcean

1. Go to DigitalOcean App Platform
2. Connect your GitHub repository
3. Select "Docker" as deployment type
4. Configure port: 8080
5. Deploy!

### Option C: Deploy to AWS ECS

1. Push image to AWS ECR
2. Create ECS Task Definition
3. Create ECS Service
4. Configure Load Balancer

### Option D: Any Server with Docker

```bash
# Pull and run on any server
docker pull ghcr.io/YOUR_USERNAME/transmac-consult:latest
docker run -d -p 80:8080 ghcr.io/YOUR_USERNAME/transmac-consult:latest
```

---

## GitHub Actions Workflow

Once you push to GitHub:
- Workflow automatically runs on every push to `main`
- Builds Docker image
- Publishes to GitHub Container Registry (ghcr.io)
- Image available at: `ghcr.io/YOUR_USERNAME/transmac-consult:latest`

---

## Costs

- **GitHub Container Registry**: Free for public repos
- **Azure Container Instances**: ~$10-30/month
- **DigitalOcean App Platform**: Starts at $5/month
- **AWS ECS**: Free tier available

---

## Next Steps

1. Run the git commands above to initialize repository
2. Create GitHub repo and push
3. Watch GitHub Actions build your Docker image
4. Choose a deployment platform and deploy!

Need help with any step? Just ask!

# GitHub Setup Instructions

## 🔧 Setting up GitHub Repository

1. **Create GitHub Repository**:
   ```bash
   cd /Users/macbookpro/Code/node_projects/scheduled-timer
   git init
   git add .
   git commit -m "Initial commit: Azure Function with timer trigger"
   
   # Create repository on GitHub and push
   git remote add origin https://github.com/YOUR-USERNAME/scheduled-timer.git
   git branch -M main
   git push -u origin main
   ```

2. **Set GitHub Secrets**:
   Go to GitHub Repository → Settings → Secrets and variables → Actions

   **Add these Repository Secrets:**

   **AZURE_CREDENTIALS**:
   ```json
   {"activeDirectoryEndpointUrl":"https://login.microsoftonline.com","activeDirectoryGraphResourceId":"https://graph.windows.net/","clientId":"YOUR_CLIENT_ID","clientSecret":"YOUR_CLIENT_SECRET","galleryEndpointUrl":"https://gallery.azure.com/","managementEndpointUrl":"https://management.core.windows.net/","resourceManagerEndpointUrl":"https://management.azure.com/","sqlManagementEndpointUrl":"https://management.core.windows.net:8443/","subscriptionId":"YOUR_SUBSCRIPTION_ID","tenantId":"YOUR_TENANT_ID"}
   ```

   **AZURE_FUNCTIONAPP_PUBLISH_PROFILE**:
   - Go to Azure Portal
   - Navigate to your Function App: `scheduled-timer-dev`
   - Click "Get publish profile" 
   - Copy the entire XML content and paste as secret value

## 🚀 Deployment

Once secrets are configured:
1. Push code to `main` branch
2. GitHub Actions will automatically deploy
3. Check deployment status in Actions tab
4. Function will be live at: https://scheduled-timer-dev.azurewebsites.net

## 📊 Monitoring Deployment

- **GitHub Actions**: Monitor deployment progress
- **Azure Portal**: Check function logs and metrics
- **Application Insights**: View detailed telemetry at `scheduled-timer-dev-insights`
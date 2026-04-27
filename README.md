# Scheduled Timer - Azure Function

A Node.js Azure Function that runs on a timer schedule (every 30 minutes) and logs messages with execution details.

## 📋 Project Overview

- **Function App Name**: `scheduled-timer-dev`
- **Runtime**: Node.js 18
- **Trigger**: Timer (every 30 minutes)
- **Deployment**: GitHub Actions
- **Infrastructure**: Managed via Terraform

## 🚀 Function Details

The timer function logs:
- ⏰ Execution timestamp
- 📋 Function metadata
- 🔄 Schedule information
- 📊 Execution summary with JSON data
- ✅ Completion status

## 🏗️ Project Structure

```
scheduled-timer/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── src/
│   └── functions/
│       └── timerFunction.js    # Main timer function
├── .gitignore                  # Git ignore rules
├── host.json                   # Azure Functions host configuration
├── local.settings.json         # Local development settings
├── package.json                # Node.js dependencies
└── README.md                   # This file
```

## 🛠️ Local Development

### Prerequisites
- Node.js 18+
- Azure Functions Core Tools
- Azure CLI

### Setup
1. Install dependencies:
   ```bash
   npm install
   ```

2. Start local development:
   ```bash
   npm start
   ```

3. The function will be available at:
   ```
   http://localhost:7071/admin/functions/timerFunction
   ```

## 🚀 Deployment

### GitHub Actions (Automated)
Deployment happens automatically when you push to `main` or `master` branch.

### Required GitHub Secrets
Set these secrets in your GitHub repository settings:

1. **AZURE_CREDENTIALS**: Service principal credentials in JSON format:
   ```json
   {
     "clientId": "<client-id>",
     "clientSecret": "<client-secret>",
     "subscriptionId": "<subscription-id>",
     "tenantId": "<tenant-id>"
   }
   ```

2. **AZURE_FUNCTIONAPP_PUBLISH_PROFILE**: Download from Azure Portal
   - Go to Function App → Overview → Get publish profile

### Manual Deployment
```bash
# Login to Azure
az login

# Deploy function
func azure functionapp publish scheduled-timer-dev
```

## ⚙️ Configuration

### Timer Schedule
The function runs every 30 minutes using CRON expression:
```
0 */30 * * * *
```

To modify the schedule, update the `schedule` property in `timerFunction.js`.

### Environment Variables
Configure in Azure Portal under Function App → Configuration:
- `ENVIRONMENT`: Set to "production" for prod deployment
- `LOG_LEVEL`: Control logging verbosity
- `ENABLE_LOGGING`: Enable/disable detailed logging

## 📊 Monitoring

- **Application Insights**: `scheduled-timer-dev-insights`  
- **Logs**: View in Azure Portal → Function App → Monitor
- **Metrics**: Available in Application Insights dashboard

## 🔧 Infrastructure

This function is deployed to Azure infrastructure managed by Terraform:
- **Resource Group**: `rg-myproject-dev`
- **App Service Plan**: `asp-myproject-dev` (Consumption)
- **Storage Account**: `stmyprojectdevlmii`
- **Key Vault**: `kv-myproject-dev-xaye`

## 📝 Function Output Example

```
🕒 Timer trigger function executed at: 2026-04-26T10:30:00.000Z
📋 Function Name: scheduled-timer-dev
⚡ Runtime: Node.js 18
🔄 Schedule: Every 30 minutes
🌍 Environment: Development
📊 Execution Summary: {
  "executionId": "abc123-def456-789",
  "timestamp": "2026-04-26T10:30:00.000Z",
  "functionName": "scheduled-timer-dev",
  "message": "Scheduled timer executed successfully",
  "nextExecution": "In 30 minutes",
  "status": "completed"
}
✅ Timer function execution completed successfully
```

## 🔗 Related Resources

- **Function App URL**: https://scheduled-timer-dev.azurewebsites.net
- **Key Vault**: https://kv-myproject-dev-xaye.vault.azure.net/
- **Terraform Infrastructure**: `../Terraform/environments/dev/`
const { app } = require('@azure/functions');

app.timer('timerFunction', {
    schedule: '0 */30 * * * *', // Every 30 minutes
    handler: (myTimer, context) => {
        const timeStamp = new Date().toISOString();
        
        context.log('🕒 Timer trigger function executed at:', timeStamp);
        context.log('📋 Function Name: scheduled-timer-dev');
        context.log('⚡ Runtime: Node.js 18');
        context.log('🔄 Schedule: Every 30 minutes');
        context.log('🌍 Environment: Development');
        
        if (myTimer.isPastDue) {
            context.log('⚠️ Timer function is running late!');
        }
        
        // Log some example data
        const logData = {
            executionId: context.executionContext.invocationId,
            timestamp: timeStamp,
            functionName: 'scheduled-timer-dev',
            message: 'Scheduled timer executed successfully',
            nextExecution: 'In 30 minutes',
            status: 'completed'
        };
        
        context.log('📊 Execution Summary:', JSON.stringify(logData, null, 2));
        context.log('✅ Timer function execution completed successfully');
    }
});
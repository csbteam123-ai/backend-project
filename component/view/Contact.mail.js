const Contact = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Message</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background-color: #f5f7fa;
            padding: 20px;
        }
        
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
        }
        
        .email-header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            text-align: center;
        }
        
        .email-header h1 {
            font-size: 24px;
            margin-bottom: 10px;
            font-weight: 600;
        }
        
        .email-header p {
            opacity: 0.9;
            font-size: 14px;
        }
        
        .email-body {
            padding: 30px;
        }
        
        .info-section {
            margin-bottom: 25px;
        }
        
        .info-section h2 {
            color: #333;
            font-size: 18px;
            margin-bottom: 15px;
            padding-bottom: 8px;
            border-bottom: 2px solid #f0f2f5;
        }
        
        .info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
        }
        
        @media (max-width: 480px) {
            .info-grid {
                grid-template-columns: 1fr;
            }
        }
        
        .info-item {
            background-color: #f9fafc;
            padding: 15px;
            border-radius: 8px;
            border-left: 4px solid #667eea;
        }
        
        .info-label {
            font-size: 12px;
            color: #667eea;
            font-weight: 600;
            text-transform: uppercase;
            margin-bottom: 5px;
            letter-spacing: 0.5px;
        }
        
        .info-value {
            font-size: 16px;
            color: #333;
            font-weight: 500;
        }
        
        .message-section {
            background-color: #f9fafc;
            padding: 20px;
            border-radius: 8px;
            margin-top: 20px;
            border: 1px solid #eef1f7;
        }
        
        .message-section h3 {
            color: #333;
            font-size: 16px;
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .message-section h3::before {
            content: "💬";
        }
        
        .message-content {
            color: #444;
            line-height: 1.6;
            white-space: pre-line;
            padding: 15px;
            background-color: white;
            border-radius: 6px;
            border: 1px solid #eef1f7;
        }
        
        .email-footer {
            background-color: #f8f9fa;
            padding: 20px 30px;
            text-align: center;
            border-top: 1px solid #eef1f7;
            color: #6c757d;
            font-size: 12px;
        }
        
        .email-footer a {
            color: #667eea;
            text-decoration: none;
        }
        
        .badge {
            display: inline-block;
            background-color: #e3f2fd;
            color: #1976d2;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            margin-top: 5px;
        }
        
        .timestamp {
            text-align: center;
            margin-top: 20px;
            color: #888;
            font-size: 12px;
            font-style: italic;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="email-header">
            <h1>📨 New Contact Message</h1>
            <p>You have received a new message from your website contact form</p>
        </div>
        
        <div class="email-body">
            <div class="info-section">
                <h2>📋 Contact Information</h2>
                <div class="info-grid">
                    <div class="info-item">
                        <div class="info-label">Full Name</div>
                        <div class="info-value">{{name}}</div>
                    </div>
                    
                    <div class="info-item">
                        <div class="info-label">Email Address</div>
                        <div class="info-value">{{email}}</div>
                        <div class="badge">Click to Reply</div>
                    </div>
                    
                    <div class="info-item">
                        <div class="info-label">Phone Number</div>
                        <div class="info-value">{{phone}}</div>
                    </div>
                    
                    <div class="info-item">
                        <div class="info-label">Subject</div>
                        <div class="info-value">{{subject}}</div>
                    </div>
                </div>
            </div>
            
            <div class="message-section">
                <h3>Message Details</h3>
                <div class="message-content">
                    {{message}}
                </div>
            </div>
            
            <div class="timestamp">
                Message received on {{date}} at {{time}}
            </div>
        </div>
        
        <div class="email-footer">
            <p>This email was automatically generated from your website contact form.</p>
            <p>© {{year}} Your Company Name. All rights reserved.</p>
            <p>
                <a href="https://yourwebsite.com">Visit Website</a> | 
                <a href="mailto:support@yourwebsite.com">Contact Support</a>
            </p>
        </div>
    </div>
</body>
</html>`

module.exports = {Contact};
export const EmailTemplate = (content: string) => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Trio Calls Meeting Invitation</title>
  </head>
  <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
      <header style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #0066cc;">Trio Calls</h1>
      </header>
      
      <main>
        ${content}
      </main>
      
      <footer style="margin-top: 30px; text-align: center; color: #666; font-size: 0.9em;">
        <p>This is an automated message from Trio Calls. Please do not reply to this email.</p>
      </footer>
    </div>
  </body>
</html>
`; 
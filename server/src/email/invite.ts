import { EmailTemplate } from "./template";

interface InviteTemplateProps {
  chatLink: string;
  meetLink: string;
  displayName: string;
  email: string;
}

export const InviteTemplate = ({
  chatLink,
  meetLink,
  displayName,
  email,
}: InviteTemplateProps) => {
  return EmailTemplate(`
    <h2>Meeting Invitation</h2>
    <p>${displayName} (${email}) has invited you to a Trio Calls meeting.</p>
    
    <div style="margin: 20px 0;">
      <a href="${meetLink}" style="background-color: #0066cc; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
        Join Meeting
      </a>
    </div>
    
    <p>Or join via chat: <a href="${chatLink}">Chat Link</a></p>
    
    <p>Meeting Links:</p>
    <ul>
      <li>Video Meeting: ${meetLink}</li>
      <li>Chat Only: ${chatLink}</li>
    </ul>
  `);
};

export function openInbox({
  app,
  title,
  message,
  cancelLabel,
  removeText,
}: {
  app?: string | null;
  title?: string;
  message?: string;
  cancelLabel?: string;
  removeText?: boolean;
}): Promise<void>;

export function openComposer({
  app,
  title,
  message,
  cancelLabel,
  removeText,
  to,
  cc,
  bcc,
  subject,
  body,
}: {
  app?: string | null;
  title?: string;
  message?: string;
  cancelLabel?: string;
  removeText?: boolean;
  to?: string;
  cc?: string;
  bcc?: string;
  subject?: string;
  body?: string;
}): Promise<void>;

export class EmailException {
  message: string;
  name: string;
}

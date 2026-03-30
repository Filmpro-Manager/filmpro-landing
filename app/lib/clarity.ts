// eslint-disable-next-line @typescript-eslint/no-explicit-any
const c = () => (window as any).clarity;

export function trackWhatsApp() {
  c()?.('event', 'whatsapp_click');
  c()?.('upgrade', 'whatsapp_click');
}

// Minimal inline markdown for short strings: escapes HTML, then supports **bold** and *italic*.
export function inline(text: string): string {
  const escaped = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
  return escaped
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>');
}

export function isVideo(path: string): boolean {
  return /\.(mp4|webm)$/i.test(path);
}

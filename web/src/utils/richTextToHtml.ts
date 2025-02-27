type RichTextBlock = {
  type: string;
  children: RichTextChild[];
};

type RichTextChild = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  type?: string;
  url?: string;
};

export function richTextToHtml(richText: RichTextBlock[]): string {
  return richText
    .map((block) => {
      if (block.type === 'paragraph') {
        return `<p>${block.children.map(parseChildren).join('')}</p>`;
      }
      return ''; // Ignora otros tipos de contenido por ahora
    })
    .join('');
}

// Función auxiliar para convertir cada nodo hijo a HTML
function parseChildren(child: RichTextChild): string {
  let text = child.text;

  if (child.bold) {
    text = `<strong>${text}</strong>`;
  }
  if (child.italic) {
    text = `<i>${text}</i>`;
  }
  if (child.underline) {
    text = `<u>${text}</u>`;
  }
  if (child.type === 'link' && child.url) {
    text = `<a href="${child.url}" target="_blank">${text}</a>`;
  }

  return text;
}
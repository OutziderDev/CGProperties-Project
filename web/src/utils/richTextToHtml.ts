export function richTextToHtml(richText: any) {
  return richText
    .map(block =>
      block.type === 'paragraph'
        ? `${block.children.map(child => child.text).join(' ')}`
        : ''
    )
    .join('');
}
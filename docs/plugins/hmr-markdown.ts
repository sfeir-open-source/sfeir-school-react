export default function MarkdownHMR() {
  return {
    name: 'markdown-hmr',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handleHotUpdate({ file, server }: any) {
      if (file.endsWith('.md')) {
        console.info('reloading markdown file...');
        server.ws.send({ type: 'full-reload', path: '*' });
      }
    },
  };
}

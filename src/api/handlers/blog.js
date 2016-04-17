/**
 * page
 * {
      title: "Blog title",
      template: "Pieces",
      content: {
        type: "folder",
        src: "pieces", (name of folder)
      },
    }
 * should return
 * {
      title: 'Blog title',
      transform: 'Pieces',
      content: [
        {
          title: 'My first blog',
          date: '17.11.1994',
          content: 'Markdown blog content',
        },
        ...
      ]
   }
 */
import request from 'request-promise';

function piecesHandler(page, apiPath) {
  let contents;
  return request(`${apiPath}/${page.content.src}/index.json`)
    .then(json => {
      contents = JSON.parse(json);
      return Promise.all(
        contents.pieces.map(piece => (
          request(`${apiPath}/${page.content.src}/${piece.src}`))
        )
      );
    })
    .then(rawPieces => {
      const pieces = rawPieces
        .map((piece, i) => {
          const { title, date } = contents.pieces[i];
          return {
            title,
            date,
            content: piece,
          };
        });
      return {
        title: page.title,
        transform: 'Pieces',
        content: pieces,
      };
    });
}

export default piecesHandler;

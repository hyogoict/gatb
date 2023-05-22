import fs from "fs";
import path from "path";
import ReactDOMServer from "react-dom/server";
import { Helmet } from "react-helmet";
import { Page } from "./page";

const pageString = ReactDOMServer.renderToString(<Page />);
const helmet = Helmet.renderStatic();

const html = `<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta name="viewport" content="width=device-width">
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
  </head>
  <body>
    <div id="react-root">${pageString}</div>
  </body>
  <script src="client.js"></script>
</html>
`;

async function writeFile(file: string, data: string): Promise<void> {
  await fs.promises.mkdir(path.dirname(file), { recursive: true });
  fs.promises.writeFile(file, data);
}

writeFile(path.resolve(__dirname, "../build/index.html"), html);
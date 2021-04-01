import colors from 'colors';

import { PORT_SERVER } from './config/config';
import { httpServer } from './server';

const port = process.env.PORT || PORT_SERVER;

httpServer.listen(port, () => {
  console.log(
    colors.bold.yellow(
      `\nhttp://localhost:${port} - Server started - success.\n`,
    ),
  );
});

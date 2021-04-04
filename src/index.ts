import colors from 'colors';
import { httpServer } from './server';
import { PORT_SERVER } from './config/config';

const port = process.env.PORT || PORT_SERVER;

httpServer.listen(port, () => {
  console.log(
    colors.bold.yellow(`\nhttp://localhost:${port} - rest api swagger docs\n`),
  );
});

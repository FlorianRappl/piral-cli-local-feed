import { CliPlugin } from 'piral-cli';
import { runApp } from 'sample-pilet-service';

function apiKeys(arg: string) {
  return (arg && arg.split(',')) || undefined;
}

const plugin: CliPlugin = cli => {
  cli.withCommand({
    name: 'local-feed-piral',
    alias: ['local-feed'],
    description: 'Starts a local pilet feed service for development purposes.',
    arguments: [],
    flags(argv) {
      return argv
        .number('port')
        .describe('port', 'The port of the local pilet feed service.')
        .default('port', 9000)
        .string('api-key')
        .describe('api-key', 'The custom API key to use. Comma separated for multiple entries.')
        .default('api-key', '')
        .string('base')
        .default('base', process.cwd())
        .describe('base', 'Sets the base directory. By default the current directory is used.');
    },
    run(args) {
      return new Promise(resolve => {
        const server = runApp({
          port: args.port as number,
          apiKeys: apiKeys(args.apiKey as string),
        });
        server.on('close', resolve);
      });
    },
  });

  cli.withFlags('debug-piral', flags =>
    flags
      .boolean('feed')
      .describe('feed', 'Activates the local feed.')
      .default('feed', false)
      .number('feed-port')
      .describe('feed-port', 'Determines the port of the feed.')
      .default('feed-port', 9000)
      .string('feed-api-key')
      .describe('feed-api-key', 'Sets the used API key(s).')
      .default('feed-api-key', ''),
  );

  cli.beforeCommand('debug-piral', args => {
    if (args.feed) {
      runApp({
        port: args.feedPort as number,
        apiKeys: apiKeys(args.feedApiKey as string),
      });
    }
  });
};

module.exports = plugin;

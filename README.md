# piral-cli-local-feed

Plugin for the `piral-cli`. Adds a command to run a local feed service.

## Installation

Install the plugin either locally or globally.

We recommend the local installation:

```sh
npm i piral-cli-local-feed
```

## Running Standalone

Running it standalone can be done using the `piral` command:

```sh
piral local-feed
```

Alternatively, run it with the `pb local-feed` command.

Regarding the available options we currently support two flags:

- **port**, by default 9000
- **api-key**, by default a pre-defined set of API keys (displayed in the command line)

The API key is the one being used when uploading a pilet using the `piral-cli`. Multiple keys could be given when using comma as separators.

## During Debug

Running it during a debug session of Piral is also possible.

```sh
piral debug <regular options> --feed ... --feed-port ... --feed-api-key ...
```

This will run the local feed service using the same options as above, just on-the-side and prefixed with `feed`.

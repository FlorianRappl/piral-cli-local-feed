# piral-cli-local-feed

![Azure Build Status](https://dev.azure.com/FlorianRappl/piral-cli-plugins/_apis/build/status/FlorianRappl.piral-cli-local-feed?branchName=master) ![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)

Plugin for the `piral-cli`. Adds a command to run a local feed service.

Extends the Piral CLI commands and options to run a local feed service.

## Installation

Install the plugin either locally or globally.

We recommend the local installation:

```sh
npm i piral-cli-local-feed --save-dev
```

## Usage

### Running Standalone

Running it standalone can be done using the `piral` command:

```sh
piral local-feed
```

Alternatively, run it with the `pb local-feed` command.

Regarding the available options we currently support two flags:

- **port**, by default 9000
- **api-key**, by default a pre-defined set of API keys (displayed in the command line)

The API key is the one being used when uploading a pilet using the `piral-cli`. Multiple keys could be given when using comma as separators.

### During Debug

Running it during a debug session of Piral is also possible.

```sh
piral debug <regular options> --feed ... --feed-port ... --feed-api-key ...
```

This will run the local feed service using the same options as above, just on-the-side and prefixed with `feed`.

## License

This plugin is released using the MIT license. For more information see the [LICENSE file](LICENSE).

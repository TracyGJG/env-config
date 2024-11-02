# env-config

Environment configuration utility

This function (default export) prepares an object containing properties for configureing the system, similar to using environment variables.

The function takes three properties:

- `config`: Object read from a JSON file that follows the structure defined below.
- `env`: The environment for which the application is to be configured, e.g.:
  - @development: The environment used to create and build the application.
  - @testing: The platform configured to exercise the system with proxy external resources.
  - @staging/@preview: An environment configured to enable the user community to exercise/review the application before it goes live.
  - @production/@live: The operational platform.
- `tier`:
  - @api: The Application Programmable Interface layer
  - @backend: The Business Logic layer
  - @database: The Data Persistence layer
  - @frontend: The User Interface layer

## Configuration file

```json
{
	"@common": {
		"COMMON_PROPERTIES": "HERE"
	},

	"@features": ["FEATURE_LABEL", "..."],

	"@environments": {
		"ENVIRONMENT": {
			"TIER": {
				"TIER_SPECIFIC": "PROPERTIES"
			},
			"OTHER TIERS": {
				"TIER_SPECIFIC": "PROPERTIES"
			}
		},

		"OTHER_ENVIRONMENTS": {}
	}
}
```

The properties prefixed with the at symbol (@) are mandatory.

- `@common`: Are variables applicable to all environments.
- `@feature`s: An array of switches to enable novel functionality.
- `@environments`: The different environments in which the application needs to operate and be configured, broken down into the individual tiers of the application.

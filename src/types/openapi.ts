// import type { ApiReferenceConfiguration as ScalarConfig } from "@scalar/api-reference";

/**
 * Swagger UI configuration options
 *
 * @see https://swagger.io/docs/open-source-tools/swagger-ui/usage/configuration/
 */
export interface SwaggerUIConfig {
  /** If set to true, enables deep linking for tags and operations. */
  deepLinking?: boolean;
  /** Controls the display of operationId in operations list. */
  displayOperationId?: boolean;
  /** The default expansion depth for models. */
  defaultModelsExpandDepth?: number;
  /** The default expansion depth for the model on the model-example section. */
  defaultModelExpandDepth?: number;
  /** Controls how the model is shown when the API is first rendered. */
  defaultModelRendering?: "example" | "model";
  /** Controls the display of the request duration (in milliseconds) for "Try it out" requests. */
  displayRequestDuration?: boolean;
  /** Controls the default expansion setting for the operations and tags. */
  docExpansion?: "list" | "full" | "none";
  /** If set, enables filtering. */
  filter?: boolean | string;
  /** If set to true, it persists authorization data and it would not be lost on browser close/refresh. */
  persistAuthorization?: boolean;
  /** Enables the request snippet section. */
  requestSnippetsEnabled?: boolean;
  /** Controls the display of vendor extension (x-) fields and values for Operations, Parameters, Responses, and Schema. */
  showExtensions?: boolean;
  /** Controls the display of extensions (pattern, maxLength, minLength, maximum, minimum) fields and values for Parameters. */
  showCommonExtensions?: boolean;
  /** Apply a sort to the tag list of each API. */
  tagsSorter?: "alpha" | ((a: string, b: string) => number);
  /** Provides a mechanism to be notified when Swagger UI has finished rendering a newly provided definition. */
  onComplete?: () => void;
  /** Controls the layout of Swagger UI. */
  layout?: string;
  /** [String=""] - URL to fetch external configuration document from. */
  configUrl?: string;
  /** [String] - OAuth redirect URL. */
  oauth2RedirectUrl?: string;
  /** [Boolean=false] - If set to true, enables passing credentials, as defined in the Fetch standard, in CORS requests that are sent by the browser. */
  withCredentials?: boolean;
  [key: string]: unknown;
}

/**
 * Nitro OpenAPI configuration
 */
export interface NitroOpenAPIConfig {
  /**
   * OpenAPI meta information
   */
  meta?: {
    title?: string;
    description?: string;
    version?: string;
  };

  /**
   * OpenAPI json route
   *
   * Default is `/_openapi.json`
   */
  route?: string;

  /**
   * Enable OpenAPI generation for production builds
   */
  production?: false | "runtime" | "prerender";

  /**
   * UI configurations
   */
  ui?: {
    /**
     * Scalar UI configuration
     */
    scalar?:
      | false
      | (Partial<unknown> & {
          /**
           * Scalar UI route
           *
           * Default is `/_scalar`
           */
          route?: string;
        });
    /**
     * Swagger UI configuration
     *
     * @see https://swagger.io/docs/open-source-tools/swagger-ui/usage/configuration/
     */
    swagger?:
      | false
      | (SwaggerUIConfig & {
          /**
           * Swagger UI route
           *
           * Default is `/_swagger`
           */
          route?: string;
        });
  };
}

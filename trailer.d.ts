/**
 * Get a listenable ngrok listener, suitable for passing to net.Server.listen().
 * Uses the NGROK_AUTHTOKEN environment variable to authenticate.
 */
export function listenable(): Listener;
/**
 * Start the given net.Server listening to a generated, or passed in, listener.
 * Uses the NGROK_AUTHTOKEN environment variable to authenticate if a new listener is created.
 */
export function listen(server: import("net").Server, listener?: Listener): Listener;
/**
 * Register a console.log callback for ngrok INFO logging.
 * Optionally set the logging level to one of ERROR, WARN, INFO, DEBUG, or TRACE.
 */
export function consoleLog(level?: String): void;
/**
 * Delays between reconnect attempts after the session loses its connection.
 * With `jitter`, each delay is a random value from 0 to the computed delay.
 */
export type ReconnectBackoff =
  | { type: "fixed"; delayMs: number; jitter?: boolean }
  | { type: "linear"; initialMs: number; stepMs: number; maxMs: number; jitter?: boolean }
  | { type: "exponential"; initialMs: number; multiplier: number; maxMs: number; jitter?: boolean };

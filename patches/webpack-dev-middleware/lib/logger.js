'use strict';

const levels = ['trace', 'debug', 'info', 'warn', 'error'];

function noop() {}

function createLogger(options) {
  const settings = options || {};
  const configuredLevel = levels.indexOf(settings.level || 'info');
  const threshold = configuredLevel === -1 ? levels.length : configuredLevel;
  const logger = {};

  levels.forEach((level, index) => {
    if (index < threshold) {
      logger[level] = noop;
      return;
    }

    logger[level] = function log() {
      const method = level === 'trace' || level === 'debug' ? 'log' : level;
      const args = Array.prototype.slice.call(arguments);
      const prefix = [];

      if (settings.timestamp) {
        prefix.push(new Date().toISOString());
      }
      if (settings.name) {
        prefix.push(`[${settings.name}]`);
      }
      if (prefix.length) {
        args.unshift(prefix.join(' '));
      }

      console[method].apply(console, args); // eslint-disable-line no-console
    };
  });

  return logger;
}

createLogger.colors = {
  cyan(value) {
    return `\u001b[36m${value}\u001b[39m`;
  },
};

module.exports = createLogger;

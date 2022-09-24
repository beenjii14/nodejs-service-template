import winston from 'winston';

const configLogger = {
  env: process.env.NODE_ENV || 'development',
  level: process.env.LEVEL || 'info',
  serviceName: process.env.SERVICE_NAME || 'name-service',
};

// Modify according to your needs
const timeZone = () => {
  return new Date().toLocaleString('es-MX', {
    timeZone: 'America/Mexico_City',
    hour12: true,
  });
};

const { combine, timestamp, printf } = winston.format;
const debugFormat = printf((l) => {
  return `${l.timestamp} [${l.service} -> ${l.level}]: ${l.message}`;
});

const Logger = winston.createLogger({
  level: configLogger.level,
  defaultMeta: {
    service: configLogger.serviceName,
  },
  transports: [new winston.transports.Console()],
});

const formats = [
  winston.format.splat(),
  winston.format.simple(),
  winston.format.colorize(),
  winston.format.json({ space: 0 }),
];

if (configLogger.env !== 'production') {
  formats.push(timestamp({ format: timeZone }), debugFormat);
}

Logger.format = combine(...formats);
module.exports = { Logger };

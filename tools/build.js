import webpack from 'webpack';
import webpackConfig_dev from '../webpack.config.dev';
import webpackConfig_prod from '../webpack.config.prod';
import colors from 'colors';

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
var webpackConfig;

if(process.env.NODE_ENV == 'production') {
  webpackConfig = webpackConfig_prod;
  console.log('Generating minified bundle for production');
} else {
  webpackConfig = webpackConfig_dev;
  console.log('Generating minified bundle for dev');
}

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    console.log(err.bold.red);
    return 1;
  }

  const jsonStats = stats.toJson();
  if(jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(error.red));
  }

  if(jsonStats.hasWarnings) {
    console.log('webpack generated the following warnings:'.bold.yellow);
    jsonStats.warnings.map(warning => console.log(warning.yellow));
  }

  console.log('Webpack stats: ${stats}');
  console.log('Your app has been compiled in production mode and written to /dist. It\'s reday to roll!'.green);
  return 0;
});

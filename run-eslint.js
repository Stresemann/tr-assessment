const { CLIEngine } = require('eslint');

function lintFiles() {
  const cli = new CLIEngine({
    envs: ['browser', 'mocha'],
    useEslintrc: true,
    rules: {
      semi: 2,
    },
  });

  const lints = cli.executeOnFiles(['**/*.js']);
  if (lints.errorCount > 0) {
    for (const lintResults of lints.results) {
      console.log(
        lintResults.filePath,
        lintResults.errorCount,
        lintResults.messages
      );
    }
  }

  return lints.errorCount;
}

module.exports.lintFiles = lintFiles;

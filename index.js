const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    const name = core.getInput('name') || 'GitHub Actions Student';

    console.log(`Hello ${name}!`);
    console.log('Running custom JavaScript action.');
    console.log(
      `Repository: ${github.context.repo.owner}/${github.context.repo.repo}`
    );

    core.setOutput('greeting', `Hello ${name}!`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
const { Octokit } = require("@octokit/rest");
const octokit = new Octokit();
const owner = 'uccser';
var repos = {
    'csfg': 'cs-field-guide',
    'csu': 'cs-unplugged',
    'codewof': 'codewof',
    'dthm': 'dthm4kaiako',
};
var workflowRuns = octokit.actions.listWorkflowRuns({
    owner: owner,
    repo: repos.csfg,
    workflow_file_name: 'action.yaml',
    per_page: 1
});
console.log(workflowRuns);
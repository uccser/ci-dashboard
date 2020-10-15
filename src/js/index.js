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
});

workflowRuns.sort(sortByProperty("updated_at"));

var latestRun = workflowRuns[0];
console.log(latestRun);

// taken from https://medium.com/@asadise/sorting-a-json-array-according-one-property-in-javascript-18b1d22cd9e9
function sortByProperty(property){  
    return function(a,b){  
       if(a[property] > b[property])  
          return 1;  
       else if(a[property] < b[property])  
          return -1;  
   
       return 0;  
    }  
}

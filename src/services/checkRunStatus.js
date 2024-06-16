const retrieveRun = require('./openai/runs/runs.retrieve');
/**
 * Polls the status of a run operation at a specified interval until it is completed.
 *
 * @param {string} threadId - The ID of the thread to which the run belongs.
 * @param {string} runId - The ID of the run whose status is being checked.
 * @returns {Promise<void>} - A promise that resolves when the run status is 'completed'.
 */
async function checkRunStatus(threadId, runId) {
  const checkInterval = 2000; // Interval in milliseconds to wait between status checks

  /**
   * Helper function to create a delay.
   *
   * @param {number} ms - The number of milliseconds to sleep.
   * @returns {Promise<void>} - A promise that resolves after the specified delay.
   */
  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  /**
   * Recursive function to poll the run status.
   *
   * @returns {Promise<void>} - A promise that resolves when the run status is 'completed'.
   */
  const poll = async () => {
    try {
      // Retrieve the current status of the run
      const runResponse = await retrieveRun(threadId, runId);
      
      // If the run status is 'completed', resolve the promise and exit the function
      if (runResponse.status === 'completed') {
        return;
      }
    } catch (error) {
      // If an error occurs while retrieving the run status, throw the error to be handled by the caller
      throw error;
    }

    // Wait for the specified interval before making the next status check
    await sleep(checkInterval);
    
    // Recursively call the poll function to check the status again
    await poll();
  };

  // Start polling by calling the poll function
  await poll();
}

module.exports = checkRunStatus;



// Older version
// function checkRunStatus(threadId, runId) {
//   return new Promise((resolve, reject) => {
//     const checkInterval = 2000; // Check every 2 seconds

//     function check() {
//       retrieveRun(threadId, runId)
//         .then(runResponse => {
//           if (runResponse.status === 'completed') {
//             resolve();
//           } else {
//             setTimeout(check, checkInterval);
//           }
//         })
//         .catch(error => reject(error));
//     }

//     check();
//   });
// }
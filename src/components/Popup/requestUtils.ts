export const BuildRequestBody = (lastID: string, task: string) => {
    const taskID = (parseInt(lastID) + 1).toString();
    const jsonData = {
      id: taskID,
      task: task,
      status: true,
    };
    return jsonData;
  };
  
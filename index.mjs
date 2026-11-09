import { log } from './log.mjs';   

export const handler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(event),
  };

  log('log de execução da função lambda' + JSON.stringify(event));
  
  return {   
    statusCode: 200,
    body: JSON.stringify(event),
  };
};



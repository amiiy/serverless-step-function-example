'use strict';


module.exports.checkWallet = async(event) =>{
return 'noramal transactions'
}


module.exports.getNormalTransactions = async(event) =>{
  return 'normal transactions'
}

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

};

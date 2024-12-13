export interface ErrorResponseDataI {
    
    headers: {
      normalizedNames: {},
      lazyUpdate: null
    },
    
    status: number,
    statusText : string,
    url : string,
    ok : boolean,
    name : string,
    message : string,
    
    error : {
      responseCode : string,
      responseDescription : string,
      message : string,
      data : null,
    },
  
};

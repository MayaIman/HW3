Array.prototype.myFilter = function(callback, thisArg){
   
    if (typeof callback !== 'function') {
       
        throw new Error('Callback должет являться функцией!');
    };


   const context = thisArg || this;
   const result = [];
   
  for (let i = 0; i < context.length; i++) {

    if (context.hasOwnProperty(i)) {

      if (callback.call(context, context[i], i, context)) {
        result.push(context[i]);

      };

    };

  };

  return result;

};




const DebounceFunction = function(callback, millisecod){
   
    let timer;

        return function (...args){

            clearTimeout(timer);

            timer = setTimeout(() => {
                
                callback.apply(this, args);

            }, millisecod);
        };
    };

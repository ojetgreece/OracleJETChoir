var self = this;
this.url = 'http://localhost:3000/api/stm/mlab/';

hello = function (msg) {
  console.log(msg);
  alert(self.url);
};


getUrl= function(_mdl){
  let ur = self.url+_mdl+'/';
  //console.log(ur);
  return ur ;
};

/* get data  */
_loadData= function(_mdl, _array){
  let darray = [{"_id":""}];
  let url    = self.getUrl(_mdl);
  $.ajax({
    url: url,
    datatype:'json' ,
    cache: false ,
    success: function(data){
       //console.log(data);
        _array (data);
    }
  });
  return darray ;
} ;

/* create data  */
_createData= function(_mdl, _data,  _array){
  //alert('i am in');
  let url    = self.getUrl(_mdl);
  $.ajax({
    url:url,
    datatype:'json' ,
    type: 'POST',
    data: _data ,
    success: function(result){
      if (result.errors)                      
        alert(result.errors[0].message);                  
      else { 
        //console.log('Post Succeessfull' + result['_id']);
        _array.splice(_array().length-1, 1, result);
      }
    }
  });
} ;

/* update data */
_updateData= function(_mdl, _data){
  //alert('i am in');
  let url    = self.getUrl(_mdl);
  $.ajax({
    url:url,
    datatype:'json' ,
    type: 'PUT',
    data: _data ,
    success: function(result){
      if (result.errors)                      
        alert(result.errors[0].message);                  
      else { 
        //alert('Post Succeessfull');
      }
    }
  });
} ;

_deleteData = function(_mdl,_id, _data){
  //alert('i am in delete');
  let url    = self.getUrl(_mdl);

  $.ajax({
    url:url+_id,
    datatype:'json' ,
    type: 'DELETE' ,
    data:_data,
    success: function(result){
       if (result.errors) {
          alert(result.errors[0].message) ;
       }else{
         //alert('Successflly Deleted')
       }
    }
  });
} ;

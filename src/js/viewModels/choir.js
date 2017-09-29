/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your about ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery','dataController','promise',
        'ojs/ojtable', 'ojs/ojarraytabledatasource',
        'ojs/ojbutton','ojs/ojmodel','ojs/ojinputtext', 'ojs/ojdialog' ],
 function(oj, ko, $, data ) {
    function TilakViewModel() {
      var self = this;
      var model= 'groups';
      self._id    = ko.observable() ;
      self.name   = ko.observable() ;
      self.email  = ko.observable() ;
      self.description = ko.observable() ;
      self.obsArray  = ko.observableArray();
      _loadData(model,self.obsArray) ;
      //self.obsArray(groupArray) ;
      self.datasource = new oj.ArrayTableDataSource(self.obsArray, {idAttribute: '_id'});

      self.deleteAction = function(data, event){
        if ( confirm('Are you sure ?') ) {
          var currentRow = $('#table').ojTable('option', 'currentRow');
            if (currentRow != null)
            {   id = data._id ;
                self.obsArray.splice(currentRow['rowIndex'], 1);
                _deleteData(model,id, data);
            }
          }
        return true;
      };

      self.editAction = function(data, event) {
         //alert(data._id) ;
         self._id(data._id) ;
         self.name(data.name) ;
         self.email(data.email) ;
         self.description(data.description) ;
         $('#editDialog').ojDialog('open');
      };

      self.addAction = function() {
           //my.hello();
           self._id('-1') ;
           self.name(null) ;
           self.email(null) ;
           self.description(null) ;
           $('#editDialog').ojDialog('open');
     };

     self.saveAction = function(formData, event) {
        //console.log(formData) ;
        if (self.name) {
           jsnobj = JSON.parse("{}") ;
           jsnobj['name'] = self.name().toUpperCase() ;
           jsnobj['email'] = self.email() ;
           jsnobj['description'] = self.description() ;
           if ( self._id() == '-1') {
              // create
              jsnobj['_id'] = '' ;
              self.obsArray.push(jsnobj) ;
              _createData(model,jsnobj, self.obsArray);
              //jsnobj['_id'] = Math.random() ;
           }else {
              jsnobj['_id'] = self._id() ;
              let currentRow = $('#table').ojTable('option', 'currentRow');
              if (currentRow != null){
                 self.obsArray.splice(currentRow['rowIndex'], 1, jsnobj);
                 _updateData(model,jsnobj) ;
              }
           }
        }
        $('#editDialog').ojDialog('close');
     };
    }
    return new TilakViewModel();
  }
);

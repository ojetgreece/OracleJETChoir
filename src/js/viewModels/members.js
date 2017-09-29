/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your about ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery','dataController','promise', 'ojs/ojcheckboxset','ojs/ojswitch',
        'ojs/ojtable', 'ojs/ojarraytabledatasource', 'ojs/ojdatetimepicker','ojs/ojselectcombobox',
        'ojs/ojbutton','ojs/ojmodel','ojs/ojinputtext', 'ojs/ojdialog'],
 function(oj, ko, $, data) {

    function MemberViewModel() {
      var self = this;
      var model= 'members';

      this._id   = ko.observable() ;
      this.fname = ko.observable() ;
      this.lname = ko.observable() ;
      this.email = ko.observable() ;
      this.phone = ko.observable() ;
      this.dob   = ko.observable() ;
      this.admin = ko.observable(false) ;
      this.active= ko.observable(true) ;
      this.trait = ko.observable() ;
      this.choir = ko.observable() ;
      this.resp  = ko.observable() ;
      this.demo  = ko.observable(false) ;

      this.validPage = ko.computed(function () {
           let retval = false ;
          if(self.fname()  && self.lname()){
            retval = true ;
          }
          return retval ;
      }) ;

      var Arraychoir = [{"_id":"","name":"","email":"","description":""},
                       ];

      var ArrayMem = [
      {"_id":"","fname":"","lname":"","email":"","phone":"","dob":"","admin":"","active":"true","trait":"","choir":"","resp":"","demo":false},
    ];
      self.obsArray  = ko.observableArray(ArrayMem);
      self.choirArray= ko.observableArray(Arraychoir);


      var _Array = _loadData(model,self.obsArray) ;
      //self.obsArray(_Array) ;
      _Array =  _loadData('groups',self.choirArray);
      //self.choirArray = ko.observableArray();

      self.datasource = new oj.ArrayTableDataSource(self.obsArray, {idAttribute: '_id'});

      self.deleteAction = function(data, event){
        if ( confirm('Are you sure ?') ) {
          var currentRow = $('#table').ojTable('option', 'currentRow');
            if (currentRow != null)
            {   let id = data._id ;
                self.obsArray.splice(currentRow['rowIndex'], 1);
                _deleteData(model,id, data);
            }
          }
        return true;
      };

      self.dupName = function(id, fname, lname) {
         let retval = false ;
         let index = undefined ;
         //console.log( self.obsArray() );
         index= self.obsArray().findIndex(function(_doc){
            return(_doc.fname.toUpperCase()==fname && _doc.lname.toUpperCase()==lname);
          });
          //console.log('index ' + index);
         if (index >= 0) {
            //console.log('index value ' + self.obsArray()[index]._id );
            if (self.obsArray()[index]._id != id) {
              retval = true ;
            }
         }
         return retval ;
      }

      self.editAction = function(data, event) {
         let currentRow = $('#table').ojTable('option', 'currentRow');
         //console.log(currentRow) ;
         //console.log(data) ;
         self._id(data._id) ;
         self.fname(data.fname) ;
         self.lname(data.lname) ;
         self.email(data.email) ;
         self.phone(data.phone) ;
         self.dob(data.dob) ;
         self.admin(data.admin) ;
         self.active(data.active) ;
         self.trait(data.trait) ;
         self.choir(data.choir) ;
         self.resp(data.resp) ;
         self.demo(data.demo) ;

         $('#editDialog').ojDialog('open');

      };

    self.addAction = function() {
       self._id('-1') ;
       self.fname(null) ;
       self.lname(null) ;
       self.email(null) ;
       self.phone(null) ;
       self.dob(null) ;
       self.admin(false) ;
       self.active(true) ;
       self.trait(null) ;
       self.choir(null) ;
       self.resp(null) ;
       self.demo(false) ;
       $('#editDialog').ojDialog('open');
    };

    self.saveAction = function(formData, event) {
        //console.log(formData) ;
        //console.log(self.choir() );
        if (self.fname()) {

           if (self.dupName(self._id(), self.fname().toUpperCase() , self.lname().toUpperCase() ) ) {
             alert( 'Plese enter a unique name!') ;
             return ;
           }
           jsnobj = JSON.parse("{}") ;
           jsnobj['fname'] = self.fname() ;
           jsnobj['lname'] = self.lname() ;
           jsnobj['email'] = self.email() ;
           jsnobj['phone'] = self.phone() ;
           jsnobj['dob']   = self.dob() ;
           jsnobj['admin'] = self.admin() ;
           jsnobj['active'] = self.active() ;
           jsnobj['trait'] = self.trait() ;
           jsnobj['choir'] = self.choir() ;

           if ( self._id() == '-1') {
              // create
              //console.log(self.obsArray.length);
              jsnobj['_id'] = '' ;
              self.obsArray.push(jsnobj) ;
              _createData(model,jsnobj, self.obsArray);
              //console.log(self.obsArray.length) ;
           }else {
             jsnobj['_id'] = self._id ;
             let currentRow = $('#table').ojTable('option', 'currentRow');
             if (currentRow != null){
                self.obsArray.splice(currentRow['rowIndex'], 1, jsnobj);
                _updateData(model,jsnobj) ;
             }
           }
        }
        $('#editDialog').ojDialog('close');
    };


      // Below are a subset of the ViewModel methods invoked by the ojModule binding
      // Please reference the ojModule jsDoc for additionaly available methods.

      /**
       * Optional ViewModel method invoked when this ViewModel is about to be
       * used for the View transition.  The application can put data fetch logic
       * here that can return a Promise which will delay the handleAttached function
       * call below until the Promise is resolved.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       * @return {Promise|undefined} - If the callback returns a Promise, the next phase (attaching DOM) will be delayed until
       * the promise is resolved
       */
      self.handleActivated = function(info) {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       * @param {boolean} info.fromCache - A boolean indicating whether the module was retrieved from cache.
       */
      self.handleAttached = function(info) {
        // Implement if needed
      };


      /**
       * Optional ViewModel method invoked after the bindings are applied on this View.
       * If the current View is retrieved from cache, the bindings will not be re-applied
       * and this callback will not be invoked.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       */
      self.handleBindingsApplied = function(info) {
        // Implement if needed
      };

      /*
       * Optional ViewModel method invoked after the View is removed from the
       * document DOM.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       * @param {Array} info.cachedNodes - An Array containing cached nodes for the View if the cache is enabled.
       */
      self.handleDetached = function(info) {
        // Implement if needed
      };
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constrcuted
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new MemberViewModel();
  }
);

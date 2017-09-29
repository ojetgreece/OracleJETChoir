/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your about ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery','promise', 'ojs/ojcheckboxset','ojs/ojswitch',
        'ojs/ojtable', 'ojs/ojarraytabledatasource', 'ojs/ojdatetimepicker','ojs/ojselectcombobox','ojs/ojdatetimepicker','ojs/ojselectcombobox',
        'ojs/ojbutton','ojs/ojmodel','ojs/ojinputtext', 'ojs/ojdialog', 'ojs/ojpagingcontrol', 'ojs/ojpagingtabledatasource'],
 function(oj, ko, $) {

    function SchedduleViewModel() {
      var self = this;
      this._id       = ko.observable() ;
      this.name      = ko.observable() ;
      this.date      = ko.observable() ;
      this.enterance = ko.observable() ;
      this.offertory = ko.observable() ;
      this.communion = ko.observable() ;
      this.sending   = ko.observable() ;
      this.name1     = ko.observable() ;
      this.song1     = ko.observable() ;
      this.name2     = ko.observable() ;
      this.song2     = ko.observable() ;
      this.name3     = ko.observable() ;
      this.song3     = ko.observable() ;
      this.responsorial  = ko.observable() ;
      this.mailed     = ko.observable() ;
      this.choir      = ko.observable() ;

      var Arraychoir = [{"_id":"58deed91734d1d01a239853a","name":"1130choir","email":"dond@gmail.com","description":""},
                       {"_id":"58e076a1d0d88130dcb32dac","name":"430PMChoir","email":"Neilia","description":null}];

      var ArrayHymn= [
        {"_id":"58f403d676e2c11574b05391","name":"A Time to Change","author":"","songsheet":"","song":"","pattern":""},
        {"_id":"58f006a524050e0004eb20cf","name":"Above All","author":"","songsheet":"https://drive.google.com/open?id=0B1r4FZfa9OBkby14SVR2UUFBaUU","song":"https://drive.google.com/open?id=0B1r4FZfa9OBkcnRZOGd4ZjRPaTg","pattern":""},{"_id":"58f4043476e2c11574b05392","name":"Above all else","author":"Kirk and Deby Dearman","songsheet":"https://drive.google.com/open?id=0B1r4FZfa9OBkeWRPSzhDMzdSa0E","song":"","pattern":""},
        {"_id":"58f4048476e2c11574b05393","name":"Age to Age","author":"","songsheet":"https://drive.google.com/open?id=0B1r4FZfa9OBkMHA1RWFwRWV0NnM","song":"https://drive.google.com/open?id=0B1r4FZfa9OBkTDAxRjF5a2xKMEU","pattern":""},
        {"_id":"58f4052c76e2c11574b05394","name":"All Creation Worships You","author":"Kirk Dearman &amp; Jim Mills","songsheet":"https://drive.google.com/open?id=0B4MrFxavH7HLN0psb25VcWozU0E","song":"https://drive.google.com/open?id=0B4MrFxavH7HLc1ZNdWhTTTFpVGc","pattern":""},
        {"_id":"58f405c676e2c11574b05395","name":"All Hail Adored Trinity","author":"","songsheet":"https://drive.google.com/open?id=0B1r4FZfa9OBkNnkyNy1tYjlOUTg","song":"https://drive.google.com/open?id=0B1r4FZfa9OBkOGVDS1B0VHJvS1k","pattern":""},
        {"_id":"58f4060d76e2c11574b05396","name":"All Heaven Declares","author":"","songsheet":"https://drive.google.com/open?id=0B1r4FZfa9OBkdUNxLTZCak1vZGc","song":"https://drive.google.com/open?id=0B1r4FZfa9OBkcmtaQUNycmRyX3M","pattern":""},
        {"_id":"58f57057f9f4aa0004edb4f1","name":"Alle, Alle, Alleluia","author":"","songsheet":"https://drive.google.com/open?id=0B1r4FZfa9OBkdU04azZhV2pNNzg","song":"https://drive.google.com/open?id=0B1r4FZfa9OBkVUMzU0dfdDlOSEk","pattern":""},
        {"_id":"58f009a024050e0004eb20d9","name":"Alleluia, Alleluia, Let the Holy Anthem Rise","author":"St. Basil's Hymnal","songsheet":"https://drive.google.com/open?id=0B1r4FZfa9OBkdFFzSkhoUHc5d0k","song":"","pattern":""},
        {"_id":"58f57005f9f4aa0004edb4f0","name":"Alleluia, Sing to Jesus","author":"","songsheet":"https://drive.google.com/open?id=0B1r4FZfa9OBkUG96dXFUbGs1X1U","song":"https://drive.google.com/open?id=0B1r4FZfa9OBkQ2FHOUx1U2ZSQkk","pattern":""},
        {"_id":"58f570f6f9f4aa0004edb4f2","name":"Be Exalted, O God","author":"","songsheet":"https://drive.google.com/open?id=0B1r4FZfa9OBkOHItZTN5ckQ2TlE","song":"https://drive.google.com/open?id=0B4MrFxavH7HLNlhrRm1iMElYVUk","pattern":""},
        {"_id":"58f57161f9f4aa0004edb4f3","name":"Be Magnified","author":"","songsheet":"https://drive.google.com/open?id=0B1r4FZfa9OBkRVpCbEk4a29uRXM","song":"https://drive.google.com/open?id=0B1r4FZfa9OBkUnh1Yk9HSXU5elU","pattern":""},
        {"_id":"58f571c7f9f4aa0004edb4f4","name":"Be Not Afraid","author":"","songsheet":"https://drive.google.com/open?id=0B1r4FZfa9OBkXy1lTXFyTnJleW8","song":"","pattern":""},
        {"_id":"58f57216f9f4aa0004edb4f5","name":"Beautiful","author":"","songsheet":"https://drive.google.com/open?id=0B1r4FZfa9OBkRjFNVUtkUGpGdGc","song":"https://drive.google.com/open?id=0B1r4FZfa9OBkRnI5Z1lUV1poclk","pattern":""},
        {"_id":"58f5726ff9f4aa0004edb4f6","name":"Blessed Are The Meek","author":"","songsheet":"https://drive.google.com/open?id=0B1r4FZfa9OBkYUhvN1pRU2RJeTA","song":"https://drive.google.com/open?id=0B1r4FZfa9OBkVE5rX2tzcGVka1E","pattern":""},
        {"_id":"58f572daf9f4aa0004edb4f7","name":"Blessed Be The Lord God Almighty","author":"","songsheet":"https://drive.google.com/open?id=0B1r4FZfa9OBkRE14bHVVeEl2dXc","song":"https://drive.google.com/open?id=0B1r4FZfa9OBkUVNiTnNpWVdfWUU","pattern":""},
        {"_id":"58f5731ef9f4aa0004edb4f8","name":"Blest Are They","author":"","songsheet":"https://drive.google.com/open?id=0B1r4FZfa9OBkSnZRcUQ4bV9QQWc","song":"https://drive.google.com/open?id=0B1r4FZfa9OBkRXhheFg4bWwtSGs","pattern":""},
        {"_id":"58f408e576e2c11574b0539a","name":"Blest Be the Lord","author":"","songsheet":"https://drive.google.com/open?id=0B1r4FZfa9OBkMUZUUUd3aUdUNVk","song":"","pattern":""},
        {"_id":"58f57386f9f4aa0004edb4f9","name":"Bread, Blessed and Broken","author":"","songsheet":"https://drive.google.com/open?id=0B1r4FZfa9OBkS3h5ZHhCbk9IbTQ","song":"https://drive.google.com/open?id=0B1r4FZfa9OBkckx4bHdzNzZOWG8","pattern":""},
        {"_id":"58f4096076e2c11574b0539b","name":"Faithful One","author":"","songsheet":"https://drive.google.com/open?id=0B1r4FZfa9OBkZ0pPaWJvb2ZyVGM","song":"https://drive.google.com/open?id=0B4MrFxavH7HLa1dnUU0zRG0xaGc","pattern":""},
        {"_id":"58f009de24050e0004eb20da","name":"Highest Place","author":"Ramon Pink","songsheet":"https://drive.google.com/open?id=0B1r4FZfa9OBkM0MzYVpLUHowd3o1ODE4WnNYM2ZqOGl3LW1r","song":"https://drive.google.com/open?id=0B4MrFxavH7HLNkFRckJITnRCMVFSMGRuMVZ4QXd4TUltX3pN","pattern":""},
        {"_id":"58f0082e24050e0004eb20d5","name":"Holy and Anointed One","author":"","songsheet":"https://drive.google.com/open?id=0B1r4FZfa9OBkODMwQUUyUFZ1VXhSTWlYZXBvM0oyaGxxU1Zr","song":"","pattern":""},
        {"_id":"58dd8e55734d1d01a238b589","name":"How great are you Lord","author":"Lynn DeShazo","songsheet":"https://drive.google.com/file/d/0B1r4FZfa9OBkdW02WHFsYS1oNFE/view","song":"","pattern":"V  1 V 2 V V "},
        {"_id":"58f3fea6f914503b444f0bae","name":"I Believe in Jesus","author":"Marc Nelson","songsheet":"https://drive.google.com/open?id=0B4MrFxavH7HLcnoyaHZXSEFaQUk","song":"https://drive.google.com/open?id=0B4MrFxavH7HLZXpwVi1wTVBZbE0","pattern":""},
        {"_id":"58f3fe1df914503b444f0bad","name":"I Just Want to be Where You Are","author":"Don Moen","songsheet":"https://drive.google.com/open?id=0B4MrFxavH7HLdEljc1BWS0pzREk","song":"https://drive.google.com/open?id=0B4MrFxavH7HLWmg5RmxBMUpNSG8","pattern":""},
        {"_id":"58f0087b24050e0004eb20d6","name":"In the Breaking of the Bread","author":"Hurd","songsheet":"https://drive.google.com/open?id=0B1r4FZfa9OBkQ09hZ1piWHFRQzA","song":"","pattern":""},
        {"_id":"58f0080024050e0004eb20d4","name":"Jesus, All for Jesus","author":"Robin Mark","songsheet":"https://drive.google.com/open?id=0B1r4FZfa9OBkTTc2VjIwVGRNUG8","song":"","pattern":""},
        {"_id":"58f00a1e24050e0004eb20db","name":"Lamb of God ","author":"Twila Paris","songsheet":"https://drive.google.com/open?id=0B4MrFxavH7HLVnhrLVFwRVByc0U","song":"","pattern":""},
        {"_id":"58f406c576e2c11574b05398","name":"O, Magnify the Lord","author":"","songsheet":"https://drive.google.com/open?id=0B1r4FZfa9OBkOVFjbml6TFliS28","song":"","pattern":""},
        {"_id":"58f0075224050e0004eb20d2","name":"Our God Reigns","author":"L. E. Smith, Jr.","songsheet":"https://drive.google.com/open?id=0B4MrFxavH7HLNVVMZmhDNWFHckE","song":"","pattern":""},
        {"_id":"58f00a4d24050e0004eb20dc","name":"Our God Reigns","author":"L. E. Smith, Jr.","songsheet":"https://drive.google.com/open?id=0B4MrFxavH7HLNVVMZmhDNWFHckE","song":"","pattern":""},
        {"_id":"58f0072124050e0004eb20d1","name":"Peace","author":"Weston priory","songsheet":"https://drive.google.com/open?id=0B1r4FZfa9OBkd3l0d095Ry1pUVk","song":"","pattern":""},
        {"_id":"58f4080f76e2c11574b05399","name":"Power of Your Love","author":"","songsheet":"https://drive.google.com/open?id=0B1r4FZfa9OBkdUJ5bkRqN0lWUHc","song":"","pattern":""},
        {"_id":"58f3fd75f914503b444f0bac","name":"Sing a Joyful Song","author":"Jim Farell","songsheet":"https://drive.google.com/open?id=0B1r4FZfa9OBkbXdVbmdNRnRnUms","song":"https://drive.google.com/open?id=0B1r4FZfa9OBkbXNYVUpsbFE3Q1E","pattern":""},
        {"_id":"58f4200e41270b16c0b20f92","name":"Song without songsheet","author":"","songsheet":"","song":"","pattern":""},
        {"_id":"58f4068276e2c11574b05397","name":"Spirit Song","author":"","songsheet":"https://drive.google.com/open?id=0B1r4FZfa9OBkRDNPNENRckpBaG8","song":"","pattern":""},
        {"_id":"58f006d624050e0004eb20d0","name":"Spirit of the Living God","author":"Daniel Iverson","songsheet":"https://drive.google.com/open?id=0B1r4FZfa9OBkVmdtVmw2Zkp1V1U","song":"","pattern":""},
        {"_id":"58f008c424050e0004eb20d7","name":"The Lord Reigns","author":"Dan Stradwick","songsheet":"https://drive.google.com/open?id=0B1r4FZfa9OBkczFnaWUzYzFxaWM","song":"","pattern":""},
        {"_id":"58e1cc0de1f56031082d1cae","name":"Wonderful, Merciful Savior","author":"Selah","songsheet":"https://drive.google.com/file/d/0B1r4FZfa9OBkMVFPMHZpWlFtTzg/view","song":"","pattern":""}
    ];

    var ArraySchedule = [
      {"_id":"58f4133041270b16c0b20f91","date":"2017-06-04","name":"PentecostSunday","enterance":"58f3fea6f914503b444f0bae","offertory":"58f006d624050e0004eb20d0","communion":"58f4096076e2c11574b0539b","sending":"58f4080f76e2c11574b05399","name1":"","song1":"","name2":"","song2":"","name3":"","song3":"","responsorial":"https://drive.google.com/open?id=0B1r4FZfa9OBkRi1SZ1RqcG10V2M","mailed":false,"mailedt":"","choir":"58deed91734d1d01a239853a"},
      {"_id":"58f412a341270b16c0b20f90","date":"2017-05-28","name":"7th Sunday of Easter","enterance":"58f0080024050e0004eb20d4","offertory":"58f4052c76e2c11574b05394","communion":"58f00a1e24050e0004eb20db","sending":"58f408e576e2c11574b0539a","name1":"","song1":"","name2":"","song2":"","name3":"","song3":"","responsorial":"https://drive.google.com/open?id=0B1r4FZfa9OBkaHJaUTZVRENWR0U","mailed":false,"mailedt":"","choir":"58deed91734d1d01a239853a"},
      {"_id":"58f4123e41270b16c0b20f8f","date":"2017-05-21","name":"6th Sunday of Easter  ","enterance":"58f0080024050e0004eb20d4","offertory":"58f4068276e2c11574b05397","communion":"58f00a1e24050e0004eb20db","sending":"58f406c576e2c11574b05398","name1":"","song1":"","name2":"","song2":"","name3":"","song3":"","responsorial":"https://drive.google.com/open?id=0B1r4FZfa9OBkSDdhOGNHdW1LYzA","mailed":false,"mailedt":"","choir":"58deed91734d1d01a239853a"},
      {"_id":"58f3ff80f914503b444f0baf","date":"2017-05-14","name":"4th Sunday of Easter","enterance":"58f3fd75f914503b444f0bac","offertory":"58f006a524050e0004eb20cf","communion":"58f3fe1df914503b444f0bad","sending":"58f3fea6f914503b444f0bae","name1":"","song1":"","name2":"","song2":"","name3":"","song3":"","responsorial":"https://drive.google.com/open?id=0B1r4FZfa9OBkb2ZrRXIzOTBLVFE","mailed":false,"mailedt":"","choir":"58deed91734d1d01a239853a"},
      {"_id":"58f00b1324050e0004eb20dd","date":"2017-05-07","name":"4th Sunday of Easter","enterance":"58f009a024050e0004eb20d9","offertory":"58f009de24050e0004eb20da","communion":"58f00a1e24050e0004eb20db","sending":"58f0075224050e0004eb20d2","name1":"","song1":"","name2":"","song2":"","name3":"","song3":"","responsorial":"https://drive.google.com/open?id=0B1r4FZfa9OBkYzRoeklFVF80Ykk","mailed":true,"mailedt":"","choir":"58deed91734d1d01a239853a"},
      {"_id":"58f0090224050e0004eb20d8","date":"2017-04-30","name":"3rd Sunday of Easter","enterance":"58f0080024050e0004eb20d4","offertory":"58f0082e24050e0004eb20d5","communion":"58f0087b24050e0004eb20d6","sending":"58f008c424050e0004eb20d7","name1":"","song1":"","name2":"","song2":"","name3":"","song3":"","responsorial":"https://drive.google.com/open?id=0B1r4FZfa9OBkYkdNWmpaMjlreDA","mailed":true,"mailedt":"","choir":"58deed91734d1d01a239853a"},
      {"_id":"58f0078f24050e0004eb20d3","date":"2017-04-23","name":"2nd Sunday of Easter ","enterance":"58f006a524050e0004eb20cf","offertory":"58f006d624050e0004eb20d0","communion":"58f0072124050e0004eb20d1","sending":"58f0075224050e0004eb20d2","name1":"","song1":"","name2":"","song2":"","name3":"","song3":"","responsorial":"https://drive.google.com/open?id=0B1r4FZfa9OBkMHpGMk1PODlLM2M","mailed":true,"mailedt":"","choir":"58deed91734d1d01a239853a"}
    ];

      self.obsArray   = ko.observableArray(ArraySchedule) ;
      self.choirArray = ko.observableArray(Arraychoir);
      self.hymnArray  = ko.observableArray(ArrayHymn);

      self.datasource = new oj.PagingTableDataSource(new oj.ArrayTableDataSource(self.obsArray, {idAttribute: '_id'}) );
      this.validPage = ko.computed(function () {
           let retval = false ;
          if(self.name() && self.date() && self.enterance() && self.offertory() && self.communion() && self.sending() ){
            retval = true ;
          }
          return retval ;
      }) ;


      self.deleteAction = function(data, event){
        if ( confirm('Are you sure ?') ) {
          var currentRow = $('#table').ojTable('option', 'currentRow');
            if (currentRow != null)
            {
                self.obsArray.splice(currentRow['rowIndex'], 1);
            }
          }
        return true;
      };

      self.dupName = function(id, name) {
         let retval = false ;
         let index = undefined ;
         //console.log( self.obsArray() );
         index= self.obsArray().findIndex(function(_doc){
            return(_doc.name.toUpperCase()==name );
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

      self.dupDate = function(id, date) {
         let retval = false ;
         let index = undefined ;
         //console.log( self.obsArray() );
         index= self.obsArray().findIndex(function(_doc){
            return(_doc.date() == date );
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
         self.name(data.name)    ;
         self.date(data.date) ;
         self.enterance(data.enterance) ;
         self.offertory(data.offertory) ;
         self.communion(data.communion) ;
         self.sending(data.sending) ;
         self.name1(data.name1) ;
         self.song1(data.song1) ;
         self.name2(data.name2) ;
         self.song2(data.song2) ;
         self.name3(data.name3) ;
         self.song3(data.song3) ;
         self.responsorial(data.responsorial) ;
         self.mailed(data.mailed) ;
         self.choir(data.choir) ;

         $('#editDialog').ojDialog('open');

      };

    self.addAction = function() {
      self._id(-1) ;
      self.name(null)    ;
      self.date(null) ;
      self.enterance(null) ;
      self.offertory(null) ;
      self.communion(null) ;
      self.sending(null) ;
      self.name1(null) ;
      self.song1(null) ;
      self.name2(null) ;
      self.song2(null) ;
      self.name3(null) ;
      self.song3(null) ;
      self.responsorial(null) ;
      self.mailed(false) ;
      self.choir(null) ;

       $('#editDialog').ojDialog('open');
    };

    self.saveAction = function(formData, event) {
        //console.log(formData) ;
        //console.log(self.choir() );
        if (self.name()) {

           if (self.dupName(self._id(), self.name().toUpperCase()  ) ) {
             alert( 'Plese enter a unique name!') ;
             return ;
           }
           jsnobj = JSON.parse("{}") ;
           jsnobj['name']      = self.name() ;
           jsnobj['date']      = self.date() ;
           jsnobj['enterance'] = self.enterance() ;
           jsnobj['offertory'] = self.offertory() ;
           jsnobj['communion'] = self.communion() ;
           jsnobj['sending']   = self.enterance() ;
           jsnobj['song1']     = self.song1() ;
           jsnobj['name1']     = self.name1() ;
           jsnobj['song2']     = self.song2() ;
           jsnobj['name2']     = self.name2() ;
           jsnobj['song3']     = self.song3() ;
           jsnobj['responsorial']     = self.responsorial() ;
           jsnobj['mailed']           = self.mailed() ;
           jsnobj['choir']            = self.choir() ;


           if ( self._id() == '-1') {
              // create
              //console.log(self.obsArray.length);
              jsnobj['_id'] = Math.random().toString() ;
              self.obsArray.push(jsnobj) ;
              //console.log(self.obsArray.length) ;
           }else {
             jsnobj['_id'] = self._id ;
             let currentRow = $('#table').ojTable('option', 'currentRow');
             if (currentRow != null){
                self.obsArray.splice(currentRow['rowIndex'], 1, jsnobj);
             }
           }
        }
        $('#editDialog').ojDialog('close');
    };


    }


    return new SchedduleViewModel();
  }
);

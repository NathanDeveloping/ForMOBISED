/**
 * namespace APP
 * détient les modules de l'application
 * ainsi qu'une methode d'initialisation
 *
 * @type {{modules, init}}
 */
var APP = (function() {
    return {
        modules: {},
        init: function () {
            $('#type').on('change', APP.modules.affichage.initMeasuresGroupCombobox);
            $('#addCreator').click(APP.modules.affichage.addFileCreator);
            $('#deleteCreator1').click(APP.modules.affichage.deleteFileCreator);
            $('#addOperator').click(APP.modules.affichage.addOperator);
            $('#deleteOperator1').click(APP.modules.affichage.deleteOperator);
            $('#addInstitution').click(APP.modules.affichage.addInstitution);
            $('#addSamplingDate').click(APP.modules.affichage.addSamplingDate);
            $('#addScientificField').click(APP.modules.affichage.addScientificField);
            $('#addSampleKind').click(APP.modules.affichage.addSampleKind);
            $('#deleteMeasurement1').click(APP.modules.affichage.deleteMeasurement);
            $('#addMeasurement').click(APP.modules.affichage.addMeasurement);
            $('#deleteSetting1').click(APP.modules.affichage.deleteMethodology);
            $('#addSetting').click(APP.modules.affichage.addMethodology);
            $('#valider').click(APP.modules.enregistrement.test);
        }
    }
})();

APP.modules.affichage = (function() {

    var nbFileCreators = 1;
    var nbFileCreatorsAdded = 1;
    var nbOperators = 1;
    var nbOperatorsAdded = 1;
    var nbInstitutionAdded = 1;
    var nbInstitution = 1;
    var nbSamplingDate = 1, nbSamplingDateAdded = 1, nbScientificField = 1, nbScientificFieldAdded= 1, nbStation= 1, nbStationAdded= 1, nbMeasurement= 1, nbMeasurementAdded= 1, nbMethodology= 1, nbMethodologyAdded= 1, nbSampleKind = 1, nbSampleKindAdded = 1;

    return {

        initMeasuresGroupCombobox : function() {
            var group = $('#group');
            group.empty();
            var groupAnalysis = [];
            switch($('#type').val()) {
                case "sediment" :
                    groupAnalysis = {"GP" : "Global Parameters", "EA" : "Element Analysis", "PSD" : "Particle Size Distribution", "XRF" : "X-Ray Fluorescence", "PAC" : "Polyclic Aromatic Compounds"};
                    break;
                case "hydrology" :
                    groupAnalysis = {"QMJ" : "Daily Integrated Flow", "QTVAR" : "Instantaneous Flow"};
                    break;
                case "spm" :
                    groupAnalysis = {"EA" : "Element Analysis"};
                    break;
                case "water" :
                    groupAnalysis = {"EA" : "Element Analysis", "GP" : "Global Parameters", "16S-MGE" : "", "PHAGE" : "", "PAC" : "Polyclic Aromatic Compounds"};
                    break;
            }
            for(var index in groupAnalysis) {
                group.append($('<option>', {
                    value : index,
                    html: index + " : <i>" + groupAnalysis[index] + "</i>"
                }));
            }
            group.attr('disabled', false);
            group.selectpicker('refresh');
        },

        addFileCreator : function() {
            $('.formFileCreators .form-group:last').after('<div class="form-group" id="fileCreatorFormGroup' + (nbFileCreatorsAdded + 1) + '"> <div class="row"> <div class="col-xs-3"> <label class="control-label" id="nameLabel" for="name' + (nbFileCreatorsAdded + 1) + '">Name :</label> <input type="text" id="name' + (nbFileCreatorsAdded  + 1) + '" class="form-control name"> </div> <div class="col-xs-3"> <label class="control-label" for="firstname' + (nbFileCreatorsAdded  + 1) + '">Firstname :</label> <input type="text" id="firstname' + (nbFileCreatorsAdded  + 1) + '" class="form-control firstname"> </div> <div class="col-xs-4"> <label class="control-label" for="email' + (nbFileCreatorsAdded  + 1) + '">Email :</label> <input type="text" id="email' + (nbFileCreatorsAdded + 1) + '" class="form-control email"> </div>  <button type="button" class="btn btn-danger deleteButton deleteCreatorButton" id="deleteCreator' + (nbFileCreatorsAdded + 1) + '"><span class="glyphicon glyphicon-remove"></span></button></div> </div>');
            nbFileCreators++;
            nbFileCreatorsAdded++;
            var target = $('#deleteCreator' + nbFileCreatorsAdded);
            target.unbind();
            target.click(APP.modules.affichage.deleteFileCreator);
        },

        deleteFileCreator : function() {
            if(nbFileCreators > 1) {
                var nb = $(this).attr('id').replace("deleteCreator", "");
                $('#fileCreatorFormGroup' + nb).remove();
                nbFileCreators--;
            }
        },
        
        addOperator : function() {
            $('.formOperators .form-group:last').after('<div class="form-group" id="operatorFormGroup' + (nbOperatorsAdded + 1) + '"> <div class="row"> <div class="col-xs-3"> <label class="control-label" id="nameLabel" for="operatorName' + (nbOperatorsAdded + 1) + '">Name :</label> <input type="text" id="operatorName' + (nbOperatorsAdded  + 1) + '" class="form-control operatorName"> </div> <div class="col-xs-3"> <label class="control-label" for="operatorFirstname' + (nbOperatorsAdded  + 1) + '">Firstname :</label> <input type="text" id="operatorFirstname' + (nbOperatorsAdded  + 1) + '" class="form-control operatorFirstname"> </div> <div class="col-xs-4"> <label class="control-label" for="email' + (nbOperatorsAdded  + 1) + '">Email :</label> <input type="text" id="operatorEmail' + (nbOperatorsAdded + 1) + '" class="form-control operatorEmail"> </div>  <button type="button" class="btn btn-danger deleteButton deleteOperatorButton" id="deleteOperator' + (nbOperatorsAdded + 1) + '"><span class="glyphicon glyphicon-remove"></span></button></div> </div>');
            nbOperators++;
            nbOperatorsAdded++;
            var target = $('#deleteOperator' + nbOperatorsAdded);
            target.unbind();
            target.click(APP.modules.affichage.deleteOperator);
        },

        deleteOperator : function() {
            if(nbOperators > 1) {
                var nb = $(this).attr('id').replace("deleteOperator", "");
                $('#operatorFormGroup' + nb).remove();
                nbOperators--;
            }
        },

        addInstitution : function() {
            nbInstitutionAdded++;
            nbInstitution++;
            $('.formLanguageInstitution .formGroupInstitution:last').after('<div class="form-group formGroupInstitution" id="institutionFormGroup' + nbInstitutionAdded + '"> <div class="col-sm-4"></div> <div class="col-sm-7"> <input type="text" id="institution' + nbInstitutionAdded + '" class="form-control institution"> </div> <button type="button" class="btn btn-danger deleteInstitutionButton col-sm-1" id="deleteInstitution' + nbInstitutionAdded + '"><span class="glyphicon glyphicon-remove"></span></button> </div>');
            var target = $('#deleteInstitution' + nbInstitutionAdded);
            target.unbind();
            target.click(APP.modules.affichage.deleteInstitution);
        },

        deleteInstitution : function() {
            if(nbInstitution > 1) {
                var nb = $(this).attr('id').replace("deleteInstitution", "");
                $('#institutionFormGroup' + nb).remove();
                nbInstitution--;
            }
        },

        addSamplingDate : function() {
            nbSamplingDate++;
            nbSamplingDateAdded++;
            $('.formLanguageInstitution .formGroupSamplingDate:last').after('<div class="form-group formGroupSamplingDate" id="formGroupSamplingDate' + nbSamplingDateAdded + '"> <div class="col-sm-4"></div><div class="col-sm-7"> <input id="samplingdate' + nbSamplingDateAdded + '" type="date" name="samplingdate" class="samplingdate"> </div> <button type="button" class="btn btn-danger deleteSamplingDateButton col-sm-1" id="deleteSamplingDate' + nbSamplingDateAdded + '"><span class="glyphicon glyphicon-remove"></span></button></div>');
            var target = $('#deleteSamplingDate' + nbSamplingDateAdded);
            target.unbind();
            target.click(APP.modules.affichage.deleteSamplingDate);
        },

        deleteSamplingDate : function() {
            if(nbSamplingDate > 1) {
                var nb = $(this).attr('id').replace("deleteSamplingDate", "");
                $('#formGroupSamplingDate' + nb).remove();
                nbSamplingDate--;
            }
        },

        addScientificField: function() {
            nbScientificField++;
            nbScientificFieldAdded++;
            $('.formLanguageInstitution .formGroupScientificField:last').after('<div class="form-group formGroupScientificField" id="formGroupScientificField' + nbScientificFieldAdded + '"> <div class="col-sm-4"></div> <div class="col-sm-7"> <input type="text" id="scientificField' + nbScientificFieldAdded + '" class="form-control scientificField"> </div> <button type="button" class="btn btn-danger deleteScientificFieldButton col-sm-1" id="deleteScientificField' + nbScientificFieldAdded + '"><span class="glyphicon glyphicon-remove"></span></button> </div>');
            var target = $('#deleteScientificField' + nbScientificFieldAdded);
            target.unbind();
            target.click(APP.modules.affichage.deleteScientificField);
        },

        deleteScientificField : function() {
            if(nbScientificField > 1) {
                var nb = $(this).attr('id').replace("deleteScientificField", "");
                $('#formGroupScientificField' + nb).remove();
                nbScientificField--;
            }
        },

        addSampleKind : function() {
            nbSampleKind++;
            nbSampleKindAdded++;
            $('.formLanguageInstitution .formGroupSampleKind:last').after('<div class="form-group formGroupSampleKind" id="formGroupSampleKind' + nbSampleKindAdded + '"> <div class="col-sm-4"></div> <div class="col-sm-5"> <input type="text" id="sampleKind' + nbSampleKindAdded + '" class="form-control sampleKind" placeholder="name"> </div> <div class="col-sm-2"> <input type="text" id="sampleKindAbbreviation' + nbSampleKindAdded + '" class="form-control sampleKindAbbreviation" placeholder="abbreviation"> </div> <button type="button" class="btn btn-danger deleteSampleKind col-sm-1" id="deleteSampleKind' + nbSampleKindAdded + '"><span class="glyphicon glyphicon-remove"></span></button></div>');
            var target = $('#deleteSampleKind' + nbSampleKindAdded);
            target.unbind();
            target.click(APP.modules.affichage.deleteSampleKind);
        },

        deleteSampleKind : function() {
            if(nbSampleKind > 1) {
                var nb = $(this).attr('id').replace("deleteSampleKind", "");
                $('#formGroupSampleKind' + nb).remove();
                nbSampleKind--;
            }
        },

        addMeasurement : function() {
            nbMeasurement++;
            nbMeasurementAdded++;
            $('.measurementFormGroup:last').after('<div class="form-group measurementFormGroup" id="measurementFormGroup' + nbMeasurementAdded + '"> <div class="row"> <div class="col-xs-3"> <label class="control-label" id="natureLabel" for="nature' + nbMeasurementAdded + '">Nature :</label> <input type="text" id="nature' + nbMeasurementAdded + '" class="form-control nature"> </div> <div class="col-xs-3"> <label class="control-label" for="abbreviation' + nbMeasurementAdded + '">Abbreviation :</label> <input type="text" id="abbreviation' + nbMeasurementAdded + '" class="form-control abbreviation"> </div> <div class="col-xs-4"> <label class="control-label" for="unit' + nbMeasurementAdded + '">Unit :</label> <input type="text" id="unit' + nbMeasurementAdded + '" class="form-control unit"> </div> <button type="button" class="btn btn-danger deleteButton deleteMeasurementButton" id="deleteMeasurement' + nbMeasurementAdded + '"><span class="glyphicon glyphicon-remove"></span></button> </div> </div>');
            var target = $('#deleteMeasurement' + nbMeasurementAdded);
            target.unbind();
            target.click(APP.modules.affichage.deleteMeasurement);
        },

        deleteMeasurement : function() {
            if(nbMeasurement > 1) {
                var nb = $(this).attr('id').replace("deleteMeasurement", "");
                $('#measurementFormGroup' + nb).remove();
                nbMeasurement--;
            }
        },

        addMethodology : function() {
            nbMethodology++;
            nbMethodologyAdded++;
            $('.methodologyFormGroup:last').after('<div class="form-group methodologyFormGroup" id="methodologyFormGroup' + nbMethodologyAdded + '"> <div class="row"> <div class="col-xs-5" id="settingCol"> <label class="control-label" id="settingLabel' + nbMethodologyAdded + '" for="">Setting :</label> <input type="text" id="setting' + nbMethodologyAdded + '" class="form-control setting"> </div> <div class="col-xs-5"> <label class="control-label" for="settingMethodology' + nbMethodologyAdded + '">Setting \'s methodology :</label> <input type="text" id="settingMethodology' + nbMethodologyAdded + '" class="form-control settingMethodology"> </div> <button type="button" class="btn btn-danger deleteButton deleteSettingButton" id="deleteSetting' + nbMethodologyAdded + '"><span class="glyphicon glyphicon-remove"></span></button> </div> </div>');
            var target = $('#deleteSetting' + nbMethodologyAdded);
            target.unbind();
            target.click(APP.modules.affichage.deleteMethodology);
        },

        deleteMethodology : function() {
            if(nbMethodology > 1) {
                var nb = $(this).attr('id').replace("deleteSetting", "");
                $('#methodologyFormGroup' + nb).remove();
                nbMethodology--;
            }
        },

        getNbFileCreator : function() {
            return nbFileCreators;
        }


    }

})();

APP.modules.enregistrement = (function() {

    var val = ['type', 'group', 'title', 'description', 'name', 'firstname', 'email', 'operatorName', 'operatorFirstname', 'operatorEmail', 'projectName', 'samplingdate', 'language', 'institution', 'scientificField', 'sampleKind', 'sampleKindAbbreviation', 'nature', 'abbreviation', 'unit', 'setting', 'station', 'settingMethodology'];
    var success = true;
    return {

        test : function() {
            val.forEach(function(k) {
                var element = $('.' + k);
               switch(k) {
                   case "name":
                   case "firstname" :
                   case "operatorName" :
                   case "operatorFirstname" :
                   case "institution" :
                   case "scientificField" :
                   case "sampleKind" :
                   case "sampleKindAbbreviation" :
                   case "nature":
                   case "abbreviation":
                   case "unit" :
                   case "setting" :
                   case "settingMethodology":
                       element.each(function() {
                           var e = $(this);
                           if(e.val() == "") {
                               success = false;
                               if(!e.parentsUntil('.form-group').hasClass("has-error")) {
                                   e.parentsUntil('.form-group').toggleClass("has-error");
                               }
                           } else {
                               if(e.parentsUntil('.form-group').hasClass("has-error")) {
                                   e.parentsUntil('.form-group').toggleClass("has-error");
                               }
                           }
                       });
                       break;
                   case "email" :
                       element.each(function() {
                           var e = $(this);
                           console.log(e);
                           if(e.val() == "") {
                               success = false;
                               if(!e.parentsUntil('.form-group').hasClass("has-error")) {
                                   e.parentsUntil('.form-group').toggleClass("has-error");
                               }
                           } else {
                               if(!APP.modules.utilitaire.validateEmail(e.val())) {
                                   success = false;
                                   if(!e.parentsUntil('.form-group').hasClass("has-error")) {
                                       e.parentsUntil('.form-group').toggleClass("has-error");
                                   }
                               } else {
                                   if(e.parentsUntil('.form-group').hasClass("has-error")) {
                                       e.parentsUntil('.form-group').toggleClass("has-error");
                                   }
                               }
                           }
                       });
                       break;
                   case "operatorEmail" :
                       element.each(function() {
                           var e = $(this);
                           if (e.val() != "") {
                               if(!APP.modules.utilitaire.validateEmail(e.val())) {
                                   success = false;
                                   if(!e.parentsUntil('.form-group').hasClass("has-error")) {
                                       e.parentsUntil('.form-group').toggleClass("has-error");
                                   }
                               } else {
                                   if(e.parentsUntil('.form-group').hasClass("has-error")) {
                                       e.parentsUntil('.form-group').toggleClass("has-error");
                                   }
                               }
                           }
                       });
                       break;
                   default :
                       var e = $('#' + k);
                       if(e.val() == "") {
                           if(k == "samplingdate") {
                               var errorMessage = $('#errorSamplingDate');
                               if(!errorMessage.is(':visible')) {
                                   errorMessage.show();
                               }
                           }
                           success = false;
                           if(!e.parentsUntil('.form-group').hasClass("has-error")) {
                               e.parentsUntil('.form-group').toggleClass("has-error");
                           }
                       } else {
                           if(e.parentsUntil('.form-group').hasClass("has-error")) {
                               e.parentsUntil('.form-group').toggleClass("has-error");
                           }
                       }
               }
            });
            if(success) {
                APP.modules.enregistrement.enregistrer();
            } else {
                success = true;
            }
        },

        enregistrer : function() {
            $('#formulaire').hide();
            $('#success').show();
        }

    }

})();

APP.modules.utilitaire = (function() {

    return {

        validateEmail : function(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }

    }

})();

window.onload = (function () {
    APP.init();
})();
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
            $('.formFileCreators .form-group:last').after('<div class="form-group" id="fileCreatorFormGroup' + (nbFileCreatorsAdded + 1) + '"> <div class="row"> <div class="col-xs-3"> <label class="control-label" id="nameLabel" for="name' + (nbFileCreatorsAdded + 1) + '">Name :</label> <input type="text" id="name' + (nbFileCreatorsAdded  + 1) + '" class="form-control"> </div> <div class="col-xs-3"> <label class="control-label" for="firstname' + (nbFileCreatorsAdded  + 1) + '">Firstname :</label> <input type="text" id="firstname' + (nbFileCreatorsAdded  + 1) + '" class="form-control"> </div> <div class="col-xs-4"> <label class="control-label" for="email' + (nbFileCreatorsAdded  + 1) + '">Email :</label> <input type="text" id="email' + (nbFileCreatorsAdded + 1) + '" class="form-control"> </div>  <button type="button" class="btn btn-danger deleteButton deleteCreatorButton" id="deleteCreator' + (nbFileCreatorsAdded + 1) + '"><span class="glyphicon glyphicon-remove"></span></button></div> </div>');
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
            $('.formOperators .form-group:last').after('<div class="form-group" id="operatorFormGroup' + (nbOperatorsAdded + 1) + '"> <div class="row"> <div class="col-xs-3"> <label class="control-label" id="nameLabel" for="name' + (nbOperatorsAdded + 1) + '">Name :</label> <input type="text" id="name' + (nbOperatorsAdded  + 1) + '" class="form-control"> </div> <div class="col-xs-3"> <label class="control-label" for="firstname' + (nbOperatorsAdded  + 1) + '">Firstname :</label> <input type="text" id="firstname' + (nbOperatorsAdded  + 1) + '" class="form-control"> </div> <div class="col-xs-4"> <label class="control-label" for="email' + (nbOperatorsAdded  + 1) + '">Email :</label> <input type="text" id="email' + (nbOperatorsAdded + 1) + '" class="form-control"> </div>  <button type="button" class="btn btn-danger deleteButton deleteOperatorButton" id="deleteOperator' + (nbOperatorsAdded + 1) + '"><span class="glyphicon glyphicon-remove"></span></button></div> </div>');
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
            $('.formLanguageInstitution .form-group:last').after('<div class="form-group" id="institutionFormGroup' + nbInstitutionAdded + '"> <div class="col-sm-4"></div> <div class="col-sm-7"> <input type="text" id="institution' + nbInstitutionAdded + '" class="form-control"> </div> <button type="button" class="btn btn-danger deleteInstitutionButton col-sm-1" id="deleteInstitution' + nbInstitutionAdded + '"><span class="glyphicon glyphicon-remove"></span></button> </div>');
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
        }
    }

})();

window.onload = (function () {
    APP.init();
})();
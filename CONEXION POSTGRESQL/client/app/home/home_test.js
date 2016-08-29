'use strict';
describe('myApp.home module', function(){
    beforeEach(module('myApp.home'));

    describe('home controller', function(){
        var scope, homeCtrl;

        beforeEach(inject(function($rootScope, $controller) {
            scope = $rootScope.$new();
            homeCtrl = $controller('HomeCtrl', {$scope: scope});
        }));

        it('should be defined', function(){
            expect(homeCtrl).toBeDefined();
        });
    });
}); 

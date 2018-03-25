jasmine.getJSONFixtures().fixturesPath='base/';
var site_data = getJSONFixture('data.json')


describe('Site Data', function() {

  beforeEach(module('garethPortfolio'));

  var ds, dsSpy, q, http,spy;
    
  beforeEach(inject(function(_dataService_, $q, $httpBackend) {
    ds = _dataService_;
    q = $q;
    http = $httpBackend;

    http.expect('GET', '/js/data.min.json').respond(200, site_data);

  }));
    

    it("data is valid", function() {

         ds.requestPortfolioData().then(function(data) {
             
            expect(data).toBeDefined(); //Something is returned
            expect(data.data['portfolio'].Items).toBeDefined();  //The Items array is also here
             
            var portfolios = JSON.stringify(data.data['portfolio'].Items);
             
            portfolios = JSON.parse(portfolios);
             
            $.each( portfolios, function( key, value ) {
                
                expect(value).toBeDefined(); //Check its there
                
                expect(value.name).toBeDefined();  //Essential values
                expect(value.work_class).toBeDefined(); 
                expect(value.images).toBeDefined(); 
                expect(value.bg).toBeDefined(); 
                expect(value.cover).toBeDefined(); 
                expect(value.desc).toBeDefined();
                
            });
             
         });
        
        http.flush();
        
    });


});
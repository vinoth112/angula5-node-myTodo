import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialListComponent } from './material-list.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MaterialService } from '../../services/materialService';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
class httpMock{
  get(url){

  }
}

class MaterialMockService{

}

class MockRouter{
  navigate(url){

  }
}

describe('MaterialListComponent', () => {
  let materialService;
  let httpService;
  let routerService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MaterialListComponent
      ],
      providers: [
        {
          provide: HttpClient, useClass: httpMock
        },
        {
          provide: Router, useClass: MockRouter
        },        
        MaterialService 
      ],
      imports: [ RouterTestingModule ]
    }).compileComponents();
  }));
  beforeEach(() => {
    
    materialService = TestBed.get(MaterialService);
    httpService = TestBed.get(HttpClient);
    routerService = TestBed.get(Router);
  });
  it('should create the MaterialListComponent', async(() => {
    const fixture = TestBed.createComponent(MaterialListComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  }));
  
  it('ngOninit should fetch data from API', async(() => {
    let spy = spyOn(httpService, 'get').and.returnValue(Observable.of({}));
    const fixture = TestBed.createComponent(MaterialListComponent);
    const comp = fixture.debugElement.componentInstance;
    comp.ngOnInit();
    expect(httpService.get).toHaveBeenCalled();
  }));

  it('should go to edit page on edit click', async(() => {
    let spy = spyOn(routerService, 'navigate').and.returnValue('');
    const fixture = TestBed.createComponent(MaterialListComponent);
    const comp = fixture.debugElement.componentInstance;
    comp.edit();
    expect(routerService.navigate).toHaveBeenCalled();
  }));

  it('should create the MaterialListComponent', async(() => {
    const fixture = TestBed.createComponent(MaterialListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should create the MaterialListComponent', async(() => {
    const fixture = TestBed.createComponent(MaterialListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));



});
 
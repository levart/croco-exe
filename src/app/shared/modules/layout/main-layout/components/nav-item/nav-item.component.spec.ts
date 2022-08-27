import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavItemComponent } from './nav-item.component';

describe('NavItemComponent', () => {
  let component: NavItemComponent;
  let fixture: ComponentFixture<NavItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('item not exist', () => {
    component.item = null;
    expect(component).toBeTruthy();
  });

  it('item exist', () => {
    component.item = {
      title: 'SPORT',
      icon: '/assets/media/icons/sport.svg',
      url: ['/sport']
    };
    expect(component).toBeTruthy();
  });
});

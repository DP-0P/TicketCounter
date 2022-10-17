import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketBookSuccessComponent } from './ticket-book-success.component';

describe('TicketBookSuccessComponent', () => {
  let component: TicketBookSuccessComponent;
  let fixture: ComponentFixture<TicketBookSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketBookSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketBookSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

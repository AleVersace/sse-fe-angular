import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SseListenerComponent } from './sse-listener.component';

describe('SseListenerComponent', () => {
  let component: SseListenerComponent;
  let fixture: ComponentFixture<SseListenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SseListenerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SseListenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

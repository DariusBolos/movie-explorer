import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageGalleria } from './image-galleria.component';

describe('ImageGalleria', () => {
  let component: ImageGalleria;
  let fixture: ComponentFixture<ImageGalleria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageGalleria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageGalleria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

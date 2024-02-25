import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductManagementComponent } from './product-management.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ApiService } from '../api.service';
import { NgxPaginationModule } from 'ngx-pagination';

describe('ProductManagementComponent', () => {
  let component: ProductManagementComponent;
  let fixture: ComponentFixture<ProductManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductManagementComponent],
      imports: [HttpClientTestingModule, NgxPaginationModule],
      providers: [ApiService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProductManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

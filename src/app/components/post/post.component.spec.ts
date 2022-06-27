import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostComponent } from './post.component';

describe('Post Component', () => {
  let fixture: ComponentFixture<PostComponent>;
  let component: PostComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostComponent],
    });

    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
  });
  it('should create post component using TestBed', () => {
    expect(component).toBeDefined();
  });
  xit('should raise and event when the delet post is clicked', () => {});
});

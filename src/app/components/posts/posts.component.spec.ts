import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/Post/post.service';
import { PostsComponent } from './posts.component';

class mockPostService {
  getPosts() {}

  deletePost(post: Post) {
    return of(true);
  }
}

describe('Posts Component', () => {
  let POSTS: Post[];
  let component: PostsComponent;
  let postService: any;

  beforeEach(() => {
    POSTS = [
      {
        id: 1,
        body: 'body 1',
        title: 'title 1',
      },
      {
        id: 2,
        body: 'body 2',
        title: 'title 2',
      },
      {
        id: 3,
        body: 'body 3',
        title: 'title 3',
      },
    ];

    TestBed.configureTestingModule({
      providers: [
        [
          PostsComponent,
          {
            provide: PostService,
            useClass: mockPostService,
          },
        ],
      ],
    });

    component = TestBed.inject(PostsComponent);
    postService = TestBed.inject(PostService);
  });

  describe('delete', () => {
    beforeEach(() => {
      component.posts = POSTS;
    });
    it('should delete the selected Post from the posts', () => {
      component.deletePost(POSTS[1]);
      expect(component.posts.length).toBe(2);
    });

    it('should delete the actual selected Post in Posts', () => {
      component.deletePost(POSTS[1]);

      for (let post of component.posts) {
        expect(post).not.toEqual(POSTS[1]);
      }
    });

    it('should call the delete method in Post Service only once', () => {
      spyOn(postService, 'deletePost').and.returnValue(of(true));
      component.deletePost(POSTS[1]);
      expect(postService.deletePost).toHaveBeenCalledTimes(1);
    });
  });
});

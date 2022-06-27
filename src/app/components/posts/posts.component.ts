import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/Post/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts().subscribe(($posts) => {
      this.posts = $posts;
    });
  }

  deletePost(post: Post) {
    this.posts = this.posts.filter((postItem) => postItem.id !== post.id);
    this.postService.deletePost(post).subscribe();
  }
}

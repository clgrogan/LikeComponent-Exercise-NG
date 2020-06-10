import { Component } from "@angular/core";
import { IsLikeChangedEventArgs } from "./like/like.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  post = {
    postText:
      "This is the text or body of a post, Tweet, comment, " +
      "or some other content that a user may be given the option of liking.",
    isLiked: false,
    likesCount: 21,
  };
  onLikeChanged(isLiked: IsLikeChangedEventArgs) {
    isLiked ? this.post.likesCount++ : this.post.likesCount--;
  }
}

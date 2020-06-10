import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Like Reusable Component NG";
  post = {
    postText:
      "This is the text or body of a post, Tweet, comment, " +
      "or some other content that a user could be given the option of liking.",
    isLiked: false,
    likesCount: 0,
  };
}

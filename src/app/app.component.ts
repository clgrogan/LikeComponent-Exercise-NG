import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Like Reusable Component NG";
  tweet = {
    body: "This is the text or body of a Tweet!",
    isLiked: false,
    likesCount: 0,
  };
}

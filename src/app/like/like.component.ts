import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "like",
  templateUrl: "./like.component.html",
  styleUrls: ["./like.component.css"],
})
export class LikeComponent {
  title = "Like Component Angular Exercise";

  @Input("isLiked") isLiked: boolean;
  @Input("postText") postText: string;
  @Input("likesCount") likesCount: number;
  @Input("postObject") postObject: any;
  @Output("change") change = new EventEmitter();

  toggleIsLiked = () => {
    this.isLiked = !this.isLiked;
    this.change.emit(this.isLiked);
  };
}

export interface IsLikeChangedEventArgs {
  newValue: boolean;
}

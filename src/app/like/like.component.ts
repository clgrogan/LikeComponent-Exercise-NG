import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "like",
  templateUrl: "./like.component.html",
  styleUrls: ["./like.component.css"],
})
export class LikeComponent {
  title = "Like Component Angular Exercise";

  @Input() isLiked: boolean;
  @Input() postText: string;
  @Input() likesCount: number;
  @Input() postObject: any;
  @Output("change") change = new EventEmitter();

  toggleIsLiked = () => {
    this.isLiked = !this.isLiked;
    this.change.emit(this.isLiked);
  };
}

export interface IsLikeChangedEventArgs {
  newValue: boolean;
}
